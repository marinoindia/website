// Full product/item catalogue for Marino Corporation of India.
// Sourced from item_priceList/marino_corporation_item_list.md (40 items).
// `keywords` hold synonyms / alternate spellings so the on-site search box
// matches loose queries (e.g. "gotka" -> Twist Lock, "bulldog" -> Rope Clamps).
// `productPath` links to an existing product detail page where one exists.

export interface CatalogItem {
  name: string;
  keywords: string[];
  productPath?: string;
}

export const catalogItems: CatalogItem[] = [
  { name: 'Steel Wire Rope', keywords: ['wire rope', 'steel rope', 'gwrc', 'usha martin', '6x36', '6x19', 'iwrc'] },
  { name: 'Steel Wire Rope Slings (H/S)', keywords: ['wire rope sling', 'hand spliced', 'cmafs', 'lifting sling', 'rope sling'], productPath: '/product/wire-rope-slings' },
  { name: 'Chain (Short Link / Long Link / Stud Links)', keywords: ['short link chain', 'long link chain', 'stud link chain', 'lifting chain', 'industrial chain'], productPath: '/product/industrial-chains' },
  { name: 'Chain Slings (1 to 6 Legged)', keywords: ['chain sling', 'single leg', 'double leg', 'four leg', 'multi leg', 'g80 chain sling'], productPath: '/product/industrial-chains' },
  { name: 'Shackles (Dee / Bow)', keywords: ['shackle', 'dee shackle', 'd shackle', 'bow shackle', 'anchor shackle'], productPath: '/product/shackles' },
  { name: 'Hooks (Eye Hook / Container Hook)', keywords: ['hook', 'eye hook', 'container hook', 'lifting hook', 'clevis hook'], productPath: '/product/hooks' },
  { name: 'Rope Clamps (Bull Dog Grips) M.S / Forged Steel', keywords: ['rope clamp', 'bulldog grip', 'bull dog grip', 'wire rope clip', 'wire grip', 'forged grip'], productPath: '/product/wire-rope-accessories' },
  { name: 'Ring (Round / Oval) Gr-80', keywords: ['ring', 'round ring', 'oval ring', 'master link', 'g80 ring', 'lifting ring'] },
  { name: 'Thimbles (Ordinary / Solid)', keywords: ['thimble', 'solid thimble', 'wire rope thimble', 'heavy duty thimble'], productPath: '/product/thimbles' },
  { name: 'Kunda (Shaktiman) Double Pin type', keywords: ['kunda', 'shaktiman', 'double pin', 'lashing kunda'] },
  { name: 'Kenter Chain Joining Shackles (Pet Links)', keywords: ['kenter shackle', 'pet link', 'chain joining shackle', 'anchor chain joining'] },
  { name: 'Anchor Shackle', keywords: ['anchor shackle', 'marine shackle', 'bow anchor shackle'], productPath: '/product/shackles' },
  { name: 'Swivel Adapter / Swivel Assembly', keywords: ['swivel adapter', 'swivel assembly', 'lifting swivel'] },
  { name: 'Swivel', keywords: ['swivel', 'chain swivel', 'rope swivel'] },
  { name: 'Anchor (Stockless) Flower type / Fine sticks', keywords: ['anchor', 'stockless anchor', 'ship anchor', 'flower anchor', 'marine anchor'] },
  { name: 'Safety Plitts', keywords: ['safety plitts', 'safety net', 'safety split'] },
  { name: "D' Shackles (Nut & Bolt type)", keywords: ['d shackle', 'dee shackle', 'nut and bolt shackle', 'bolt type shackle'], productPath: '/product/shackles' },
  { name: 'Rachet Belt', keywords: ['ratchet belt', 'rachet belt', 'ratchet strap', 'lashing belt', 'tie down'] },
  { name: 'Lifting Belt / Webbing Slings', keywords: ['lifting belt', 'webbing sling', 'web sling', 'flat sling', 'polyester sling'] },
  { name: 'Pulley Block (for Wire Rope)', keywords: ['pulley block', 'wire rope pulley', 'snatch block', 'sheave block'], productPath: '/product/pulleys-blocks' },
  { name: 'Chain Pulley Blocks', keywords: ['chain pulley block', 'chain block', 'chain hoist', 'manual hoist'], productPath: '/product/pulleys-blocks' },
  { name: 'Turn Buckles', keywords: ['turnbuckle', 'turn buckle', 'rigging screw', 'eye jaw turnbuckle'], productPath: '/product/turnbuckles' },
  { name: 'Bottle Screws', keywords: ['bottle screw', 'rigging screw', 'tensioner'] },
  { name: 'Coil Net / Braided Slings', keywords: ['coil net', 'braided sling', 'coil lifting net', 'cargo net'] },
  { name: 'Batch', keywords: ['batch'] },
  { name: 'P.P. Rope', keywords: ['pp rope', 'polypropylene rope', 'plastic rope'] },
  { name: 'Manila Rope', keywords: ['manila rope', 'natural fibre rope', 'hemp rope'] },
  { name: 'Nylon Rope', keywords: ['nylon rope', 'synthetic rope', 'polyamide rope'] },
  { name: 'Asbestos Rope', keywords: ['asbestos rope', 'heat resistant rope', 'gland rope'] },
  { name: 'TANA for Crane', keywords: ['tana', 'crane tana', 'crane rope'] },
  { name: 'Mooring Rope', keywords: ['mooring rope', 'ship rope', 'marine rope', 'dock line'] },
  { name: 'Twist Lock (Gotka)', keywords: ['twist lock', 'gotka', 'container twist lock', 'container lock'] },
  { name: 'Bridge Fittings', keywords: ['bridge fitting', 'container bridge fitting', 'lashing bridge'] },
  { name: 'Binder for Lashing Chain', keywords: ['binder', 'lashing chain binder', 'load binder', 'chain tensioner'] },
  { name: 'Jack (Manual / Hydraulic)', keywords: ['jack', 'hydraulic jack', 'manual jack', 'bottle jack'] },
  { name: 'Chain Joining Clift', keywords: ['chain joining clift', 'chain connector', 'connecting link'] },
  { name: 'Life Buoys', keywords: ['life buoy', 'lifebuoy', 'ring buoy', 'marine safety'] },
  { name: 'Life Jacket', keywords: ['life jacket', 'lifejacket', 'pfd', 'buoyancy aid', 'marine safety'] },
  { name: 'Pulling & Lifting Machine', keywords: ['pulling machine', 'lifting machine', 'tirfor', 'wire rope winch', 'come along'] },
  { name: 'Monkey Plate', keywords: ['monkey plate', 'lashing plate', 'd ring plate'] },
];
