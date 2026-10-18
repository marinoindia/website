import { useEffect, useState } from 'react';

// Photo layers for the sling configurator, positioned on a shared square canvas
// (see public/config-mock/layers.json). Returns null when no layer file is present,
// in which case the configurator falls back to its drawing.

export type Layer = { src: string; x: number; y: number; w: number; h: number };
export type SlingPhotoLayers = {
  canvas: number;
  axis: { A: number; B: number };
  ropeThickness: number;
  ends: Record<'A' | 'B', Record<string, Record<string, Layer>>>;
  fits: Record<'A' | 'B', Record<string, Layer>>;
  rope: Record<string, { src: string; w: number; h: number }>;
};

const LAYERS_URL = '/config-mock/layers.json';

export function useSlingPhotoLayers() {
  const [layers, setLayers] = useState<SlingPhotoLayers | null>(null);
  useEffect(() => {
    let active = true;
    fetch(LAYERS_URL)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => { if (active && data?.ends) setLayers(data as SlingPhotoLayers); })
      .catch(() => undefined);
    return () => { active = false; };
  }, []);
  return layers;
}
