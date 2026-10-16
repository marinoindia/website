import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/lib/ga4.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;

function analytics(hostname = 'marinoindia.co.in') {
  const calls = [];
  const location = { hostname, origin: `https://${hostname}`, pathname: '/', search: '?email=private@example.com' };
  const context = vm.createContext({
    exports: {}, URL,
    window: { location, gtag: (...args) => calls.push(args) },
    document: { title: 'Home', referrer: 'https://example.com/?private=value' },
  });
  vm.runInContext(compiled, context);
  return { api: context.exports, calls, context, location };
}

test('one page view per navigation, including back navigation, with correct referrer', () => {
  const { api, calls, location, context } = analytics();
  api.trackPageView();
  api.trackPageView();
  assert.equal(calls.length, 1);
  assert.equal(calls[0][2].page_referrer, 'https://example.com/');
  location.pathname = '/contact/';
  context.document.title = 'Contact Marino';
  api.trackPageView();
  assert.equal(calls[1][2].page_referrer, 'https://marinoindia.co.in/');
  assert.equal(calls[1][2].page_title, 'Contact Marino');
  location.pathname = '/';
  api.trackPageView();
  assert.equal(calls.length, 3);
  assert.equal(calls[2][2].page_referrer, 'https://marinoindia.co.in/contact/');
  assert(!JSON.stringify(calls).includes('private'));
  assert(calls.every(call => call[0] === 'event' && call[1] === 'page_view'));
});

test('contact actions remain separate from leads and exclude enquiry contents', () => {
  const { api, calls } = analytics();
  const links = [
    ['https://wa.me/919831144669?text=private-message', 'whatsapp_click'],
    ['https://api.whatsapp.com/send?phone=123', 'whatsapp_click'],
    ['tel:+919831144669', 'phone_click'],
    ['mailto:private@example.com?body=secret', 'email_click'],
  ];
  for (const [href, event] of links) {
    assert.equal(api.contactActionForHref(href), event);
    api.trackContactAction(event);
  }
  api.trackContactAction('enquiry_handoff', 'enquiry_form');
  api.trackContactAction('enquiry_handoff', 'checkout');
  assert.equal(calls.length, 6);
  assert.equal(calls[4][2].contact_source, 'enquiry_form');
  assert.equal(calls[5][2].contact_source, 'checkout');
  assert(!/private|secret|9831144669|generate_lead|purchase/.test(JSON.stringify(calls)));
  for (const href of ['/contact/', '#contact', 'https://wa.me.example.org/', 'javascript:alert(1)']) {
    assert.equal(api.contactActionForHref(href), undefined);
  }
});

test('local builds, previews and missing tags do not record traffic or break actions', () => {
  for (const host of ['localhost', '127.0.0.1', 'preview.example.com']) {
    const { api, calls } = analytics(host);
    api.trackPageView();
    api.trackContactAction('whatsapp_click');
    assert.equal(calls.length, 0);
  }
  const { api, context } = analytics();
  delete context.window.gtag;
  assert.doesNotThrow(() => api.trackPageView());
  assert.doesNotThrow(() => api.trackContactAction('phone_click'));
});

test('GA bootstrap disables automatic initial views and skips preview hosts', () => {
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const bootstrap = html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
  for (const hostname of ['marinoindia.co.in', 'www.marinoindia.co.in', 'localhost']) {
    const scripts = [];
    const sandbox = { location: { hostname }, document: {
      createElement: () => ({}), head: { appendChild: element => scripts.push(element) },
    }};
    sandbox.window = sandbox;
    vm.runInNewContext(bootstrap, sandbox);
    const calls = sandbox.dataLayer.map(args => [...args]);
    if (hostname === 'localhost') {
      assert.equal(calls.length, 0);
      assert.equal(scripts.length, 0);
    } else {
      assert.equal(scripts.length, 1);
      assert.equal(calls.filter(call => call[0] === 'config').length, 1);
      assert.equal(calls.find(call => call[0] === 'config')[2].send_page_view, false);
    }
  }
});
