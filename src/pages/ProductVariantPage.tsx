import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Download, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Product Variants Database
const variantDatabase: Record<string, {
  name: string;
  title: string;
  description: string;
  fullDescription: string;
  parentProduct: string;
  parentLink: string;
  config: string;
  features: string[];
  specifications: Record<string, string>;
  wllTable: { size: string; wll: string }[];
  applications: string[];
  image: string;
  faqs: { q: string; a: string }[];
  relatedVariants: { id: string; name: string; config: string }[];
}> = {
  // Wire Rope Sling Variants
  'single-leg-wire-rope-sling': {
    name: 'Single Leg Wire Rope Sling',
    title: 'Single Leg Wire Rope Sling | Eye & Eye | Usha Martin Wire | India',
    description: 'Buy single leg wire rope slings with eye & eye configuration. Usha Martin wire rope, mechanical splicing. Working load 0.5T to 12T. All India delivery from Kolkata.',
    fullDescription: 'Single leg wire rope slings are the most basic and widely used configuration for vertical lifting applications. Each sling consists of a single length of wire rope with eye fittings at both ends. Our single leg slings are manufactured using genuine Usha Martin wire rope with mechanical hand-made splicing for maximum strength and durability.',
    parentProduct: 'Wire Rope Slings',
    parentLink: '/product/wire-rope-slings',
    config: 'Single Leg (Eye & Eye)',
    features: [
      'Single vertical lifting configuration',
      'Eye fittings at both ends',
      'Usha Martin specialized wire rope',
      'Mechanical hand-made splicing',
      'Test certified with certificates',
      'Available in galvanized or ungalvanized',
      'Custom lengths available',
      'IS 2266 compliant'
    ],
    specifications: {
      'Configuration': 'Single Leg - Eye & Eye',
      'Rope Diameter': '6mm to 32mm',
      'Working Load Limit': '0.5T to 12T',
      'Safety Factor': '5:1',
      'Construction': '6x19, 6x36, 8x19',
      'Core': 'Fiber Core (FC) / IWRC',
      'End Fittings': 'Thimble, Plain Eye',
      'Standard': 'IS 2266, BS EN 13414-1'
    },
    wllTable: [
      { size: '6mm', wll: '0.5T' },
      { size: '8mm', wll: '0.9T' },
      { size: '10mm', wll: '1.4T' },
      { size: '12mm', wll: '2.0T' },
      { size: '14mm', wll: '2.7T' },
      { size: '16mm', wll: '3.5T' },
      { size: '18mm', wll: '4.4T' },
      { size: '20mm', wll: '5.4T' },
      { size: '22mm', wll: '6.5T' },
      { size: '24mm', wll: '7.7T' },
      { size: '26mm', wll: '9.0T' },
      { size: '28mm', wll: '10.4T' },
      { size: '32mm', wll: '13.5T' }
    ],
    applications: [
      'Vertical lifting operations',
      'Crane hook attachment',
      'Single point lifting',
      'Overhead lifting',
      'General material handling',
      'Maintenance operations',
      'Construction sites',
      'Manufacturing plants'
    ],
    image: '/images/premade_slings_hero.png',
    faqs: [
      {
        q: 'What is the WLL of a single leg wire rope sling at 45° angle?',
        a: 'At 45° angle, the WLL reduces to approximately 70% of the vertical WLL. Always refer to the angle factor chart for accurate capacity calculations.'
      },
      {
        q: 'Can single leg slings be used for choker hitch?',
        a: 'Yes, single leg slings can be used in choker hitch configuration, but the WLL reduces to approximately 80% of the vertical capacity.'
      }
    ],
    relatedVariants: [
      { id: '2-leg-wire-rope-sling', name: '2-Leg Wire Rope Sling', config: 'Basket Configuration' },
      { id: '3-leg-wire-rope-sling', name: '3-Leg Wire Rope Sling', config: 'Three Point Lift' },
      { id: '4-leg-wire-rope-sling', name: '4-Leg Wire Rope Sling', config: 'Four Point Lift' }
    ]
  },

  '2-leg-wire-rope-sling': {
    name: '2-Leg (Two Leg) Wire Rope Sling',
    title: '2-Leg Wire Rope Sling | Bridle Sling | Basket Hitch | India Supplier',
    description: 'Buy 2-leg wire rope slings for stable lifting. Bridle configuration for balanced loads. Usha Martin wire, mechanical splicing. 0.5T to 25T capacity. All India delivery.',
    fullDescription: 'Two leg (2-leg) wire rope slings, also known as bridle slings, provide stable lifting for loads that require two attachment points. The legs can be spread at various angles to accommodate different load geometries. Ideal for basket hitch applications and loads that need balanced lifting.',
    parentProduct: 'Wire Rope Slings',
    parentLink: '/product/wire-rope-slings',
    config: '2-Leg (Bridle/Basket)',
    features: [
      'Two leg bridle configuration',
      'Master link at top',
      'Hooks or eyes at leg ends',
      'Adjustable or fixed leg lengths',
      'Usha Martin wire rope',
      'Mechanical splicing (not pressed)',
      'Bearing points labeled',
      'Test certified'
    ],
    specifications: {
      'Configuration': '2-Leg Bridle',
      'Rope Diameter': '6mm to 32mm per leg',
      'Working Load Limit': '1.0T to 25T',
      'Leg Angle': '45° to 60° typical',
      'Construction': '6x19, 6x36',
      'Core': 'FC / IWRC',
      'Top Fitting': 'Master Link',
      'Bottom Fittings': 'Hook, Eye, or Shackle'
    },
    wllTable: [
      { size: '6mm x 2', wll: '1.0T' },
      { size: '8mm x 2', wll: '1.8T' },
      { size: '10mm x 2', wll: '2.8T' },
      { size: '12mm x 2', wll: '4.0T' },
      { size: '14mm x 2', wll: '5.4T' },
      { size: '16mm x 2', wll: '7.0T' },
      { size: '18mm x 2', wll: '8.8T' },
      { size: '20mm x 2', wll: '10.8T' },
      { size: '22mm x 2', wll: '13.0T' },
      { size: '24mm x 2', wll: '15.4T' },
      { size: '26mm x 2', wll: '18.0T' },
      { size: '28mm x 2', wll: '20.8T' },
      { size: '32mm x 2', wll: '27.0T' }
    ],
    applications: [
      'Basket hitch lifting',
      'Balanced two-point lifts',
      'Load stabilization',
      'Wide load handling',
      'Pre-cast concrete lifting',
      'Machinery installation',
      'Container handling',
      'Steel structure erection'
    ],
    image: '/images/premade_slings_hero.png',
    faqs: [
      {
        q: 'What is the maximum spread angle for 2-leg slings?',
        a: 'Maximum recommended spread angle is 120° (60° from vertical). Beyond this angle, the tension in each leg increases significantly and may exceed the rated capacity.'
      },
      {
        q: 'Can I use different length legs in a 2-leg sling?',
        a: 'Yes, unequal leg slings can be manufactured for loads with uneven attachment points. Specify the required leg lengths when ordering.'
      }
    ],
    relatedVariants: [
      { id: 'single-leg-wire-rope-sling', name: 'Single Leg Wire Rope Sling', config: 'Vertical Lift' },
      { id: '3-leg-wire-rope-sling', name: '3-Leg Wire Rope Sling', config: 'Three Point Lift' },
      { id: '4-leg-wire-rope-sling', name: '4-Leg Wire Rope Sling', config: 'Four Point Lift' }
    ]
  },

  '3-leg-wire-rope-sling': {
    name: '3-Leg (Three Leg) Wire Rope Sling',
    title: '3-Leg Wire Rpe Sling | Three Point Lift | Uneven Load Distribution | India',
    description: 'Buy 3-leg wire rope slings for three-point lifting. Ideal for uneven loads and triangular lifting patterns. Usha Martin wire. 1.5T to 35T capacity. All India delivery.',
    fullDescription: 'Three leg (3-leg) wire rope slings are designed for lifting loads with three attachment points or for providing extra stability in critical lifts. The three-leg configuration naturally distributes load to the two legs under tension, making them ideal for applications where the load center of gravity may shift.',
    parentProduct: 'Wire Rope Slings',
    parentLink: '/product/wire-rope-slings',
    config: '3-Leg (Triangular)',
    features: [
      'Three leg configuration',
      'Automatically distributes to two legs',
      'Master link assembly at top',
      'Suitable for uneven loads',
      'Usha Martin wire rope',
      'Mechanical hand-made splicing',
      'Individual leg tagging',
      'Test certified'
    ],
    specifications: {
      'Configuration': '3-Leg Assembly',
      'Rope Diameter': '6mm to 32mm per leg',
      'Working Load Limit': '1.5T to 35T',
      'Spread Angle': '45° to 60° per leg',
      'Construction': '6x19, 6x36',
      'Core': 'FC / IWRC',
      'Master Link': 'Oblong or Pear Shape',
      'Bottom Fittings': 'Hook, Eye, Shackle'
    },
    wllTable: [
      { size: '6mm x 3', wll: '1.5T' },
      { size: '8mm x 3', wll: '2.7T' },
      { size: '10mm x 3', wll: '4.2T' },
      { size: '12mm x 3', wll: '6.0T' },
      { size: '14mm x 3', wll: '8.1T' },
      { size: '16mm x 3', wll: '10.5T' },
      { size: '18mm x 3', wll: '13.2T' },
      { size: '20mm x 3', wll: '16.2T' },
      { size: '22mm x 3', wll: '19.5T' },
      { size: '24mm x 3', wll: '23.1T' },
      { size: '26mm x 3', wll: '27.0T' },
      { size: '28mm x 3', wll: '31.2T' },
      { size: '32mm x 3', wll: '40.5T' }
    ],
    applications: [
      'Three-point lifting',
      'Uneven load distribution',
      'Triangular load patterns',
      'Irregular shaped objects',
      'Critical lifts',
      'Pre-cast elements',
      'Transformer lifting',
      'Heavy machinery'
    ],
    image: '/images/premade_slings_hero.png',
    faqs: [
      {
        q: 'Why choose 3-leg slings over 4-leg?',
        a: '3-leg slings automatically distribute the load to two legs when one leg is slack, preventing overloading. 4-leg slings can have uneven loading if not properly balanced.'
      }
    ],
    relatedVariants: [
      { id: 'single-leg-wire-rope-sling', name: 'Single Leg Wire Rope Sling', config: 'Vertical Lift' },
      { id: '2-leg-wire-rope-sling', name: '2-Leg Wire Rope Sling', config: 'Bridle' },
      { id: '4-leg-wire-rope-sling', name: '4-Leg Wire Rope Sling', config: 'Four Point Lift' }
    ]
  },

  '4-leg-wire-rope-sling': {
    name: '4-Leg (Four Leg) Wire Rope Sling',
    title: '4-Leg Wire Rope Sling | Four Point Lift | Maximum Stability | India',
    description: 'Buy 4-leg wire rope slings for maximum lifting stability. Four point attachment for heavy loads. Usha Martin wire. 2T to 50T capacity. All India delivery from Kolkata.',
    fullDescription: 'Four leg (4-leg) wire rope slings provide maximum stability for lifting heavy and bulky loads. The four-point attachment system ensures even weight distribution and prevents load rotation during lifting. Ideal for large containers, machinery, and construction elements.',
    parentProduct: 'Wire Rope Slings',
    parentLink: '/product/wire-rope-slings',
    config: '4-Leg (Four Point)',
    features: [
      'Four leg maximum stability configuration',
      'Prevents load rotation',
      'Even weight distribution',
      'Master link assembly',
      'Usha Martin wire rope',
      'Mechanical hand-made splicing',
      'Individual leg identification',
      'Test certified'
    ],
    specifications: {
      'Configuration': '4-Leg Assembly',
      'Rope Diameter': '6mm to 32mm per leg',
      'Working Load Limit': '2.0T to 50T',
      'Spread Angle': '45° to 60° per leg',
      'Construction': '6x19, 6x36',
      'Core': 'FC / IWRC',
      'Master Link': 'Oblong Master Link',
      'Bottom Fittings': 'Hook, Eye, Shackle'
    },
    wllTable: [
      { size: '6mm x 4', wll: '2.0T' },
      { size: '8mm x 4', wll: '3.6T' },
      { size: '10mm x 4', wll: '5.6T' },
      { size: '12mm x 4', wll: '8.0T' },
      { size: '14mm x 4', wll: '10.8T' },
      { size: '16mm x 4', wll: '14.0T' },
      { size: '18mm x 4', wll: '17.6T' },
      { size: '20mm x 4', wll: '21.6T' },
      { size: '22mm x 4', wll: '26.0T' },
      { size: '24mm x 4', wll: '30.8T' },
      { size: '26mm x 4', wll: '36.0T' },
      { size: '28mm x 4', wll: '41.6T' },
      { size: '32mm x 4', wll: '54.0T' }
    ],
    applications: [
      'Maximum stability lifting',
      'Heavy container handling',
      'Large machinery installation',
      'Rectangular load patterns',
      'Pre-cast concrete elements',
      'Steel structure lifting',
      'Transformer installation',
      'Offshore platform equipment'
    ],
    image: '/images/premade_slings_hero.png',
    faqs: [
      {
        q: 'How do I ensure even loading on all 4 legs?',
        a: 'Use a spreader beam or ensure all attachment points are at equal heights. The load should be balanced before lifting begins. Consider using 3-leg slings if perfect balance cannot be achieved.'
      }
    ],
    relatedVariants: [
      { id: 'single-leg-wire-rope-sling', name: 'Single Leg Wire Rope Sling', config: 'Vertical Lift' },
      { id: '2-leg-wire-rope-sling', name: '2-Leg Wire Rope Sling', config: 'Bridle' },
      { id: '3-leg-wire-rope-sling', name: '3-Leg Wire Rope Sling', config: 'Three Point' }
    ]
  },

  // Chain Sling Variants
  'single-leg-chain-sling': {
    name: 'Single Leg Chain Sling',
    title: 'Single Leg Chain Sling | G80 G100 | Sling Hook | India Manufacturer',
    description: 'Buy single leg chain slings. G80 and G100 alloy steel with sling hook. Working load 1.1T to 32T. Heat treated, test certified. All India delivery from Kolkata.',
    fullDescription: 'Single leg chain slings provide excellent durability and resistance to abrasion for vertical lifting applications. Made from G80 or G100 alloy steel chain with various hook options. The adjustable feature allows length modification for different lifting requirements.',
    parentProduct: 'Chain Slings',
    parentLink: '/product/chain-slings',
    config: 'Single Leg with Hook',
    features: [
      'G80 or G100 alloy steel chain',
      'Sling hook with safety latch',
      'Adjustable or fixed length',
      'Self-locking hook options',
      'Heat treated and proof tested',
      'High abrasion resistance',
      'Temperature resistant',
      'Individual test certificates'
    ],
    specifications: {
      'Configuration': 'Single Leg',
      'Chain Grade': 'G80, G100',
      'Chain Size': '7mm to 32mm',
      'Working Load Limit': '1.1T to 32T',
      'Hook Type': 'Sling hook, Grab hook',
      'Safety Feature': 'Self-locking latch',
      'Temperature Range': '-40°C to +200°C',
      'Standard': 'EN 818-4, ASME B30.9'
    },
    wllTable: [
      { size: '7mm G80', wll: '1.1T' },
      { size: '8mm G80', wll: '1.4T' },
      { size: '10mm G80', wll: '2.3T' },
      { size: '13mm G80', wll: '3.9T' },
      { size: '16mm G80', wll: '6.0T' },
      { size: '18mm G80', wll: '7.6T' },
      { size: '20mm G80', wll: '9.4T' },
      { size: '22mm G80', wll: '11.3T' },
      { size: '26mm G80', wll: '16.0T' },
      { size: '32mm G80', wll: '24.0T' }
    ],
    applications: [
      'Steel mill operations',
      'Foundry lifting',
      'Machine shop material handling',
      'High temperature applications',
      'Abrasive environment lifting',
      'Automotive manufacturing',
      'Mining operations',
      'Construction sites'
    ],
    image: '/images/chains.jpeg',
    faqs: [
      {
        q: 'What is the temperature rating for chain slings?',
        a: 'Standard chain slings can be used from -40°C to +200°C. However, working load limits must be reduced at temperatures above 200°C according to manufacturer guidelines.'
      }
    ],
    relatedVariants: [
      { id: '2-leg-chain-sling', name: '2-Leg Chain Sling', config: 'Bridle' },
      { id: '3-leg-chain-sling', name: '3-Leg Chain Sling', config: 'Three Point' },
      { id: '4-leg-chain-sling', name: '4-Leg Chain Sling', config: 'Four Point' }
    ]
  },

  '2-leg-chain-sling': {
    name: '2-Leg Chain Sling',
    title: '2-Leg Chain Sling | G80 G100 Alloy | Master Link | India Supplier',
    description: 'Buy 2-leg chain slings for stable lifting. G80 G100 alloy steel with master link assembly. Adjustable legs available. 2.2T to 64T capacity. All India delivery.',
    fullDescription: 'Two leg chain slings provide stable lifting with two attachment points. The master link at the top connects to the crane hook, while the two legs spread to attach to the load. Available with adjustable legs for varying load geometries.',
    parentProduct: 'Chain Slings',
    parentLink: '/product/chain-slings',
    config: '2-Leg with Master Link',
    features: [
      'Two leg bridle configuration',
      'Oblong master link at top',
      'Adjustable leg options',
      'G80 or G100 alloy chain',
      'Hooks with safety latches',
      'High abrasion resistance',
      'Proof tested assembly',
      'Individual leg tagging'
    ],
    specifications: {
      'Configuration': '2-Leg Assembly',
      'Chain Grade': 'G80, G100',
      'Chain Size': '7mm to 32mm per leg',
      'Working Load Limit': '2.2T to 64T',
      'Spread Angle': '45° to 60°',
      'Master Link': 'Oblong or Pear',
      'Hook Type': 'Sling hook with latch',
      'Standard': 'EN 818-4, ASME B30.9'
    },
    wllTable: [
      { size: '7mm x 2', wll: '2.2T' },
      { size: '8mm x 2', wll: '2.8T' },
      { size: '10mm x 2', wll: '4.6T' },
      { size: '13mm x 2', wll: '7.8T' },
      { size: '16mm x 2', wll: '12.0T' },
      { size: '20mm x 2', wll: '18.8T' },
      { size: '26mm x 2', wll: '32.0T' },
      { size: '32mm x 2', wll: '48.0T' }
    ],
    applications: [
      'Basket hitch applications',
      'Two-point lifting',
      'Load balancing',
      'Steel structure handling',
      'Machinery relocation',
      'Foundry operations',
      'Container handling',
      'Heavy equipment'
    ],
    image: '/images/chains.jpeg',
    faqs: [
      {
        q: 'Can I adjust the leg length on chain slings?',
        a: 'Yes, adjustable leg chain slings are available with grab hooks that allow length adjustment. This is useful for loads with uneven attachment points.'
      }
    ],
    relatedVariants: [
      { id: 'single-leg-chain-sling', name: 'Single Leg Chain Sling', config: 'Vertical' },
      { id: '3-leg-chain-sling', name: '3-Leg Chain Sling', config: 'Three Point' },
      { id: '4-leg-chain-sling', name: '4-Leg Chain Sling', config: 'Four Point' }
    ]
  },

  // Shackle Variants
  'd-shackle': {
    name: 'D-Shackle (Chain Shackle)',
    title: 'D-Shackle | Screw Pin | Nut Bolt | G80 Alloy Steel | India',
    description: 'Buy D-shackles (chain shackles) in screw pin and nut bolt types. G80 alloy steel, load rated. 0.5T to 55T capacity. Hot dip galvanized. All India delivery.',
    fullDescription: 'D-Shackles, also known as chain shackles, are designed for in-line loading applications. The straight sides make them ideal for connecting two components in a straight line. Available with screw pin for temporary connections or nut-bolt for permanent installations.',
    parentProduct: 'Shackles',
    parentLink: '/product/shackles',
    config: 'D-Type (Chain)',
    features: [
      'D-shape for in-line loads',
      'Screw pin or nut-bolt options',
      'G80 high-tensile alloy steel',
      'Hot dip galvanized finish',
      'Individually marked WLL',
      'Proof tested 2x WLL',
      'Batch certified',
      'EN 13889 compliant'
    ],
    specifications: {
      'Type': 'D-Shackle (Chain)',
      'Pin Type': 'Screw, Nut-Bolt, Safety',
      'Material': 'Alloy Steel Grade 80',
      'Working Load Limit': '0.5T to 55T',
      'Finish': 'Hot Dip Galvanized',
      'Safety Factor': '6:1',
      'Standard': 'EN 13889, US Fed Spec',
      'Proof Test': '2x WLL'
    },
    wllTable: [
      { size: '6mm', wll: '0.5T' },
      { size: '8mm', wll: '0.75T' },
      { size: '10mm', wll: '1.0T' },
      { size: '11mm', wll: '1.5T' },
      { size: '13mm', wll: '2.0T' },
      { size: '16mm', wll: '3.25T' },
      { size: '19mm', wll: '4.75T' },
      { size: '22mm', wll: '6.5T' },
      { size: '25mm', wll: '8.5T' },
      { size: '32mm', wll: '15.0T' }
    ],
    applications: [
      'Chain sling connections',
      'Wire rope terminations',
      'Anchor point connections',
      'Towing applications',
      'Load securing',
      'Marine rigging',
      'Industrial maintenance',
      'Construction sites'
    ],
    image: '/images/shackles.jpeg',
    faqs: [
      {
        q: 'When should I use a D-shackle vs Bow shackle?',
        a: 'Use D-shackles for straight in-line pulls. Use Bow shackles when you need to accommodate multiple sling legs or when the load angle may change.'
      }
    ],
    relatedVariants: [
      { id: 'bow-shackle', name: 'Bow Shackle', config: 'Anchor Type' },
      { id: 'shackles', name: 'All Shackles', config: 'View All Types' }
    ]
  },

  'bow-shackle': {
    name: 'Bow Shackle (Anchor Shackle)',
    title: 'Bow Shackle | Anchor Shackle | Wide Opening | G80 | India Supplier',
    description: 'Buy bow shackles (anchor shackles) with wide opening. G80 alloy steel for multiple sling legs. Screw pin and safety bolt types. All India delivery from Kolkata.',
    fullDescription: 'Bow Shackles, also known as anchor shackles, feature a larger rounded loop that can accommodate multiple sling legs or wider straps. The bow shape allows for side loading better than D-shackles. Essential for complex rigging arrangements.',
    parentProduct: 'Shackles',
    parentLink: '/product/shackles',
    config: 'Bow Type (Anchor)',
    features: [
      'Bow shape for wide loads',
      'Accommodates multiple sling legs',
      'Screw pin or safety bolt',
      'G80 high-tensile steel',
      'Hot dip galvanized',
      'Individually marked',
      'Proof tested',
      'EN 13889 compliant'
    ],
    specifications: {
      'Type': 'Bow Shackle (Anchor)',
      'Pin Type': 'Screw, Safety Bolt',
      'Material': 'Alloy Steel Grade 80',
      'Working Load Limit': '0.5T to 55T',
      'Bowl Width': 'Wide for multi-leg',
      'Finish': 'Hot Dip Galvanized',
      'Safety Factor': '6:1',
      'Standard': 'EN 13889'
    },
    wllTable: [
      { size: '6mm', wll: '0.5T' },
      { size: '8mm', wll: '0.75T' },
      { size: '10mm', wll: '1.0T' },
      { size: '11mm', wll: '1.5T' },
      { size: '13mm', wll: '2.0T' },
      { size: '16mm', wll: '3.25T' },
      { size: '19mm', wll: '4.75T' },
      { size: '22mm', wll: '6.5T' },
      { size: '25mm', wll: '8.5T' },
      { size: '32mm', wll: '15.0T' }
    ],
    applications: [
      'Multi-leg sling connections',
      'Wide strap accommodation',
      'Anchor point rigging',
      'Marine applications',
      'Towing and recovery',
      'Tree rigging',
      'Complex rigging setups',
      'Offshore platforms'
    ],
    image: '/images/shackles.jpeg',
    faqs: [
      {
        q: 'Can bow shackles handle side loading?',
        a: 'Bow shackles can handle limited side loading better than D-shackles, but WLL must be reduced. Never exceed 120° angle between sling legs.'
      }
    ],
    relatedVariants: [
      { id: 'd-shackle', name: 'D-Shackle', config: 'Chain Type' },
      { id: 'shackles', name: 'All Shackles', config: 'View All Types' }
    ]
  }
};

const ProductVariantPage = () => {
  const { variantId } = useParams<{ variantId: string }>();
  const variant = variantId ? variantDatabase[variantId] : null;

  if (!variant) {
    return (
      <>
        <Helmet>
          <title>Product Not Found | Marino Corporation</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="container-modern py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Product Variant Not Found</h1>
            <Link to="/products" className="text-emerald-600 hover:underline inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const whatsappMessage = `Hello, I am interested in ${variant.name}. Please provide pricing and availability.`;

  return (
    <>
      <Helmet>
        <title>{variant.title}</title>
        <meta name="description" content={variant.description} />
        <link rel="canonical" href={`https://marinoindia.co.in/product/${variantId}`} />
        
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": variant.name,
            "image": `https://marinoindia.co.in${variant.image}`,
            "description": variant.description,
            "brand": { "@type": "Brand", "name": "Marino Corporation" },
            "offers": {
              "@type": "Offer",
              "url": `https://marinoindia.co.in/product/${variantId}`,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "seller": { "@type": "Organization", "name": "Marino Corporation Of India" }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Breadcrumb */}
          <div className="bg-slate-50 border-b border-slate-100">
            <div className="container-modern py-4">
              <nav className="flex items-center gap-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-emerald-600">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-emerald-600">Products</Link>
                <span>/</span>
                <Link to={variant.parentLink} className="hover:text-emerald-600">{variant.parentProduct}</Link>
                <span>/</span>
                <span className="text-slate-900 font-medium">{variant.name}</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 bg-white">
            <div className="container-modern">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Image */}
                <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center border border-slate-100">
                  <img src={variant.image} alt={variant.name} className="max-h-80 w-auto object-contain" />
                </div>

                {/* Content */}
                <div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-700">{variant.config}</Badge>
                  <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{variant.name}</h1>
                  <p className="text-lg text-slate-600 mb-6">{variant.fullDescription}</p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {variant.features.slice(0, 5).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={`https://wa.me/919831144669?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="btn-primary gap-2">
                        <Phone className="w-5 h-5" />
                        Get Quote on WhatsApp
                      </Button>
                    </a>
                    <Link to="/catalogue/Marino_Wire_Rope_Sling_Catalog.pdf" target="_blank">
                      <Button size="lg" variant="outline" className="btn-secondary gap-2">
                        <Download className="w-5 h-5" />
                        Download Specs
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WLL Table */}
          <section className="py-16 bg-slate-50">
            <div className="container-modern">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Working Load Limit (WLL) Chart</h2>
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden max-w-2xl">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Size</th>
                      <th className="px-6 py-3 text-left font-semibold text-slate-700">Working Load Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {variant.wllTable.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-slate-50/50' : ''}>
                        <td className="px-6 py-3 text-slate-700">{row.size}</td>
                        <td className="px-6 py-3 text-slate-700 font-medium">{row.wll}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-slate-500 flex items-center gap-2">
                <Info className="w-4 h-4" />
                WLL shown is for vertical lift. Reduce capacity for angled lifts.
              </p>
            </div>
          </section>

          {/* Specifications */}
          <section className="py-16 bg-white">
            <div className="container-modern">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Technical Specifications</h2>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden max-w-2xl">
                <table className="w-full">
                  <tbody>
                    {Object.entries(variant.specifications).map(([key, value], i) => (
                      <tr key={key} className={i % 2 === 0 ? 'bg-slate-50/50' : ''}>
                        <td className="px-6 py-4 font-medium text-slate-700 w-1/3 border-b border-slate-100">{key}</td>
                        <td className="px-6 py-4 text-slate-600 border-b border-slate-100">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Related Variants */}
          <section className="py-16 bg-slate-50">
            <div className="container-modern">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Product Variants</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {variant.relatedVariants.map((related) => (
                  <Link 
                    key={related.id}
                    to={`/product/${related.id}`}
                    className="bg-white rounded-xl p-4 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-slate-900">{related.name}</h3>
                    <p className="text-sm text-slate-500">{related.config}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-emerald-600">
            <div className="container-modern text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Order {variant.name} Today</h2>
              <p className="text-emerald-100 mb-8">Best prices and fast delivery across India</p>
              <a href={`https://wa.me/919831144669?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote Now
                </Button>
              </a>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ProductVariantPage;
