import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, MapPin, Truck, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getCity } from '@/data/cities';

const CityPage = () => {
  const { city: slug } = useParams<{ city: string }>();
  const city = slug ? getCity(slug) : undefined;

  if (!city) return <Navigate to="/" replace />;

  const canonical = `https://marinoindia.co.in/suppliers/${city.slug}`;
  const title = `Wire Rope & Sling Supplier in ${city.name} | Marino Corporation`;
  const description = `Marino Corporation supplies wire rope, slings, chains and lifting hardware to ${city.name}. ${city.industryContext}. ISO certified, 40+ years experience, delivery in ${city.leadTime} from Kolkata.`;

  const whatsappText = encodeURIComponent(
    `Hello, I am enquiring from ${city.name} about wire rope / slings / lifting equipment.`,
  );

  const topProductNames = city.topProducts.slice(0, 3).map((p) => p.name).join(', ');

  const faqs = [
    {
      q: `Do you deliver wire rope and slings to ${city.name}?`,
      a: `Yes. Marino Corporation ships wire rope, slings, chains, shackles and lifting hardware to ${city.name} and the wider ${city.region} region from our Kolkata works. Standard lead time is ${city.leadTime}.`,
    },
    {
      q: `What is the typical lead time for delivery to ${city.name}?`,
      a: `Standard delivery to ${city.name} is ${city.leadTime} from order confirmation for stocked items. Custom-fabricated slings and certified assemblies may take an additional 2–3 days. Same-day quotes via WhatsApp on +91 98311 44669.`,
    },
    {
      q: `Which products are most in demand around ${city.name}?`,
      a: `Around ${city.name}, customers most frequently order ${topProductNames}. The full range — including marine-grade rigging, G80/G100 chain slings and certified lifting hardware — is available on request.`,
    },
    {
      q: `Are your lifting products certified and traceable?`,
      a: `Yes. Marino Corporation is ISO certified. All chain slings, wire rope slings and rigging hardware ship with traceable load-test certificates suitable for EPC, port, shipyard and OEM plant audits.`,
    },
  ];

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://marinoindia.co.in' },
        { '@type': 'ListItem', position: 2, name: 'Suppliers', item: 'https://marinoindia.co.in/suppliers' },
        { '@type': 'ListItem', position: 3, name: city.name, item: canonical },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Wire Rope & Sling Supply to ${city.name}`,
      provider: {
        '@type': 'Organization',
        name: 'Marino Corporation Of India',
        url: 'https://marinoindia.co.in',
      },
      areaServed: { '@type': 'City', name: city.name },
      description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ];

  return (
    <>
      <SEO
        title={title}
        description={description}
        canonical={canonical}
        keywords={`wire rope supplier ${city.name}, sling supplier ${city.name}, chain supplier ${city.name}, lifting equipment ${city.name}, wire rope ${city.name}, marine equipment ${city.name}`}
        jsonLd={jsonLd}
      />

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-8">
          {/* Hero */}
          <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white py-14 sm:py-16">
            <div className="container-modern">
              <div className="max-w-3xl">
                <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5 mr-1.5" />
                  Pan-India delivery from Kolkata
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                  Wire Rope & Sling Supplier in{' '}
                  <span className="text-emerald-300">{city.name}</span>
                </h1>
                <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                  {city.intro}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/919831144669?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Enquiry
                    </Button>
                  </a>
                  <a href="tel:9831144669">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-900"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call 98311 44669
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Quick facts strip */}
          <section className="bg-white border-b border-slate-200">
            <div className="container-modern py-6">
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 font-medium">Delivery to {city.name}</div>
                    <div className="text-slate-900 font-semibold">{city.leadTime}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 font-medium">Certifications</div>
                    <div className="text-slate-900 font-semibold">ISO certified, load-tested</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wide text-slate-500 font-medium">Region</div>
                    <div className="text-slate-900 font-semibold">{city.region}</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Local context */}
          <section className="py-12 sm:py-14">
            <div className="container-modern grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                  Industrial demand in {city.name}
                </h2>
                <p className="text-slate-700 leading-relaxed mb-6">{city.localContext}</p>
                <ul className="space-y-2.5">
                  {city.industryHighlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="bg-slate-50 border border-slate-200 rounded-2xl p-6 h-fit">
                <h3 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                  Local reference points
                </h3>
                <ul className="space-y-2">
                  {city.landmarks.map((l) => (
                    <li key={l} className="text-sm text-slate-700 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>

          {/* Top products */}
          <section className="py-12 sm:py-14 bg-slate-50 border-y border-slate-200">
            <div className="container-modern">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Products in demand around {city.name}
              </h2>
              <p className="text-slate-600 mb-8 max-w-2xl">
                A snapshot of what we ship most frequently into {city.region}. Full range available on
                request — call or WhatsApp for specs and quotes.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {city.topProducts.map((p) => (
                  <div
                    key={p.name}
                    className="bg-white border border-slate-200 rounded-xl p-5 hover:border-emerald-300 hover:shadow-sm transition-all"
                  >
                    <h3 className="font-semibold text-slate-900 mb-1">{p.name}</h3>
                    <p className="text-sm text-slate-600">{p.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/products" className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-medium">
                  Browse full product catalogue
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 sm:py-14">
            <div className="container-modern max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <details
                    key={f.q}
                    className="group bg-white border border-slate-200 rounded-xl p-5 open:shadow-sm"
                  >
                    <summary className="cursor-pointer font-semibold text-slate-900 list-none flex items-start justify-between gap-4">
                      <span>{f.q}</span>
                      <span className="text-emerald-700 text-xl leading-none transition-transform group-open:rotate-45 flex-shrink-0">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-slate-700 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 sm:py-16">
            <div className="container-modern">
              <div className="bg-emerald-900 text-white rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Need a quote for {city.name}?
                </h2>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                  Share your specs by WhatsApp or phone — we'll confirm price, lead time and shipping
                  arrangements to {city.name} the same day.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href={`https://wa.me/919831144669?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Us
                    </Button>
                  </a>
                  <a href="tel:9831144669">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-900"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      98311 44669
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default CityPage;
