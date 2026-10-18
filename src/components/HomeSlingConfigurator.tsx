import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Compact homepage teaser: a small configurator preview linking to its page.
export default function HomeSlingConfigurator() {
  return (
    <section id="sling-configurator" className="scroll-mt-24 py-8" aria-labelledby="home-configurator-heading">
      <div className="container-modern">
        <Link
          to="/wire-rope-sling-configurator/"
          className="group mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 sm:flex-row sm:p-5"
        >
          <img
            src="/images/sling-configurator-preview.webp"
            alt="Preview of the wire rope sling configurator"
            width={1200}
            height={649}
            loading="lazy"
            className="h-auto w-full max-w-xs shrink-0 rounded-lg border border-slate-200 bg-white sm:w-72"
          />
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Sling configurator</p>
            <h2 id="home-configurator-heading" className="mt-1 text-xl font-bold text-slate-900">Build your wire rope sling</h2>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">Choose rope, legs, length and fittings, see the price and load rating, and send the spec on WhatsApp.</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 group-hover:underline">
              Open the configurator
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
