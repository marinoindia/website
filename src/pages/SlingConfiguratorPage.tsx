import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import SlingConfigurator from '@/components/SlingConfigurator';
import { business } from '@/data/business';

const canonical = `${business.website}/wire-rope-sling-configurator/`;
const description = 'Build a wire rope sling or assembly: rope, diameter, splice, 1–4 legs, length and end fittings. See the listed or estimated price and send the spec on WhatsApp.';

const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Wire Rope Sling Configurator', description, url: canonical },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${business.website}/` },
    { '@type': 'ListItem', position: 2, name: 'Wire Rope Slings', item: `${business.website}/product/wire-rope-slings/` },
    { '@type': 'ListItem', position: 3, name: 'Configurator', item: canonical },
  ] },
];

export default function SlingConfiguratorPage() {
  return (
    <>
      <SEO title="Wire Rope Sling Configurator – Build & Get a Quote | Marino" description={description} canonical={canonical} jsonLd={jsonLd} />
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="pt-8">
          <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-800 py-10 sm:py-12 text-white">
            <div className="container-modern">
              <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap gap-2 text-sm text-emerald-100">
                <Link to="/" className="hover:underline">Home</Link><span aria-hidden="true">/</span>
                <Link to="/product/wire-rope-slings/" className="hover:underline">Wire Rope Slings</Link><span aria-hidden="true">/</span>
                <span aria-current="page">Configurator</span>
              </nav>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-200">Spliced or ferrule-pressed · single and multi-leg</p>
              <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">Build your wire rope sling or assembly</h1>
              <p className="max-w-3xl text-lg leading-relaxed text-emerald-50">Choose the rope, splice, legs, length, end terminations and fittings, then send the specification to us on WhatsApp. We confirm the price, rating and delivery on your quotation.</p>
            </div>
          </section>

          <section className="py-8 sm:py-10" aria-label="Sling configurator">
            <div className="container-modern">
              <SlingConfigurator />
            </div>
          </section>

          <section className="pb-12" aria-labelledby="configurator-notes">
            <div className="container-modern max-w-4xl space-y-4 text-sm leading-relaxed text-slate-600">
              <h2 id="configurator-notes" className="text-lg font-bold text-slate-900">How prices and ratings are shown</h2>
              <p><strong className="text-slate-900">Listed prices</strong> are per-piece rates for hand-spliced soft-eye slings in 6×36 galvanised rope, 12 mm to 25 mm in 3 to 6 metre lengths, from the <Link to="/wire-rope-sling-price-list/" className="font-medium text-emerald-700 underline underline-offset-4">wire rope sling price list</Link> (updated July 2026). Every other combination shows an indicative range estimated from Indian supplier rates and our works rates. Your quotation confirms the price. Ex-works Kolkata; GST and delivery extra.</p>
              <p><strong className="text-slate-900">† Working load limits</strong> are indicative values from the <Link to="/product/wire-rope-slings/#load-chart" className="font-medium text-emerald-700 underline underline-offset-4">EN 13414-1 capacity chart</Link> for grade 1770 rope: 6×36 uses the steel core values and 6×19 the fibre core values. Hand-spliced slings are reduced by 0.8/0.9 for the lower termination factor of spliced eyes. Multi-leg ratings are shown for leg angles of 0–45° and 45–60° to the vertical. No rating is shown for non-eye terminations, stainless steel, other constructions, or sizes the standard does not tabulate, including 25 mm and below 8 mm. The working load limit on the sling&apos;s tag and test certificate always applies.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                <Link to="/product/wire-rope-slings/" className="font-medium text-emerald-700 underline underline-offset-4">Wire rope slings</Link>
                <Link to="/premade-slings/" className="font-medium text-emerald-700 underline underline-offset-4">Premade slings</Link>
                <Link to="/product/stainless-steel-wire-rope/" className="font-medium text-emerald-700 underline underline-offset-4">Stainless steel wire rope</Link>
                <Link to="/product/turnbuckles/" className="font-medium text-emerald-700 underline underline-offset-4">Turnbuckles</Link>
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
