import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { business } from '@/data/business';

const canonical = `${business.website}/product/polyester-slings/`;
const description = 'Enquire for polyester lifting slings from Marino in Kolkata. Compare flat webbing and round slings, check ordering details, and request availability and a quote.';
const enquiry = 'Hello, I need polyester lifting slings. Type: __; required WLL and lifting arrangement: __; effective working length: __; quantity: __; delivery PIN: __. Please confirm availability and documentation.';
const whatsapp = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(enquiry)}`;
const email = `mailto:${business.emails[0]}?subject=${encodeURIComponent('Polyester lifting sling enquiry')}&body=${encodeURIComponent(enquiry)}`;

const types = [
  {
    id: 'flat-webbing',
    name: 'Flat webbing slings',
    subtitle: 'Flat woven construction',
    image: '/images/polyester-slings/flat-webbing.svg',
    alt: 'Illustration of a flat webbing sling with an eye at each end',
    detail: 'A flat textile sling provides a broad contact surface. Eye-and-eye designs have a loop at each end for connection to suitable lifting hardware.',
    points: ['Specify eye-and-eye or the required end arrangement.', 'Include webbing width if specified by your equipment or purchase order.', 'Check eye dimensions and compatibility with the intended hook or shackle.'],
  },
  {
    id: 'round-slings',
    name: 'Round slings',
    subtitle: 'Endless loop construction',
    image: '/images/polyester-slings/round-sling.svg',
    alt: 'Illustration of an endless round sling with a protective outer sleeve',
    detail: 'A round sling has a continuous load-bearing yarn core inside a protective sleeve. Its flexible construction can conform around a load, subject to the approved lifting arrangement.',
    points: ['Ask us to confirm the required round sling specification and availability.', 'State the effective working length and how it has been measured.', 'Include the connection hardware and any sleeve or edge protection requirements.'],
  },
];

// Cell colours sampled from the manufacturer's charts; text colour picked for contrast.
const swatches: Record<string, { bg: string; text: string }> = {
  Violet: { bg: '#ab6ba0', text: '#0f172a' }, Green: { bg: '#008800', text: '#ffffff' },
  Yellow: { bg: '#ffe400', text: '#0f172a' }, Orange: { bg: '#fe8300', text: '#0f172a' },
  Red: { bg: '#f10100', text: '#0f172a' }, Brown: { bg: '#b25d00', text: '#ffffff' },
  Blue: { bg: '#17247d', text: '#ffffff' }, White: { bg: '#ffffff', text: '#0f172a' },
  Grey: { bg: '#afbfb5', text: '#0f172a' },
};

const hitchColumns = ['Straight lift', 'Choked lift', '45° lift', '90° lift'];
const hitchFactors = ['M = 1', 'M = 0.8', 'M = 1.8', 'M = 1.4'];

type LoadChart = { id: string; title: string; specs: string; extraHeaders: string[]; rows: [string, string, ...(number | null)[]][] };

const loadCharts: LoadChart[] = [
  {
    id: 'flat-webbing-chart',
    title: 'Duplex, flat webbing slings with loops at both ends',
    specs: 'Straight-lift WLL 1,000–16,000 kg',
    extraHeaders: ['Width (mm)', 'Standard eye length (mm)', "'D' & 'DP' terminal hole size (mm)"],
    rows: [
      ['B 25', 'Violet', 6000, 1000, 800, 1800, 1400, 25, 300, 58],
      ['B 50', 'Green', 12000, 2000, 1600, 3600, 2800, 50, 300, 75],
      ['B 75', 'Yellow', 18000, 3000, 2400, 5400, 4200, 75, 400, 75],
      ['B 100', 'Orange', 24000, 4000, 3200, 7200, 5600, 100, 400, 90],
      ['B 125', 'Red', 30000, 5000, 4000, 9000, 7000, 125, 450, 105],
      ['B 150', 'Brown', 36000, 6000, 4800, 10800, 8400, 150, 600, 105],
      ['B 200', 'Blue', 48000, 8000, 6400, 14400, 11200, 200, 600, 133],
      ['B 250', 'White', 60000, 10000, 8000, 18000, 14000, 250, null, null],
      ['B 300', 'Brown', 72000, 12000, 9600, 21600, 16800, 300, 900, 165],
      ['B 400', 'Blue', 96000, 16000, 12800, 28800, 22400, 400, null, null],
    ],
  },
  {
    id: 'round-sling-chart',
    title: 'Round slings, endless',
    specs: 'Straight-lift WLL 1,000–30,000 kg',
    extraHeaders: ['Approx. dia. (mm)'],
    rows: [
      ['E 30', 'Violet', 7000, 1000, 800, 1800, 1400, 18],
      ['E 60', 'Green', 14000, 2000, 1600, 3600, 2800, 20],
      ['E 90', 'Yellow', 26000, 3000, 2400, 5400, 4200, 22],
      ['E 150', 'Red', 35000, 5000, 4000, 9000, 7000, 27],
      ['E 240', 'Blue', 56000, 8000, 6400, 14400, 11200, 38],
      ['E 360', 'Grey', 72000, 12000, 9600, 21600, 16800, 49],
      ['E 600', 'Brown', 120000, 20000, 16000, 36000, 28000, 64],
      ['E 900', 'Orange', 180000, 30000, 24000, 54000, 42000, 78],
    ],
  },
];

const slingProperties = [
  '100% polyester construction.',
  'Confirm the permitted working temperature with the sling manufacturer.',
  'About 3% extension at the working load limit and 10–13% at breaking load.',
  'Much lighter to handle than chain or wire rope slings of a similar rating.',
  'Colour coded for quick identification.',
  'Does not corrode and needs no lubrication.',
];

const chartNotes = [
  ['Round sling length', 'Effective working length is approximately half the loop circumference; confirm the measurement method when ordering.'],
  ['Non-standard lengths', 'Available to special order.'],
  ['MBS', 'Minimum breaking strength.'],
  ['M', 'Mode factor for the lifting arrangement; limits are given in kilograms.'],
  ['SWL', 'Safe working load.'],
];

const formatValue = (value: number | null) => (value === null ? '—' : value.toLocaleString('en-IN'));

const orderingDetails = [
  ['Sling type', 'Flat webbing, eye-and-eye or round sling; include a drawing or existing label if available.'],
  ['Working load limit (WLL)', 'The required rating for the planned lifting arrangement, plus the load weight and dimensions.'],
  ['Length and dimensions', 'Effective working length in metres, measurement method, and any specified width or eye dimensions.'],
  ['Lifting arrangement', 'Vertical, basket or choker arrangement, sling angles and the connection hardware to be used.'],
  ['Working conditions', 'Sharp edges, abrasive surfaces, heat or chemical exposure that could affect selection.'],
  ['Quantity and documentation', 'Number of slings, required manufacturer, purchase specification and certificate requirements.'],
  ['Delivery', 'Destination PIN code, consignee details and the date the goods are required.'],
];

const faqs = [
  { q: 'What is the difference between a lifting belt and a lashing belt?', a: 'A lifting belt or webbing sling is intended for lifting within its marked rating and instructions. A ratchet or lashing belt restrains cargo during transport. Lashing belts must not be used as lifting slings.' },
  { q: 'Can I select a sling by colour alone?', a: 'No. Read the identification label and manufacturer instructions. Confirm the working load limit for the actual hitch and angle; colour or width alone does not establish a safe lifting capacity.' },
  { q: 'How should I specify the length?', a: 'State the effective working length and your measurement method. For round slings, clarify whether a measurement refers to the working length or the full loop circumference. Send a drawing if there is any uncertainty.' },
  { q: 'Can you quote from an existing sling label?', a: 'Send a clear photograph of the complete label, the sling type, required dimensions and quantity. Include the intended lifting arrangement and delivery PIN code so we can check the requirement and confirm availability.' },
  { q: 'Are certificates available?', a: 'Include the required certificate, traceability details or inspection documents in your enquiry. The manufacturer, product specification and available documentation will be confirmed with the quotation.' },
  { q: 'Do you supply outside Kolkata?', a: 'Send your delivery address and PIN code for supply enquiries across India, including West Bengal, Bihar, Jharkhand, Odisha and the North East. Availability, freight and dispatch timing are confirmed with your quotation.' },
];

const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Polyester Lifting Slings', description, url: canonical },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${business.website}/` },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${business.website}/products/` },
    { '@type': 'ListItem', position: 3, name: 'Polyester Slings', item: canonical },
  ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
  })) },
];

export default function PolyesterSlingsPage() {
  return (
    <>
      <SEO title="Polyester Lifting Slings & Webbing Slings | Marino Kolkata" description={description} canonical={canonical} jsonLd={jsonLd} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-8">
          <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 py-12 sm:py-16 text-white">
            <div className="container-modern">
              <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-emerald-100">
                <Link to="/" className="hover:underline">Home</Link><span aria-hidden="true">/</span>
                <Link to="/products/" className="hover:underline">Products</Link><span aria-hidden="true">/</span>
                <span aria-current="page">Polyester Slings</span>
              </nav>
              <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-200">Lifting equipment · Kolkata</p>
                  <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">Polyester lifting slings</h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-emerald-50">Enquire for polyester webbing slings and lifting belts from Marino Corporation. Share your specification for availability, documentation and delivery from Kolkata.</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />Enquire on WhatsApp</a></Button>
                    <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-emerald-900"><a href={`tel:+${business.whatsapp}`}><Phone className="mr-2 h-5 w-5" />Call for details</a></Button>
                  </div>
                </div>
                <aside className="rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold">A clearer enquiry. A suitable specification.</h2>
                  <p className="mt-3 leading-relaxed text-emerald-50">Start with the sling type, required WLL, effective working length and quantity. A photograph of an existing label can help identify a replacement.</p>
                  <a href="#enquiry-details" className="mt-5 inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4">See what to send<ArrowRight className="h-4 w-4" /></a>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16" aria-labelledby="sling-types">
            <div className="container-modern">
              <h2 id="sling-types" className="text-3xl font-bold text-slate-900">Understand the two common sling types</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Compare the construction before sending your enquiry. Sizes, ratings and available products are confirmed against your requirement.</p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {types.map((type) => (
                  <article key={type.id} id={type.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <figure className="bg-slate-50 px-6 pt-5 pb-3">
                      <img src={type.image} alt={type.alt} width="640" height="260" className="mx-auto h-auto w-full max-w-lg" loading="lazy" />
                      <figcaption className="text-center text-xs text-slate-500">Construction illustration · not a product photograph or capacity guide</figcaption>
                    </figure>
                    <div className="p-6 sm:p-8">
                      <p className="mb-2 text-sm font-medium text-emerald-700">{type.subtitle}</p>
                      <h3 className="text-2xl font-bold text-slate-900">{type.name}</h3>
                      <p className="mt-3 leading-relaxed text-slate-600">{type.detail}</p>
                      <ul className="mt-5 space-y-3">
                        {type.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />{point}</li>)}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="load-charts" className="scroll-mt-28 pb-12 sm:pb-16" aria-labelledby="load-charts-heading">
            <div className="container-modern">
              <h2 id="load-charts-heading" className="text-3xl font-bold text-slate-900">Load charts</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Guaranteed minimum breaking strength (MBS) and working load limits in kilograms for each sling code. M is the mode factor applied to the straight-lift rating for each lifting arrangement.</p>
              <div className="mt-8 space-y-10">
                {loadCharts.map((chart) => (
                  <div key={chart.id} id={chart.id} className="scroll-mt-28">
                    <h3 className="mb-4 text-xl font-bold text-slate-900">{chart.title}<span className="mt-1 block text-base font-semibold text-emerald-800">{chart.specs}</span></h3>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                      <table className="w-full min-w-[760px] border-collapse text-sm">
                        <caption className="sr-only">{chart.title} load chart, values in kilograms unless stated</caption>
                        <thead className="bg-slate-100 text-slate-900">
                          <tr>
                            <th rowSpan={2} scope="col" className="border-b border-slate-200 px-4 py-3 text-left font-semibold">Code</th>
                            <th rowSpan={2} scope="col" className="border-b border-slate-200 px-4 py-3 text-left font-semibold">Colour</th>
                            <th rowSpan={2} scope="col" className="border-b border-slate-200 px-4 py-3 text-right font-semibold">Guaranteed MBS (kg)</th>
                            <th colSpan={4} scope="colgroup" className="border-x border-slate-200 bg-emerald-50 px-4 pt-3 pb-1 text-center font-semibold text-emerald-900">Working load limit (kg)</th>
                            {chart.extraHeaders.map((header) => <th key={header} rowSpan={2} scope="col" className="border-b border-slate-200 px-4 py-3 text-right font-semibold">{header}</th>)}
                          </tr>
                          <tr>
                            {hitchColumns.map((label, i) => (
                              <th key={label} scope="col" className={`border-b border-slate-200 bg-emerald-50 px-4 pt-1 pb-3 text-right font-semibold text-emerald-900 ${i === 0 ? 'border-l' : ''} ${i === hitchColumns.length - 1 ? 'border-r' : ''}`}>
                                {label}<span className="block text-xs font-normal text-emerald-700">{hitchFactors[i]}</span>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {chart.rows.map(([code, colour, ...values]) => (
                            <tr key={code} className="border-b border-slate-200 last:border-0 even:bg-slate-50/60">
                              <th scope="row" className="whitespace-nowrap px-4 py-2.5 text-left font-semibold text-slate-900">{code}</th>
                              <td className="whitespace-nowrap px-4 py-2.5 text-center font-medium" style={{ backgroundColor: swatches[colour].bg, color: swatches[colour].text }}>{colour}</td>
                              {values.map((value, i) => (
                                <td key={i} className={`whitespace-nowrap px-4 py-2.5 text-right tabular-nums text-slate-700 ${i >= 1 && i <= 4 ? 'bg-emerald-50/40' : ''} ${i === 1 ? 'border-l border-slate-200' : ''} ${i === 4 ? 'border-r border-slate-200' : ''}`}>{formatValue(value)}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                  <h3 className="text-lg font-bold text-slate-900">Properties</h3>
                  <ul className="mt-4 space-y-3">
                    {slingProperties.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />{item}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7">
                  <h3 className="text-lg font-bold text-slate-900">Notes</h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    {chartNotes.map(([term, note]) => <div key={term} className="grid grid-cols-[140px_1fr] gap-3"><dt className="font-semibold text-slate-900">{term}</dt><dd className="leading-relaxed text-slate-700">{note}</dd></div>)}
                  </dl>
                </div>
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">Chart values are for reference when preparing an enquiry. Always use the rating marked on the sling label for the actual hitch and angle, and do not identify capacity by colour alone.</p>
            </div>
          </section>

          <section id="enquiry-details" className="scroll-mt-28 border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
            <div className="container-modern">
              <h2 className="text-3xl font-bold text-slate-900">Details to include in your enquiry</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Send the purchase specification or fill in these details. We will confirm the available product and documentation before you order.</p>
              <dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {orderingDetails.map(([label, detail]) => (
                  <div key={label} className="grid gap-2 border-b border-slate-200 p-5 last:border-0 sm:grid-cols-[220px_1fr] sm:gap-6 sm:px-7">
                    <dt className="font-semibold text-slate-900">{label}</dt><dd className="leading-relaxed text-slate-600">{detail}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild><a href={whatsapp} target="_blank" rel="noopener noreferrer">Send your requirement<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
                <Button asChild variant="outline"><a href={email}><Mail className="mr-2 h-4 w-4" />Enquire by email</a></Button>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16" aria-labelledby="selection-notes">
            <div className="container-modern grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <h2 id="selection-notes" className="text-3xl font-bold text-slate-900">Selection and care</h2>
                <p className="mt-4 leading-relaxed text-slate-600">Have a competent person select the sling for the load and lifting arrangement. Follow the supplied manufacturer instructions for use, inspection and retirement.</p>
              </div>
              <div className="space-y-5 text-slate-700">
                <p><strong className="text-slate-900">Read the label.</strong> WLL depends on the sling and how it is used. Check the marked rating for the hitch and angle; do not infer capacity from colour alone.</p>
                <p><strong className="text-slate-900">Protect against edges.</strong> Specify suitable edge protection where the load could cut or abrade the sling. Check chemical and temperature compatibility with the manufacturer.</p>
                <p><strong className="text-slate-900">Inspect before use.</strong> Remove slings with missing or unreadable identification, cuts, damaged stitching or sleeves, or signs of heat or chemical damage from service for assessment. Do not knot a sling to shorten it.</p>
                <p className="text-sm text-slate-500">General reading: <a className="underline underline-offset-4 hover:text-emerald-700" href="https://www.osha.gov/safe-sling-use/synth-web" target="_blank" rel="noopener noreferrer">synthetic web sling guidance</a> and <a className="underline underline-offset-4 hover:text-emerald-700" href="https://www.osha.gov/safe-sling-use/synth-round" target="_blank" rel="noopener noreferrer">round sling guidance</a>. These are background references, not product certification or a substitute for the supplied instructions.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-12 sm:py-16" aria-labelledby="faq-heading">
            <div className="container-modern max-w-4xl">
              <h2 id="faq-heading" className="mb-7 text-3xl font-bold text-slate-900">Polyester sling questions</h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => <details key={q} className="rounded-xl border border-slate-200 bg-white px-5 py-4"><summary className="cursor-pointer font-semibold text-slate-900">{q}</summary><p className="mt-3 leading-relaxed text-slate-600">{a}</p></details>)}
              </div>
            </div>
          </section>

          <section className="bg-emerald-900 py-12 text-white">
            <div className="container-modern">
              <h2 className="text-3xl font-bold">Discuss your polyester sling requirement</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-emerald-100">Contact our Kolkata team with your specification and delivery PIN code. Availability, documentation and dispatch timing are confirmed with your quotation.</p>
              <Button asChild size="lg" className="mt-6 bg-white text-emerald-900 hover:bg-emerald-50"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Request a quotation<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-emerald-100">
                <Link className="underline underline-offset-4 hover:text-white" to="/product/wire-rope-slings/">Wire rope slings</Link>
                <Link className="underline underline-offset-4 hover:text-white" to="/product/chain-slings/">Chain slings</Link>
                <Link className="underline underline-offset-4 hover:text-white" to="/product/shackles/">Shackles</Link>
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
