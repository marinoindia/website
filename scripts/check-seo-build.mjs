import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const sitemap = readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
let products = 0;
function inspect(value, url) {
  if (!value || typeof value !== 'object') return;
  if (value['@type'] === 'Product') {
    products++;
    const offers = [value.offers].flat().filter(Boolean);
    assert(offers.length || value.review || value.aggregateRating, `${url}: incomplete Product`);
    for (const offer of offers) {
      const price = offer['@type'] === 'AggregateOffer' ? offer.lowPrice : offer.price ?? offer.priceSpecification?.price;
      assert(price !== undefined && Number.isFinite(Number(price)) && Number(price) > 0, `${url}: missing/invalid offer price`);
    }
  }
  for (const child of Object.values(value)) inspect(child, url);
}
for (const url of urls) {
  const pathname = new URL(url).pathname;
  const html = readFileSync(path.join(dist, pathname, 'index.html'), 'utf8');
  assert(html.includes('<!-- prerendered -->'), `${url}: missing rendered HTML`);
  assert(!html.includes('{search_term_string}'), `${url}: search placeholder remains`);
  assert.equal((html.match(/<link[^>]*rel="canonical"/g) || []).length, 1, `${url}: canonical count`);
  assert.equal((html.match(/<meta[^>]*name="description"/g) || []).length, 1, `${url}: description count`);
  assert(!/<h1[^>]*>\s*(?:404|Product Not Found)/i.test(html), `${url}: error page rendered`);
  const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  schemas.forEach(schema => inspect(schema, url));
  if (['/product/turnbuckles/', '/product/pulleys-blocks/', '/product/polyester-slings/', '/product/stainless-steel-wire-rope/'].includes(pathname)) {
    assert(schemas.some(schema => schema['@type'] === 'CollectionPage'), `${url}: quote-only category missing`);
    assert(!schemas.some(schema => schema['@type'] === 'Product'), `${url}: quote-only Product remains`);
  }
}
assert(products > 0, 'Priced product markup must be retained');
const redirect = readFileSync(path.join(dist, 'contact-us/index.html'), 'utf8');
assert(redirect.includes('http-equiv="refresh" content="0; url=/contact/"'));
assert(redirect.includes('rel="canonical" href="https://marinoindia.co.in/contact/"'));
console.log(`PASS: ${urls.length} prerendered pages, ${products} priced Product entries, quote-only categories, search markup, and contact redirect.`);
