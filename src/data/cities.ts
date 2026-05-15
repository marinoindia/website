export type CityInfo = {
  slug: string;
  name: string;
  region: string;
  leadTime: string;
  industryContext: string;
  intro: string;
  localContext: string;
  industryHighlights: string[];
  topProducts: { name: string; note: string }[];
  landmarks: string[];
};

export const cities: CityInfo[] = [
  {
    slug: 'mumbai',
    name: 'Mumbai',
    region: 'Maharashtra',
    leadTime: '3–4 business days',
    industryContext: 'Shipping, JNPT port operations, infrastructure & high-rise construction',
    intro:
      'Marino Corporation supplies wire ropes, slings and lifting hardware to shipping lines, port operators, EPC contractors and high-rise builders across Mumbai and the wider MMR region.',
    localContext:
      "Mumbai's twin demands — JNPT/Mumbai Port marine rigging and dense urban construction — call for two very different product profiles. We stock galvanised marine-grade wire rope for port and shipyard applications, and high-tensile lifting chains and shackles for tower-crane work in BKC, Lower Parel and the western suburbs.",
    industryHighlights: [
      'Container handling and lashing at JNPT and Mumbai Port',
      'Tower-crane lifting gear for high-rise construction',
      'Shipyard and ship-repair rigging',
      'Infrastructure projects across MMR & Thane–Belapur belt',
    ],
    topProducts: [
      { name: '6x36 IWRC Wire Rope Slings', note: 'For container and heavy-load lifting' },
      { name: 'G80 / G100 Chain Slings', note: 'Tower crane and EPC site use' },
      { name: 'Bow & D Shackles', note: 'Marine-grade galvanised' },
      { name: 'Container Lashing Equipment', note: 'JNPT-compatible systems' },
      { name: 'Mooring Ropes', note: 'For port and shipyard' },
    ],
    landmarks: ['JNPT (Nhava Sheva)', 'Mumbai Port Trust', 'Thane–Belapur industrial belt', 'BKC & Lower Parel construction zones'],
  },
  {
    slug: 'delhi',
    name: 'Delhi NCR',
    region: 'Delhi / Haryana / UP',
    leadTime: '2–3 business days',
    industryContext: 'Metro, expressway and infrastructure projects across the NCR',
    intro:
      'Marino Corporation delivers wire rope, slings, chains and lifting hardware to infrastructure contractors, fabricators and equipment rental fleets across Delhi NCR including Gurugram, Noida and Faridabad.',
    localContext:
      "Delhi NCR's pipeline of metro extensions, expressway packages and warehousing developments keeps demand strong for tower-crane lifting gear and EOT crane consumables. Our pan-India network ships directly to project sites and rental yards across the region.",
    industryHighlights: [
      'Delhi Metro Phase IV and RRTS corridor work',
      'Dwarka and Western Peripheral expressway packages',
      'Warehouse and logistics-park construction',
      'EPC contractors and equipment rental fleets',
    ],
    topProducts: [
      { name: 'Wire Rope Slings (4-leg)', note: 'Pre-cast segment and girder lifting' },
      { name: 'Alloy Steel Chain Slings', note: 'High capacity, G80 rated' },
      { name: 'Lifting Hooks with Latch', note: 'Tower crane standard' },
      { name: 'Turnbuckles', note: 'Bridge and structural tensioning' },
      { name: 'Wire Rope Pulleys & Blocks', note: 'EOT crane consumables' },
    ],
    landmarks: ['IMT Manesar', 'Noida industrial sectors', 'Faridabad industrial area', 'NH-48 expressway corridor'],
  },
  {
    slug: 'chennai',
    name: 'Chennai',
    region: 'Tamil Nadu',
    leadTime: '3–4 business days',
    industryContext: 'Chennai Port, Ennore Port, auto-manufacturing belt at Sriperumbudur',
    intro:
      'Marino Corporation supplies the Chennai industrial corridor — from port operations to automotive plants — with certified wire rope, chain slings, shackles and rigging hardware.',
    localContext:
      "Chennai's port traffic and the Sriperumbudur–Oragadam auto belt drive steady demand for both marine-grade rigging and factory lifting hardware. We support shipping agents, container terminal operators and tier-1 auto suppliers with stocked product and short lead times.",
    industryHighlights: [
      'Chennai Port and Ennore Port container handling',
      'Auto-manufacturing at Sriperumbudur and Oragadam',
      'Coastal and offshore project support',
      'Heavy-engineering fabrication shops',
    ],
    topProducts: [
      { name: 'Galvanised Wire Rope Slings', note: 'Port and marine use' },
      { name: 'Chain Slings (2 and 4 leg)', note: 'Auto plant material handling' },
      { name: 'D Shackles (Galvanised)', note: 'Container lashing' },
      { name: 'Ship Anchors & Anchor Chain', note: 'Marine supply' },
      { name: 'Lifting Hooks', note: 'EOT crane and gantry' },
    ],
    landmarks: ['Chennai Port', 'Ennore Port (Kamarajar)', 'Sriperumbudur industrial estate', 'Oragadam auto belt'],
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    region: 'Karnataka',
    leadTime: '3–4 business days',
    industryContext: 'Aerospace, industrial machinery, metro and commercial construction',
    intro:
      'Marino Corporation supplies aerospace component manufacturers, machinery builders, metro contractors and large commercial developers across Bangalore.',
    localContext:
      "Bangalore's mix of precision manufacturing and large-scale commercial real estate means our customers here range from aerospace tier-2 suppliers needing certified lifting accessories to crane rental fleets serving Whitefield and Outer Ring Road projects.",
    industryHighlights: [
      'Bangalore Metro Phase 2 and 3 packages',
      'Aerospace clusters around Devanahalli',
      'ORR / Whitefield commercial construction',
      'Precision machinery and heavy fabrication',
    ],
    topProducts: [
      { name: 'Certified Wire Rope Slings', note: 'Aerospace and precision lifts' },
      { name: 'Chain Slings (G80/G100)', note: 'Metro and commercial sites' },
      { name: 'Bow Shackles', note: 'High-tensile rated' },
      { name: 'Eye-Bolt & Lifting Lugs', note: 'Machinery handling' },
      { name: 'Wire Rope Grips & Thimbles', note: 'Accessory range' },
    ],
    landmarks: ['Peenya industrial area', 'Whitefield', 'Bommasandra industrial cluster', 'Devanahalli aerospace SEZ'],
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    region: 'Telangana',
    leadTime: '3–4 business days',
    industryContext: 'Pharmaceutical plants, ORR infrastructure, Hyderabad Metro',
    intro:
      'Marino Corporation supports pharma manufacturers, infrastructure contractors and metro project teams across Hyderabad and the wider Telangana belt.',
    localContext:
      "Hyderabad's pharma capacity expansion and the ORR / regional ring road projects keep demand steady for chain slings, lifting hooks and rigging hardware. We support both factory maintenance teams and EPC project sites.",
    industryHighlights: [
      'Hyderabad Pharma City and Genome Valley',
      'Outer Ring Road and Regional Ring Road work',
      'Hyderabad Metro extensions',
      'Heavy engineering and boiler fabrication',
    ],
    topProducts: [
      { name: 'Chain Slings (4-leg)', note: 'Boiler and pressure-vessel lifts' },
      { name: 'Wire Rope Slings', note: 'Crane rental fleet supply' },
      { name: 'Turnbuckles', note: 'Structural tensioning' },
      { name: 'Pulleys & Blocks', note: 'EOT and gantry consumables' },
      { name: 'Lifting Lugs & Pins', note: 'Custom fabrication support' },
    ],
    landmarks: ['Pashamylaram industrial area', 'Genome Valley', 'Patancheru', 'Outer Ring Road corridor'],
  },
  {
    slug: 'pune',
    name: 'Pune',
    region: 'Maharashtra',
    leadTime: '3–4 business days',
    industryContext: 'Auto, construction equipment manufacturing, Chakan industrial belt',
    intro:
      'Marino Corporation supplies Pune\'s auto OEMs, construction-equipment manufacturers and infrastructure contractors with certified wire rope, slings, chains and rigging hardware.',
    localContext:
      "Pune's Chakan, Talegaon and Ranjangaon industrial belts host major auto OEMs and tier-1 suppliers whose plants run on certified, traceable lifting gear. We support both routine plant consumables and project lifts.",
    industryHighlights: [
      'Chakan auto belt (OEM and tier-1 plants)',
      'Talegaon and Ranjangaon industrial estates',
      'Construction-equipment manufacturers',
      'Mumbai–Pune expressway logistics',
    ],
    topProducts: [
      { name: 'Wire Rope Slings (with thimbles & hooks)', note: 'OEM plant material handling' },
      { name: 'Chain Slings', note: 'G80 certified, traceable' },
      { name: 'Shackles (D & Bow)', note: 'High-tensile rated' },
      { name: 'Lifting Hooks', note: 'With safety latch' },
      { name: 'Wire Rope Grips & Accessories', note: 'Maintenance consumables' },
    ],
    landmarks: ['Chakan MIDC', 'Talegaon MIDC', 'Ranjangaon MIDC', 'Hinjewadi'],
  },
  {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    region: 'Gujarat',
    leadTime: '4–5 business days',
    industryContext: 'Petrochemicals, textiles, infrastructure, proximity to Mundra port',
    intro:
      'Marino Corporation supplies petrochemical plants, textile machinery operators and infrastructure contractors across Ahmedabad, Vadodara and the wider Gujarat belt.',
    localContext:
      "Gujarat's petrochemical and refinery complexes near Vadodara, Dahej and Jamnagar — along with port traffic at Mundra and Kandla — drive demand for both marine-grade rigging and certified lifting chains.",
    industryHighlights: [
      'Petrochemical complexes (Dahej, Vadodara, Jamnagar)',
      'Mundra and Kandla port operations',
      'Textile machinery and engineering',
      'GIFT City and Ahmedabad infrastructure',
    ],
    topProducts: [
      { name: 'Galvanised Wire Rope Slings', note: 'Petrochemical and refinery use' },
      { name: 'Chain Slings (G80/G100)', note: 'Plant lifting' },
      { name: 'Mooring Ropes', note: 'Port and offshore' },
      { name: 'Shackles (Marine grade)', note: 'Lashing and rigging' },
      { name: 'Lifting Hooks', note: 'Refinery EOT crane' },
    ],
    landmarks: ['Mundra Port', 'Kandla Port', 'Dahej PCPIR', 'Sanand industrial estate'],
  },
  {
    slug: 'visakhapatnam',
    name: 'Visakhapatnam',
    region: 'Andhra Pradesh',
    leadTime: '4–5 business days',
    industryContext: 'Vizag Port, Hindustan Shipyard, steel & heavy engineering',
    intro:
      'Marino Corporation supplies port operators, shipyards and heavy-engineering plants across Visakhapatnam with marine-grade wire rope, mooring ropes, anchor chains and rigging hardware.',
    localContext:
      "Vizag's deep-water port, shipbuilding activity at Hindustan Shipyard (HSL) and the surrounding steel and heavy-engineering plants demand marine-rated rigging in larger sizes. Our marine product range — including anchor chains and mooring ropes — was built for this kind of customer.",
    industryHighlights: [
      'Vizag Port and Gangavaram Port operations',
      'Hindustan Shipyard Limited (HSL)',
      'RINC / Vizag Steel Plant',
      'Coastal and offshore project support',
    ],
    topProducts: [
      { name: 'Heavy-duty Wire Rope Slings', note: 'Port and shipyard rated' },
      { name: 'Ship Anchor & Anchor Chain', note: 'Marine certified' },
      { name: 'Mooring Ropes', note: 'Synthetic and steel' },
      { name: 'Chain Slings', note: 'Steel plant lifting' },
      { name: 'Bow Shackles (Galvanised)', note: 'Marine grade' },
    ],
    landmarks: ['Vizag Port', 'Gangavaram Port', 'Hindustan Shipyard', 'Vizag Steel Plant (RINL)'],
  },
  {
    slug: 'kochi',
    name: 'Kochi',
    region: 'Kerala',
    leadTime: '4–5 business days',
    industryContext: 'Cochin Shipyard, Kochi Port, marine and coastal operations',
    intro:
      'Marino Corporation supplies Cochin Shipyard, Kochi Port operators and marine contractors with certified marine-grade wire rope, mooring ropes, anchor chains and rigging hardware.',
    localContext:
      "Kochi's shipbuilding and ship-repair traffic — concentrated around Cochin Shipyard — needs traceable, marine-rated rigging. Our anchor chain, mooring rope and galvanised wire rope sling range supports both new-build and repair work.",
    industryHighlights: [
      'Cochin Shipyard Limited',
      'Kochi Port (Willingdon Island)',
      'International Container Transhipment Terminal (Vallarpadam)',
      'Coastal logistics and offshore support',
    ],
    topProducts: [
      { name: 'Marine-grade Wire Rope Slings', note: 'Shipyard rigging' },
      { name: 'Anchor Chain', note: 'Marine certified' },
      { name: 'Mooring Ropes', note: 'Synthetic & steel' },
      { name: 'Galvanised Shackles', note: 'Marine corrosion-resistant' },
      { name: 'Lifting Hooks', note: 'Shipyard crane' },
    ],
    landmarks: ['Cochin Shipyard', 'Willingdon Island', 'Vallarpadam ICTT', 'Kalamassery industrial estate'],
  },
];

export const getCity = (slug: string): CityInfo | undefined =>
  cities.find((c) => c.slug === slug.toLowerCase());
