import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { business } from '@/data/business';
import { slingPriceList } from '@/data/slingPriceList';

const canonical = `${business.website}/wire-rope-sling-price-list/`;
const description = 'Wire rope sling price list per piece: 12 mm to 25 mm in 3, 4, 5 and 6 metre lengths, hand-spliced 6×36 rope with test certificate. GST extra. Confirm today’s rate.';
const lengths = slingPriceList[0].rows.map((row) => row.length);

const whatsappLink = (text: string) => `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
const rateEnquiry = (size: string, length: string, rate: number | null) => whatsappLink(
  `Hello, I need a wire rope sling. Size: ${size}; length: ${length}; ${rate ? `listed rate ₹${rate}/-` : 'please share the rate'}. Quantity: __; delivery PIN: __. Please confirm today’s price and availability.`,
);
const generalEnquiry = whatsappLink('Hello, please share today’s wire rope sling price list. Size: __; length: __; quantity: __; delivery PIN: __.');

const included = [
  '6×36 construction (GWRC), right-hand ordinary lay.',
  'Hand-spliced eyes at both ends.',
  'Supplied with a test certificate.',
  'Price per piece; GST extra.',
];

const faqs = [
  { q: 'Do the rates include GST?', a: 'No. The rates are per piece and GST is charged extra. Freight depends on the delivery PIN code and is confirmed with your quotation.' },
  { q: 'Can I order a length that is not listed?', a: 'Yes. Slings are made to order, so other lengths, sizes and end fittings are quoted on request. Send the size, length, quantity and delivery PIN code.' },
  { q: 'Is there a discount for larger quantities?', a: 'Volume discounts are available on orders of 10 or more pieces. Share the quantity with your enquiry and we will confirm the rate.' },
  { q: 'Why might today’s price differ from this list?', a: 'Wire rope prices move with steel rates. The list was last updated in July 2026, so please confirm the current rate before you place an order.' },
  { q: 'How do I choose the right sling size?', a: 'Start from the load, the number of legs and the sling angle. The wire rope sling load chart shows working load limits by diameter, and we can help you check the size for your lift.' },
];

const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Wire Rope Sling Price List', description, url: canonical },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${business.website}/` },
    { '@type': 'ListItem', position: 2, name: 'Wire Rope Slings', item: `${business.website}/product/wire-rope-slings/` },
    { '@type': 'ListItem', position: 3, name: 'Price List', item: canonical },
  ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
  })) },
];

export default function SlingPriceListPage() {
  return (
    <>
      <SEO title="Wire Rope Sling Price List 2026 – 12 mm to 25 mm | Marino" description={description} canonical={canonical} jsonLd={jsonLd} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-8">
          <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-800 py-12 sm:py-16 text-white">
            <div className="container-modern">
              <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-emerald-100">
                <Link to="/" className="hover:underline">Home</Link><span aria-hidden="true">/</span>
                <Link to="/product/wire-rope-slings/" className="hover:underline">Wire Rope Slings</Link><span aria-hidden="true">/</span>
                <span aria-current="page">Price List</span>
              </nav>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-200">Rates updated July 2026 · GST extra</p>
              <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">Wire rope sling price list</h1>
              <p className="max-w-3xl text-lg leading-relaxed text-emerald-50">Per-piece rates for hand-spliced steel wire rope slings from 12 mm to 25 mm, in 3, 4, 5 and 6 metre lengths. Tap a price to get a quotation for that size on WhatsApp.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50"><a href={generalEnquiry} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />Get today’s rates</a></Button>
                <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-emerald-900"><a href={`tel:+${business.whatsapp}`}><Phone className="mr-2 h-5 w-5" />Call 98311 44669</a></Button>
              </div>
            </div>
          </section>

          <section id="price-list" className="scroll-mt-28 py-12 sm:py-16" aria-labelledby="price-list-heading">
            <div className="container-modern">
              <h2 id="price-list-heading" className="text-3xl font-bold text-slate-900">Price per piece by size and length</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Steel wire rope slings, 6×36 construction (GWRC), right-hand ordinary lay, hand-spliced. Prices in rupees per piece, excluding GST.</p>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[560px] border-collapse text-sm">
                  <caption className="sr-only">Wire rope sling price per piece in rupees, by rope diameter and sling length</caption>
                  <thead className="bg-slate-100 text-slate-900">
                    <tr>
                      <th scope="col" className="sticky left-0 border-b border-slate-200 bg-slate-100 px-4 py-3 text-left font-semibold">Rope size</th>
                      {lengths.map((length) => <th key={length} scope="col" className="border-b border-l border-slate-200 px-4 py-3 text-right font-semibold">{length.replace('Mtr', 'm')}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {slingPriceList.map((group) => (
                      <tr key={group.size} id={`sling-${group.size.replace(' ', '')}`} className="scroll-mt-28 border-b border-slate-200 last:border-0">
                        <th scope="row" className="sticky left-0 whitespace-nowrap bg-white px-4 py-3 text-left font-semibold text-slate-900">{group.size}</th>
                        {group.rows.map((row) => (
                          <td key={row.length} className="whitespace-nowrap border-l border-slate-200 px-4 py-3 text-right tabular-nums">
                            <a
                              href={rateEnquiry(group.size, row.length, row.rate)}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Get a quote for a ${group.size} × ${row.length.replace('Mtr', 'm')} wire rope sling on WhatsApp`}
                              className={row.rate === null ? 'text-slate-500 underline-offset-4 hover:underline' : 'font-semibold text-emerald-700 underline-offset-4 hover:underline'}
                            >
                              {row.rate === null ? 'On request' : `₹${row.rate.toLocaleString('en-IN')}`}
                            </a>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-500">Rates updated July 2026 and indicative: wire rope prices move with steel rates, so please confirm today’s rate before ordering. Volume discounts on 10 or more pieces.</p>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-slate-50 py-12 sm:py-16" aria-labelledby="included-heading">
            <div className="container-modern grid gap-8 lg:grid-cols-2">
              <div>
                <h2 id="included-heading" className="text-2xl font-bold text-slate-900">What the rates cover</h2>
                <ul className="mt-5 space-y-3">
                  {included.map((item) => <li key={item} className="flex gap-3 leading-relaxed text-slate-700"><CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-emerald-700" />{item}</li>)}
                </ul>
              </div>
              <div className="space-y-5 text-slate-700">
                <h2 className="text-2xl font-bold text-slate-900">Other sizes and assemblies</h2>
                <p><strong className="text-slate-900">Ready-made slings.</strong> Smaller sizes, slings with hooks or master links and 2- and 4-leg assemblies are listed with prices on the <Link to="/premade-slings/" className="font-medium text-emerald-700 underline underline-offset-4">premade slings page</Link>.</p>
                <p><strong className="text-slate-900">Custom sizes.</strong> Other diameters, lengths and end fittings are made to order. Send the size, length, number of legs, end fittings, quantity and delivery PIN code for a quotation.</p>
                <p><strong className="text-slate-900">Choosing a size.</strong> Check the working load limit for your number of legs and sling angle on the <Link to="/product/wire-rope-slings/#load-chart" className="font-medium text-emerald-700 underline underline-offset-4">wire rope sling load chart</Link>.</p>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16" aria-labelledby="faq-heading">
            <div className="container-modern max-w-4xl">
              <h2 id="faq-heading" className="mb-7 text-3xl font-bold text-slate-900">Price list questions</h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => <details key={q} className="rounded-xl border border-slate-200 bg-white px-5 py-4"><summary className="cursor-pointer font-semibold text-slate-900">{q}</summary><p className="mt-3 leading-relaxed text-slate-600">{a}</p></details>)}
              </div>
            </div>
          </section>

          <section className="bg-emerald-900 py-12 text-white">
            <div className="container-modern">
              <h2 className="text-3xl font-bold">Get today’s rate for your sling</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-emerald-100">Send the size, length, quantity and delivery PIN code. We confirm the current price, documentation and dispatch timing from Kolkata.</p>
              <Button asChild size="lg" className="mt-6 bg-white text-emerald-900 hover:bg-emerald-50"><a href={generalEnquiry} target="_blank" rel="noopener noreferrer">Request a quotation<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-100">
                <Link className="underline underline-offset-4 hover:text-white" to="/product/wire-rope-slings/">Wire rope slings</Link>
                <Link className="underline underline-offset-4 hover:text-white" to="/premade-slings/">Premade slings</Link>
                <Link className="underline underline-offset-4 hover:text-white" to="/product/shackles/">Shackles</Link>
                <Link className="underline underline-offset-4 hover:text-white" to="/product/thimbles/">Thimbles</Link>
                <Link className="underline underline-offset-4 hover:text-white" to="/products/">All products</Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
