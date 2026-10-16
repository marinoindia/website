// Enquiry-only product pages rendered by src/pages/EnquiryProductPage.tsx.
// No prices or load ratings are published here: availability, ratings and
// documentation are confirmed with each quotation. Product facts are from
// manufacturer literature (Crosby, MacGregor, Bloxwich, Dolezych, Harrington)
// and safety guidance (SafeWork NSW, OSHA, HSE, P&I clubs).

export interface EnquiryProduct {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  asideTitle: string;
  asideText: string;
  enquiry: string;
  typesHeading: string;
  typesIntro: string;
  types: { name: string; detail: string }[];
  table?: { heading: string; intro: string; caption: string; columns: string[]; rows: string[][]; note?: string };
  orderingDetails: [string, string][];
  careIntro: string;
  care: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: { label: string; to: string }[];
}

const outsideKolkata = {
  q: 'Do you supply outside Kolkata?',
  a: 'Send your delivery address and PIN code for supply enquiries across India, including West Bengal, Bihar, Jharkhand, Odisha and the North East. Availability, freight and dispatch timing are confirmed with your quotation.',
};

const certificates = {
  q: 'Are test certificates available?',
  a: 'Include the certificate or inspection documents you need in your enquiry. The manufacturer, specification and available documentation are confirmed with the quotation.',
};

const quantityAndDocuments: [string, string] = ['Quantity and documentation', 'Number of pieces, any required manufacturer and the test certificate or other documents you need.'];
const delivery: [string, string] = ['Delivery', 'Destination PIN code, consignee details and the date the goods are required.'];

export const enquiryProducts: EnquiryProduct[] = [
  {
    slug: 'chain-pulley-blocks',
    name: 'Chain Pulley Blocks',
    seoTitle: 'Chain Pulley Blocks – Manual Chain Hoists | Marino Kolkata',
    description: 'Enquire for hand-operated chain pulley blocks from Marino in Kolkata. Specify capacity, height of lift and hook or trolley mounting for a quote.',
    eyebrow: 'Lifting equipment · Kolkata',
    h1: 'Chain pulley blocks',
    intro: 'Enquire for hand-operated chain pulley blocks (manual chain hoists) from Marino Corporation. Share the capacity, height of lift and mounting for availability, documentation and delivery from Kolkata.',
    asideTitle: 'Capacity, lift and mounting.',
    asideText: 'These three details identify most chain blocks. Add the headroom available if space above the load is limited.',
    enquiry: 'Hello, I need a chain pulley block. Capacity (tonnes): __; height of lift (m): __; mounting (hook / push trolley / geared trolley, beam size): __; quantity: __; delivery PIN: __. Please confirm availability and documentation.',
    typesHeading: 'How chain blocks are mounted',
    typesIntro: 'A chain pulley block raises the load on a load chain as the operator pulls a hand chain. Choose the mounting that suits your lifting point.',
    types: [
      { name: 'Hook-mounted block', detail: 'The top hook hangs from a fixed lifting point such as a beam clamp, gantry or anchor point. The usual choice for maintenance and workshop lifting.' },
      { name: 'Trolley-mounted block', detail: 'The block hangs from a push or geared trolley running on the bottom flange of an I-beam, so the load can be moved along the beam.' },
      { name: 'Hand chain and load chain', detail: 'The hand chain drives the block; the load chain carries the load. State both the height of lift and the hand-chain drop you need.' },
    ],
    orderingDetails: [
      ['Capacity', 'The rated load in tonnes. Choose a block rated for at least the heaviest load to be lifted.'],
      ['Height of lift', 'The distance in metres that the hook must travel between its lowest and highest positions.'],
      ['Hand-chain drop', 'How far the hand chain should hang, if it differs from the height of lift.'],
      ['Mounting', 'Top hook, beam clamp, push trolley or geared trolley. For trolleys, give the beam size and flange width.'],
      ['Headroom', 'The space available between the beam or suspension point and the top of the load, if it is limited.'],
      ['Working conditions', 'Indoor or outdoor use, how often the block will be used, and whether a spark-resistant block is required.'],
      quantityAndDocuments,
      delivery,
    ],
    careIntro: 'Have a competent person select the block and lifting arrangement, and follow the manufacturer’s instructions for use, inspection and maintenance.',
    care: [
      { title: 'Never exceed the rated load.', text: 'Only one person should pull the hand chain; more than one operator can overload the block. If the load will not lift with normal effort, stop and check.' },
      { title: 'Keep people clear.', text: 'Never lift people with a chain block or move a load over anyone.' },
      { title: 'Lift in line.', text: 'Lift vertically, without side pulling, and load the hook in its bowl rather than on the tip or latch.' },
      { title: 'Do not use the load chain as a sling.', text: 'Attach the load to the hook with a suitable sling rather than wrapping the load chain around it.' },
      { title: 'Check before each lift.', text: 'Test the brake by taking up the load slightly, and check the hooks and chains for wear, nicks, twists or opened hooks. Remove a damaged block from service.' },
    ],
    faqs: [
      { q: 'What is the height of lift of a chain pulley block?', a: 'It is the distance the hook can travel between its lowest and highest positions. State the height of lift you need in your enquiry, because a longer lift needs more load chain and hand chain.' },
      { q: 'Can a chain block be used with a trolley?', a: 'Yes. Chain blocks can hang from a push or geared trolley running on an I-beam. Send the beam size and flange width so a matching trolley can be quoted.' },
      { q: 'Can two people pull the hand chain to lift a heavier load?', a: 'No. Only one operator should pull a hand chain. Needing extra effort is a sign that the load may be over the block’s rated capacity.' },
      certificates,
      outsideKolkata,
    ],
    related: [
      { label: 'Pulley blocks', to: '/product/pulleys-blocks/' },
      { label: 'Hooks', to: '/product/hooks/' },
      { label: 'Shackles', to: '/product/shackles/' },
      { label: 'Chain slings', to: '/product/chain-slings/' },
    ],
  },
  {
    slug: 'ratchet-belts',
    name: 'Ratchet Belts',
    seoTitle: 'Ratchet Lashing Belts & Straps | Marino Kolkata',
    description: 'Enquire for ratchet lashing belts (ratchet straps) from Marino in Kolkata. Specify width, length, lashing capacity and end fittings for a quote.',
    eyebrow: 'Cargo securing · Kolkata',
    h1: 'Ratchet lashing belts',
    intro: 'Enquire for ratchet belts to secure cargo on trucks, trailers and in containers. Share the width, length, lashing capacity and end fittings for availability and delivery from Kolkata.',
    asideTitle: 'Width, length, capacity, fittings.',
    asideText: 'Send these four details, or a photograph of the label on the belt you use now.',
    enquiry: 'Hello, I need ratchet lashing belts. Width (mm): __; length (m): __; lashing capacity (LC, daN): __; end fittings: __; quantity: __; delivery PIN: __. Please confirm availability.',
    typesHeading: 'Types and end fittings',
    typesIntro: 'A ratchet belt is tensioned with a ratchet buckle to hold cargo in place during transport. Choose the type and fittings for your vehicle’s anchor points.',
    types: [
      { name: 'Two-piece ratchet belt', detail: 'A short fixed end carrying the ratchet and a long adjustable end, each finished with an end fitting. The usual belt for tying cargo down.' },
      { name: 'One-piece ratchet belt', detail: 'A single length of webbing with a ratchet and no end fittings, used to wrap around and bundle a load.' },
      { name: 'End fittings and ratchets', detail: 'Claw hooks, J-hooks, flat hooks and rings suit different anchor points. Ratchets come with short or long handles; a longer handle tensions the belt more.' },
    ],
    table: {
      heading: 'Reading the label',
      intro: 'Every lashing belt should carry a label with its ratings. These are the markings to check when you choose or replace a belt.',
      caption: 'Markings on a ratchet lashing belt label and what they mean',
      columns: ['Marking', 'What it means'],
      rows: [
        ['LC', 'Lashing capacity, in daN: the maximum force the belt may carry in use. It is not the weight of cargo the belt can restrain.'],
        ['STF', 'Standard tension force: the tension the ratchet puts into the belt when its handle is pulled with the standard hand force.'],
        ['SHF', 'Standard hand force: the 50 daN hand force on the ratchet handle used to rate the STF.'],
        ['LGF, LGL', 'Lengths of the fixed end and the long (adjustable) end.'],
        ['Label colour', 'The webbing material: blue for polyester, green for polyamide (nylon), brown for polypropylene.'],
        ['Not for lifting', 'Lashing belts are marked as not for lifting.'],
      ],
      note: 'Source: Dolezych lashing label guide and Tata Steel technical sheet TIS-0003 on webbing straps and ratchets.',
    },
    orderingDetails: [
      ['Lashing capacity', 'The LC in daN that your load-securing arrangement requires, as marked on the label.'],
      ['Width', 'Webbing width in millimetres.'],
      ['Length', 'Overall length in metres, or the lengths of the fixed and long ends separately.'],
      ['End fittings', 'Claw hook, J-hook, flat hook, ring or one-piece without fittings.'],
      ['Ratchet', 'Short or long handle, if you have a preference.'],
      ['Use', 'The vehicle or container and the type of cargo being secured.'],
      quantityAndDocuments,
      delivery,
    ],
    careIntro: 'Plan load securing with a competent person and follow the manufacturer’s instructions for use and inspection.',
    care: [
      { title: 'Never lift with a ratchet belt.', text: 'Lashing belts restrain cargo during transport. They are not lifting slings and must never be used to lift a load.' },
      { title: 'Read the label.', text: 'Do not use a belt whose label is missing or unreadable.' },
      { title: 'Protect against edges.', text: 'Use edge protectors where the webbing passes over sharp corners or rough surfaces.' },
      { title: 'Never knot a belt.', text: 'A knot can greatly reduce the belt’s strength. Replace a belt rather than knotting it.' },
      { title: 'Inspect before use.', text: 'Remove belts with cuts, burns, damaged stitching or deformed ratchets and hooks from service.' },
    ],
    faqs: [
      { q: 'Is a ratchet belt the same as a lifting belt?', a: 'No. A ratchet or lashing belt restrains cargo during transport. A lifting belt or webbing sling is made and rated for lifting. Never use a lashing belt to lift a load.' },
      { q: 'What does LC mean on the label?', a: 'LC is the lashing capacity: the maximum force the belt may carry in use, in daN. It is not the weight of cargo the belt can restrain, so choose belts to suit your load-securing plan.' },
      { q: 'What do the label colours mean?', a: 'The label colour shows the webbing material: blue for polyester, green for polyamide (nylon) and brown for polypropylene.' },
      { q: 'Can I order a custom length?', a: 'Send the width, length, end fittings and quantity you need and we will confirm what can be supplied.' },
      outsideKolkata,
    ],
    related: [
      { label: 'Polyester lifting slings', to: '/product/polyester-slings/' },
      { label: 'Twist locks', to: '/product/twist-locks/' },
      { label: 'Fibre ropes', to: '/product/fibre-ropes/' },
      { label: 'Shackles', to: '/product/shackles/' },
    ],
  },
  {
    slug: 'fibre-ropes',
    name: 'Fibre Ropes',
    seoTitle: 'PP, Nylon, Manila & Mooring Ropes | Marino Kolkata',
    description: 'Enquire for polypropylene (PP), nylon, manila and mooring ropes from Marino in Kolkata. Compare rope types, then send diameter, length and use for a quote.',
    eyebrow: 'Ropes · Kolkata',
    h1: 'PP, nylon, manila and mooring ropes',
    intro: 'Enquire for polypropylene, nylon and manila ropes and mooring ropes from Marino Corporation. Share the material, diameter, length and use for availability and delivery from Kolkata.',
    asideTitle: 'Material, diameter, length.',
    asideText: 'Add the construction and what the rope will be used for, especially for mooring and towing.',
    enquiry: 'Hello, I need rope. Material (PP / nylon / manila / other): __; diameter (mm): __; construction: __; length or number of coils: __; use: __; quantity: __; delivery PIN: __. Please confirm availability.',
    typesHeading: 'Rope types',
    typesIntro: 'Each fibre behaves differently in water, in sunlight and under shock loads. Choose the rope for the job rather than by diameter alone.',
    types: [
      { name: 'Polypropylene (PP) rope', detail: 'A light synthetic rope that floats and resists rot. Sunlight degrades it, and it is not recommended where the rope is highly stressed.' },
      { name: 'Nylon rope', detail: 'A strong synthetic rope that stretches the most of the common fibres, which helps it absorb shock loads in mooring, towing and anchoring.' },
      { name: 'Manila rope', detail: 'A natural fibre rope with a good strength for its size and high resistance to salt water. It shrinks in length and swells when wet.' },
      { name: 'Mooring ropes', detail: 'Larger ropes for securing vessels at berth, made from fibres such as nylon, polyester or polypropylene. Specify the breaking load the vessel requires.' },
    ],
    table: {
      heading: 'Compare PP, nylon and manila rope',
      intro: 'Key differences to weigh when choosing a fibre rope.',
      caption: 'Comparison of polypropylene, nylon and manila rope properties',
      columns: ['Rope', 'In water', 'Key properties', 'Avoid using for'],
      rows: [
        ['Polypropylene (PP)', 'Floats', 'Light; resists rot; degraded by sunlight (UV)', 'Highly stressed lines'],
        ['Nylon', 'Sinks; can lose up to 20% of its strength when wet', 'Strong; stretches the most, so absorbs shock loads; resists rot', '—'],
        ['Manila', 'Shrinks in length and swells when wet', 'Natural fibre; good strength for its size; highly resistant to salt water', 'Lifting'],
      ],
      note: 'Source: SafeWork NSW rigging guide on fibre rope; West of England P&I on rope stretch. Published rope strengths refer to dry, unspliced rope.',
    },
    orderingDetails: [
      ['Material', 'Polypropylene, nylon, manila or another fibre.'],
      ['Diameter', 'Nominal diameter in millimetres.'],
      ['Construction', '3-strand, 8-strand plaited or 12-strand braided, if specified.'],
      ['Length', 'Coil length, or the number and length of cut pieces.'],
      ['Strength', 'The minimum breaking load required, especially for mooring and towing lines.'],
      ['Terminations', 'Eye splices or thimbles, if required.'],
      ['Use', 'Mooring, towing, anchoring, fishing or general use. For PP in sunlight, ask for a UV-stabilised grade.'],
      quantityAndDocuments,
      delivery,
    ],
    careIntro: 'Choose a rope suited to the load and conditions, and follow the manufacturer’s guidance for use, storage and retirement.',
    care: [
      { title: 'Respect snap-back.', text: 'A tensioned synthetic rope can recoil violently if it breaks, often with little warning. Treat the whole mooring deck as a potential snap-back zone and keep people clear of lines under load.' },
      { title: 'Allow for shock and wet strength.', text: 'Working loads do not allow for shock loading, and nylon can lose up to 20% of its strength when wet.' },
      { title: 'Protect from sunlight.', text: 'Polypropylene in particular is degraded by sunlight. Store ropes out of direct sun when not in use.' },
      { title: 'Do not lift with manila.', text: 'Natural fibre ropes such as manila are not to be used for lifting.' },
      { title: 'Inspect before use.', text: 'Retire ropes with cuts, heavy abrasion, chemical or heat damage, or stiff and powdery strands.' },
    ],
    faqs: [
      { q: 'Which rope floats in water?', a: 'Polypropylene rope floats; nylon rope sinks. Choose PP for lines that should stay on the surface.' },
      { q: 'Which rope is best for mooring?', a: 'It depends on the vessel, the berth and the breaking load required. Nylon stretches the most, which helps absorb shock loads; other fibres stretch less. Send the vessel’s requirements with your enquiry.' },
      { q: 'Can manila rope be used for lifting?', a: 'No. Natural fibre ropes such as manila are not to be used for lifting. Use a rated lifting sling instead.' },
      { q: 'Do you supply cut lengths?', a: 'Send the material, diameter and the number and length of pieces you need, and we will confirm what can be supplied.' },
      outsideKolkata,
    ],
    related: [
      { label: 'Stainless steel wire rope', to: '/product/stainless-steel-wire-rope/' },
      { label: 'Thimbles', to: '/product/thimbles/' },
      { label: 'Shackles', to: '/product/shackles/' },
      { label: 'Swivels', to: '/product/swivels/' },
    ],
  },
  {
    slug: 'twist-locks',
    name: 'Twist Locks',
    seoTitle: 'Container Twist Locks (Gotka) & Bridge Fittings | Marino',
    description: 'Enquire for container twist locks (gotka), midlocks and bridge fittings from Marino in Kolkata. Specify type, locking hand and certificate for a quote.',
    eyebrow: 'Container lashing · Kolkata',
    h1: 'Container twist locks (gotka)',
    intro: 'Enquire for twist locks and container securing fittings from Marino Corporation. Share the type, locking hand and certification you need for availability and delivery from Kolkata.',
    asideTitle: 'Type, locking hand, certificate.',
    asideText: 'A photograph of the fitting you use now, or the part number from your cargo securing manual, helps identify it.',
    enquiry: 'Hello, I need container twist locks (gotka). Type (manual / semi-automatic / fully automatic / midlock / bridge fitting): __; locking hand (left / right): __; application: __; certificate required: __; quantity: __; delivery PIN: __. Please confirm availability.',
    typesHeading: 'Types of twist lock',
    typesIntro: 'Twist locks engage the corner castings of freight containers to lock containers to each other, to the deck or to a trailer.',
    types: [
      { name: 'Manual twist locks', detail: 'Locked and released by hand. Commonly used as bottom locks in deck and hatch-cover sockets.' },
      { name: 'Semi-automatic twist locks (SATL)', detail: 'Lock automatically when a container is landed, and are released by pulling a release wire before the container is lifted.' },
      { name: 'Fully automatic twist locks', detail: 'Lock and release without manual operation on board. Check compatibility with the vessel’s securing system.' },
      { name: 'Midlocks', detail: 'Used in the gap between 20 ft containers, always together with semi-automatic or manual twist locks.' },
      { name: 'Dovetail and trailer twist locks', detail: 'Dovetail twist locks slide into matching deck foundations; retractable weld-on twist locks are fitted to trailers and chassis.' },
      { name: 'Bridge fittings', detail: 'Connect the top corner castings of adjacent container stacks to tie the stacks together.' },
    ],
    orderingDetails: [
      ['Type', 'Manual, semi-automatic or fully automatic twist lock, midlock, dovetail, trailer twist lock or bridge fitting.'],
      ['Locking hand', 'Left- or right-hand locking, matched to the twist locks already in use on the vessel.'],
      ['Foundation or socket', 'The deck socket, foundation or dovetail type the fitting must engage.'],
      ['Matching existing fittings', 'The make and part number of fittings already in use, or a photograph.'],
      ['Strength and certification', 'Required breaking loads and the classification society certificate needed.'],
      quantityAndDocuments,
      delivery,
    ],
    careIntro: 'Use securing fittings as set out in the vessel’s cargo securing manual and the manufacturer’s instructions.',
    care: [
      { title: 'Do not mix locking hands.', text: 'Use twist locks of one locking hand to match the vessel’s stock. Mixing left- and right-hand locks can leave a corner locked when the container is lifted.' },
      { title: 'Check before lifting.', text: 'Confirm that every twist lock is fully released before a container is lifted, and fully locked before transport.' },
      { title: 'Set aside defective locks.', text: 'Keep damaged or inoperable semi-automatic twist locks apart, in clearly marked boxes, until they are repaired. Do not reuse them.' },
      { title: 'Install correctly.', text: 'Fit semi-automatic twist locks the right way up, with the release wires pointing towards the container ends.' },
    ],
    faqs: [
      { q: 'What is a gotka?', a: 'Gotka is a local name for a container twist lock, the fitting that locks into a container’s corner casting.' },
      { q: 'What is the difference between manual and semi-automatic twist locks?', a: 'A manual twist lock is locked and released by hand. A semi-automatic twist lock locks by itself when the container is landed and is released by pulling its release wire before the container is lifted.' },
      { q: 'Can you supply certified twist locks?', a: 'State the classification society certificate or approval you need in your enquiry. The manufacturer and available documentation are confirmed with the quotation.' },
      outsideKolkata,
    ],
    related: [
      { label: 'Ratchet belts', to: '/product/ratchet-belts/' },
      { label: 'Turnbuckles', to: '/product/turnbuckles/' },
      { label: 'Industrial chains', to: '/product/industrial-chains/' },
      { label: 'Shackles', to: '/product/shackles/' },
    ],
  },
  {
    slug: 'master-links-rings',
    name: 'Master Links & Rings',
    seoTitle: 'Master Links & Lifting Rings – Grade 80 | Marino Kolkata',
    description: 'Enquire for Grade 80 master links, master link assemblies and lifting rings from Marino in Kolkata. Specify the WLL, number of legs and crane hook for a quote.',
    eyebrow: 'Lifting components · Kolkata',
    h1: 'Master links and lifting rings',
    intro: 'Enquire for Grade 80 master links, master link assemblies and rings from Marino Corporation. Share the working load limit, number of legs and crane hook for availability, documentation and delivery from Kolkata.',
    asideTitle: 'WLL, legs and hook size.',
    asideText: 'The master link must match the sling’s rating and fit the crane hook it hangs on.',
    enquiry: 'Hello, I need master links / rings. Type: __; grade: __; working load limit: __; number of sling legs: __; chain size or rope diameter: __; crane hook: __; quantity: __; delivery PIN: __. Please confirm availability and documentation.',
    typesHeading: 'Types',
    typesIntro: 'A master link is the top link of a sling assembly. It connects the sling legs to the crane hook.',
    types: [
      { name: 'Oval master link', detail: 'A single oval link at the top of a sling, sized to sit in the crane hook and carry the legs below.' },
      { name: 'Master link assembly', detail: 'A master link with intermediate links below it, used mainly for three- and four-leg slings so that the legs hang from their own links.' },
      { name: 'Round rings', detail: 'Circular rings used as lifting and connecting rings. Specify the rating and inside diameter.' },
    ],
    orderingDetails: [
      ['Type', 'Oval master link, master link assembly or round ring.'],
      ['Grade and rating', 'Grade 80 or the grade on your specification, and the working load limit required.'],
      ['Sling arrangement', 'Chain or wire rope sling, number of legs, and the chain size or rope diameter to be attached.'],
      ['Hook fit', 'The crane hook the link must sit in, or the inside dimensions required.'],
      quantityAndDocuments,
      delivery,
    ],
    careIntro: 'Have a competent person select components that match the sling’s rating and arrangement, and follow the manufacturer’s instructions.',
    care: [
      { title: 'Match grade and rating.', text: 'Use Grade 80 components with Grade 80 chain. An assembly is only as strong as its lowest-rated component.' },
      { title: 'Take the rating from the certificate.', text: 'Design factors differ between manufacturers, so use the working load limit marked on the link and its certificate rather than the grade alone.' },
      { title: 'Seat it correctly.', text: 'The link should sit freely in the bowl of the crane hook, not on the hook tip.' },
      { title: 'Inspect before use.', text: 'Remove links with wear, cracks, deformation or unreadable markings from service.' },
    ],
    faqs: [
      { q: 'What is a master link?', a: 'It is the top link of a chain or wire rope sling assembly. The sling legs hang from it and it sits in the crane hook.' },
      { q: 'When do I need a master link assembly?', a: 'Three- and four-leg slings normally use a master link assembly, which has intermediate links below the master link to carry the legs.' },
      { q: 'What does Grade 80 mean?', a: 'Grade 80 describes the strength level of the steel used for lifting chain and components. Use the working load limit marked on each component, because different manufacturers apply different design factors.' },
      certificates,
      outsideKolkata,
    ],
    related: [
      { label: 'Chain slings', to: '/product/chain-slings/' },
      { label: 'Wire rope slings', to: '/product/wire-rope-slings/' },
      { label: 'Hooks', to: '/product/hooks/' },
      { label: 'Swivels', to: '/product/swivels/' },
    ],
  },
  {
    slug: 'swivels',
    name: 'Swivels',
    seoTitle: 'Lifting Swivels & Chain Swivels | Marino Kolkata',
    description: 'Enquire for lifting swivels, chain swivels and swivel assemblies from Marino in Kolkata. Specify the WLL, end types and whether it must turn under load.',
    eyebrow: 'Lifting & rigging components · Kolkata',
    h1: 'Swivels and swivel assemblies',
    intro: 'Enquire for lifting swivels, chain swivels and swivel assemblies from Marino Corporation. Share the working load limit, end types and use for availability, documentation and delivery from Kolkata.',
    asideTitle: 'Rating, ends and rotation.',
    asideText: 'Say whether the swivel has to turn while carrying the load or only to position the load.',
    enquiry: 'Hello, I need swivels. End fittings (eye / jaw / hook): __; working load limit: __; must it turn under load? __; use (lifting / chain / wire rope): __; quantity: __; delivery PIN: __. Please confirm availability.',
    typesHeading: 'Types',
    typesIntro: 'A swivel lets the parts on either side of it turn independently, which prevents twisting of the rope or chain.',
    types: [
      { name: 'Positioning swivels', detail: 'Forged swivels, such as eye-and-eye types, that let the load be turned into position. They are not intended to rotate under load.' },
      { name: 'Bearing swivels', detail: 'Built with a thrust bearing so they can rotate under load. Choose this type when the load must turn during the lift.' },
      { name: 'Jaw and eye swivels', detail: 'A jaw (clevis) end closed by a pin at one end and an eye at the other, to suit the hardware being connected.' },
      { name: 'Swivel hooks', detail: 'Hooks with a swivel at the eye. Bearing swivel hooks are designed to rotate freely under load.' },
    ],
    orderingDetails: [
      ['Type and ends', 'Eye, jaw or hook at each end, and the pin or jaw size to suit the mating hardware.'],
      ['Rating', 'The working load limit required.'],
      ['Rotation', 'Whether the swivel must rotate under load or is only for positioning.'],
      ['Use', 'Lifting, chain or wire rope applications, and the rope diameter and type if it will be used on a rope.'],
      ['Finish', 'Self-colour or galvanised, if specified.'],
      quantityAndDocuments,
      delivery,
    ],
    careIntro: 'Select the swivel for the load and the way it will be used, and follow the manufacturer’s instructions.',
    care: [
      { title: 'Use a bearing swivel to rotate a load.', text: 'Positioning swivels are not intended to rotate under load; only a swivel designed for rotation under load should turn while lifting.' },
      { title: 'Match the rope.', text: 'Check that the wire rope is suitable for use with a swivel before fitting one to a rope.' },
      { title: 'Load it in line.', text: 'Load the swivel along its axis and avoid side loading.' },
      { title: 'Inspect before use.', text: 'Check for wear, deformation, cracks and free rotation, and remove damaged swivels from service.' },
    ],
    faqs: [
      { q: 'Can every swivel turn under load?', a: 'No. Positioning swivels are not intended to rotate under load. Use a bearing swivel when the load must turn during the lift.' },
      { q: 'What is the difference between an eye and a jaw end?', a: 'An eye is a closed loop that connects with a shackle or link. A jaw is an open clevis closed by a pin, which connects directly to an eye or link.' },
      certificates,
      outsideKolkata,
    ],
    related: [
      { label: 'Master links & rings', to: '/product/master-links-rings/' },
      { label: 'Hooks', to: '/product/hooks/' },
      { label: 'Shackles', to: '/product/shackles/' },
      { label: 'Industrial chains', to: '/product/industrial-chains/' },
    ],
  },
];
