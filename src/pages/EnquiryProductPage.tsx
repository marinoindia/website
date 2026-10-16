import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { business } from '@/data/business';
import type { EnquiryProduct } from '@/data/enquiryProducts';

// Shared layout for enquiry-only product pages (no published prices or ratings).
export default function EnquiryProductPage({ product }: { product: EnquiryProduct }) {
  const canonical = `${business.website}/product/${product.slug}/`;
  const whatsapp = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(product.enquiry)}`;
  const email = `mailto:${business.emails[0]}?subject=${encodeURIComponent(`${product.name} enquiry`)}&body=${encodeURIComponent(product.enquiry)}`;
  const jsonLd = [
    { '@context': 'https://schema.org', '@type': 'CollectionPage', name: product.name, description: product.description, url: canonical },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${business.website}/` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${business.website}/products/` },
      { '@type': 'ListItem', position: 3, name: product.name, item: canonical },
    ] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: product.faqs.map(({ q, a }) => ({
      '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a },
    })) },
  ];

  return (
    <>
      <SEO title={product.seoTitle} description={product.description} canonical={canonical} jsonLd={jsonLd} />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-8">
          <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-12 sm:py-16 text-white">
            <div className="container-modern">
              <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-slate-300">
                <Link to="/" className="hover:underline">Home</Link><span aria-hidden="true">/</span>
                <Link to="/products/" className="hover:underline">Products</Link><span aria-hidden="true">/</span>
                <span aria-current="page">{product.name}</span>
              </nav>
              <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-200">{product.eyebrow}</p>
                  <h1 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl">{product.h1}</h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-slate-100">{product.intro}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100"><a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />Enquire on WhatsApp</a></Button>
                    <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-slate-900"><a href={`tel:+${business.whatsapp}`}><Phone className="mr-2 h-5 w-5" />Call for details</a></Button>
                  </div>
                </div>
                <aside className="rounded-2xl border border-white/20 bg-white/10 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold">{product.asideTitle}</h2>
                  <p className="mt-3 leading-relaxed text-slate-100">{product.asideText}</p>
                  <a href="#enquiry-details" className="mt-5 inline-flex items-center gap-2 font-semibold text-white underline underline-offset-4">See what to send<ArrowRight className="h-4 w-4" /></a>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16" aria-labelledby="types-heading">
            <div className="container-modern">
              <h2 id="types-heading" className="text-3xl font-bold text-slate-900">{product.typesHeading}</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{product.typesIntro}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {product.types.map((type) => (
                  <article key={type.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                    <h3 className="text-xl font-bold text-slate-900">{type.name}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{type.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {product.table && (
            <section className="pb-12 sm:pb-16" aria-labelledby="table-heading">
              <div className="container-modern">
                <h2 id="table-heading" className="text-3xl font-bold text-slate-900">{product.table.heading}</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{product.table.intro}</p>
                <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                  <table className="w-full min-w-[640px] border-collapse text-sm">
                    <caption className="sr-only">{product.table.caption}</caption>
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>{product.table.columns.map((column) => <th key={column} scope="col" className="border-b border-slate-200 px-4 py-3 text-left font-semibold">{column}</th>)}</tr>
                    </thead>
                    <tbody>
                      {product.table.rows.map(([first, ...rest]) => (
                        <tr key={first} className="border-b border-slate-200 last:border-0 even:bg-slate-50/60">
                          <th scope="row" className="px-4 py-3 text-left font-semibold text-slate-900">{first}</th>
                          {rest.map((cell, i) => <td key={i} className="px-4 py-3 leading-relaxed text-slate-700">{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {product.table.note && <p className="mt-4 max-w-3xl text-xs leading-relaxed text-slate-500">{product.table.note}</p>}
              </div>
            </section>
          )}

          <section id="enquiry-details" className="scroll-mt-28 border-y border-slate-200 bg-slate-50 py-12 sm:py-16">
            <div className="container-modern">
              <h2 className="text-3xl font-bold text-slate-900">Details to include in your enquiry</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">Send the purchase specification or fill in these details. We will confirm the available product and documentation before you order.</p>
              <dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {product.orderingDetails.map(([label, detail]) => (
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

          <section className="py-12 sm:py-16" aria-labelledby="care-heading">
            <div className="container-modern grid gap-8 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <h2 id="care-heading" className="text-3xl font-bold text-slate-900">Selection and safe use</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{product.careIntro}</p>
              </div>
              <ul className="space-y-5 text-slate-700">
                {product.care.map(({ title, text }) => (
                  <li key={title} className="flex gap-3"><CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-emerald-700" /><p><strong className="text-slate-900">{title}</strong> {text}</p></li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-slate-50 py-12 sm:py-16" aria-labelledby="faq-heading">
            <div className="container-modern max-w-4xl">
              <h2 id="faq-heading" className="mb-7 text-3xl font-bold text-slate-900">{product.name} questions</h2>
              <div className="space-y-3">
                {product.faqs.map(({ q, a }) => <details key={q} className="rounded-xl border border-slate-200 bg-white px-5 py-4"><summary className="cursor-pointer font-semibold text-slate-900">{q}</summary><p className="mt-3 leading-relaxed text-slate-600">{a}</p></details>)}
              </div>
            </div>
          </section>

          <section className="bg-slate-900 py-12 text-white">
            <div className="container-modern">
              <h2 className="text-3xl font-bold">Discuss your {product.name.toLowerCase()} requirement</h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">Contact our Kolkata team with your specification and delivery PIN code. Availability, documentation and dispatch timing are confirmed with your quotation.</p>
              <Button asChild size="lg" className="mt-6 bg-white text-slate-900 hover:bg-slate-100"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Request a quotation<ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                {product.related.map(({ label, to }) => <Link key={to} className="underline underline-offset-4 hover:text-white" to={to}>{label}</Link>)}
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
