export type CityInfo = {
  slug: string;
  name: string;
  region: string;
  leadTime: string;
  industryContext: string;
  intro: string;
  localContext: string;
  industryHighlights: string[];
  topProducts: { name: string; note: string; to?: string }[];
  landmarks: string[];
  // Optional SEO overrides — used by the home-city (Kolkata) page, where
  // "manufacturer" is the accurate and stronger claim than "supplier".
  titleOverride?: string;
  descriptionOverride?: string;
  h1Override?: string;
};

export const cities: CityInfo[] = [
  {
    slug: 'kolkata',
    name: 'Kolkata',
    region: 'West Bengal',
    leadTime: 'same-day / next-day',
    industryContext: 'Kolkata Port (SMP) and dock operations, GRSE shipbuilding, Howrah fabrication, metro and high-rise construction',
    intro:
      'Marino Corporation manufactures wire rope slings at its Kidderpore works — minutes from the Kolkata docks — and supplies wire rope, chain slings, shackles and lifting hardware across Kolkata, Howrah and the wider West Bengal industrial belt.',
    localContext:
      "Kolkata is our home ground. The works at 28 Orphangunj Road, Kidderpore sits beside the port: stevedores and ship-repair crews at Netaji Subhas and Kidderpore docks collect certified slings the same day, while GRSE and the Howrah structural-fabrication belt order G80/G100 chain slings and heavy wire rope assemblies for next-day site delivery. We also equip metro, flyover and high-rise contractors along the EM Bypass, Salt Lake and New Town corridors.",
    industryHighlights: [
      'Stevedoring and cargo gear for Kolkata Port (SMP) — Kidderpore and Netaji Subhas docks',
      'Ship repair and marine rigging on the Hooghly, including GRSE',
      'G80/G100 chain slings for Howrah fabrication shops and foundries',
      'Tower-crane and lifting gear for metro and high-rise projects',
      'Factory pickup at Kidderpore and same-day delivery across Kolkata & Howrah',
    ],
    topProducts: [
      { name: 'Wire Rope Slings (single to 4-leg)', note: 'Made at our Kidderpore works, test certified', to: '/product/wire-rope-slings/' },
      { name: '6×36 IWRC Wire Rope', note: 'Usha Martin rope, cut to length', to: '/products/' },
      { name: 'G80 / G100 Chain Slings', note: 'Fabrication and erection work', to: '/product/chain-slings/' },
      { name: 'D & Bow Shackles', note: 'Galvanised and high-tensile', to: '/product/shackles/' },
      { name: 'Mooring Ropes & Marine Gear', note: 'Port and river craft', to: '/products/' },
    ],
    landmarks: [
      'Kolkata Port (SMP) — Kidderpore Dock',
      'Netaji Subhas Dock',
      'Garden Reach Shipbuilders (GRSE)',
      'Howrah fabrication belt',
      'Taratala–Hide Road industrial area',
    ],
    titleOverride: 'Wire Rope Sling Manufacturer in Kolkata | Marino, Kidderpore',
    descriptionOverride:
      'Wire rope slings made at our Kidderpore works since 1985. Single to 4-leg, test certified, from ₹450. Same-day Kolkata & Howrah delivery. Call 98311 44669.',
    h1Override: 'Wire Rope Sling Manufacturer in Kolkata',
  },
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
  {
    slug: 'haldia',
    name: 'Haldia',
    region: 'West Bengal',
    leadTime: '1–2 business days',
    industryContext: 'Haldia Port, IOCL Haldia refinery, petrochemical complex',
    intro:
      'Marino Corporation supplies Haldia Dock Complex, the IOCL Haldia refinery, Haldia Petrochemicals and the surrounding heavy-industry belt with marine-grade wire rope, mooring ropes, anchor chain and certified rigging.',
    localContext:
      "Haldia sits at the mouth of the Hooghly and is one of our nearest-cluster customers — same-day to next-day delivery is routine. The mix of bulk-cargo handling at HDC, refinery turnaround work at IOCL and continuous petchem operations drives steady demand for marine-rated slings, lashing chain and corrosion-resistant shackles.",
    industryHighlights: [
      'Haldia Dock Complex (Kolkata Port Trust) cargo handling',
      'IOCL Haldia refinery turnarounds and maintenance',
      'Haldia Petrochemicals Limited (HPL)',
      'Exide, Tata Chemicals and Mitsubishi Chemical plants',
    ],
    topProducts: [
      { name: 'Galvanised Wire Rope Slings', note: 'Port and refinery use' },
      { name: 'Mooring Ropes', note: 'HDC berths and tug operations' },
      { name: 'Anchor Chain', note: 'Tug and barge supply' },
      { name: 'High-tensile Shackles', note: 'Refinery rigging' },
      { name: 'Container Lashing Equipment', note: 'HDC container terminal' },
    ],
    landmarks: ['Haldia Dock Complex', 'IOCL Haldia refinery', 'Haldia Petrochemicals', 'Durgachak industrial area'],
  },
  {
    slug: 'durgapur',
    name: 'Durgapur',
    region: 'West Bengal',
    leadTime: '1–2 business days',
    industryContext: 'Durgapur Steel Plant, Alloy Steels Plant, heavy engineering belt',
    intro:
      'Marino Corporation supplies SAIL Durgapur Steel Plant, ASP, MAMC and the wider Durgapur–Asansol industrial belt with chain slings, wire rope slings, lifting hooks and certified rigging.',
    localContext:
      "Durgapur's steel-making and heavy-fabrication ecosystem — DSP, the Alloy Steels Plant, MAMC, ALCO and a dense supplier base — consumes G80/G100 chain slings and heavy-section wire rope slings continuously. Proximity to Kolkata means we can ship next-day for routine items.",
    industryHighlights: [
      'SAIL Durgapur Steel Plant (DSP)',
      'Alloy Steels Plant (ASP) and ALCO',
      'MAMC and heavy-fabrication shops',
      'Durgapur–Asansol industrial corridor',
    ],
    topProducts: [
      { name: 'Heavy-duty Chain Slings (G80/G100)', note: 'Slab and coil handling' },
      { name: 'Wire Rope Slings (large diameter)', note: 'EOT crane consumables' },
      { name: 'Lifting Hooks with Latch', note: 'Steel plant overhead cranes' },
      { name: 'Wire Rope Grips & Accessories', note: 'Maintenance consumables' },
      { name: 'Turnbuckles', note: 'Structural fabrication' },
    ],
    landmarks: ['Durgapur Steel Plant', 'Alloy Steels Plant', 'MAMC Durgapur', 'Asansol industrial belt'],
  },
  {
    slug: 'paradip',
    name: 'Paradip',
    region: 'Odisha',
    leadTime: '2–3 business days',
    industryContext: 'Paradip Port, IOCL Paradip refinery, mineral and coal exports',
    intro:
      'Marino Corporation supplies Paradip Port, the IOCL Paradip refinery and the surrounding mineral-export terminals with marine-grade wire rope, mooring ropes, anchor chain and heavy rigging.',
    localContext:
      "Paradip's deep-draft berths handle iron ore, coal and crude — and IOCL's mega-refinery on the same coast pulls a continuous flow of turnaround and shutdown rigging. We ship marine-grade galvanised slings, mooring ropes and high-capacity shackles regularly to both customer types.",
    industryHighlights: [
      'Paradip Port (PPT) container, coal and ore terminals',
      'IOCL Paradip refinery and petrochemical complex',
      'Paradip Phosphates (PPL) and Essar Steel ore handling',
      'Coastal logistics and offshore project support',
    ],
    topProducts: [
      { name: 'Marine-grade Wire Rope Slings', note: 'Port and refinery rigging' },
      { name: 'Mooring Ropes', note: 'PPT berths and tug operations' },
      { name: 'Anchor Chain', note: 'Marine certified' },
      { name: 'Bow Shackles (Galvanised)', note: 'Lashing and ore-handling' },
      { name: 'Container Lashing Equipment', note: 'PPT container terminal' },
    ],
    landmarks: ['Paradip Port (PPT)', 'IOCL Paradip refinery', 'Paradip Phosphates', 'Jatadhar coast'],
  },
  {
    slug: 'bhubaneswar',
    name: 'Bhubaneswar',
    region: 'Odisha',
    leadTime: '2–3 business days',
    industryContext: 'Mining and metals ancillaries, infrastructure, Paradip support belt',
    intro:
      'Marino Corporation supplies mining ancillaries, infrastructure contractors and EPC project teams across Bhubaneswar and Cuttack, plus the supplier base feeding Paradip Port and Rourkela.',
    localContext:
      "Bhubaneswar acts as the commercial hub for Odisha's mining, metals and port belt. Customers here range from EPC contractors on highway and metro packages to traders supplying iron-ore terminals and steel plants. We stock both lifting consumables and project-spec rigging.",
    industryHighlights: [
      'Odisha mining and metals supplier base',
      'Bhubaneswar–Cuttack infrastructure projects',
      'EPC and equipment rental fleets',
      'Paradip Port and Dhamra Port supply chain',
    ],
    topProducts: [
      { name: 'Wire Rope Slings', note: 'EPC and project lifting' },
      { name: 'Chain Slings (G80)', note: 'Mining and metals plant use' },
      { name: 'Shackles (D & Bow)', note: 'Project rigging' },
      { name: 'Lifting Hooks', note: 'Crane rental fleet supply' },
      { name: 'Turnbuckles', note: 'Bridge and structural work' },
    ],
    landmarks: ['Mancheswar industrial estate', 'Khurda Road industrial belt', 'Cuttack', 'Dhamra Port corridor'],
  },
  {
    slug: 'rourkela',
    name: 'Rourkela',
    region: 'Odisha',
    leadTime: '2–3 business days',
    industryContext: 'SAIL Rourkela Steel Plant, heavy fabrication, mining belt',
    intro:
      'Marino Corporation supplies SAIL Rourkela Steel Plant, its supplier base and the surrounding heavy-fabrication shops with chain slings, wire rope slings, lifting hooks and rigging consumables.',
    localContext:
      "Rourkela Steel Plant — one of SAIL's four integrated plants — runs continuous EOT crane operations across blast furnaces, hot strip and cold rolling mills. Our G80 chain slings, large-diameter wire rope slings and certified hooks are routine consumables here.",
    industryHighlights: [
      'SAIL Rourkela Steel Plant (RSP)',
      'Heavy-fabrication and structural shops',
      'Mining-equipment supplier base',
      'Sundargarh and Keonjhar mining corridor',
    ],
    topProducts: [
      { name: 'Heavy-duty Chain Slings (G80)', note: 'Slab and coil handling' },
      { name: 'Wire Rope Slings (large diameter)', note: 'EOT crane consumables' },
      { name: 'Lifting Hooks with Latch', note: 'Steel plant overhead cranes' },
      { name: 'Wire Rope Grips', note: 'Maintenance consumables' },
      { name: 'Shackles (high-tensile)', note: 'Plant rigging' },
    ],
    landmarks: ['Rourkela Steel Plant', 'Kalunga industrial estate', 'Sundargarh mining belt', 'Keonjhar ore corridor'],
  },
  {
    slug: 'jamshedpur',
    name: 'Jamshedpur',
    region: 'Jharkhand',
    leadTime: '2–3 business days',
    industryContext: 'Tata Steel, Tata Motors, heavy engineering and Adityapur industrial belt',
    intro:
      'Marino Corporation supplies Tata Steel, Tata Motors and the Adityapur supplier base in Jamshedpur with certified chain slings, wire rope slings, lifting hooks and rigging hardware.',
    localContext:
      "Jamshedpur is one of India's densest industrial clusters — Tata Steel's integrated plant, Tata Motors' commercial-vehicle works and several hundred Adityapur tier-1/tier-2 suppliers all consume lifting consumables continuously. Traceable, certified product is non-negotiable here, which is exactly what we ship.",
    industryHighlights: [
      'Tata Steel integrated steel plant',
      'Tata Motors commercial vehicle works',
      'Adityapur industrial area (AIADA) supplier base',
      'Heavy fabrication and tier-1 supplier ecosystem',
    ],
    topProducts: [
      { name: 'Alloy Steel Chain Slings (G80/G100)', note: 'Coil and slab lifts, certified' },
      { name: 'Wire Rope Slings (with thimbles & hooks)', note: 'Tata Steel and tier-1 plants' },
      { name: 'Lifting Hooks with Safety Latch', note: 'Auto plant and EOT crane' },
      { name: 'Shackles (D & Bow)', note: 'High-tensile, traceable' },
      { name: 'Wire Rope Accessories', note: 'Plant maintenance' },
    ],
    landmarks: ['Tata Steel Works', 'Tata Motors Jamshedpur', 'Adityapur Industrial Area', 'Gamharia'],
  },
  {
    slug: 'bokaro',
    name: 'Bokaro',
    region: 'Jharkhand',
    leadTime: '2–3 business days',
    industryContext: 'SAIL Bokaro Steel Plant, heavy fabrication, coal belt',
    intro:
      'Marino Corporation supplies SAIL Bokaro Steel Plant, surrounding fabrication shops and the supplier base feeding the Damodar Valley belt with chain slings, wire rope slings and lifting hardware.',
    localContext:
      "SAIL Bokaro's integrated steel plant runs continuous EOT operations across slab caster, hot strip mill and cold rolling shops. Bokaro's industrial estate and its proximity to the Dhanbad–Asansol coal belt make it a steady draw for G80 chain slings and heavy-diameter wire rope slings.",
    industryHighlights: [
      'SAIL Bokaro Steel Plant (BSL)',
      'Bokaro industrial area suppliers',
      'Damodar Valley coal-and-steel belt',
      'Heavy-fabrication and machinery shops',
    ],
    topProducts: [
      { name: 'Chain Slings (G80)', note: 'Slab and coil handling' },
      { name: 'Wire Rope Slings (large diameter)', note: 'EOT crane consumables' },
      { name: 'Lifting Hooks with Latch', note: 'Plant overhead cranes' },
      { name: 'Shackles', note: 'High-tensile plant rigging' },
      { name: 'Wire Rope Grips', note: 'Maintenance' },
    ],
    landmarks: ['Bokaro Steel Plant', 'Bokaro industrial area', 'Chas', 'Dhanbad coal corridor'],
  },
  {
    slug: 'guwahati',
    name: 'Guwahati',
    region: 'Assam',
    leadTime: '3–4 business days',
    industryContext: 'Numaligarh refinery support, Northeast gateway, oil & gas, infrastructure',
    intro:
      'Marino Corporation supplies refinery, oil & gas and infrastructure customers across Assam and the Northeast through Guwahati — including support for Numaligarh, Digboi and Bongaigaon operations.',
    localContext:
      "Guwahati is the logistics gateway for the entire Northeast. Customers here include Numaligarh Refinery (NRL) supplier base, ONGC Assam Asset, BCPL Lepetkata and the infrastructure contractors building expressway and bridge packages across Assam and Arunachal. We support both routine plant lifting and project-spec rigging.",
    industryHighlights: [
      'Numaligarh Refinery (NRL) and BCPL Lepetkata supplier base',
      'ONGC Assam Asset and Oil India Limited operations',
      'Bridge and expressway projects across NE India',
      'Northeast logistics and rail-infrastructure work',
    ],
    topProducts: [
      { name: 'Wire Rope Slings', note: 'Refinery and EPC lifting' },
      { name: 'Chain Slings (G80)', note: 'Plant maintenance' },
      { name: 'Shackles (high-tensile)', note: 'Refinery and bridge work' },
      { name: 'Turnbuckles', note: 'Bridge tensioning' },
      { name: 'Lifting Hooks', note: 'Crane rental fleet supply' },
    ],
    landmarks: ['Guwahati industrial estate', 'Numaligarh refinery corridor', 'Bongaigaon refinery', 'Brahmaputra bridges'],
  },
  {
    slug: 'raipur',
    name: 'Raipur',
    region: 'Chhattisgarh',
    leadTime: '3–4 business days',
    industryContext: 'Sponge-iron and steel belt, mining ancillaries, Bhilai supply chain',
    intro:
      "Marino Corporation supplies Chhattisgarh's sponge-iron, secondary steel and mining-ancillary belt across Raipur, Bilaspur and Korba with chain slings, wire rope slings and certified rigging hardware.",
    localContext:
      "Raipur and Urla–Siltara host one of India's densest concentrations of sponge-iron units, induction furnaces and rolling mills. Combined with the coal-and-power belt around Korba and proximity to Bhilai Steel Plant, demand for G80 chain slings, lifting hooks and heavy shackles is steady year-round.",
    industryHighlights: [
      'Urla and Siltara industrial estates (sponge iron, rolling mills)',
      'Korba coal and power belt',
      'Bhilai Steel Plant supplier base',
      'Mining-equipment ancillaries',
    ],
    topProducts: [
      { name: 'Chain Slings (G80)', note: 'Coil, billet and slab handling' },
      { name: 'Wire Rope Slings', note: 'EOT and gantry crane use' },
      { name: 'Lifting Hooks with Latch', note: 'Steel and power plant' },
      { name: 'Shackles (high-tensile)', note: 'Plant rigging' },
      { name: 'Pulleys & Blocks', note: 'EOT consumables' },
    ],
    landmarks: ['Urla industrial estate', 'Siltara industrial estate', 'Korba power belt', 'Bilaspur'],
  },
  {
    slug: 'bhilai',
    name: 'Bhilai',
    region: 'Chhattisgarh',
    leadTime: '3–4 business days',
    industryContext: 'SAIL Bhilai Steel Plant, heavy fabrication, rail-mill supply chain',
    intro:
      'Marino Corporation supplies SAIL Bhilai Steel Plant, its tier-1 fabricators and the surrounding heavy-engineering belt with chain slings, wire rope slings, lifting hooks and certified rigging.',
    localContext:
      "Bhilai Steel Plant — SAIL's flagship rail and structural mill — runs round-the-clock EOT operations across blast furnaces, steel-melting shops and the rail-and-structural mill. The plant and its supplier ecosystem are heavy consumers of G80 chain slings and large-diameter wire rope slings.",
    industryHighlights: [
      'SAIL Bhilai Steel Plant (BSP) — rail and structural mill',
      'Heavy-fabrication and machinery suppliers',
      'Power and mining ancillary base',
      'Durg–Bhilai industrial corridor',
    ],
    topProducts: [
      { name: 'Heavy-duty Chain Slings (G80)', note: 'Slab, billet and rail handling' },
      { name: 'Wire Rope Slings (large diameter)', note: 'EOT crane consumables' },
      { name: 'Lifting Hooks', note: 'Plant overhead cranes' },
      { name: 'Shackles (high-tensile)', note: 'Plant rigging' },
      { name: 'Turnbuckles', note: 'Structural and rail fabrication' },
    ],
    landmarks: ['Bhilai Steel Plant', 'Durg industrial area', 'BSP township', 'Rajnandgaon belt'],
  },
  {
    slug: 'nagpur',
    name: 'Nagpur',
    region: 'Maharashtra',
    leadTime: '3–4 business days',
    industryContext: 'MIHAN SEZ, Butibori industrial belt, central-India logistics hub',
    intro:
      'Marino Corporation supplies MIHAN, Butibori, Hingna and the wider central-India manufacturing belt across Nagpur with wire rope, slings, shackles, hooks and certified rigging.',
    localContext:
      "Nagpur sits at the geographic centre of India and hosts MIHAN SEZ (including Boeing MRO and TAL Manufacturing) plus Butibori and Hingna industrial estates. Customers here range from aerospace tier-1 suppliers needing traceable certified lifts to bulk-warehouse operators serving central-India logistics.",
    industryHighlights: [
      'MIHAN SEZ (aerospace, MRO, defence)',
      'Butibori and Hingna industrial estates',
      'Central-India logistics and warehousing hub',
      'Power-equipment and steel ancillary base',
    ],
    topProducts: [
      { name: 'Wire Rope Slings (with thimbles & hooks)', note: 'MIHAN and tier-1 plants' },
      { name: 'Chain Slings (G80, traceable)', note: 'Aerospace and OEM use' },
      { name: 'Shackles (D & Bow)', note: 'High-tensile, certified' },
      { name: 'Lifting Hooks with Latch', note: 'EOT and gantry crane' },
      { name: 'Turnbuckles', note: 'Structural tensioning' },
    ],
    landmarks: ['MIHAN SEZ', 'Butibori MIDC', 'Hingna MIDC', 'Kamptee belt'],
  },
  {
    slug: 'indore',
    name: 'Indore',
    region: 'Madhya Pradesh',
    leadTime: '3–4 business days',
    industryContext: 'Pithampur auto belt, pharma manufacturing, central-India logistics',
    intro:
      'Marino Corporation supplies the Pithampur auto belt, pharma plants and infrastructure contractors across Indore, Dewas and Ujjain with chain slings, wire rope slings and certified lifting hardware.',
    localContext:
      "Pithampur — the 'Detroit of India' — hosts Mahindra, Volvo Eicher, Bridgestone and dozens of auto tier-1s, all of whom require certified, traceable lifting accessories. Add the pharma cluster across Dewas–Pithampur and you have steady demand for G80 chain slings and standardised wire rope sling assemblies.",
    industryHighlights: [
      'Pithampur auto belt (Mahindra, Volvo Eicher, Bridgestone)',
      'Dewas industrial area (pharma, tractor parts)',
      'Indore SEZ and warehousing hub',
      'Central-India logistics corridor',
    ],
    topProducts: [
      { name: 'Wire Rope Slings (with thimbles & hooks)', note: 'OEM plant material handling' },
      { name: 'Chain Slings (G80, traceable)', note: 'Auto plant use' },
      { name: 'Shackles (high-tensile)', note: 'Plant rigging' },
      { name: 'Lifting Hooks with Latch', note: 'EOT crane' },
      { name: 'Wire Rope Grips', note: 'Maintenance consumables' },
    ],
    landmarks: ['Pithampur industrial area', 'Dewas industrial estate', 'Indore SEZ', 'Ujjain'],
  },
  {
    slug: 'jaipur',
    name: 'Jaipur',
    region: 'Rajasthan',
    leadTime: '3–4 business days',
    industryContext: 'Mining and marble belt, Sitapura and Bhiwadi industrial estates, expressway corridor',
    intro:
      'Marino Corporation supplies the Rajasthan mining and marble belt, Sitapura and Bhiwadi industrial estates and infrastructure contractors across Jaipur with wire rope, slings, hooks and rigging hardware.',
    localContext:
      "Rajasthan's mining belt — marble at Makrana, sandstone at Kota, zinc at Hindustan Zinc — drives steady demand for heavy-duty wire rope slings and chain. Jaipur also anchors the Sitapura and Bhiwadi industrial estates serving NCR and the Delhi–Mumbai expressway corridor.",
    industryHighlights: [
      'Marble, granite and sandstone quarry belt',
      'Hindustan Zinc (Vedanta) operations',
      'Sitapura and Bhiwadi industrial estates',
      'Delhi–Mumbai expressway corridor projects',
    ],
    topProducts: [
      { name: 'Heavy-duty Wire Rope Slings', note: 'Quarry and block-lifting' },
      { name: 'Chain Slings (G80)', note: 'Plant and mining use' },
      { name: 'Lifting Hooks with Latch', note: 'EOT crane' },
      { name: 'Shackles', note: 'High-tensile rated' },
      { name: 'Turnbuckles', note: 'Expressway bridge tensioning' },
    ],
    landmarks: ['Sitapura industrial area', 'Bhiwadi industrial estate', 'Makrana marble belt', 'Kota sandstone'],
  },
  {
    slug: 'lucknow',
    name: 'Lucknow',
    region: 'Uttar Pradesh',
    leadTime: '3–4 business days',
    industryContext: 'HAL Korwa, UP defence corridor, metro and expressway projects',
    intro:
      'Marino Corporation supplies HAL Korwa, defence-corridor manufacturers and metro and expressway contractors across Lucknow and the UP capital region with wire rope, slings, chain and rigging.',
    localContext:
      "Lucknow anchors the UP Defence Industrial Corridor and hosts HAL's Korwa avionics facility. Combined with Lucknow Metro work, the Purvanchal Expressway and warehousing growth around Mohanlalganj, customers here range from defence tier-1s to crane rental fleets serving expressway segments.",
    industryHighlights: [
      'UP Defence Industrial Corridor — Lucknow node',
      'HAL Korwa avionics and defence suppliers',
      'Lucknow Metro and Purvanchal Expressway packages',
      'Warehousing and logistics hubs',
    ],
    topProducts: [
      { name: 'Wire Rope Slings', note: 'EPC and project lifting' },
      { name: 'Chain Slings (G80, certified)', note: 'Defence and plant use' },
      { name: 'Lifting Hooks with Latch', note: 'EOT crane' },
      { name: 'Turnbuckles', note: 'Bridge and expressway tensioning' },
      { name: 'Shackles', note: 'High-tensile rated' },
    ],
    landmarks: ['HAL Korwa', 'Amausi industrial area', 'Mohanlalganj logistics belt', 'Purvanchal Expressway corridor'],
  },
  {
    slug: 'kanpur',
    name: 'Kanpur',
    region: 'Uttar Pradesh',
    leadTime: '3–4 business days',
    industryContext: 'Defence (OFK, SAF), fertiliser, engineering and leather-machinery cluster',
    intro:
      "Marino Corporation supplies Kanpur's defence units, fertiliser plants and engineering fabricators with chain slings, wire rope slings, hooks and certified rigging.",
    localContext:
      "Kanpur hosts Ordnance Factory Kanpur (OFK), Small Arms Factory (SAF), IFFCO Phulpur (nearby) and a long-standing engineering and leather-machinery base. The mix of defence audit requirements and fertiliser-plant turnaround work keeps demand steady for certified, traceable lifting product.",
    industryHighlights: [
      'Ordnance Factory Kanpur (OFK) and Small Arms Factory',
      'IFFCO and affiliated fertiliser units',
      'Engineering and leather-machinery cluster',
      'Panki and Dada Nagar industrial estates',
    ],
    topProducts: [
      { name: 'Chain Slings (G80, traceable)', note: 'Defence and fertiliser plant use' },
      { name: 'Wire Rope Slings', note: 'Engineering shops' },
      { name: 'Lifting Hooks with Latch', note: 'EOT crane consumables' },
      { name: 'Shackles (high-tensile)', note: 'Plant rigging' },
      { name: 'Turnbuckles', note: 'Structural fabrication' },
    ],
    landmarks: ['Panki industrial area', 'Dada Nagar industrial estate', 'Ordnance Factory Kanpur', 'Jajmau belt'],
  },
  {
    slug: 'surat',
    name: 'Surat',
    region: 'Gujarat',
    leadTime: '4–5 business days',
    industryContext: 'Hazira industrial complex — port, L&T, AM/NS, ONGC, Reliance petchem',
    intro:
      "Marino Corporation supplies the Hazira industrial complex — L&T Hazira, AM/NS India, ONGC Hazira, Reliance — and Surat's textile-machinery base with marine-grade wire rope, chain slings and rigging hardware.",
    localContext:
      "Hazira is one of India's heaviest single-cluster industrial footprints: AM/NS India steel, L&T Hazira's pressure-vessel and shipbuilding works, ONGC Hazira gas processing and Reliance petrochemicals. The mix of marine, refinery and steel rigging needs is exactly what our product range was built for.",
    industryHighlights: [
      'Hazira port and Adani Hazira terminal',
      'L&T Hazira heavy engineering and shipyard',
      'AM/NS India (ArcelorMittal Nippon Steel) Hazira',
      'ONGC Hazira and Reliance Hazira petrochemicals',
    ],
    topProducts: [
      { name: 'Marine-grade Wire Rope Slings', note: 'Hazira port and shipyard' },
      { name: 'Heavy-duty Chain Slings (G80/G100)', note: 'Pressure-vessel and steel plant lifts' },
      { name: 'Mooring Ropes', note: 'Hazira berths' },
      { name: 'Shackles (high-tensile, marine)', note: 'Lashing and rigging' },
      { name: 'Lifting Hooks', note: 'Refinery and EOT crane' },
    ],
    landmarks: ['Hazira industrial complex', 'L&T Hazira', 'AM/NS India Hazira', 'ONGC Hazira'],
  },
  {
    slug: 'vadodara',
    name: 'Vadodara',
    region: 'Gujarat',
    leadTime: '4–5 business days',
    industryContext: 'IOCL Koyali refinery, GACL, GSFC, ONGC, petrochemical belt',
    intro:
      'Marino Corporation supplies the IOCL Koyali refinery, GACL, GSFC, ONGC and the wider Vadodara petrochemical and engineering belt with wire rope, chain slings, hooks and certified rigging.',
    localContext:
      "Vadodara — together with Dahej and Jambusar — forms one of India's largest petrochemical concentrations. IOCL Koyali, GACL, GSFC and ONGC operations drive turnaround-heavy demand for high-tensile shackles, large-diameter wire rope slings and refinery-grade rigging.",
    industryHighlights: [
      'IOCL Koyali refinery and adjacent petrochemicals',
      'GACL, GSFC and IPCL operations',
      'ONGC Vadodara assets',
      'Dahej PCPIR and Jambusar industrial estates',
    ],
    topProducts: [
      { name: 'Galvanised Wire Rope Slings', note: 'Refinery and petrochem use' },
      { name: 'Chain Slings (G80/G100)', note: 'Pressure-vessel and plant lifts' },
      { name: 'High-tensile Shackles', note: 'Refinery rigging' },
      { name: 'Lifting Hooks with Latch', note: 'EOT crane consumables' },
      { name: 'Turnbuckles', note: 'Plant structural tensioning' },
    ],
    landmarks: ['IOCL Koyali refinery', 'GACL Vadodara', 'Nandesari GIDC', 'Halol industrial estate'],
  },
  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    region: 'Tamil Nadu',
    leadTime: '4–5 business days',
    industryContext: 'Textile machinery, pump and motor industry, foundries and engineering',
    intro:
      "Marino Corporation supplies Coimbatore's textile-machinery makers, pump-industry foundries and engineering shops across the Coimbatore–Tirupur belt with wire rope, slings and certified rigging.",
    localContext:
      "Coimbatore — the 'Manchester of South India' — is anchored by textile machinery, motors and pumps (Lakshmi Machine Works, ELGI, Texmo, KSB) and a deep foundry ecosystem. Customers here need traceable slings and shackles in standardised, repeat-order quantities, which our stocked range supports.",
    industryHighlights: [
      'Textile machinery manufacturing (LMW and ecosystem)',
      'Pump and motor industry (ELGI, Texmo, KSB, Suguna)',
      'Foundries and casting cluster',
      'Tirupur knitwear logistics hub',
    ],
    topProducts: [
      { name: 'Wire Rope Slings (with thimbles & hooks)', note: 'Machinery shops and foundries' },
      { name: 'Chain Slings (G80, traceable)', note: 'Plant material handling' },
      { name: 'Shackles (D & Bow)', note: 'High-tensile rated' },
      { name: 'Lifting Hooks with Latch', note: 'EOT and gantry crane' },
      { name: 'Wire Rope Grips', note: 'Maintenance consumables' },
    ],
    landmarks: ['SIDCO industrial estate', 'Peelamedu', 'Singanallur foundry cluster', 'Tirupur'],
  },
  {
    slug: 'mangalore',
    name: 'Mangalore',
    region: 'Karnataka',
    leadTime: '4–5 business days',
    industryContext: 'New Mangalore Port, MRPL refinery, MCF, shipbuilding',
    intro:
      'Marino Corporation supplies New Mangalore Port, MRPL refinery, MCF and the local shipbuilders with marine-grade wire rope, mooring ropes, anchor chain and certified rigging.',
    localContext:
      "Mangalore combines deep-water port operations at NMPT with a major refinery at MRPL, ammonia/urea production at MCF and a cluster of medium-size shipbuilders. The marine and refinery mix here pulls a steady draw of galvanised slings, mooring ropes and high-tensile shackles.",
    industryHighlights: [
      'New Mangalore Port (NMPT) container and bulk terminals',
      'MRPL refinery (ONGC/HPCL group)',
      'Mangalore Chemicals and Fertilizers (MCF)',
      'Local shipbuilders and ship-repair yards',
    ],
    topProducts: [
      { name: 'Marine-grade Wire Rope Slings', note: 'Port and refinery rigging' },
      { name: 'Mooring Ropes', note: 'NMPT berths and tug operations' },
      { name: 'Anchor Chain', note: 'Marine certified' },
      { name: 'Galvanised Shackles', note: 'Marine corrosion-resistant' },
      { name: 'Lifting Hooks', note: 'Refinery and shipyard' },
    ],
    landmarks: ['New Mangalore Port (NMPT)', 'MRPL refinery', 'Baikampady industrial area', 'Panambur'],
  },
  {
    slug: 'mormugao',
    name: 'Mormugao',
    region: 'Goa',
    leadTime: '4–5 business days',
    industryContext: 'Mormugao Port, Goa Shipyard, iron-ore and barge logistics',
    intro:
      'Marino Corporation supplies Mormugao Port, Goa Shipyard Limited (GSL) and the iron-ore barge fleet with marine-grade wire rope, mooring ropes, anchor chain and certified rigging.',
    localContext:
      'Mormugao Port handles iron ore, coal and container traffic, and Goa Shipyard — a defence-PSU shipbuilder — runs continuous new-build and repair work. The barge logistics fleet shuttling ore down the Mandovi and Zuari rivers is a steady consumer of mooring ropes, anchor chain and marine slings.',
    industryHighlights: [
      'Mormugao Port Trust (MPT)',
      'Goa Shipyard Limited (GSL) — defence shipbuilder',
      'Iron-ore and barge logistics',
      'Coastal and offshore project support',
    ],
    topProducts: [
      { name: 'Marine-grade Wire Rope Slings', note: 'Port and shipyard rigging' },
      { name: 'Mooring Ropes', note: 'MPT berths and barge fleet' },
      { name: 'Anchor Chain', note: 'Marine certified' },
      { name: 'Galvanised Shackles', note: 'Marine corrosion-resistant' },
      { name: 'Lifting Hooks', note: 'Shipyard and EOT crane' },
    ],
    landmarks: ['Mormugao Port', 'Goa Shipyard (Vasco)', 'Verna industrial estate', 'Mandovi–Zuari barge corridor'],
  },
  {
    slug: 'tuticorin',
    name: 'Tuticorin',
    region: 'Tamil Nadu',
    leadTime: '5–6 business days',
    industryContext: 'V.O. Chidambaranar Port, container terminal, thermal power, salt and chemical belt',
    intro:
      'Marino Corporation supplies V.O. Chidambaranar Port, the Tuticorin container terminal, thermal power plants and the surrounding chemical and minerals belt with marine-grade wire rope, mooring ropes and rigging.',
    localContext:
      "Tuticorin — V.O. Chidambaranar Port — is one of south India's busiest container and bulk ports, and the surrounding belt hosts NLC thermal power, Sterlite Copper (legacy), minerals processing and a salt-and-chemicals cluster. Marine-grade rigging, mooring ropes and anchor chain are the steady-state demand here.",
    industryHighlights: [
      'V.O. Chidambaranar Port (Tuticorin Port)',
      'Tuticorin International Container Terminal',
      'Thermal power and minerals processing',
      'Coastal logistics and offshore support',
    ],
    topProducts: [
      { name: 'Marine-grade Wire Rope Slings', note: 'Port and terminal rigging' },
      { name: 'Mooring Ropes', note: 'V.O.C. Port berths' },
      { name: 'Anchor Chain', note: 'Marine certified' },
      { name: 'Galvanised Shackles', note: 'Marine corrosion-resistant' },
      { name: 'Container Lashing Equipment', note: 'Tuticorin container terminal' },
    ],
    landmarks: ['V.O. Chidambaranar Port', 'Tuticorin container terminal', 'SIPCOT industrial estate', 'Harbour Estate'],
  },
  {
    slug: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    region: 'Kerala',
    leadTime: '5–6 business days',
    industryContext: 'Vizhinjam transhipment port, VSSC defence, Kerala southern coastline',
    intro:
      'Marino Corporation supplies the Vizhinjam transhipment port, VSSC and the Kerala southern coastline with marine-grade wire rope, mooring ropes, anchor chain and certified rigging.',
    localContext:
      "Vizhinjam International Seaport — India's first deep-water transhipment terminal — is now operating south of Thiruvananthapuram, opening a new corridor for container handling at scale. Combined with VSSC (ISRO) and the coastal fisheries and shipbuilding belt, demand for marine-grade slings, mooring rope and lashing equipment is growing fast in this region.",
    industryHighlights: [
      'Vizhinjam International Transhipment Port (Adani)',
      'VSSC (Vikram Sarabhai Space Centre)',
      'Kerala coastal shipbuilding and fisheries',
      'Trivandrum Technopark and engineering belt',
    ],
    topProducts: [
      { name: 'Marine-grade Wire Rope Slings', note: 'Port and terminal rigging' },
      { name: 'Mooring Ropes', note: 'Vizhinjam berths' },
      { name: 'Container Lashing Equipment', note: 'Transhipment terminal' },
      { name: 'Anchor Chain', note: 'Marine certified' },
      { name: 'Galvanised Shackles', note: 'Marine corrosion-resistant' },
    ],
    landmarks: ['Vizhinjam International Seaport', 'VSSC Thumba', 'Kazhakkoottam', 'Kollam coastline'],
  },
];

export const getCity = (slug: string): CityInfo | undefined =>
  cities.find((c) => c.slug === slug.toLowerCase());
