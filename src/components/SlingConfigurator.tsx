import { useMemo, useState, type ReactNode } from 'react';
import { Copy, MessageCircle, Minus, Phone, Plus } from 'lucide-react';
import { business } from '@/data/business';
import { slingPriceList } from '@/data/slingPriceList';
import { slingLoadCharts, type SlingLoadRow } from '@/data/slingLoadChart';
import SlingPhotoView from '@/components/SlingPhotoView';
import { useSlingPhotoLayers } from '@/lib/slingPhotoLayers';

// Wire rope sling & assembly configurator. Listed prices come from slingPriceList.ts;
// other combinations get an indicative market-estimate range. Load ratings come from
// the EN 13414-1 chart (slingLoadChart.ts), reduced by 0.8/0.9 for hand-spliced eyes.

type Material = 'G' | 'U' | 'B' | 'S';
type Construction = '6x36' | '6x19' | '7x19' | '7x7' | '19x7' | '1x19';
type Splice = 'HS' | 'MF';
type Term = 'SE' | 'TE' | 'SWE' | 'RS' | 'TB' | 'ES' | 'FT' | 'PL';
type Fit = 'none' | 'H' | 'SH' | 'EB' | 'EN' | 'RSF' | 'TBF' | 'ML';
type End = { term: Term; fit: Fit };
type Option<T> = { id: T; v: string; s: string };

const MATERIALS: Option<Material>[] = [
  { id: 'G', v: 'Galvanised', s: 'standard' },
  { id: 'U', v: 'Ungalvanised', s: 'bright' },
  { id: 'B', v: 'Galvanised black', s: '' },
  { id: 'S', v: 'Stainless AISI 316', s: '' },
];
const CONSTRUCTIONS: Option<Construction>[] = [
  { id: '6x36', v: '6×36', s: 'GWRC · sling standard' },
  { id: '6x19', v: '6×19', s: '' },
  { id: '7x19', v: '7×19', s: 'flexible' },
  { id: '7x7', v: '7×7', s: '' },
  { id: '19x7', v: '19×7', s: 'rotation-resistant' },
  { id: '1x19', v: '1×19', s: 'rigid strand' },
];
const DIAMETERS = [1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 22, 25, 32];
const LENGTHS = [3, 4, 5, 6];
const SPLICES: Option<Splice>[] = [
  { id: 'HS', v: 'Hand splice', s: 'H/S · price-listed' },
  { id: 'MF', v: 'Machine ferrule', s: 'CMAFS' },
];
const LEGS: Option<number>[] = [
  { id: 1, v: 'Single', s: '1 leg' },
  { id: 2, v: '2-leg', s: '+ master link' },
  { id: 3, v: '3-leg', s: '+ master link' },
  { id: 4, v: '4-leg', s: '+ master link' },
];
const TERMS: Option<Term>[] = [
  { id: 'SE', v: 'Soft eye', s: 'spliced · standard' },
  { id: 'TE', v: 'Thimble eye', s: 'spliced' },
  { id: 'SWE', v: 'Ferrule-pressed eye', s: 'pressed' },
  { id: 'ES', v: 'End stop', s: 'pressed' },
  { id: 'RS', v: 'Rigging screw end', s: 'pressed' },
  { id: 'TB', v: 'Turnbuckle end', s: 'pressed' },
  { id: 'FT', v: 'Fuse & taper', s: 'welded taper' },
  { id: 'PL', v: 'Plain end', s: 'cut & served' },
];
const FITS: Option<Fit>[] = [
  { id: 'none', v: 'None', s: '' },
  { id: 'H', v: 'Sling hook', s: 'G80' },
  { id: 'SH', v: 'Shackle', s: 'rated' },
  { id: 'ML', v: 'Master link', s: 'G80' },
  { id: 'EB', v: 'Eyebolt', s: 'DIN 580' },
  { id: 'EN', v: 'Eyenut', s: 'DIN 582' },
  { id: 'RSF', v: 'Rigging screw', s: '' },
  { id: 'TBF', v: 'Turnbuckle', s: '' },
];
const termName = (id: Term) => TERMS.find((t) => t.id === id)?.v ?? id;
const fitName: Record<Fit, string> = { none: 'none', H: 'sling hook', SH: 'shackle', EB: 'eyebolt (DIN 580)', EN: 'eyenut (DIN 582)', RSF: 'rigging screw', TBF: 'turnbuckle', ML: 'master link' };

// Listed per-piece prices (₹) keyed by diameter and length in metres.
const PRICES: Record<number, Record<number, number | null>> = Object.fromEntries(
  slingPriceList.map((group) => [
    parseFloat(group.size),
    Object.fromEntries(group.rows.map((row) => [parseFloat(row.length), row.rate])),
  ]),
);

// Indicative market model (July 2026, ex-GST) from Indian supplier rates and the
// decomposition of Marino's own price grid. Each component carries its own band.
const MARKET = {
  ratePerKg: { G: 200, U: 185, B: 220, S: 550 } as Record<Material, number>,
  ropeBand: { G: 0.25, U: 0.3, B: 0.35, S: 0.4 } as Record<Material, number>,
  kgPerM: { '6x36': 0.0042, '6x19': 0.004, '7x19': 0.0043, '7x7': 0.0039, '19x7': 0.0044, '1x19': 0.0051 } as Record<Construction, number>,
  eye: (d: number) => (d < 12 ? Math.max(50, 15 * d) : d <= 22 ? 280 : d <= 25 ? 700 : 1100),
  eyeBand: 0.2,
  ferrulePart: (d: number) => (d <= 10 ? 15 : d <= 16 ? 35 : d <= 25 ? 70 : 120),
  ferruleBand: 0.3,
  thimble: [[6, 25], [8, 30], [10, 35], [12, 50], [14, 60], [16, 80], [18, 100], [20, 120], [22, 160], [25, 250], [99, 400]],
  thimbleBand: 0.4,
  hook: [[1, 158], [2, 280], [3, 440], [5, 782], [8, 1274], [12.5, 2557], [99, 3983]],
  hookBand: 0.35,
  shackle: [[1, 79], [2, 144], [3.25, 215], [4.75, 331], [6.5, 538], [8.5, 796], [9.5, 1192], [99, 1610]],
  shackleBand: 0.25,
  eyebolt: [[6, 14], [10, 38], [12, 90], [16, 130], [20, 250], [25, 400], [99, 550]],
  eyeboltBand: 0.4,
  eyenutFactor: 0.6,
  turnbuckle: [[4, 50], [6, 100], [8, 160], [12, 300], [16, 350], [20, 450], [25, 1200], [99, 3000]],
  turnbuckleBand: 0.35,
  masterlink: [[2, 175], [5, 664], [11, 1313], [20, 4000], [99, 8000]],
  masterlinkBand: 0.45,
};
const ladder = (table: number[][], key: number) => (table.find(([max]) => key <= max) ?? table[table.length - 1])[1];
// Rough per-leg capacity used only to size fittings in the price estimate.
const sizingWll = (d: number) => Math.round(0.0097 * d * d * 10) / 10;

const HAND_SPLICE_FACTOR = 0.8 / 0.9;
type Rating = { single: number; twoLeg45: number; twoLeg60: number; fourLeg45: number; fourLeg60: number };

// EN 13414-1 rating for the configured rope, or null where the chart does not apply.
function rating(mat: Material, con: Construction, d: number, splice: Splice): Rating | null {
  if (mat === 'S' || (con !== '6x36' && con !== '6x19')) return null;
  const chart = slingLoadCharts.find((c) => c.id === (con === '6x36' ? 'steel-core' : 'fibre-core'));
  const row = chart?.rows.find((r: SlingLoadRow) => r[0] === d);
  if (!row) return null;
  const adjust = (value: string) => {
    const t = parseFloat(value);
    return splice === 'HS' ? Math.floor(t * HAND_SPLICE_FACTOR * 100) / 100 : t;
  };
  return { single: adjust(row[1]), twoLeg45: adjust(row[2]), twoLeg60: adjust(row[3]), fourLeg45: adjust(row[4]), fourLeg60: adjust(row[5]) };
}

const fmt = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`;
const r10 = (n: number) => Math.round(n / 10) * 10;
const tonnes = (t: number) => `${t.toFixed(2)} t`;

const INK = '#171D24';
const ROPE = '#75808C';
const ORANGE = '#E4650C';
const MUTED = '#5C6772';

function Chips<T extends string | number>({ label, options, value, onChange, dense = false, hint }: {
  label: string; options: Option<T>[]; value: NoInfer<T>; onChange: (v: NoInfer<T>) => void; dense?: boolean; hint?: (v: NoInfer<T>) => string;
}) {
  return (
    <div role="radiogroup" aria-label={label} className={`flex flex-wrap gap-2 ${dense ? 'gap-1.5' : ''}`}>
      {options.map((option) => {
        const checked = option.id === value;
        const sub = hint ? hint(option.id) : option.s;
        return (
          <button
            key={String(option.id)}
            type="button"
            role="radio"
            aria-checked={checked}
            onClick={() => onChange(option.id)}
            className={`rounded-lg border text-left transition-colors ${dense ? 'px-2.5 py-1.5' : 'px-3 py-2'} ${checked ? 'border-emerald-700 bg-emerald-50 ring-1 ring-emerald-700' : 'border-slate-200 bg-white hover:border-slate-400'}`}
          >
            <span className={`block text-sm font-semibold ${checked ? 'text-emerald-900' : 'text-slate-900'}`}>{option.v}</span>
            {sub && <span className="block text-[11px] leading-tight text-slate-500">{sub}</span>}
          </button>
        );
      })}
    </div>
  );
}

function Step({ no, title, hint, children }: { no: string; title: string; hint?: string; children: ReactNode }) {
  return (
    <div className="border-b border-slate-200 py-5 last:border-0">
      <div className="mb-3 flex items-baseline gap-3">
        <span className="font-mono text-xs font-bold text-emerald-700">{no}</span>
        <h3 className="text-base font-bold text-slate-900">{title}</h3>
      </div>
      {hint && <p className="-mt-1 mb-3 text-xs text-slate-500">{hint}</p>}
      <div className="space-y-3">{children}</div>
    </div>
  );
}

const RowLabel = ({ children }: { children: ReactNode }) => <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{children}</p>;

export default function SlingConfigurator() {
  const [mat, setMat] = useState<Material>('G');
  const [con, setCon] = useState<Construction>('6x36');
  const [d, setD] = useState(16);
  const [splice, setSplice] = useState<Splice>('HS');
  const [legs, setLegs] = useState(1);
  const [len, setLen] = useState(4);
  const [custom, setCustom] = useState(false);
  const [customVal, setCustomVal] = useState(8);
  const [endA, setEndA] = useState<End>({ term: 'SE', fit: 'none' });
  const [endB, setEndB] = useState<End>({ term: 'SE', fit: 'none' });
  const [qty, setQty] = useState(1);
  const [copied, setCopied] = useState(false);
  const photoLayers = useSlingPhotoLayers();

  const L = custom ? customVal : len;
  const multi = legs > 1;
  const isStdRope = mat === 'G' && con === '6x36';
  const isGridCombo = isStdRope && splice === 'HS' && !custom && PRICES[d]?.[len] != null;
  const eyeTerminations = [endA, endB].every((end, i) =>
    (multi && i === 0) || ['SE', 'TE', 'SWE'].includes(end.term),
  );
  const rated = eyeTerminations ? rating(mat, con, d, splice) : null;

  const estimate = useMemo(() => {
    let lo = 0;
    let hi = 0;
    const add = (v: number, band: number) => { lo += v * (1 - band); hi += v * (1 + band); };
    const legEnds = multi ? [endB] : [endA, endB];
    if (isGridCombo) {
      add(PRICES[d][len] as number, 0);
    } else {
      add(MARKET.ratePerKg[mat] * MARKET.kgPerM[con] * d * d * L, MARKET.ropeBand[mat]);
      legEnds.forEach((e) => {
        if (e.term === 'SE' || e.term === 'TE') add(splice === 'MF' ? MARKET.ferrulePart(d) + 0.7 * MARKET.eye(d) : MARKET.eye(d), MARKET.eyeBand);
        else if (e.term === 'SWE' || e.term === 'RS' || e.term === 'TB' || e.term === 'ES') add(MARKET.ferrulePart(d) + 0.7 * MARKET.eye(d), MARKET.ferruleBand);
        else if (e.term === 'FT') add(80, 0.3);
        else add(30, 0.3);
      });
    }
    legEnds.forEach((e) => {
      const w = sizingWll(d);
      if (e.term === 'TE') add(ladder(MARKET.thimble, d), MARKET.thimbleBand);
      if (e.term === 'RS' || e.term === 'TB') add(ladder(MARKET.turnbuckle, d), MARKET.turnbuckleBand);
      if (e.fit === 'H') add(ladder(MARKET.hook, w), MARKET.hookBand);
      if (e.fit === 'SH') add(ladder(MARKET.shackle, w), MARKET.shackleBand);
      if (e.fit === 'EB') add(ladder(MARKET.eyebolt, d), MARKET.eyeboltBand);
      if (e.fit === 'EN') add(ladder(MARKET.eyebolt, d) * MARKET.eyenutFactor, MARKET.eyeboltBand);
      if (e.fit === 'RSF' || e.fit === 'TBF') add(ladder(MARKET.turnbuckle, d), MARKET.turnbuckleBand);
      if (e.fit === 'ML') add(ladder(MARKET.masterlink, w), MARKET.masterlinkBand);
    });
    if (multi) {
      lo *= legs;
      hi *= legs;
      const top = ladder(MARKET.masterlink, sizingWll(d) * legs * 0.8);
      lo += top * (1 - MARKET.masterlinkBand);
      hi += top * (1 + MARKET.masterlinkBand);
    }
    return { lo: r10(lo), hi: r10(hi) };
  }, [mat, con, d, splice, legs, len, L, endA, endB, multi, isGridCombo]);

  const pureGrid = isGridCombo && !multi && endA.term === 'SE' && endA.fit === 'none' && endB.term === 'SE' && endB.fit === 'none';
  const unitPrice = pureGrid ? (PRICES[d][len] as number) : null;

  const endCode = (e: End) => e.term + (e.fit !== 'none' ? `+${e.fit}` : '');
  const partCode = `WRS-${multi ? `${legs}L-` : ''}${mat}-${con}-${d}-${L.toFixed(1)}M-${splice}-${multi ? `ML/${endCode(endB)}` : `${endCode(endA)}/${endCode(endB)}`}`;
  const matName = MATERIALS.find((m) => m.id === mat)?.v ?? mat;
  const conName = CONSTRUCTIONS.find((c) => c.id === con)?.v ?? con;
  const endText = (e: End) => termName(e.term) + (e.fit !== 'none' ? ` with ${fitName[e.fit]}` : '');

  const wllText = !rated
    ? 'on quote'
    : !multi
      ? `${tonnes(rated.single)} single leg`
      : legs === 2
        ? `${tonnes(rated.twoLeg45)} at 0–45° · ${tonnes(rated.twoLeg60)} at 45–60°`
        : `${tonnes(rated.fourLeg45)} at 0–45° · ${tonnes(rated.fourLeg60)} at 45–60°`;

  const specLines = [
    `Wire Rope Sling / Assembly — ${partCode}`,
    `Rope: ${conName} ${matName}, Ø ${d} mm${isStdRope ? ' (GWRC, RHOL)' : ''}`,
    `Splice: ${splice === 'HS' ? 'Hand splice (H/S)' : 'Machine ferrule (CMAFS)'}`,
    `Legs: ${legs}${multi ? ' (master link at top)' : ''}`,
    `Length: ${L.toFixed(1)} m per leg (bearing to bearing)`,
    multi ? `Leg ends: ${endText(endB)}` : `End A: ${endText(endA)} | End B: ${endText(endB)}`,
    ...(rated ? [`Indicative WLL (EN 13414-1${splice === 'HS' ? ', hand-spliced' : ''}): ${wllText}`] : []),
    `Quantity: ${qty}`,
    unitPrice !== null
      ? `Listed price: ${fmt(unitPrice)}/pc → ${fmt(unitPrice * qty)} total (ex-works, excl. GST)`
      : `Estimated: ${fmt(estimate.lo)}–${fmt(estimate.hi)}/pc${qty > 1 ? ` → ${fmt(estimate.lo * qty)}–${fmt(estimate.hi * qty)} total` : ''} (indicative, ex-works, excl. GST)`,
  ];
  const waHref = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hello Marino Corporation, quote request:\n${specLines.map((l) => `• ${l}`).join('\n')}\nPlease confirm price and delivery.`)}`;
  const mailHref = `mailto:${business.emails[0]}?subject=${encodeURIComponent(`Quote — ${partCode}`)}&body=${encodeURIComponent(specLines.join('\n'))}`;

  const copySpec = async () => {
    try {
      await navigator.clipboard.writeText(specLines.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const lengthHint = (key: number | 'custom') => {
    if (key === 'custom') return 'any length';
    if (isStdRope && PRICES[d]?.[key] != null) return `${fmt((PRICES[d][key] as number) * legs)}${multi ? ' base' : ''}`;
    const rough = (MARKET.ratePerKg[mat] * MARKET.kgPerM[con] * d * d * key + 2 * MARKET.eye(d)) * legs;
    return `≈${fmt(r10(rough))}`;
  };
  const diameterHint = (value: number) => {
    const r = rating(mat, con, value, splice);
    return r ? `${r.single.toFixed(2)} t` : '';
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-start">
      <section aria-label="Configuration" className="rounded-2xl border border-slate-200 bg-white px-5 sm:px-6">
        <Step no="01" title="Wire rope">
          <RowLabel>Material</RowLabel>
          <Chips label="Rope material" options={MATERIALS} value={mat} onChange={setMat} />
          <RowLabel>Construction</RowLabel>
          <Chips label="Rope construction" options={CONSTRUCTIONS} value={con} onChange={setCon} />
          <RowLabel>Diameter (mm)</RowLabel>
          <Chips label="Rope diameter" dense options={DIAMETERS.map((x) => ({ id: x, v: `Ø ${x}`, s: '' }))} value={d} onChange={setD} hint={diameterHint} />
        </Step>
        <Step no="02" title="Splice" hint="Applies to spliced eyes. Pressed terminations are made on a press at the works.">
          <Chips label="Splice type" options={SPLICES} value={splice} onChange={setSplice} />
        </Step>
        <Step no="03" title="Legs" hint="Multi-leg slings include a master link at the top, sized at the works.">
          <Chips label="Number of legs" options={LEGS} value={legs} onChange={setLegs} />
        </Step>
        <Step no="04" title="Length" hint="Per leg, measured bearing to bearing.">
          <Chips<number | 'custom'>
            label="Length"
            options={[...LENGTHS.map((x) => ({ id: x as number | 'custom', v: `${x} m`, s: '' })), { id: 'custom', v: 'Custom', s: '' }]}
            value={custom ? 'custom' : len}
            onChange={(v) => { if (v === 'custom') setCustom(true); else { setCustom(false); setLen(v); } }}
            hint={lengthHint}
          />
          {custom && (
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="number" min={0.5} max={50} step={0.5} value={customVal}
                onChange={(e) => { const v = parseFloat(e.target.value); if (!Number.isNaN(v)) setCustomVal(Math.min(50, Math.max(0.5, v))); }}
                className="w-24 rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
                aria-label="Custom length in metres"
              />
              metres
            </label>
          )}
        </Step>
        <Step no="05" title="End terminations and fittings" hint="Terminations and fittings are sized to suit the rope. Everything is confirmed on your quote.">
          {multi ? (
            <p className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900"><strong>Top end:</strong> master link, included with multi-leg slings.</p>
          ) : (
            <div className="space-y-3 rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-900">End A</p>
              <RowLabel>Termination</RowLabel>
              <Chips label="End A termination" options={TERMS} value={endA.term} onChange={(term) => setEndA({ ...endA, term })} />
              <RowLabel>Fitting on this end</RowLabel>
              <Chips label="End A fitting" options={FITS} value={endA.fit} onChange={(fit) => setEndA({ ...endA, fit })} />
            </div>
          )}
          <div className="space-y-3 rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-bold text-slate-900">{multi ? 'Leg ends (all legs)' : 'End B'}</p>
            <RowLabel>Termination</RowLabel>
            <Chips label={multi ? 'Leg end termination' : 'End B termination'} options={TERMS} value={endB.term} onChange={(term) => setEndB({ ...endB, term })} />
            <RowLabel>Fitting on this end</RowLabel>
            <Chips label={multi ? 'Leg end fitting' : 'End B fitting'} options={FITS} value={endB.fit} onChange={(fit) => setEndB({ ...endB, fit })} />
          </div>
        </Step>
        <Step no="06" title="Quantity">
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity" className="rounded-lg border border-slate-300 p-2 hover:bg-slate-50"><Minus className="h-4 w-4" /></button>
            <input type="number" min={1} max={99} value={qty} onChange={(e) => { const v = parseInt(e.target.value, 10); if (!Number.isNaN(v)) setQty(Math.min(99, Math.max(1, v))); }} aria-label="Quantity" className="w-16 rounded-lg border border-slate-300 px-3 py-2 text-center text-slate-900" />
            <button type="button" onClick={() => setQty(Math.min(99, qty + 1))} aria-label="Increase quantity" className="rounded-lg border border-slate-300 p-2 hover:bg-slate-50"><Plus className="h-4 w-4" /></button>
          </div>
        </Step>
      </section>

      <aside aria-label="Specification and price" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-28">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Job card</span>
          <span className="break-all font-mono text-xs font-semibold text-emerald-800">{partCode}</span>
        </div>
        {photoLayers ? (
          <SlingPhotoView layers={photoLayers} mat={mat} legs={legs} L={L} termA={endA.term} fitA={endA.fit} termB={endB.term} fitB={endB.fit} label={`Ø ${d} mm · ${conName} ${mat === 'G' ? 'GALV' : mat === 'S' ? 'SS316' : mat === 'B' ? 'GALV BLACK' : 'BRIGHT'}`} />
        ) : (
          <SlingDrawing d={d} legs={legs} L={L} endA={endA} endB={endB} label={`Ø ${d} mm · ${conName} ${mat === 'G' ? 'GALV' : mat === 'S' ? 'SS316' : mat === 'B' ? 'GALV BLACK' : 'BRIGHT'}`} />
        )}
        <dl className="divide-y divide-slate-100 text-sm">
          {[
            ['Rope', `${conName} · ${matName.toLowerCase()} · Ø ${d} mm`],
            ['Splice', splice === 'HS' ? 'Hand spliced (H/S)' : 'Machine ferrule (CMAFS)'],
            ['Ends', multi ? `ML / ${endCode(endB)} ×${legs}` : `${endCode(endA)} / ${endCode(endB)}`],
            [`WLL${multi ? ` — ${legs}-leg sling` : ''} †`, wllText],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 py-2"><dt className="text-slate-500">{k}</dt><dd className="text-right font-medium text-slate-900">{v}</dd></div>
          ))}
        </dl>
        <div className="mt-4 rounded-xl bg-slate-50 p-4" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">{unitPrice !== null ? 'Listed price — confirmed on enquiry' : isGridCombo ? 'Listed base + estimated extras' : 'Market estimate — indicative'}</p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {unitPrice !== null ? fmt(unitPrice) : `${fmt(estimate.lo)} – ${fmt(estimate.hi)}`}
            <span className="ml-1 text-sm font-medium text-slate-500">/ piece{unitPrice === null ? ' est.' : ''}</span>
          </p>
          {qty > 1 && (
            <p className="text-sm text-slate-600">
              × {qty} pcs = <strong>{unitPrice !== null ? fmt(unitPrice * qty) : `${fmt(estimate.lo * qty)} – ${fmt(estimate.hi * qty)}`}</strong>
            </p>
          )}
          <p className="mt-2 text-xs text-slate-500">Ex-works Kolkata · GST and delivery extra.</p>
        </div>
        <div className="mt-4 grid gap-2">
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-3 font-semibold text-white hover:bg-emerald-800">
            <MessageCircle className="h-5 w-5" />Send spec on WhatsApp
          </a>
          <div className="grid grid-cols-2 gap-2">
            <a href={`tel:+${business.whatsapp}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"><Phone className="h-4 w-4" />Call</a>
            <button type="button" onClick={copySpec} className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"><Copy className="h-4 w-4" />{copied ? 'Copied' : 'Copy spec'}</button>
          </div>
          <a href={mailHref} className="text-center text-sm text-slate-500 underline underline-offset-4 hover:text-slate-800">or send it by email</a>
        </div>
      </aside>
    </div>
  );
}

// Schematic, not-to-scale drawing of the configured assembly.
function SlingDrawing({ d, legs, L, endA, endB, label }: { d: number; legs: number; L: number; endA: End; endB: End; label: string }) {
  const t = Math.max(6, Math.min(18, 6 + d * 0.4));
  const parts: ReactNode[] = [];
  let k = 0;
  const push = (node: ReactNode) => parts.push(<g key={k++}>{node}</g>);

  // Teardrop outline from x0 (pointed throat) to x1 (round end) with half-height h.
  const drop = (x0: number, x1: number, y: number, h: number) =>
    `M${x0},${y} C${x0 + (x1 - x0) * 0.48},${y - h} ${x1},${y - h * 0.8} ${x1},${y} C${x1},${y + h * 0.8} ${x0 + (x1 - x0) * 0.48},${y + h} ${x0},${y}`;
  const eye = (sx: number, y: number, dir: number, width: number, height: number) => {
    const ex = sx + dir * width;
    push(<path d={drop(sx, ex, y, height)} fill="none" stroke={ROPE} strokeWidth={Math.max(4.5, t * 0.7)} strokeLinecap="round" />);
    return ex;
  };
  // Grooved thimble seated inside a spliced eye: drawn under the rope so the rope sits in its groove.
  const thimble = (sx: number, y: number, dir: number, width: number, height: number) => {
    const outer = drop(sx + dir * 10, sx + dir * (width - 3), y, height - 4);
    const inner = drop(sx + dir * 30, sx + dir * (width - 15), y, height - 19);
    push(<path d={`${outer} ${inner}`} fillRule="evenodd" fill="#D5DBE1" stroke={INK} strokeWidth={1.6} />);
    return inner;
  };
  // Splice tucks on the rope just below the eye throat.
  const splice = (sx: number, y: number, dir: number) => {
    for (let i = 0; i < 4; i++) {
      const x = sx - dir * (6 + i * 7);
      push(<line x1={x} y1={y - t / 2 - 3} x2={x} y2={y + t / 2 + 3} stroke={INK} strokeWidth={1.5} />);
    }
  };
  const ferrule = (sx: number, y: number, dir: number, len: number) => {
    push(<rect x={dir > 0 ? sx : sx - len} y={y - t / 2 - 5} width={len} height={t + 10} rx={3} fill="#fff" stroke={INK} strokeWidth={2} />);
    return sx + dir * len;
  };
  const serve = (sx: number, y: number, dir: number) => {
    for (let i = 0; i < 4; i++) {
      const x = sx + dir * (8 + i * 7);
      push(<line x1={x} y1={y - t / 2 - 4} x2={x} y2={y + t / 2 + 4} stroke={INK} strokeWidth={1.5} />);
    }
  };
  const term = (sx: number, y: number, dir: number, end: End) => {
    if (end.term === 'SE') {
      splice(sx, y, dir);
      return eye(sx, y, dir, 92, 40);
    }
    if (end.term === 'TE') {
      splice(sx, y, dir);
      const inner = thimble(sx, y, dir, 92, 40);
      const ex = eye(sx, y, dir, 92, 40);
      push(<path d={inner} fill="none" stroke={INK} strokeWidth={1.6} />);
      return ex;
    }
    if (end.term === 'SWE') return eye(ferrule(sx, y, dir, 26), y, dir, 50, 24);
    if (end.term === 'RS' || end.term === 'TB') {
      const fx = ferrule(sx, y, dir, 20);
      const bx = fx + dir * 56;
      push(<line x1={fx} y1={y} x2={bx} y2={y} stroke={INK} strokeWidth={4} />);
      push(<rect x={Math.min(fx, bx) + 14} y={y - 8} width={28} height={16} rx={6} fill="none" stroke={INK} strokeWidth={3} />);
      push(<circle cx={bx + dir * 8} cy={y} r={8} fill="none" stroke={INK} strokeWidth={3.5} />);
      return bx + dir * 16;
    }
    if (end.term === 'ES') {
      const fx = ferrule(sx, y, dir, 14);
      push(<circle cx={fx + dir * 8} cy={y} r={9} fill={INK} />);
      return fx + dir * 17;
    }
    if (end.term === 'FT') {
      push(<path d={`M${sx},${y - t / 2} L${sx + dir * 42},${y} L${sx},${y + t / 2} Z`} fill={ROPE} />);
      return sx + dir * 42;
    }
    serve(sx, y, dir);
    push(<line x1={sx + dir * 36} y1={y - t / 2 - 3} x2={sx + dir * 36} y2={y + t / 2 + 3} stroke={INK} strokeWidth={2.5} />);
    return sx + dir * 36;
  };
  const fitting = (bx: number, y: number, dir: number, fit: Fit) => {
    const fx = bx + dir * 6;
    const sweep = dir > 0 ? 1 : 0;
    if (fit === 'H') {
      push(<line x1={fx} y1={y} x2={fx + dir * 10} y2={y} stroke={INK} strokeWidth={4} strokeLinecap="round" />);
      push(<path d={`M${fx + dir * 10},${y} a13,14 0 1 ${sweep} ${dir * 13},14`} fill="none" stroke={INK} strokeWidth={4.5} strokeLinecap="round" />);
    } else if (fit === 'SH') {
      push(<path d={`M${fx + dir * 4},${y - 9} a14,14 0 1 ${sweep} 0,18`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />);
      push(<line x1={fx + dir * 2} y1={y - 11} x2={fx + dir * 2} y2={y + 11} stroke={INK} strokeWidth={3} />);
    } else if (fit === 'EB' || fit === 'EN') {
      push(<circle cx={fx + dir * 10} cy={y - 6} r={9} fill="none" stroke={INK} strokeWidth={3.5} />);
      if (fit === 'EB') push(<line x1={fx + dir * 10} y1={y + 3} x2={fx + dir * 10} y2={y + 16} stroke={INK} strokeWidth={4} strokeDasharray="3 2" />);
      else push(<rect x={fx + dir * 10 - 7} y={y + 3} width={14} height={9} fill="none" stroke={INK} strokeWidth={2.5} />);
    } else if (fit === 'RSF' || fit === 'TBF') {
      push(<rect x={Math.min(fx, fx + dir * 34)} y={y - 7} width={34} height={14} rx={6} fill="none" stroke={INK} strokeWidth={3} />);
      push(<circle cx={fx + dir * 40} cy={y} r={7} fill="none" stroke={INK} strokeWidth={3} />);
    } else if (fit === 'ML') {
      push(<ellipse cx={fx + dir * 12} cy={y} rx={11} ry={18} fill="none" stroke={INK} strokeWidth={4} />);
    }
  };

  if (legs === 1) {
    const y = 100;
    const sxL = 168;
    const sxR = 472;
    push(<line x1={sxL} y1={y} x2={sxR} y2={y} stroke={ROPE} strokeWidth={t} />);
    const bxL = term(sxL, y, -1, endA);
    const bxR = term(sxR, y, 1, endB);
    if (endA.fit !== 'none') fitting(bxL, y, -1, endA.fit);
    if (endB.fit !== 'none') fitting(bxR, y, 1, endB.fit);
    const dy = 168;
    push(
      <g stroke={ORANGE} strokeWidth={1.5} fill="none">
        <line x1={bxL} y1={y + 30} x2={bxL} y2={dy + 8} />
        <line x1={bxR} y1={y + 30} x2={bxR} y2={dy + 8} />
        <line x1={bxL} y1={dy} x2={bxR} y2={dy} />
      </g>,
    );
    push(<text x={320} y={30} textAnchor="middle" style={{ font: '600 12.5px ui-monospace, monospace', fill: INK }}>{label}</text>);
    push(<text x={320} y={dy - 8} textAnchor="middle" style={{ font: '700 15px ui-monospace, monospace', fill: ORANGE }}>{`${L.toFixed(1)} m`}</text>);
    push(<text x={320} y={dy + 22} textAnchor="middle" style={{ font: '500 10px ui-monospace, monospace', fill: MUTED, letterSpacing: '.08em' }}>BEARING TO BEARING</text>);
  } else {
    const lt = Math.max(4.5, t * 0.65);
    const topY = 52;
    const botY = 168;
    const cx = 320;
    const spread = 95 + legs * 30;
    push(<ellipse cx={cx} cy={topY - 20} rx={15} ry={23} fill="none" stroke={INK} strokeWidth={5} />);
    for (let i = 0; i < legs; i++) {
      const x = cx - spread / 2 + (spread / (legs - 1)) * i;
      push(<line x1={cx} y1={topY} x2={x} y2={botY - 26} stroke={ROPE} strokeWidth={lt} strokeLinecap="round" />);
      if (endB.term === 'TE') push(<ellipse cx={x} cy={botY - 12} rx={10} ry={14} fill="#D5DBE1" stroke={INK} strokeWidth={1.4} />);
      push(<ellipse cx={x} cy={botY - 12} rx={11} ry={15} fill="none" stroke={ROPE} strokeWidth={Math.max(4, lt * 0.8)} />);
      if (endB.term === 'TE') push(<ellipse cx={x} cy={botY - 12} rx={4.5} ry={7.5} fill="#fff" stroke={INK} strokeWidth={1.4} />);
      if (endB.fit === 'H') push(<path d={`M${x},${botY + 2} a11,12 0 1 1 -11,12`} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />);
      else if (endB.fit === 'SH') push(<path d={`M${x - 8},${botY + 4} a11,11 0 1 0 16,0`} fill="none" stroke={INK} strokeWidth={3.5} strokeLinecap="round" />);
      else if (endB.fit !== 'none') push(<ellipse cx={x} cy={botY + 8} rx={7} ry={10} fill="none" stroke={INK} strokeWidth={3} />);
    }
    push(<text x={16} y={24} style={{ font: '600 12.5px ui-monospace, monospace', fill: INK }}>{`${legs}-LEG · ${label}`}</text>);
    push(<text x={cx} y={212} textAnchor="middle" style={{ font: '700 13px ui-monospace, monospace', fill: ORANGE }}>{`L = ${L.toFixed(1)} m per leg (bearing to bearing)`}</text>);
  }

  return (
    <div className="my-3 rounded-xl border border-slate-100 bg-slate-50/60">
      <svg viewBox="0 0 640 232" role="img" aria-label="Schematic drawing of the configured sling" className="h-auto w-full">
        {parts}
        <text x={12} y={226} style={{ font: '500 10px ui-monospace, monospace', fill: MUTED, letterSpacing: '.06em' }}>{`${legs === 1 ? 'SINGLE-LEG' : `${legs}-LEG`} ASSEMBLY · NOT TO SCALE`}</text>
      </svg>
    </div>
  );
}
