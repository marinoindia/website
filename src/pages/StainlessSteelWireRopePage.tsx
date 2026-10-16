import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { business } from '@/data/business';

const canonical = `${business.website}/product/stainless-steel-wire-rope/`;
const description = 'Enquire for SS 304 and SS 316 stainless steel wire rope from Marino in Kolkata. Compare 1×19, 7×7 and 7×19 breaking strengths, then request a quote.';
const enquiry = 'Hello, I need stainless steel wire rope. Grade (304/316): __; construction: __; diameter (mm): __; length / cut lengths: __; end fittings: __; quantity: __; delivery PIN: __. Please confirm availability and documentation.';
const whatsapp = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(enquiry)}`;
const email = `mailto:${business.emails[0]}?subject=${encodeURIComponent('Stainless steel wire rope enquiry')}&body=${encodeURIComponent(enquiry)}`;

const grades = [
  {
    id: 'ss-304',
    name: 'SS 304 (AISI 304 / A2)',
    subtitle: 'General-purpose grade',
    detail: 'Austenitic stainless steel with about 18% chromium and 8% nickel. Suited to indoor use and general outdoor use away from salt spray and chlorides.',
    points: ['Architectural and interior cable work.', 'General outdoor installations inland.', 'Light industrial and food-area applications where chlorides are not present.'],
  },
  {
    id: 'ss-316',
    name: 'SS 316 (AISI 316 / A4)',
    subtitle: 'Marine grade',
    detail: 'Adds 2–3% molybdenum for better resistance to pitting and crevice corrosion from chlorides. Usually specified near the sea and in chemical or wash-down environments.',
    points: ['Marine, port and coastal installations.', 'Balustrades and railings exposed to salt air.', 'Chemical plants and areas cleaned with chlorinated water.'],
  },
];

// Wires per layer in one strand, and how strands are arranged in the rope.
type Construction = { name: string; strand: number[]; rope: 'single' | 'seven' | 'iwrc'; flexibility: string; uses: string };

const constructions: Construction[] = [
  { name: '1×19', strand: [1, 6, 12], rope: 'single', flexibility: 'Stiff; lowest stretch', uses: 'Standing rigging, guy wires, balustrade and tension-structure cables. Not for running over pulleys.' },
  { name: '7×7', strand: [1, 6], rope: 'seven', flexibility: 'Moderate', uses: 'Balustrade infill, lifelines, guard rails and light control cables.' },
  { name: '7×19', strand: [1, 6, 12], rope: 'seven', flexibility: 'Flexible', uses: 'Control cables, winches and running rigging over pulleys or sheaves.' },
  { name: '6×19 / 6×36 IWRC', strand: [1, 6, 12], rope: 'iwrc', flexibility: 'Flexible; larger diameters', uses: 'Hoisting, mooring and general rigging in corrosive environments. Availability on enquiry.' },
];

// Minimum breaking load [kN, kgf] for grade 316 stainless rope, guidance values from the Sta-Lok wire rope brochure.
type BreakingLoad = [kn: number, kgf: number] | null;
const breakingLoadSource = 'https://www.stalok.com/wp-content/uploads/2020/09/Sta-lok-Brochure-FINAL-Wire-Rope-Web-Interactive.pdf';
const breakingLoadColumns = ['1×19', '7×7', '7×19'];
const breakingLoadRows: [string, BreakingLoad, BreakingLoad, BreakingLoad][] = [
  ['2', [3.29, 336], [2.44, 248], [2.27, 231]],
  ['2.5', [5.14, 525], [3.81, 388], [3.55, 361]],
  ['3', [7.41, 756], [5.48, 558], [5.12, 522]],
  ['4', [13.14, 1340], [9.03, 920], [9.09, 926]],
  ['5', [20.59, 2100], [14.10, 1437], [14.20, 1447]],
  ['6', [29.70, 3030], [22.00, 2243], [20.50, 2090]],
  ['7', [40.40, 4120], null, [25.60, 2610]],
  ['8', [51.50, 5251], [36.10, 3681], [36.37, 3708]],
  ['10', [82.37, 8400], [60.92, 6212], [56.80, 5791]],
  ['12', [118.68, 12102], [87.72, 8944], [81.84, 8345]],
  ['14', [161.54, 16473], null, [111.39, 11358]],
  ['16', [201.03, 20500], null, [145.50, 14836]],
  ['19', [297.14, 30300], null, null],
  ['22', [399.00, 40686], null, null],
];

const ring = (count: number, radius: number, cx: number, cy: number) =>
  Array.from({ length: count }, (_, i) => {
    const a = (2 * Math.PI * i) / count - Math.PI / 2;
    return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)] as const;
  });

const strandWires = (layers: number[], cx: number, cy: number, strandRadius: number) => {
  const wire = strandRadius / (2 * layers.length - 1);
  return layers.flatMap((count, i) => (i === 0 ? [[cx, cy] as const] : ring(count, 2 * wire * i, cx, cy))).map(([x, y]) => ({ x, y, r: wire }));
};

function RopeSection({ strand, rope }: Pick<Construction, 'strand' | 'rope'>) {
  let wires: { x: number; y: number; r: number }[];
  if (rope === 'single') {
    wires = strandWires(strand, 32, 32, 26);
  } else if (rope === 'seven') {
    const s = 26 / 3;
    wires = [[32, 32] as const, ...ring(6, 2 * s, 32, 32)].flatMap(([x, y]) => strandWires(strand, x, y, s));
  } else {
    const s = 26 / 3.05;
    const core = s * 1.05;
    const coreStrand = core / 3;
    wires = [
      ...[[32, 32] as const, ...ring(6, 2 * coreStrand, 32, 32)].flatMap(([x, y]) => strandWires([1, 6], x, y, coreStrand)),
      ...ring(6, core + s, 32, 32).flatMap(([x, y]) => strandWires(strand, x, y, s)),
    ];
  }
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true" className="shrink-0">
      <circle cx="32" cy="32" r="30" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1" />
      {wires.map((w, i) => <circle key={i} cx={w.x} cy={w.y} r={w.r * 0.92} fill="#cbd5e1" stroke="#475569" strokeWidth="0.5" />)}
    </svg>
  );
}

const orderingDetails = [
  ['Grade', 'SS 304 or SS 316, or the grade stated on your purchase specification.'],
  ['Construction', '1×19, 7×7, 7×19 or another construction; include the core type if specified.'],
  ['Diameter', 'Nominal diameter in millimetres and any tolerance your application requires.'],
  ['Length', 'Total length, or the number and length of cut pieces.'],
  ['Coating and finish', 'Bare, PVC- or nylon-coated, and lubricated or dry, if your application specifies it.'],
  ['End fittings', 'Thimbles, swaged terminals, turnbuckles or grips required at each end.'],
  ['Application', 'Where the rope will be used, the load it must carry and the environment (indoor, coastal, chemical).'],
  ['Quantity and documentation', 'Number of coils or assemblies, required manufacturer and certificate requirements.'],
  ['Delivery', 'Destination PIN code, consignee details and the date the goods are required.'],
];

const faqs = [
  { q: 'What is the difference between SS 304 and SS 316 wire rope?', a: 'SS 316 contains molybdenum, which improves resistance to pitting and crevice corrosion from chlorides. It is normally chosen for marine, coastal and chemical environments. SS 304 suits indoor and general inland outdoor use.' },
  { q: 'Can stainless steel wire rope be used for lifting?', a: 'Only within the rating given by the manufacturer for the specific rope and termination. Stainless rope can have a lower minimum breaking force than high-tensile galvanised rope of the same diameter, so confirm the certified rating before using it for lifting.' },
  { q: 'Which construction is used for balustrades and railings?', a: '1×19 is commonly used where a stiff, low-stretch cable is wanted, and 7×7 where a little more flexibility helps with installation. Check the requirement with your designer and the fitting manufacturer.' },
  { q: 'Will stainless steel wire rope rust?', a: 'Stainless steel resists corrosion but is not immune. Salt, chlorides and trapped dirt can cause surface staining or pitting, especially on SS 304. Rinsing with fresh water and choosing SS 316 for coastal sites reduces this.' },
  { q: 'Are certificates available?', a: 'Include the certificate, traceability or test documents you need in your enquiry. The manufacturer, specification and available documentation will be confirmed with the quotation.' },
  { q: 'Do you supply outside Kolkata?', a: 'Send your delivery address and PIN code for supply enquiries across India, including West Bengal, Bihar, Jharkhand, Odisha and the North East. Availability, freight and dispatch timing are confirmed with your quotation.' },
];

const jsonLd = [
  { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Stainless Steel Wire Rope', description, url: canonical },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${business.website}/` },
    { '@type': 'ListItem', position: 2, name: 'Products', item: `${business.website}/products/` },
    { '@type': 'ListItem', position: 3, name: 'Stainless Steel Wire Rope', item: canonical },
  ] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
  })) },
];

export default function StainlessSteelWireRopePage() {
  return (
    <>
      <SEO title="Stainless Steel Wire Rope SS 304 & 316 | Marino Kolkata" description={description} canonical={canonical} jsonLd={jsonLd} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-8">
          <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 py-12 sm:py-16 text-white">
            <div className="container-modern">
              <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-slate-300">
                <Link to="/" className="hover:underline">Home</Link><span aria-hidden="true">/</span>
                <Link to="/products/" className="hover:underline">Products</Link><span aria-hidden="true">/</span>
                <span aria-current="page">Stainless Steel Wire Rope</span>
              </nav>
              <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-300">Wire rope · Kolkata</p>
                  <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">Stainless steel wire rope</h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-slate-100">Enquire for SS 304 and SS 316 wire rope from Marino Corporation. Share the grade, construction, diameter and length for availability, documentation and delivery from Kolkata.</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />Enquire on WhatsApp</a></Button>
                    <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-slate-900"><a href={`tel:+${business.whatsapp}`}><Phone className="mr-2 h-5 w-5" />Call for details</a></Button>
                  </div>
                </div>
                <aside className="rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold">Four details get you a quote.</h2>
                  <p className="mt-3 leading-relaxed text-slate-100">Grade, construction, diameter and length. Add end fittings and where the rope will be used if you need assemblies.</p>
                  <a href="#enquiry-details" className="mt-5 inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4">See what to send<ArrowRight className="h-4 w-4" /></a>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16" aria-labelledby="grades">
            <div className="container-modern">
              <h2 id="grades" className="text-3xl font-bold text-slate-900">Choose the grade</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">The grade decides how well the rope resists corrosion where it is installed. Both grades are confirmed against your requirement before you order.</p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {grades.map((grade) => (
                  <article key={grade.id} id={grade.id} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                    <p className="mb-2 text-sm font-medium text-emerald-700">{grade.subtitle}</p>
                    <h3 className="text-2xl font-bold text-slate-900">{grade.name}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{grade.detail}</p>
                    <h4 className="mt-5 text-sm font-semibold text-slate-900">Typical uses</h4>
                    <ul className="mt-3 space-y-3">
                      {grade.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-700"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />{point}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="constructions" className="scroll-mt-28 pb-12 sm:pb-16" aria-labelledby="constructions-heading">
            <div className="container-modern">
              <h2 id="constructions-heading" className="text-3xl font-bold text-slate-900">Common constructions</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">The first number is the strands in the rope, the second is the wires in each strand. More, finer wires make a more flexible rope; fewer, thicker wires resist abrasion and stretch.</p>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <caption className="sr-only">Stainless steel wire rope constructions compared by flexibility and typical use</caption>
                  <thead className="bg-slate-100 text-slate-900">
                    <tr>
                      <th scope="col" className="border-b border-slate-200 px-4 py-3 text-left font-semibold">Construction</th>
                      <th scope="col" className="border-b border-slate-200 px-4 py-3 text-left font-semibold">Flexibility</th>
                      <th scope="col" className="border-b border-slate-200 px-4 py-3 text-left font-semibold">Typical uses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {constructions.map((c) => (
                      <tr key={c.name} className="border-b border-slate-200 last:border-0 even:bg-slate-50/60">
                        <th scope="row" className="px-4 py-3 text-left">
                          <span className="flex items-center gap-3 whitespace-nowrap font-semibold text-slate-900"><RopeSection strand={c.strand} rope={c.rope} />{c.name}</span>
                        </th>
                        <td className="px-4 py-3 text-slate-700">{c.flexibility}</td>
                        <td className="px-4 py-3 leading-relaxed text-slate-700">{c.uses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-slate-500">Cross-sections are illustrations, not to scale. IWRC: independent wire rope core.</p>
            </div>
          </section>

          <section id="breaking-strength" className="scroll-mt-28 pb-12 sm:pb-16" aria-labelledby="breaking-strength-heading">
            <div className="container-modern">
              <h2 id="breaking-strength-heading" className="text-3xl font-bold text-slate-900">Breaking strength chart</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Minimum breaking load of grade 316 stainless steel wire rope by diameter and construction.</p>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full min-w-[680px] border-collapse text-sm">
                  <caption className="sr-only">Minimum breaking load of grade 316 stainless steel wire rope in kilonewtons and kilograms-force, by diameter and construction</caption>
                  <thead className="text-slate-900">
                    <tr className="bg-slate-100">
                      <th rowSpan={2} scope="col" className="sticky left-0 border-b border-slate-200 bg-slate-100 px-4 py-3 text-left font-semibold">Diameter (mm)</th>
                      {breakingLoadColumns.map((name, i) => (
                        <th key={name} colSpan={2} scope="colgroup" className={`border-l border-slate-200 px-4 pt-3 pb-1 text-center font-semibold ${i === 1 ? 'bg-emerald-50 text-emerald-900' : ''}`}>{name}</th>
                      ))}
                    </tr>
                    <tr className="bg-slate-100">
                      {breakingLoadColumns.flatMap((name, i) => ['kN', 'kgf'].map((unit, j) => (
                        <th key={`${name}-${unit}`} scope="col" className={`border-b border-slate-200 px-4 pt-1 pb-3 text-right text-xs font-medium text-slate-600 ${j === 0 ? 'border-l' : ''} ${i === 1 ? 'bg-emerald-50 text-emerald-800' : ''}`}>{unit}</th>
                      )))}
                    </tr>
                  </thead>
                  <tbody>
                    {breakingLoadRows.map(([diameter, ...loads]) => (
                      <tr key={diameter} className="border-b border-slate-200 last:border-0">
                        <th scope="row" className="sticky left-0 whitespace-nowrap bg-white px-4 py-2.5 text-left font-semibold text-slate-900">{diameter}</th>
                        {loads.flatMap((load, i) => [
                          <td key={`${i}-kn`} className={`whitespace-nowrap border-l border-slate-200 px-4 py-2.5 text-right tabular-nums text-slate-900 ${i === 1 ? 'bg-emerald-50/40' : ''}`}>{load ? load[0].toFixed(2) : '—'}</td>,
                          <td key={`${i}-kg`} className={`whitespace-nowrap px-4 py-2.5 text-right tabular-nums text-slate-500 ${i === 1 ? 'bg-emerald-50/40' : ''}`}>{load ? load[1].toLocaleString('en-IN') : '—'}</td>,
                        ])}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="mt-6 max-w-3xl space-y-2 text-sm leading-relaxed text-slate-600">
                <li><strong className="text-slate-900">Breaking load is not working load.</strong> Divide by the safety factor your application requires to find the working load limit, and allow for strength lost at terminations.</li>
                <li><strong className="text-slate-900">kgf</strong> means kilograms-force.</li>
              </ul>
              <p className="mt-4 max-w-3xl text-xs leading-relaxed text-slate-500">Guidance values for grade 316 stainless steel wire rope published by <a className="underline underline-offset-4 hover:text-slate-700" href={breakingLoadSource} target="_blank" rel="nofollow noopener noreferrer">Sta-Lok</a>. Values vary by manufacturer; use the minimum breaking load on the test certificate for the rope supplied.</p>
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
                <p className="mt-4 leading-relaxed text-slate-600">Have a competent person select the rope and terminations for the load and environment. Follow the manufacturer's instructions for installation, inspection and replacement.</p>
              </div>
              <div className="space-y-5 text-slate-700">
                <p><strong className="text-slate-900">Check the rating.</strong> Stainless rope can have a lower minimum breaking force than galvanised rope of the same diameter. Use the certified rating for the rope and its terminations, not the diameter alone.</p>
                <p><strong className="text-slate-900">Match the fittings.</strong> Use stainless thimbles, grips and turnbuckles of the same or a better grade. Mixing stainless rope with galvanised or plain steel fittings can cause galvanic corrosion at the joint.</p>
                <p><strong className="text-slate-900">Keep it clean.</strong> Rinse salt and dirt off with fresh water, particularly on coastal sites. Surface staining is an early sign that a higher grade or more frequent cleaning is needed.</p>
                <p><strong className="text-slate-900">Inspect before use.</strong> Remove rope with broken wires, kinks, birdcaging, crushing or corrosion at the terminations from service for assessment.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-12 sm:py-16" aria-labelledby="faq-heading">
            <div className="container-modern max-w-4xl">
              <h2 id="faq-heading" className="mb-7 text-3xl font-bold text-slate-900">Stainless steel wire rope questions</h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => <details key={q} className="rounded-xl border border-slate-200 bg-white px-5 py-4"><summary className="cursor-pointer font-semibold text-slate-900">{q}</summary><p className="mt-3 leading-relaxed text-slate-600">{a}</p></details>)}
              </div>
            </div>
          </section>

          <section className="bg-slate-900 py-12 text-white">
            <div className="container-modern">
              <h2 className="text-3xl font-bold">Discuss your stainless wire rope requirement</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">Contact our Kolkata team with your specification and delivery PIN code. Availability, documentation and dispatch timing are confirmed with your quotation.</p>
              <Button asChild size="lg" className="mt-6 bg-white text-slate-900 hover:bg-slate-100"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Request a quotation<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <Link className="underline underline-offset-4 hover:text-white" to="/product/turnbuckles/">Turnbuckles</Link>
                <Link className="underline underline-offset-4 hover:text-white" to="/product/thimbles/">Thimbles</Link>
                <Link className="underline underline-offset-4 hover:text-white" to="/product/wire-rope-accessories/">Wire rope grips</Link>
                <Link className="underline underline-offset-4 hover:text-white" to="/product/wire-rope-slings/">Wire rope slings</Link>
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
