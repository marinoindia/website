import type { Layer, SlingPhotoLayers } from '@/lib/slingPhotoLayers';

// Photo-layer view of a configured sling. Layers are positioned on a shared square
// canvas (see /config-mock/layers.json); the left end's rope leaves its canvas at the
// right edge and the right end's rope at the left edge, on the stated rope axis.

const TERM_IMAGE: Record<string, string> = { SE: 'SE', SWE: 'SE', TE: 'TE', ES: 'ES', RS: 'RS', TB: 'RS', FT: 'FT', PL: 'PL' };
const EYE_TERMS = new Set(['SE', 'SWE', 'TE']);
const FIT_LABEL: Record<string, string> = { H: 'Sling hook', ML: 'Master link', RSF: 'Rigging screw', TBF: 'Turnbuckle', SH: 'Shackle', EB: 'Eyebolt', EN: 'Eyenut' };

type Props = {
  layers: SlingPhotoLayers;
  mat: string;
  legs: number;
  L: number;
  termA: string;
  fitA: string;
  termB: string;
  fitB: string;
  label: string;
};

export default function SlingPhotoView({ layers, mat, legs, L, termA, fitA, termB, fitB, label }: Props) {
  const C = layers.canvas;
  const pickMat = (set: Record<string, Layer>) => set[mat === 'U' ? 'G' : mat] ?? set.G;
  const multi = legs > 1;

  // Each end: termination layer, optional fitting layer, optional placeholder box (canvas units).
  const end = (side: 'A' | 'B', term: string, fit: string, topLink: boolean) => {
    const axis = layers.axis[side];
    const placeholderW = 620;
    if (topLink) {
      const box = side === 'A'
        ? { x: C - placeholderW, y: axis - 230, w: placeholderW - 40, h: 460 }
        : { x: 40, y: axis - 230, w: placeholderW - 40, h: 460 };
      return { term: null, fit: null, box, boxLabel: 'Master link', bearing: side === 'A' ? box.x : box.x + box.w };
    }
    const termLayer = pickMat(layers.ends[side][TERM_IMAGE[term] ?? 'PL']);
    let fitLayer: Layer | null = null;
    let box: { x: number; y: number; w: number; h: number } | null = null;
    let boxLabel = '';
    if (fit !== 'none' && EYE_TERMS.has(term)) {
      if (layers.fits[side][fit]) fitLayer = layers.fits[side][fit];
      else {
        boxLabel = FIT_LABEL[fit] ?? fit;
        box = side === 'A'
          ? { x: termLayer.x - placeholderW + 80, y: axis - 230, w: placeholderW - 40, h: 460 }
          : { x: termLayer.x + termLayer.w - 80 + 40, y: axis - 230, w: placeholderW - 40, h: 460 };
      }
    }
    const bearing = side === 'A' ? termLayer.x : termLayer.x + termLayer.w;
    return { term: termLayer, fit: fitLayer, box, boxLabel, bearing };
  };

  const a = end('A', termA, fitA, multi);
  const b = end('B', termB, fitB, false);
  const parts = (e: ReturnType<typeof end>) => [e.term, e.fit, e.box].filter(Boolean) as { x: number; y: number; w: number; h: number }[];
  const minXA = Math.min(...parts(a).map((p) => p.x));
  const maxXB = Math.max(...parts(b).map((p) => p.x + p.w));
  const widthA = C - minXA;
  const widthB = maxXB;
  const ext = (e: ReturnType<typeof end>, side: 'A' | 'B') => {
    const ps = parts(e);
    return { top: Math.max(...ps.map((p) => layers.axis[side] - p.y)), bottom: Math.max(...ps.map((p) => p.y + p.h - layers.axis[side])) };
  };
  const extA = ext(a, 'A');
  const extB = ext(b, 'B');

  const VIEW_W = 720;
  const MARGIN = 20;
  const MIN_ROPE = 150;
  const k = Math.min(0.2, (VIEW_W - 2 * MARGIN - MIN_ROPE) / (widthA + widthB));
  const ropeLen = VIEW_W - 2 * MARGIN - k * (widthA + widthB);
  const xA = MARGIN + k * widthA;
  const xB = xA + ropeLen;
  const top = k * Math.max(extA.top, extB.top, layers.ropeThickness / 2);
  const bottom = k * Math.max(extA.bottom, extB.bottom, layers.ropeThickness / 2);
  const yAxis = 34 + top;
  const dimY = yAxis + bottom + 22;
  const viewH = dimY + 46;

  const rope = layers.rope[mat === 'U' ? 'G' : mat] ?? layers.rope.G;
  const ropeH = k * layers.ropeThickness;
  const tileW = k * rope.w;
  const tiles = Math.max(1, Math.ceil(ropeLen / tileW));
  const bearingA = xA - k * (C - a.bearing);
  const bearingB = xB + k * b.bearing;

  const renderEnd = (e: ReturnType<typeof end>, side: 'A' | 'B', x: number) => (
    <g transform={`translate(${x} ${yAxis}) scale(${k}) translate(${side === 'A' ? -C : 0} ${-layers.axis[side]})`}>
      {e.term && <image href={e.term.src} x={e.term.x} y={e.term.y} width={e.term.w} height={e.term.h} />}
      {e.fit && <image href={e.fit.src} x={e.fit.x} y={e.fit.y} width={e.fit.w} height={e.fit.h} />}
      {e.box && (
        <g>
          <rect x={e.box.x} y={e.box.y} width={e.box.w} height={e.box.h} rx={60} fill="#F8FAFC" stroke="#94A3B8" strokeWidth={8} strokeDasharray="36 24" />
          <text x={e.box.x + e.box.w / 2} y={layers.axis[side] - 10} textAnchor="middle" style={{ font: '700 92px ui-sans-serif, system-ui', fill: '#334155' }}>{e.boxLabel}</text>
          <text x={e.box.x + e.box.w / 2} y={layers.axis[side] + 100} textAnchor="middle" style={{ font: '500 72px ui-sans-serif, system-ui', fill: '#64748B' }}>photo to come</text>
        </g>
      )}
    </g>
  );

  return (
    <div className="my-3 overflow-hidden rounded-xl border border-slate-100 bg-white">
      <svg viewBox={`0 0 ${VIEW_W} ${viewH}`} role="img" aria-label="Photo illustration of the configured sling" className="h-auto w-full">
        <text x={MARGIN} y={20} style={{ font: '600 12.5px ui-monospace, monospace', fill: '#171D24' }}>{multi ? `${legs}-LEG · ${label} · ONE LEG SHOWN` : label}</text>
        <svg x={xA} y={yAxis - ropeH / 2} width={ropeLen} height={ropeH} preserveAspectRatio="none">
          {Array.from({ length: tiles }, (_, i) => (
            <image key={i} href={rope.src} x={i * tileW} y={0} width={tileW} height={ropeH} preserveAspectRatio="none" />
          ))}
        </svg>
        {renderEnd(a, 'A', xA)}
        {renderEnd(b, 'B', xB)}
        <g stroke="#E4650C" strokeWidth={1.5} fill="none">
          <line x1={bearingA} y1={dimY - 10} x2={bearingA} y2={dimY + 8} />
          <line x1={bearingB} y1={dimY - 10} x2={bearingB} y2={dimY + 8} />
          <line x1={bearingA} y1={dimY} x2={bearingB} y2={dimY} />
        </g>
        <text x={(bearingA + bearingB) / 2} y={dimY - 6} textAnchor="middle" style={{ font: '700 14px ui-monospace, monospace', fill: '#E4650C' }}>{`${L.toFixed(1)} m${multi ? ' per leg' : ''}`}</text>
        <text x={(bearingA + bearingB) / 2} y={dimY + 20} textAnchor="middle" style={{ font: '500 10px ui-monospace, monospace', fill: '#5C6772', letterSpacing: '.08em' }}>BEARING TO BEARING · NOT TO SCALE</text>
        <text x={VIEW_W - MARGIN} y={viewH - 8} textAnchor="end" style={{ font: '500 9px ui-sans-serif, system-ui', fill: '#94A3B8' }}>Reference photos · local mock-up</text>
      </svg>
    </div>
  );
}
