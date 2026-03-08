import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Phone, Download, Mail, MapPin, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Hook product types with images and dimension tables
const hookProductData = [
  {
    id: 'eye-self-locking',
    name: 'Eye Type Self Locking',
    description: 'Suitable for use with Grade 8 Chains and on wire / fibre rope slings.',
    standard: 'BS-EN 1677-3',
    image: '/images/hook_types/WRK0901.jpg',
    headers: ['Chain Dia mm', 'A mm', 'D mm', 'O mm', 'R mm', 'T mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['7/8', '27', '10', '26', '112', '36', '0.55', 'WRK0901'],
      ['10', '38', '13', '33', '151', '46', '1.12', 'WRK0902'],
      ['13', '46', '16', '42', '185', '60', '2.22', 'WRK0903'],
      ['16', '57', '18', '52', '230', '75', '4.00', 'WRK0904'],
    ]
  },
  {
    id: 'clevis-self-locking',
    name: 'Clevis Self Locking',
    description: 'Suitable for use with Grade 8 Chains. Clevis fitting enables direct connection to chain.',
    standard: 'BS-EN 1677-3',
    image: '/images/hook_types/CSELF070.jpg',
    headers: ['Chain Dia mm', 'A mm', 'B mm', 'D mm', 'R mm', 'T mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['7/8', '27.5', '9', '9', '95', '36', '0.54', 'CSELF070'],
      ['10', '38', '12', '13', '125', '46', '1.17', 'CSELF100'],
      ['13', '46', '15', '16', '157', '60', '2.30', 'CSELF130'],
      ['16', '57', '19', '21', '189', '75', '4.10', 'CSELF160'],
    ]
  },
  {
    id: 'clevis-sling-heavy',
    name: 'Clevis Sling Heavy Duty',
    description: 'Suitable for use with Grade 8 Chains. Clevis fitting enables direct connection to chain.',
    standard: 'BS-EN 1677-2',
    image: '/images/hook_types/CLSLI070.jpg',
    headers: ['Chain Dia mm', 'A mm', 'A1 mm', 'B mm', 'C mm', 'G mm', 'H mm', 'R mm', 'X mm', 'Y mm'],
    rows: [
      ['7/8', '34', '26', '9.5', '10', '19', '28', '95', '90', '140'],
      ['10', '40', '31', '12', '13.5', '25', '33', '110', '108', '165'],
      ['13', '51', '40', '15', '17', '30', '40', '136', '131', '204'],
      ['16', '56', '45', '18', '22', '37', '48', '155', '153', '237'],
      ['20', '61', '52', '23', '26', '46', '52', '183', '177', '276'],
      ['22', '72', '72', '24.5', '29', '50', '62', '213', '202', '310'],
    ]
  },
  {
    id: 'eye-sling-heavy',
    name: 'Eye Type Sling Heavy Duty',
    description: 'Suitable for use with Grade 8 Chains and wire / fibre rope slings (with thimbles).',
    standard: 'BS-EN 1677-2',
    image: '/images/hook_types/EYSL060.jpg',
    headers: ['Chain Dia mm', 'A mm', 'A1 mm', 'G mm', 'H mm', 'O mm', 'R mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['6', '25', '25', '14.5', '20', '20', '80.5', '0.24', 'EYSL060'],
      ['7/8', '29.5', '25.5', '19', '27', '25', '95.5', '0.50', 'EYSL070'],
      ['10', '35.7', '30.5', '23.5', '33', '34', '120.5', '0.90', 'EYSL100'],
      ['13', '43.5', '41', '29', '40', '43', '150', '1.50', 'EYSL130'],
      ['16', '52.5', '50', '35.5', '49', '50', '183', '2.75', 'EYSL160'],
      ['20', '62.5', '60', '42', '55', '55', '217.5', '4.90', 'EYSL200'],
      ['22', '76', '75', '51.5', '62', '59', '225', '8.80', 'EYSL220'],
    ]
  },
  {
    id: 'eye-self-locking-large',
    name: 'Eye Type Self-Locking - Large',
    description: 'Suitable for use with Grade 8 Chains and on wire/fibre rope slings.',
    standard: 'BS-EN 1677-3',
    image: '/images/hook_types/WRK0907.jpg',
    headers: ['Chain Dia mm', 'WLL Tonne', 'A mm', 'B mm', 'C mm', 'D mm', 'E mm', 'F mm', 'Part Code'],
    rows: [
      ['6', '1.25', '28', '35', '14', '20', '22', '11', 'WRK0907'],
      ['7/8', '2', '33', '45', '20', '25', '25', '12', 'WRK0908'],
      ['10', '3.2', '44', '58', '27', '35', '32', '14', 'WRK0909'],
      ['13', '5.3', '54.5', '71', '31', '40', '40', '18', 'WRK0910'],
      ['16', '8', '67', '84', '40', '52', '50', '22', 'WRK0911'],
    ]
  },
  {
    id: 'clevis-self-locking-large',
    name: 'Clevis Self-Locking - Large',
    description: 'Suitable for use with Grade 8 Chains.',
    standard: 'BS-EN 1677-3',
    image: '/images/hook_types/WRK0961.jpg',
    headers: ['Chain Dia mm', 'WLL Tonne', 'A mm', 'B mm', 'C mm', 'D mm', 'E mm', 'F mm', 'Part Code'],
    rows: [
      ['7/8', '2', '33', '45', '20', '25', '10', '10', 'WRK0961'],
      ['10', '3.2', '44', '58', '27', '35', '13', '12.5', 'WRK0962'],
      ['13', '5.3', '54', '71', '31', '40', '16', '16', 'WRK0963'],
      ['16', '8', '67', '84', '40', '52', '19', '20', 'WRK0964'],
      ['20', '12.5', '80', '99', '48', '71', '21', '24', 'WRK0965'],
    ]
  },
  {
    id: 'clevis-c-hooks',
    name: "Clevis 'C' Hooks",
    description: 'Suitable for use with Grade 8 Chains.',
    standard: 'BS-EN 1677-1',
    image: '/images/hook_types/CLC070.jpg',
    headers: ['Chain Dia mm', 'A mm', 'B mm', 'C mm', 'D mm', 'F mm', 'P mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['7/8', '9', '20', '11', '22', '90', '9', '0.56', 'CLC070'],
      ['10', '12', '28', '14', '28', '129', '12.5', '1.40', 'CLC100'],
      ['13', '15', '39', '17', '35', '166', '16', '3.00', 'CLC130'],
      ['16', '18', '43', '17.5', '42', '198', '19.5', '6.00', 'CLC160'],
    ]
  },
  {
    id: 'clevis-shortening-clutches',
    name: 'Clevis Shortening Clutches',
    description: 'For correct safe use of the clutch as a shortening device, it must be assembled to the master link via 3 links of chain.',
    standard: 'BS-EN 1677-1',
    image: '/images/hook_types/WRK0001.jpg',
    headers: ['Chain Dia mm', 'A/B mm', 'C mm', 'D mm', 'E mm', 'F mm', 'P mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['7/8', '8.7', '10', '9', '16.5', '62', '9', '0.40', 'WRK0001'],
      ['10', '12.5', '14', '12', '25', '88', '13', '0.94', 'WRK0002'],
      ['13', '16.5', '17', '15', '32.5', '115', '16', '1.92', 'WRK0003'],
      ['16', '20.5', '19', '19', '39', '143', '21', '3.16', 'WRK0004'],
    ]
  },
  {
    id: 'clevis-choker',
    name: 'Clevis Choker',
    description: 'Suitable for use with Grade 8 Chains. Clevis fitting enables direct connection to chain.',
    standard: '',
    image: '/images/hook_types/WRK1201.jpg',
    headers: ['Chain Dia mm', 'A mm', 'B mm', 'D mm', 'F mm', 'P mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['7/8', '9', '9.8', '17', '58', '9', '0.48', 'WRK1201'],
      ['10', '12.5', '12.9', '22', '84', '13', '0.89', 'WRK1202'],
      ['13', '16.5', '16', '24', '94', '16', '1.50', 'WRK1203'],
    ]
  },
  {
    id: 'eye-grab-hook',
    name: 'Eye Type Grab Hook',
    description: 'Suitable for use with Grade 8 Chains. Can be used as a shortening device without any reduction of SWL of the chain sling capacity.',
    standard: 'BS-EN 1677-1',
    image: '/images/hook_types/EYGRAB070.jpg',
    headers: ['Chain Dia mm', 'A mm', 'D mm', 'O mm', 'R mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['7/8', '10', '10', '16', '60', '0.23', 'EYGRAB070'],
      ['10', '13', '11', '21', '80', '0.59', 'EYGRAB100'],
      ['13', '17', '16', '26', '104', '1.24', 'EYGRAB130'],
      ['16', '20', '19', '30', '114', '2.01', 'EYGRAB160'],
      ['20', '23', '22', '36', '132', '3.75', 'EYGRAB200'],
      ['22', '27', '25', '38', '157', '5.35', 'EYGRAB220'],
    ]
  },
  {
    id: 'clevis-grab-hook',
    name: 'Clevis Grab Hook',
    description: 'Suitable for use with Grade 8 Chains. Clevis fitting enables direct connection to chain. Can be used as a shortening device without any reduction of SWL.',
    standard: 'BS-EN 1677-1',
    image: '/images/hook_types/CLGRAB070.jpg',
    headers: ['Chain Dia mm', 'R mm', 'A mm', 'B mm', 'C mm', 'P mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['7/8', '50', '10', '9', '10', '9', '0.27', 'CLGRAB070'],
      ['10', '72', '13', '13', '14', '13', '0.75', 'CLGRAB100'],
      ['13', '88', '17', '17', '17', '16', '1.35', 'CLGRAB130'],
      ['16', '102', '20', '21', '20', '21', '2.30', 'CLGRAB160'],
      ['20', '117', '24', '24', '24', '24', '4.10', 'CLGRAB200'],
      ['22', '139', '26', '26', '26', '26', '5.65', 'CLGRAB220'],
    ]
  },
  {
    id: 'swivel-self-locking-large',
    name: 'Swivel Self-Locking - Large',
    description: 'Suitable for use with Grade 8 Chains and on wire/fibre rope slings. Large swivel eye makes assembly to wire/fibre rope slings (with thimbles) easier.',
    standard: 'BS-EN 1677-3',
    image: '/images/hook_types/WRN0406.jpg',
    headers: ['Chain Dia mm', 'WLL Tonne', 'A mm', 'B mm', 'C mm', 'D mm', 'E mm', 'F mm', 'Part Code'],
    rows: [
      ['6', '1.25', '28', '35', '14', '20', '13', '40', 'WRN0401'],
      ['7/8', '2', '33', '45', '20', '25', '13', '40', 'WRN0402'],
      ['10', '3.2', '44', '58', '27', '35', '17', '47', 'WRN0403'],
      ['13', '5.3', '54', '71', '31', '40', '21', '64', 'WRN0404'],
      ['16', '8', '67', '84', '40', '52', '26', '77', 'WRN0405'],
    ]
  },
  {
    id: 'large-eye-safety-catch',
    name: 'Large Eye - Safety Catch',
    description: 'Alloy steel, Grade 6. MBL equals 4 × WLL.',
    standard: '',
    image: '/images/hook_types/WRL090.jpg',
    headers: ['WLL Tonnes', 'A mm', 'B mm', 'F mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['1', '81', '19', '22', '0.25', 'WRL0901'],
      ['1.5', '93', '23', '24', '0.43', 'WRL0902'],
      ['2', '104', '28', '25', '0.67', 'WRL0903'],
      ['3', '119', '31', '28', '0.87', 'WRL0904'],
      ['4.5', '146', '39', '34', '1.85', 'WRL0905'],
      ['7', '187', '51', '43', '4.05', 'WRL0906'],
      ['11', '230', '62', '52', '6.87', 'WRL0907'],
    ]
  },
  {
    id: 'swivel-safety-catch',
    name: 'Swivel - Safety Catch',
    description: 'Alloy steel, Grade 6. MBL equals 4 × WLL.',
    standard: '',
    image: '/images/hook_types/WRL060.jpg',
    headers: ['WLL Tonnes', 'A mm', 'B mm', 'E mm', 'F mm', 'Weight kgs', 'Part Code'],
    rows: [
      ['1', '113', '30', '25', '20', '0.40', 'WRL0601'],
      ['1.5', '134', '33', '35', '24', '0.70', 'WRL0602'],
      ['2', '150', '40', '42', '26', '1.10', 'WRL0603'],
      ['3', '160', '40', '42', '28', '1.30', 'WRL0604'],
      ['4.5', '188', '47', '47', '35', '2.30', 'WRL0605'],
      ['7', '240', '56', '60', '44', '4.80', 'WRL0606'],
      ['11', '280', '62', '62', '51', '7.50', 'WRL0607'],
    ]
  },
  {
    id: 'shank-for-swaging',
    name: 'Shank for Swaging',
    description: 'Crosby 319N shank hooks with interlocking hook tip. For use with 6×19 or 6×37, IPS or XIP (EIP), XXIP (EEIP), RRL, FC or IWRC Wire rope. Factor of Safety 5:1.',
    standard: '',
    image: '/images/hook_types/productImage-ShankSwaging.jpg',
    headers: ['Wire Rope mm', 'Hook ID', 'WLL Tonnes', 'Part Code', 'Weight kgs'],
    rows: [
      ['5', 'DC', '0.40', '1053002', '0.25'],
      ['6-7', 'FC', '0.70', '1053011', '0.35'],
      ['8', 'GC', '1.10', '1053020', '0.57'],
      ['8', 'HC', '1.10', '1053039', '0.83'],
      ['9-10', 'HC', '1.60', '1053048', '0.82'],
      ['11', 'IC', '2.10', '1053057', '1.65'],
    ]
  },
  {
    id: 'locking-kit-standard',
    name: 'Locking Kit - Standard',
    description: 'Standard type suits standard range of clevis and eye type hooks.',
    standard: '',
    image: '/images/hook_types/productImage-GalvHooks.jpg',
    headers: ['Chain Dia mm', 'Part Code'],
    rows: [
      ['7/8', 'WRX1701'],
      ['10', 'WRX1702'],
      ['13', 'WRX1703'],
      ['16', 'WRX1704'],
    ]
  },
  {
    id: 'locking-kit-large',
    name: 'Locking Kit - Large',
    description: 'Large type suits large style clevis, eye and swivel type hooks.',
    standard: '',
    image: '/images/hook_types/productImage-GalvHooks.jpg',
    headers: ['Chain Dia mm', 'Part Code'],
    rows: [
      ['6', 'WRX1750'],
      ['7/8', 'WRX1751'],
      ['10', 'WRX1752'],
      ['13', 'WRX1753'],
      ['16', 'WRX1754'],
    ]
  },
  {
    id: 'catch-kits-grade8',
    name: 'Catch Kits for Grade 8',
    description: 'Suits grade 8 clevis and eye type sling hooks.',
    standard: '',
    image: '/images/hook_types/productImage-GalvHooks.jpg',
    headers: ['Size', 'Part Code'],
    rows: [
      ['Standard', 'WRK0657'],
    ]
  },
  {
    id: 'retaining-pins-clevis',
    name: 'Retaining Pins for Clevis',
    description: 'Suits grade 8 lifting components and compact self locking hooks. Large type pin set required for large style self locking hooks.',
    standard: '',
    image: '/images/hook_types/productImage-GalvHooks.jpg',
    headers: ['Chain Dia mm', 'Part Code'],
    rows: [
      ['7/8', 'WRX0701'],
      ['10', 'WRX0702'],
      ['13', 'WRX0703'],
      ['16', 'WRX0704'],
    ]
  },
  {
    id: 'carbine-hook',
    name: 'Carbine Hook',
    description: 'Mild Steel. Electro Galvanised.',
    standard: '',
    image: '/images/hook_types/Carbine-Hooks.jpg',
    headers: ['Dia A mm', 'Length B mm', 'Width C mm', 'Width D mm', 'Width E mm', 'Opening F mm', 'Weight kgs/100', 'Part Code'],
    rows: [
      ['4', '40', '14', '5', '7', '6', '0.60', 'CH4X40'],
      ['5', '50', '16', '7', '8', '6', '0.80', 'CH5X50'],
      ['6', '60', '18', '7', '9', '7', '2.40', 'CH6X60'],
      ['7', '70', '22', '9', '10', '8', '2.60', 'CH7X70'],
      ['8', '80', '24', '11', '12', '9', '4.40', 'CH8X80'],
      ['9', '90', '26', '11', '12', '10', '6.40', 'CH9X90'],
    ]
  },
  {
    id: 'carbine-hook-eyelet',
    name: 'Carbine Hook with Eyelet',
    description: 'Mild Steel. Electro Galvanised. With Pressed Thimble.',
    standard: '',
    image: '/images/hook_types/Carbine-Hooks-with-Eyelet.jpg',
    headers: ['Dia A mm', 'Length B mm', 'Width C mm', 'Width D mm', 'Width E mm', 'Opening F mm', 'Weight kgs/100', 'Part Code'],
    rows: [
      ['4', '40', '14', '5', '7', '6', '0.60', 'CH4X40E'],
      ['5', '50', '16', '7', '8', '6', '0.80', 'CH5X50E'],
      ['6', '60', '18', '7', '9', '7', '2.40', 'CH6X60E'],
      ['7', '70', '22', '9', '10', '8', '2.60', 'CH7X70E'],
      ['8', '80', '24', '11', '12', '9', '4.40', 'CH8X80E'],
      ['9', '90', '26', '11', '12', '10', '6.40', 'CH9X90E'],
    ]
  },
  {
    id: 'carbine-hook-safety-nut',
    name: 'Carbine Hook with Safety Nut',
    description: 'Mild Steel. Electro Galvanised. With Safety Nut.',
    standard: '',
    image: '/images/hook_types/Carbine-Hooks-with-Safety-Nut.jpg',
    headers: ['Dia A mm', 'Length B mm', 'Width C mm', 'Width D mm', 'Width E mm', 'Opening F mm', 'Weight kgs/100', 'Part Code'],
    rows: [
      ['4', '40', '14', '5', '7', '6', '0.60', 'CH4X40S'],
      ['5', '50', '16', '7', '8', '6', '0.80', 'CH5X50S'],
      ['6', '60', '18', '7', '9', '7', '2.40', 'CH6X60S'],
      ['7', '70', '22', '9', '10', '8', '2.60', 'CH7X70S'],
      ['8', '80', '24', '11', '12', '9', '4.40', 'CH8X80S'],
      ['9', '90', '26', '11', '12', '10', '6.40', 'CH9X90S'],
    ]
  },
  {
    id: 'carbine-hook-safety-eye-eyelet',
    name: 'Carbine Hook Safety Eye/Eyelet',
    description: 'Mild Steel. Electro Galvanised. With Safety Nut and Eyelet.',
    standard: '',
    image: '/images/hook_types/Carbine-Hooks-with-Safety-Nut-and-Eyelet.jpg',
    headers: ['Dia A mm', 'Length B mm', 'Width C mm', 'Width D mm', 'Width E mm', 'Opening F mm', 'Weight kgs/100', 'Part Code'],
    rows: [
      ['4', '40', '14', '5', '7', '6', '0.60', 'CH4X40ES'],
      ['5', '50', '16', '7', '8', '6', '0.80', 'CH5X50ES'],
      ['6', '60', '18', '7', '9', '7', '2.40', 'CH6X60ES'],
      ['7', '70', '22', '9', '10', '8', '2.60', 'CH7X70ES'],
      ['8', '80', '24', '11', '12', '9', '4.40', 'CH8X80ES'],
      ['9', '90', '26', '11', '12', '10', '6.40', 'CH9X90ES'],
    ]
  },
];

// Comprehensive Product Database
const productDatabase: Record<string, {
  name: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
  image: string;
  category: string;
  faqs: { q: string; a: string }[];
  relatedProducts: string[];
  hookTypes?: { name: string; description: string; capacity: string }[];
}> = {
  'wire-rope-slings': {
    name: 'Wire Rope Slings',
    title: 'Wire Rope Slings Manufacturer & Supplier in India | Usha Martin Wire',
    description: 'Buy premium wire rope slings online. Manufactured using Usha Martin specialized wire rope with mechanical hand-made splicing. Available with thimbles, eye hooks, and custom end fittings. Pan India delivery from Kolkata.',
    longDescription: 'Wire rope slings are the most versatile and widely used lifting slings in industrial applications. Our wire rope slings are manufactured using genuine Usha Martin specialized wire rope, ensuring superior strength, flexibility, and durability. Unlike pressed slings, our mechanical hand-made splicing provides better load distribution and longer service life. Available in various configurations including single leg, 2-leg, 3-leg, and 4-leg assemblies.',
    features: [
      'Made with genuine Usha Martin specialized wire rope',
      'Mechanical hand-made splicing (not pressed)',
      'Superior strength and flexibility',
      'Test certified for safety (test certificates provided)',
      'Available with thimbles, hooks, or custom fittings',
      'IS 2266 and BS EN 13414-1 compliant',
      'Hot dip galvanized or ungalvanized finish',
      'Working load limits from 0.5T to 30T'
    ],

    applications: [
      'Construction and infrastructure projects',
      'Port and shipping cargo handling',
      'Mining and heavy industry operations',
      'Manufacturing plant maintenance',
      'Warehouse material handling',
      'Oil and gas installations',
      'Power plant maintenance',
      'Steel plant operations'
    ],
    image: '/images/premade_slings_hero.png',
    category: 'Lifting Slings',
    faqs: [
      {
        q: 'What is the difference between hand-made and pressed wire rope slings?',
        a: 'Hand-made splicing provides better load distribution, longer service life, and maintains the rope\'s original strength better than pressed fittings. Our mechanical splicing is done by skilled craftsmen for maximum safety.'
      },
      {
        q: 'What is the working load limit of your wire rope slings?',
        a: 'Our wire rope slings have working load limits ranging from 0.5 ton to 30 ton depending on diameter and configuration. All slings come with test certificates and are proof tested to 2x WLL.'
      },
      {
        q: 'Do you deliver wire rope slings across India?',
        a: 'Yes, we provide pan India delivery from our Kolkata facility. Delivery typically takes 3-7 days depending on location. We deliver to Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad, and all major cities.'
      },
      {
        q: 'Are your slings made with Usha Martin wire rope?',
        a: 'Yes, all our wire rope slings are manufactured using genuine Usha Martin specialized wire rope for maximum strength and durability. We are authorized distributors of Usha Martin products.'
      },
      {
        q: 'What configurations are available?',
        a: 'We offer single leg, 2-leg (basket), 3-leg, and 4-leg wire rope sling assemblies. Custom lengths and end fittings can be manufactured to your specifications.'
      }
    ],
    relatedProducts: ['chain-slings', 'shackles', 'hooks', 'wire-rope-accessories']
  },
  
  'industrial-chains': {
    name: 'Industrial Chains',
    title: 'Industrial Chains Supplier India | G80 G100 Alloy Steel | Anchor & Lashing',
    description: 'High-quality industrial chains including G80, G100 alloy steel chains, anchor chains, and lashing chains. Available in various sizes from 6mm to 32mm. Test certified, IS and EN compliant. Pan India delivery.',
    longDescription: 'We supply a comprehensive range of industrial chains for lifting, lashing, and anchoring applications. Our chains are manufactured from high-tensile alloy steel and available in Grade 80 (G80) and Grade 100 (G100) specifications. Each chain is proof tested and certified for safety. Applications include lifting slings, anchor systems, cargo lashing, and industrial machinery.',
    features: [
      'Grade 80 and Grade 100 high-tensile alloy steel',
      'Available in black, galvanized, and powder coated finishes',
      'Calibrated and non-calibrated options',
      'Proof tested and certified (test certificates provided)',
      'High abrasion and impact resistance',
      'Suitable for extreme temperature environments',
      'Compliant with EN 818-2, IS 2760, ASTM A391',
      'Cut to required length service available'
    ],
    specifications: {
      'Chain Grades': 'G80, G100, G63',
      'Size Range': '6mm - 32mm diameter',
      'Working Load Limit': '1.1T - 31.5T (varies by grade)',
      'Material': 'Alloy Steel (Quenched & Tempered)',
      'Finish Options': 'Black Self-Color / Hot Dip Galvanized / Powder Coated',
      'Standards': 'EN 818-2, IS 2760, ASTM A391, ASTM A973',
      'Safety Factor': '4:1 minimum',
      'Temperature Range': '-40°C to +400°C (grade dependent)'
    },
    applications: [
      'Lifting chain slings assembly',
      'Ship anchor and mooring chains',
      'Cargo lashing and securing',
      'Industrial conveyor systems',
      'Mining and quarry equipment',
      'Construction hoisting systems',
      'Overhead crane load chains',
      'Marine and offshore applications'
    ],
    image: '/images/chains.jpeg',
    category: 'Industrial Chains',
    faqs: [
      {
        q: 'What is the difference between G80 and G100 industrial chains?',
        a: 'G100 chain has approximately 25% higher strength than G80 chain of the same size. For example, a 10mm G80 chain has a WLL of 3.15 tonnes, while a 10mm G100 chain has a WLL of 4.0 tonnes. G100 allows for either higher capacity or smaller chain size for the same load.'
      },
      {
        q: 'How do I calculate the working load limit for chain slings?',
        a: 'The WLL depends on chain grade, diameter, and configuration. Single leg uses full WLL. 2-leg at 0-45° angle = 1.4×WLL, at 45-60° = 1.0×WLL. Always consult load tables and consider angle factors for multi-leg assemblies.'
      },
      {
        q: 'What inspection is required for industrial chains?',
        a: 'OSHA requires daily visual inspection before use and periodic thorough inspection every 12 months. Check for stretched links (over 5% elongation), cracks, nicks, gouges, and wear exceeding 10% of original diameter. Remove from service if any defects are found.'
      }
    ],
    relatedProducts: ['chain-slings', 'shackles', 'hooks']
  },

  'chain-slings': {
    name: 'Chain Slings',
    title: 'Chain Slings Manufacturer | G80 & G100 Alloy Chain | All India Delivery',
    description: 'High-strength alloy steel chain slings in G80 and G100 grades. 2-leg, 3-leg, and 4-leg configurations available. Test certified and compliant with international standards. Delivery across India.',
    longDescription: 'Chain slings are ideal for heavy-duty lifting applications where flexibility, durability, and resistance to abrasion are required. Our chain slings are manufactured using high-tensile alloy steel chain (Grade 80 and Grade 100) with various end fittings including hooks, shackles, and master links. Each sling is individually tested and certified for safety.',
    features: [
      'G80 and G100 high-tensile alloy steel chain',
      '2-leg, 3-leg, and 4-leg configurations',
      'Adjustable and non-adjustable options',
      'Self-locking safety hooks available',
      'Individual test certificates provided',
      'High resistance to abrasion and cutting',
      'Suitable for high-temperature applications',
      'Compliant with EN 818-4 and ASME B30.9'
    ],
    specifications: {
      'Chain Grade': 'G80, G100',
      'Diameter Range': '7mm - 32mm',
      'Working Load Limit': '1.1T - 31.5T',
      'Material': 'Alloy Steel (Quenched & Tempered)',
      'Finish': 'Powder Coated / Galvanized',
      'Standard': 'EN 818-4, ASME B30.9, IS 2760',
      'Safety Factor': '4:1',
      'Temperature Range': '-40°C to +200°C'
    },
    applications: [
      'Steel mill operations',
      'Foundry and forging applications',
      'Heavy machinery lifting',
      'Mining equipment handling',
      'Construction steel erection',
      'Shipbuilding and repair',
      'Port cargo handling',
      'Automotive manufacturing'
    ],
    image: '/images/Chain_sling.png',
    category: 'Lifting Slings',
    faqs: [
      {
        q: 'What is the difference between G80 and G100 chain slings?',
        a: 'G100 chains have 25% higher strength than G80 chains of the same size. This allows for either higher working load limits or the use of smaller chain sizes for the same load, reducing weight.'
      },
      {
        q: 'Can chain slings be used in high temperatures?',
        a: 'Yes, chain slings can be used in temperatures ranging from -40°C to +200°C. However, working load limits must be reduced at higher temperatures as per manufacturer guidelines.'
      },
      {
        q: 'How do I inspect chain slings?',
        a: 'Inspect for stretched links, cracks, nicks, gouges, and excessive wear. If any link is worn more than 10% of its original diameter, the sling should be removed from service.'
      }
    ],
    relatedProducts: ['wire-rope-slings', 'hooks', 'shackles']
  },

  'shackles': {
    name: 'Shackles',
    title: 'Shackles Supplier India | D-Shackles, Bow Shackles | G80 Alloy Steel',
    description: 'High-tensile steel shackles for lifting and rigging. D-shackles, bow shackles, screw pin and nut-bolt types. G80 alloy steel, load rated and certified. Bulk orders with India delivery.',
    longDescription: 'Shackles are essential rigging hardware used to connect lifting slings, ropes, and chains to loads. We supply a complete range of shackles including D-type (chain) shackles and bow (anchor) shackles in various pin configurations. Our G80 alloy steel shackles offer superior strength-to-weight ratio and are individually proof tested.',
    features: [
      'G80 high-tensile alloy steel construction',
      'D-Shackles (Chain) and Bow Shackles (Anchor)',
      'Screw pin and nut-bolt pin options',
      'Safety bolt types with split pin available',
      'Hot dip galvanized or self-colored finish',
      'Individually proof tested and marked',
      'Batch test certificates available',
      'Conforming to EN 13889 and US Fed Spec RR-C-271'
    ],
    specifications: {
      'Types': 'D-Shackle, Bow Shackle',
      'Pin Types': 'Screw Pin, Nut-Bolt, Safety Bolt',
      'Size Range': '0.5T to 55T WLL',
      'Material': 'Alloy Steel Grade 80',
      'Finish': 'Hot Dip Galvanized / Self Color',
      'Standard': 'EN 13889, US Fed Spec RR-C-271',
      'Safety Factor': '6:1',
      'Proof Test': '2x WLL'
    },
    applications: [
      'Lifting sling connections',
      'Anchor point rigging',
      'Towing and recovery operations',
      'Marine and offshore applications',
      'Construction rigging',
      'Load securing',
      'Industrial maintenance',
      'Tree rigging and arboriculture'
    ],
    image: '/images/shackles.jpeg',
    gallery: [
      '/images/shackles.jpeg',
      '/images/steelwirerope/galvanised-shackles_1.jpg'
    ],
    category: 'Rigging Hardware',
    faqs: [
      {
        q: 'What is the difference between D-shackle and bow shackle?',
        a: 'D-shackles (chain shackles) are designed for in-line loads. Bow shackles (anchor shackles) have a larger loop that can accommodate multiple sling legs or wider straps.'
      },
      {
        q: 'Which pin type should I use?',
        a: 'Screw pins are quick to connect/disconnect for temporary rigging. Nut-bolt pins are more secure for permanent installations. Safety bolts with cotter pins are best for overhead lifting.'
      }
    ],
    relatedProducts: ['wire-rope-slings', 'chain-slings', 'hooks']
  },

  'hooks': {
    name: 'Lifting Hooks',
    title: 'Lifting Hooks India | Grade 8 Clevis, Eye, Swivel Hooks | G80 Alloy Steel',
    description: 'Complete range of industrial lifting hooks: Grade 8 clevis hooks, eye type hooks, swivel hooks, self-locking hooks, grab hooks, sling hooks, carbine hooks, and shank hooks. Forged G80 alloy steel with safety latches. Test certified. Pan India delivery.',
    longDescription: 'We supply a comprehensive range of industrial lifting hooks manufactured from high-grade forged alloy steel (Grade 80). Our hook range includes over 20 different types: clevis hooks, eye hooks, swivel hooks, self-locking safety hooks, grab hooks, choker hooks, sling hooks (heavy duty), carbine hooks with various eyelet configurations, and shank hooks for swaging. All hooks feature safety latches or self-locking mechanisms to prevent accidental disengagement. Each hook is individually marked with Working Load Limit (WLL), batch tested, and certified for safety. Suitable for chain slings, wire rope slings, and direct lifting applications.',
    features: [
      'Grade 8 (G80) forged alloy steel construction',
      'Over 20 hook types: clevis, eye, swivel, grab, choker, sling hooks',
      'Self-locking safety hooks with automatic closure',
      'Clevis hooks with pins for quick connection',
      'Eye type hooks for permanent sling attachment',
      'Swivel hooks for load rotation without twisting',
      'Heavy-duty sling hooks with wide throat opening',
      'Carbine hooks with eyelets and safety nuts',
      'Shank hooks for swaging onto wire ropes',
      'Grab hooks and shortening clutches for chain adjustment',
      'Individually marked with WLL and traceability codes',
      '100% batch tested with certificates provided',
      'Hot dip galvanized or powder coated finish',
      'Conform to EN 1677-2, ASME B30.10, and ASTM A952'
    ],
    specifications: {
      'Hook Types': 'Clevis, Eye, Swivel, Self-Locking, Grab, Choker, Sling, Carbine, Shank',
      'Grade': 'G80 (Grade 8) Alloy Steel',
      'Working Load Limit': '0.5T - 30T (varies by type)',
      'Material': 'Drop Forged Alloy Steel (Quenched & Tempered)',
      'Safety Mechanism': 'Self-locking latch / Safety catch',
      'Pin Types': 'Clevis pin with cotter / Safety bolt',
      'Finish': 'Hot Dip Galvanized / Powder Coated',
      'Standard': 'EN 1677-2, ASME B30.10, ASTM A952',
      'Safety Factor': '4:1 (MBL = 4 × WLL)',
      'Temperature Range': '-40°C to +200°C',
      'Certification': 'Test certificates with batch numbers'
    },
    applications: [
      'Chain sling end fittings',
      'Wire rope sling terminations',
      'Overhead crane lifting',
      'Container lifting and handling',
      'Construction rigging',
      'Marine and offshore lifting',
      'Mining equipment rigging',
      'Steel mill operations',
      'Port cargo handling',
      'Manufacturing material handling',
      'Shipyard rigging operations',
      'Foundry and casting lifting'
    ],
    hookTypes: [
      { name: 'Grade 8 Clevis Self-Locking Hooks', description: 'Automatic locking hook with clevis pin connection', capacity: '1.12T - 15T' },
      { name: 'Grade 8 Eye Type Self-Locking Hooks', description: 'Self-locking hook with eye for permanent attachment', capacity: '1.12T - 15T' },
      { name: 'Grade 8 Swivel Self-Locking Hooks', description: '360° rotating self-locking hook prevents rope twist', capacity: '1.12T - 15T' },
      { name: 'Grade 8 Clevis Sling Hooks (Heavy Duty)', description: 'Wide throat hook for chain sling applications', capacity: '2T - 21.2T' },
      { name: 'Grade 8 Eye Type Sling Hooks (Heavy Duty)', description: 'Heavy-duty eye hook for permanent sling installation', capacity: '2T - 21.2T' },
      { name: 'Grade 8 Clevis Grab Hooks', description: 'For shortening or adjusting chain length', capacity: '1.12T - 15T' },
      { name: 'Grade 8 Eye Type Grab Hooks', description: 'Eye type grab hook for chain adjustment', capacity: '1.12T - 15T' },
      { name: 'Grade 8 Clevis Choker Hooks', description: 'Designed for choker hitch applications', capacity: '1.12T - 8T' },
      { name: 'Grade 8 Clevis C-Hooks', description: 'C-shaped hook for specialized lifting', capacity: '1.12T - 5.3T' },
      { name: 'Grade 8 Clevis Shortening Clutches', description: 'For adjusting chain sling leg length', capacity: '1.12T - 12.5T' },
      { name: 'Large Eye Hooks with Safety Catch', description: 'Oversized eye for multiple sling connections', capacity: '5T - 25T' },
      { name: 'Swivel Hooks with Safety Catch', description: 'Swivel hook with manual safety latch', capacity: '0.5T - 12.5T' },
      { name: 'Carbine Hooks', description: 'Spring-loaded quick connection hook', capacity: '0.5T - 3T' },
      { name: 'Carbine Hooks with Eyelets', description: 'Carbine hook with fixed eyelet connection', capacity: '0.5T - 3T' },
      { name: 'Carbine Hooks with Safety Nut', description: 'Carbine hook with threaded safety nut', capacity: '0.5T - 3T' },
      { name: 'Shank Hooks for Swaging', description: 'Hook with shank for swaging onto wire rope', capacity: '0.5T - 8T' }
    ],
    image: '/images/hooks.jpeg',
    gallery: [
      '/images/hooks.jpeg',
      '/images/steelwirerope/galvanised-hooks_1.jpg'
    ],
    category: 'Rigging Hardware',
    faqs: [
      {
        q: 'What is the difference between clevis and eye type hooks?',
        a: 'Clevis hooks have a U-shaped end with a pin that allows quick attachment and detachment from chain slings. Eye hooks have a closed circular eye that requires the sling to be threaded through or connected via a link, making them more suitable for permanent installations.'
      },
      {
        q: 'How do self-locking hooks work?',
        a: 'Self-locking hooks have a spring-loaded latch that automatically closes when a load is applied. The hook cannot open while under load, providing automatic safety. To release, the load must be removed and the latch manually opened.'
      },
      {
        q: 'When should I use a swivel hook?',
        a: 'Swivel hooks are used when the load needs to rotate during lifting without twisting the sling or rope. They have a bearing that allows 360° rotation under load, preventing torque buildup in multi-leg sling assemblies.'
      },
      {
        q: 'What is a grab hook used for?',
        a: 'Grab hooks are designed to grab onto a chain link to shorten the effective length of a chain sling leg or to create an adjustable connection point. They are not for direct load lifting but for chain adjustment.'
      },
      {
        q: 'Why is the safety latch important?',
        a: 'The safety latch prevents the sling or load from accidentally slipping out of the hook throat during lifting operations. It\'s a critical safety feature required by most safety regulations including OSHA and EN standards.'
      },
      {
        q: 'Can hooks be repaired if damaged?',
        a: 'No, damaged hooks should never be repaired. If a hook shows cracks, deformation, throat opening exceeding 15% of original, or wear exceeding 10% of original dimensions, it must be removed from service and destroyed.'
      },
      {
        q: 'What does Grade 8 (G80) mean for hooks?',
        a: 'Grade 8 indicates the strength level of the alloy steel. G80 hooks have a Minimum Breaking Load (MBL) of 4 times the Working Load Limit (WLL). This provides a 4:1 safety factor as required by EN 1677-2 standard.'
      }
    ],
    relatedProducts: ['shackles', 'wire-rope-slings', 'chain-slings', 'turnbuckles']
  },

  'pulleys-blocks': {
    name: 'Pulleys & Blocks',
    title: 'Pulley Blocks & Sheaves | Wire Rope Pulleys | Marine & Industrial',
    description: 'Heavy-duty pulley blocks and sheaves for wire rope and manila rope. Single, double, and triple sheave configurations. Marine grade with bronze bushings. Pan India supply.',
    longDescription: 'Pulley blocks and sheaves are essential components in lifting and rigging systems, providing mechanical advantage and direction change for ropes and cables. Our range includes wire rope pulleys with hardened steel sheaves, bronze bushings, and grease fittings for smooth operation under heavy loads.',
    features: [
      'Hardened steel sheaves for wire rope',
      'Bronze bushings with grease fittings',
      'Single, double, and triple sheave options',
      'Marine-grade construction available',
      'Swivel eye or hook attachments',
      'Side plates open for easy reeving',
      'Load tested and certified',
      'Custom sizes available on request'
    ],
    specifications: {
      'Sheave Diameter': '100mm - 800mm',
      'Rope Capacity': '6mm - 32mm diameter',
      'Working Load': '0.5T - 30T',
      'Bushing Type': 'Bronze with grease fitting',
      'Side Plates': 'Steel, powder coated',
      'Attachment': 'Swivel eye or hook',
      'Standard': 'EN 13157, ASME B30.26'
    },
    applications: [
      'Crane rigging systems',
      'Marine trawling operations',
      'Construction lifting',
      'Mining hoisting',
      'Oil and gas platforms',
      'Theater/stage rigging',
      'Agriculture applications',
      'Forestry and logging'
    ],
    image: '/images/pulley.jpeg',
    category: 'Lifting Equipment',
    faqs: [
      {
        q: 'What is the mechanical advantage of a pulley block?',
        a: 'A single pulley provides direction change only. Double pulleys provide 2:1 mechanical advantage, triple pulleys 3:1, etc. This reduces the force needed to lift a load but increases the rope length required.'
      }
    ],
    relatedProducts: ['wire-rope-slings', 'wire-rope-accessories', 'hooks']
  },

  'wire-rope-accessories': {
    name: 'Wire Rope Accessories',
    title: 'Wire Rope Clips, Thimbles & Fittings | Galvanized | India Supplier',
    description: 'Complete range of wire rope accessories including clips, thimbles, sockets, and ferrules. Galvanized and stainless steel options. For 6mm to 32mm wire ropes. All India delivery.',
    longDescription: 'Wire rope accessories are essential for creating eyes, terminations, and connections in wire rope assemblies. We supply wire rope clips (bulldog grips), thimbles, wedge sockets, and ferrules in various sizes and materials. All accessories are manufactured to international standards for safety and reliability.',
    features: [
      'Drop-forged wire rope clips (bulldog grips)',
      'Heavy-duty thimbles in various sizes',
      'Wedge sockets for permanent terminations',
      'Ferrules for swage fittings',
      'Galvanized and SS 304 options',
      'Match wire rope construction types',
      ' individually marked with size',
      'Compliant with EN 13411-5'
    ],
    specifications: {
      'Wire Rope Size': '6mm - 32mm',
      'Clip Types': 'DIN 741, US Type, JIS Type',
      'Thimble Types': 'Standard, Heavy, G414',
      'Material': 'Malleable Iron, Carbon Steel, SS 304',
      'Finish': 'Galvanized, Self Color, SS',
      'Standard': 'EN 13411-5, ASME B30.26'
    },
    applications: [
      'Wire rope eye terminations',
      'Rope-to-rope connections',
      'Winch line installations',
      'Crane rope rigging',
      'Marine rigging systems',
      'Elevator installations',
      'Guy wire assemblies',
      'Structural cable systems'
    ],
    image: '/images/wire_rope_hardware.jpeg',
    gallery: [
      '/images/steelwirerope/galvanised-wire-rope-grips_1.jpg'
    ],
    category: 'Rigging Hardware',
    faqs: [
      {
        q: 'How many wire rope clips do I need?',
        a: 'General rule: 3 clips for ropes up to 16mm, 4 clips for 19-22mm, 5 clips for 25-32mm. Always follow manufacturer specifications for your specific application.'
      }
    ],
    relatedProducts: ['wire-rope-slings', 'shackles', 'hooks']
  },

  'turnbuckles': {
    name: 'Turnbuckles',
    title: 'Galvanised Turnbuckles India | Eye, Jaw, Hook Types | DIN1480 | Tested & Commercial',
    description: 'Complete range of galvanised turnbuckles: Eye & Eye, Jaw & Jaw, Hook & Eye, Hook & Hook configurations. DIN1480 commercial and ASTM F1145 tested grades. Hot dip galvanised high tensile steel. Pan India delivery.',
    longDescription: 'We supply a comprehensive range of galvanised turnbuckles for tensioning, rigging, and structural applications. Our turnbuckles are manufactured from drop-forged high tensile steel (SAE 1035 or 1045) with hot dipped galvanised finish for superior corrosion resistance. Available in both commercial grade (DIN1480) and load-tested grade (ASTM F1145-92) with full certification. We stock over 15 different turnbuckle configurations including standard strainers, tested turnbuckles, and premium fork-type assemblies for wire rope and chain applications.',
    features: [
      'Drop forged high tensile steel SAE 1035 or 1045',
      'Hot dipped galvanised finish for corrosion resistance',
      'Two grades available: Commercial (DIN1480) and Tested (ASTM F1145-92)',
      'Tested grade: MBL equals 5 x WWL with full certification',
      'Size range from M6 to M24',
      'Eye & Eye, Jaw & Jaw, Hook & Eye, Hook & Hook configurations',
      'Also available: Commercial strainers and DIN1480 strainers',
      'Premium fork and jaw assemblies for wire rope',
      'Left-hand and right-hand threaded bodies',
      'Lock nuts available for vibration-prone applications',
      'Suitable for wire rope, chain, and rod applications',
      'Batch test certificates provided for tested grade'
    ],
    specifications: {
      'Material': 'High tensile steel SAE 1035/1045 (drop forged)',
      'Finish': 'Hot dipped galvanised to BS EN ISO 1461',
      'Size Range': 'M6 - M24 (larger sizes on request)',
      'End Fittings': 'Eye, Jaw, Hook configurations',
      'Grades': 'Commercial (DIN1480), Tested (ASTM F1145-92)',
      'Safety Factor': '5:1 (MBL = 5 × WWL for tested grade)',
      'Thread Standard': 'Metric coarse thread (ISO 261)',
      'Standards': 'DIN1480, ASTM F1145-92, EN 10266',
      'Temperature Range': '-20°C to +200°C',
      'Certification': 'Test certificates with batch numbers'
    },
    turnbuckleTypes: [
      { name: 'Eye & Eye Tested Turnbuckles', description: 'Load-rated turnbuckle with eye fittings both ends. ASTM F1145-92 compliant.', capacity: 'M6 to M24' },
      { name: 'Eye & Eye DIN1480 Strainers', description: 'Commercial grade strainer with eye fittings. For non-critical applications.', capacity: 'M6 to M24' },
      { name: 'Eye & Eye Commercial Strainers', description: 'Economy grade strainer for general tensioning applications.', capacity: 'M6 to M20' },
      { name: 'Jaw & Jaw Tested Turnbuckles', description: 'Load-rated turnbuckle with clevis jaw fittings. For shackle connections.', capacity: 'M6 to M24' },
      { name: 'Hook & Eye Tested Turnbuckles', description: 'Load-rated turnbuckle with hook one end, eye other end.', capacity: 'M6 to M24' },
      { name: 'Hook & Eye DIN1480 Strainers', description: 'Commercial grade with hook and eye combination.', capacity: 'M6 to M20' },
      { name: 'Hook & Eye Commercial Strainers', description: 'Economy grade hook and eye strainer for temporary rigging.', capacity: 'M6 to M16' },
      { name: 'Hook & Hook Commercial Strainers', description: 'Quick connection strainer with hooks both ends.', capacity: 'M6 to M16' },
      { name: 'Hook & Hook DIN 1480 Strainers', description: 'Commercial grade with hooks for rapid deployment.', capacity: 'M6 to M20' },
      { name: 'Stainless Steel Eye & Eye Turnbuckles', description: 'Corrosion-resistant SS316 turnbuckles for marine environments.', capacity: 'M5 to M12' },
      { name: 'Stainless Steel Jaw & Jaw Turnbuckles', description: 'SS316 jaw type turnbuckles for marine and chemical applications.', capacity: 'M5 to M12' },
      { name: 'Stainless Steel Hook & Eye Turnbuckles', description: 'SS316 hook and eye combination for marine rigging.', capacity: 'M5 to M12' },
      { name: 'Stainless Steel Hook & Hook Turnbuckles', description: 'SS316 hooks both ends for temporary marine connections.', capacity: 'M5 to M12' },
      { name: 'Premium Fork & Fork Turnbuckles', description: 'High-strength fork terminals for wire rope swaging.', capacity: '3mm to 12mm wire' },
      { name: 'Premium Fork & Jaw Turnbuckles', description: 'Fork one end, jaw other end for mixed connections.', capacity: '3mm to 12mm wire' }
    ],
    applications: [
      'Wire rope tensioning and adjustment',
      'Guy wire systems for towers and masts',
      'Structural cable systems',
      'Marine rigging and guard rails',
      'Construction bracing and formwork',
      'Agricultural fencing and gates',
      'Shade sail and canopy installations',
      'Theatrical rigging and stage systems',
      'Telecommunication tower guy wires',
      'Crane and hoist line adjustment',
      'Zipline and adventure park installations',
      'Architectural stainless steel balustrades'
    ],
    image: '/images/steelwirerope/galvanised-turnbuckles_1.jpg',
    gallery: [
      '/images/steelwirerope/galvanised-turnbuckles_1.jpg',
      '/images/Turn_buckles.png'
    ],
    category: 'Rigging Hardware',
    faqs: [
      {
        q: 'What is the difference between tested and commercial turnbuckles?',
        a: 'Tested turnbuckles are load rated with a Minimum Breaking Load (MBL) of 5 times the Working Load Limit (WWL) and meet ASTM F1145-92 standards. They come with test certificates and are suitable for lifting and critical structural applications. Commercial turnbuckles (DIN1480) are suitable for general tensioning applications where load rating is not critical, such as fencing or bracing.'
      },
      {
        q: 'Which turnbuckle configuration should I use?',
        a: 'Eye & Eye: Best for permanent installations with shackles. Jaw & Jaw: Ideal for connecting to eye bolts or shackles without rotating. Hook & Eye: Versatile - quick connection on hook end, permanent on eye end. Hook & Hook: For temporary setups requiring quick connections on both ends.'
      },
      {
        q: 'How do I calculate the required turnbuckle size?',
        a: 'Select a turnbuckle with a Working Load Limit (WLL) equal to or greater than the maximum expected load. For tested grade, WLL = MBL ÷ 5. Always consider dynamic loads, shock loading, and angle factors. When in doubt, choose the next size up.'
      },
      {
        q: 'Can turnbuckles be used for lifting?',
        a: 'Only tested grade turnbuckles meeting ASTM F1145-92 or equivalent should be used for lifting. Commercial grade turnbuckles are not rated for lifting applications. Always verify the WLL and ensure it exceeds your load requirement with appropriate safety factors.'
      },
      {
        q: 'How do I prevent turnbuckles from loosening under vibration?',
        a: 'Use lock nuts (jam nuts) on the threaded body, wire the turnbuckle body to the end fittings, or use thread-locking compound. For critical applications, use turnbuckles with locking systems or cotter pins through the end fittings.'
      },
      {
        q: 'What is the difference between galvanised and stainless steel turnbuckles?',
        a: 'Galvanised turnbuckles are hot-dip zinc coated carbon steel, offering good corrosion resistance at lower cost for outdoor and marine applications. Stainless steel (SS316) turnbuckles provide superior corrosion resistance for harsh marine or chemical environments but at higher cost.'
      }
    ],
    relatedProducts: ['wire-rope-accessories', 'wire-rope-slings', 'shackles', 'thimbles']
  },

  'thimbles': {
    name: 'Wire Rope Thimbles',
    title: 'Galvanised Wire Rope Thimbles | Heavy Duty | Standard | India Supplier',
    description: 'Galvanised wire rope thimbles for protecting rope eyes from crushing and abrasion. Available in standard and heavy duty types. Mild steel construction with electro-galvanised finish.',
    longDescription: 'Wire rope thimbles are essential fittings used to protect the eye of a wire rope sling from crushing and abrasion when connected to hooks, shackles, or other hardware. Our thimbles are manufactured from mild steel with electro-galvanised finish for corrosion resistance. Available in standard and heavy duty types to match different wire rope sizes.',
    features: [
      'Mild steel construction',
      'Electro-galvanised finish',
      'Standard and Heavy Duty types',
      'Prevents rope eye crushing',
      'Extends rope service life',
      'Matches wire rope construction',
      'Cost-effective protection',
      'Easy to install'
    ],
    specifications: {
      'Material': 'Mild Steel',
      'Finish': 'Electro-galvanised',
      'Types': 'Standard, Heavy Duty (G414)',
      'Wire Rope Size': '6mm - 32mm',
      'Standard': 'EN 13411-1, US Type',
      'Packaging': 'Bulk or individual'
    },
    applications: [
      'Wire rope sling eyes',
      'Winch line terminations',
      'Crane rope connections',
      'Marine rigging',
      'Lifting equipment',
      'General rigging',
      'Agricultural applications',
      'Construction sites'
    ],
    image: '/images/steelwirerope/galvanised-thimbles_1.jpg',
    gallery: [
      '/images/steelwirerope/galvanised-thimbles_1.jpg'
    ],
    category: 'Rigging Hardware',
    faqs: [
      {
        q: 'Why do I need thimbles for wire rope eyes?',
        a: 'Thimbles prevent the wire rope from being crushed at the eye when under load, which would weaken the rope and reduce its service life. They distribute the load evenly around the eye.'
      },
      {
        q: 'What is the difference between standard and heavy duty thimbles?',
        a: 'Standard thimbles are suitable for most general applications. Heavy duty (G414) thimbles have a larger radius and thicker material, providing better protection for high-load applications or larger wire ropes.'
      }
    ],
    relatedProducts: ['wire-rope-accessories', 'wire-rope-slings', 'wire-rope-grips']
  }
};

// Wire Rope Sling Capacity Data (Steel Core 6x19, 6x36 & 8x36)
const slingCapacityData = {
  oneLeg: [
    { diameter: 8, wll: 0.75 },
    { diameter: 9, wll: 0.95 },
    { diameter: 10, wll: 1.15 },
    { diameter: 11, wll: 1.40 },
    { diameter: 12, wll: 1.70 },
    { diameter: 13, wll: 2.00 },
    { diameter: 14, wll: 2.25 },
    { diameter: 16, wll: 3.00 },
    { diameter: 18, wll: 3.70 },
    { diameter: 20, wll: 4.60 },
    { diameter: 22, wll: 5.65 },
    { diameter: 24, wll: 6.70 },
    { diameter: 26, wll: 7.80 },
    { diameter: 28, wll: 8.40 },
    { diameter: 32, wll: 11.8 },
    { diameter: 36, wll: 15.0 },
    { diameter: 40, wll: 18.5 },
    { diameter: 44, wll: 22.5 },
    { diameter: 48, wll: 26.0 },
    { diameter: 52, wll: 31.5 },
    { diameter: 56, wll: 36.0 },
    { diameter: 60, wll: 42.0 },
  ],
  twoLeg: [
    { diameter: 8, wll_0_45: 1.05, wll_45_60: 0.75 },
    { diameter: 9, wll_0_45: 1.30, wll_45_60: 0.95 },
    { diameter: 10, wll_0_45: 1.60, wll_45_60: 1.15 },
    { diameter: 11, wll_0_45: 2.00, wll_45_60: 1.40 },
    { diameter: 12, wll_0_45: 2.30, wll_45_60: 1.70 },
    { diameter: 13, wll_0_45: 2.80, wll_45_60: 2.00 },
    { diameter: 14, wll_0_45: 3.15, wll_45_60: 2.25 },
    { diameter: 16, wll_0_45: 4.20, wll_45_60: 3.00 },
    { diameter: 18, wll_0_45: 5.20, wll_45_60: 3.70 },
    { diameter: 20, wll_0_45: 6.50, wll_45_60: 4.60 },
    { diameter: 22, wll_0_45: 7.80, wll_45_60: 5.65 },
    { diameter: 24, wll_0_45: 9.40, wll_45_60: 6.70 },
    { diameter: 26, wll_0_45: 11.0, wll_45_60: 7.80 },
    { diameter: 28, wll_0_45: 12.5, wll_45_60: 9.00 },
    { diameter: 32, wll_0_45: 16.5, wll_45_60: 11.8 },
    { diameter: 36, wll_0_45: 21.0, wll_45_60: 15.0 },
    { diameter: 40, wll_0_45: 26.0, wll_45_60: 18.5 },
    { diameter: 44, wll_0_45: 31.5, wll_45_60: 22.5 },
    { diameter: 48, wll_0_45: 37.0, wll_45_60: 26.0 },
    { diameter: 52, wll_0_45: 44.0, wll_45_60: 31.5 },
    { diameter: 56, wll_0_45: 50.0, wll_45_60: 36.0 },
    { diameter: 60, wll_0_45: 58.0, wll_45_60: 42.0 },
  ],
  threeFourLeg: [
    { diameter: 8, wll_0_45: 1.55, wll_45_60: 1.10 },
    { diameter: 9, wll_0_45: 2.00, wll_45_60: 1.40 },
    { diameter: 10, wll_0_45: 2.40, wll_45_60: 1.70 },
    { diameter: 11, wll_0_45: 3.00, wll_45_60: 2.12 },
    { diameter: 12, wll_0_45: 3.55, wll_45_60: 2.50 },
    { diameter: 13, wll_0_45: 4.15, wll_45_60: 3.00 },
    { diameter: 14, wll_0_45: 4.80, wll_45_60: 3.40 },
    { diameter: 16, wll_0_45: 6.30, wll_45_60: 4.50 },
    { diameter: 18, wll_0_45: 7.80, wll_45_60: 5.65 },
    { diameter: 20, wll_0_45: 9.80, wll_45_60: 6.90 },
    { diameter: 22, wll_0_45: 11.8, wll_45_60: 8.40 },
    { diameter: 24, wll_0_45: 14.0, wll_45_60: 10.00 },
    { diameter: 26, wll_0_45: 16.5, wll_45_60: 11.5 },
    { diameter: 28, wll_0_45: 19.0, wll_45_60: 13.5 },
    { diameter: 32, wll_0_45: 25.0, wll_45_60: 17.5 },
    { diameter: 36, wll_0_45: 31.5, wll_45_60: 22.5 },
    { diameter: 40, wll_0_45: 39.0, wll_45_60: 28.0 },
    { diameter: 44, wll_0_45: 47.0, wll_45_60: 33.5 },
    { diameter: 48, wll_0_45: 55.0, wll_45_60: 40.0 },
    { diameter: 52, wll_0_45: 66.0, wll_45_60: 47.0 },
    { diameter: 56, wll_0_45: 76.0, wll_45_60: 54.0 },
    { diameter: 60, wll_0_45: 88.0, wll_45_60: 63.0 },
  ],
  endless: [
    { diameter: 8, wll: 1.20 },
    { diameter: 9, wll: 1.50 },
    { diameter: 10, wll: 1.85 },
    { diameter: 11, wll: 2.25 },
    { diameter: 12, wll: 2.70 },
    { diameter: 13, wll: 3.15 },
    { diameter: 14, wll: 3.70 },
    { diameter: 16, wll: 4.80 },
    { diameter: 18, wll: 6.00 },
    { diameter: 20, wll: 7.35 },
    { diameter: 22, wll: 9.00 },
    { diameter: 24, wll: 10.6 },
    { diameter: 26, wll: 12.5 },
    { diameter: 28, wll: 14.5 },
    { diameter: 32, wll: 19.0 },
    { diameter: 36, wll: 23.5 },
    { diameter: 40, wll: 30.0 },
    { diameter: 44, wll: 36.0 },
    { diameter: 48, wll: 42.0 },
    { diameter: 52, wll: 50.0 },
    { diameter: 56, wll: 58.0 },
    { diameter: 60, wll: 67.0 },
  ],
};

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productDatabase[productId] : null;
  const [expandedHook, setExpandedHook] = useState<string | null>(null);
  const [activeSlingTab, setActiveSlingTab] = useState<'one' | 'two' | 'three' | 'endless'>('one');

  if (!product) {
    return (
      <>
        <Helmet>
          <title>Product Not Found | Marino Corporation</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="container-modern py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
            <p className="text-slate-600 mb-6">The product you're looking for doesn't exist or has been moved.</p>
            <Link to="/products" className="text-emerald-600 hover:underline inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to All Products
            </Link>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const whatsappMessage = `Hello, I am interested in ${product.name}. Please provide pricing and availability details.`;

  return (
    <>
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://marinoindia.co.in/product/${productId}`} />
        
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": `https://marinoindia.co.in${product.image}`,
            "description": product.description,
            "brand": {
              "@type": "Brand",
              "name": "Marino Corporation"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://marinoindia.co.in/product/${productId}`,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Marino Corporation Of India",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "28, Orphangunj Road, Kidderpore",
                  "addressLocality": "Kolkata",
                  "addressRegion": "West Bengal",
                  "postalCode": "700023",
                  "addressCountry": "IN"
                }
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Marino Corporation Of India"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": product.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>

        {/* Breadcrumb */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://marinoindia.co.in" },
              { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://marinoindia.co.in/products" },
              { "@type": "ListItem", "position": 3, "name": product.name, "item": `https://marinoindia.co.in/product/${productId}` }
            ]
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Marino Corporation Of India",
            "url": "https://marinoindia.co.in",
            "logo": "https://marinoindia.co.in/logo/logo_marino.jpeg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919831144669",
              "contactType": "sales",
              "areaServed": ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Pune", "Ahmedabad", "Kolkata"],
              "availableLanguage": ["English", "Hindi"]
            }
          })}
        </script>

        {/* Open Graph */}
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://marinoindia.co.in/product/${productId}`} />
        <meta property="og:image" content={`https://marinoindia.co.in${product.image}`} />
        <meta property="product:availability" content="in stock" />
        <meta property="product:condition" content="new" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Breadcrumb */}
          <div className="bg-slate-50 border-b border-slate-100">
            <div className="container-modern py-4">
              <nav className="flex items-center gap-2 text-sm text-slate-600">
                <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:text-emerald-600 transition-colors">Products</Link>
                <span>/</span>
                <span className="text-slate-900 font-medium">{product.name}</span>
              </nav>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-12 bg-white">
            <div className="container-modern">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Image */}
                <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center border border-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-80 w-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div>
                  <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    {product.category}
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {product.longDescription}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.slice(0, 5).map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a
                      href={`https://wa.me/919831144669?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="btn-primary gap-2">
                        <Phone className="w-5 h-5" />
                        Get Quote on WhatsApp
                      </Button>
                    </a>
                    <Link to="/catalogue/Marino_Wire_Rope_Sling_Catalog_2.pdf" target="_blank">
                      <Button size="lg" variant="outline" className="btn-secondary gap-2">
                        <Download className="w-5 h-5" />
                        Download Catalogue
                      </Button>
                    </Link>
                  </div>

                  {/* Trust badges */}
                  <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      ISO Certified
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      All India Delivery
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      Test Certified
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-sm text-slate-500 mb-3">For bulk orders and custom requirements:</p>
                    <div className="space-y-2 text-sm">
                      <a href="tel:9831144669" className="flex items-center gap-2 text-slate-700 hover:text-emerald-600">
                        <Phone className="w-4 h-4" />
                        9831144669 (Binny)
                      </a>
                      <a href="mailto:marinocoindia@gmail.com" className="flex items-center gap-2 text-slate-700 hover:text-emerald-600">
                        <Mail className="w-4 h-4" />
                        marinocoindia@gmail.com
                      </a>
                      <div className="flex items-center gap-2 text-slate-700">
                        <MapPin className="w-4 h-4" />
                        Kolkata - Delivery across India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hook Product Types - Card Grid */}
          {productId === 'hooks' && (
            <section className="py-16 bg-slate-50">
              <div className="container-modern">
                {/* Banner Image */}
                <div className="mb-8">
                  <img
                    src="/images/hook_types/Banner-Galv-Hooks.jpg"
                    alt="Galvanised Hooks Banner"
                    className="w-full h-auto rounded-xl shadow-md"
                    loading="lazy"
                  />
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Hooks</h2>
                <p className="text-slate-600 mb-8 max-w-3xl">
                  Browse our comprehensive range of Grade 8 lifting hooks. Each type is designed for specific applications and connection methods. Click any product to view dimensions and weights.
                </p>
                
                {/* 3-Column Grid matching reference site */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hookProductData.map((hook) => (
                    <div
                      key={hook.id}
                      className="bg-slate-700 rounded-lg shadow-md overflow-hidden flex flex-col group hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                      onClick={() => setExpandedHook(expandedHook === hook.id ? null : hook.id)}
                    >
                      {/* Dark Blue Header Bar */}
                      <div className="bg-slate-600 px-4 py-3 border-b border-slate-500">
                        <h3 className="font-semibold text-white text-center text-sm leading-tight">{hook.name}</h3>
                      </div>
                      {/* Product Image on Dark Background */}
                      <div className="relative aspect-[4/3] bg-slate-700 p-4 flex items-center justify-center">
                        <img
                          src={hook.image}
                          alt={hook.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.src = '/images/hooks.jpeg'; }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Product Gallery - Turnbuckles */}
          {productId === 'turnbuckles' && (
            <section className="py-16 bg-slate-50">
              <div className="container-modern">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Turnbuckle Types Gallery</h2>
                <p className="text-slate-600 mb-8 max-w-3xl">
                  Browse our comprehensive range of galvanised and stainless steel turnbuckles. Available in multiple configurations for various tensioning applications.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { src: '/images/Turn_buckles.png', alt: 'Turnbuckles main', label: 'Turnbuckles' },
                    { src: '/images/steelwirerope/galvanised-turnbuckles_1.jpg', alt: 'Galvanised turnbuckles', label: 'Galvanised Turnbuckles' },
                  ].map((img, i) => (
                    <div key={i} className="relative group overflow-hidden rounded-xl bg-white border border-slate-200">
                      <div className="aspect-square">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.src = '/images/Turn_buckles.png'; }}
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <p className="text-white text-sm font-medium text-center">{img.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Product Gallery */}
          {productId === 'wire-rope-slings' && (
            <section className="py-16 bg-slate-50">
              <div className="container-modern">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Product Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { src: '/images/slings_new/sling_bundle_coiled.jpeg', alt: 'Wire rope slings bundle coiled' },
                    { src: '/images/slings_new/sling_4leg_masterlink.jpeg', alt: '4-leg wire rope sling with master link' },
                    { src: '/images/slings_new/sling_multiple_fittings.jpeg', alt: 'Multiple wire rope slings with end fittings' },
                    { src: '/images/slings_new/wire_rope_reel.jpeg', alt: 'Large wire rope reel' },
                    { src: '/images/slings_new/sling_2leg_red_masterlink.jpeg', alt: '2-leg wire rope sling with red master link' },
                    { src: '/images/slings_new/sling_heavy_duty_fittings.jpeg', alt: 'Heavy duty wire rope slings with large fittings' },
                    { src: '/images/slings_new/sling_workshop_assembly.jpg', alt: 'Workers assembling large multi-leg sling' },
                    { src: '/images/slings_new/wire_rope_closeup.jpeg', alt: 'Close-up of wire rope construction' },
                  ].map((img, i) => (
                    <div key={i} className="relative group overflow-hidden rounded-xl aspect-square bg-white border border-slate-200">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Specifications - Hidden for Hooks and Wire Rope Slings */}
          {productId !== 'hooks' && productId !== 'wire-rope-slings' && (
            <section className="py-16 bg-white">
              <div className="container-modern">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Technical Specifications</h2>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value], i) => (
                          <tr key={key} className={i % 2 === 0 ? 'bg-slate-50/50' : ''}>
                            <td className="px-6 py-4 font-medium text-slate-700 w-1/3 border-b border-slate-100">{key}</td>
                            <td className="px-6 py-4 text-slate-600 border-b border-slate-100">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* IS 2266:2024 Loading Capacity Tables - Only for Wire Rope Slings */}
          {productId === 'wire-rope-slings' && (
            <section className="py-16 bg-white">
              <div className="container-modern">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    Wire Rope Loading Capacity Tables
                  </h2>
                  <p className="text-slate-600">
                    Minimum Breaking Force (MBF) and Working Load Limit (WLL) as per <strong>IS 2266:2024</strong> standard. 
                    WLL calculated with 5:1 safety factor. All values in kilonewtons (kN).
                  </p>
                </div>

                {/* 6×19 Construction Table */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    6×19 Construction (6×19M 12/6-1)
                  </h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b">Diameter (mm)</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1570 Grade</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1770 Grade</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1960 Grade</th>
                          </tr>
                          <tr className="bg-slate-50">
                            <th className="px-4 py-2 text-left text-xs text-slate-500 border-b"></th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { d: 6, fc1570: 17.4, iwrc1570: 18.8, fc1770: 19.6, iwrc1770: 21, fc1960: 22, iwrc1960: 23 },
                            { d: 8, fc1570: 31, iwrc1570: 33, fc1770: 35, iwrc1770: 38, fc1960: 39, iwrc1960: 42 },
                            { d: 10, fc1570: 48, iwrc1570: 52, fc1770: 54, iwrc1770: 59, fc1960: 60, iwrc1960: 65 },
                            { d: 12, fc1570: 69, iwrc1570: 75, fc1770: 78, iwrc1770: 85, fc1960: 87, iwrc1960: 94 },
                            { d: 14, fc1570: 95, iwrc1570: 102, fc1770: 107, iwrc1770: 115, fc1960: 118, iwrc1960: 128 },
                            { d: 16, fc1570: 124, iwrc1570: 133, fc1770: 139, iwrc1770: 150, fc1960: 154, iwrc1960: 167 },
                            { d: 20, fc1570: 193, iwrc1570: 208, fc1770: 218, iwrc1770: 235, fc1960: 241, iwrc1960: 260 },
                            { d: 24, fc1570: 278, iwrc1570: 300, fc1770: 313, iwrc1770: 338, fc1960: 347, iwrc1960: 375 },
                            { d: 32, fc1570: 494, iwrc1570: 534, fc1770: 557, iwrc1770: 602, fc1960: 617, iwrc1960: 666 },
                          ].map((row, i) => (
                            <tr key={row.d} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              <td className="px-4 py-3 font-medium text-slate-900 border-b">{row.d} mm</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1570} <span className="text-xs text-slate-400">({Math.round(row.fc1570/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1570} <span className="text-xs text-slate-400">({Math.round(row.iwrc1570/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1770} <span className="text-xs text-slate-400">({Math.round(row.fc1770/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1770} <span className="text-xs text-slate-400">({Math.round(row.iwrc1770/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1960} <span className="text-xs text-slate-400">({Math.round(row.fc1960/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1960} <span className="text-xs text-slate-400">({Math.round(row.iwrc1960/5)}T)</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="px-4 py-3 bg-slate-50 text-xs text-slate-500">
                      Values shown: Minimum Breaking Force (MBF) in kN. Values in brackets: Approximate Working Load Limit (WLL) in tonnes at 5:1 safety factor.
                    </div>
                  </div>
                </div>

                {/* 6×36 Construction Table */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    6×36 Construction (6×36SW 14-7+7-7-1)
                  </h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-100">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b">Diameter (mm)</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1570 Grade</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1770 Grade</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>1960 Grade</th>
                          </tr>
                          <tr className="bg-slate-50">
                            <th className="px-4 py-2 text-left text-xs text-slate-500 border-b"></th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">FC Core</th>
                            <th className="px-4 py-2 text-center text-xs text-slate-500 border-b">IWRC</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { d: 8, fc1570: 33, iwrc1570: 36, fc1770: 37, iwrc1770: 40, fc1960: 41, iwrc1960: 45 },
                            { d: 10, fc1570: 52, iwrc1570: 56, fc1770: 58, iwrc1770: 63, fc1960: 65, iwrc1960: 70 },
                            { d: 12, fc1570: 75, iwrc1570: 81, fc1770: 84, iwrc1770: 91, fc1960: 93, iwrc1960: 101 },
                            { d: 14, fc1570: 102, iwrc1570: 110, fc1770: 115, iwrc1770: 124, fc1960: 127, iwrc1960: 137 },
                            { d: 16, fc1570: 133, iwrc1570: 143, fc1770: 150, iwrc1770: 162, fc1960: 166, iwrc1960: 179 },
                            { d: 20, fc1570: 207, iwrc1570: 224, fc1770: 234, iwrc1770: 252, fc1960: 259, iwrc1960: 279 },
                            { d: 24, fc1570: 298, iwrc1570: 322, fc1770: 336, iwrc1770: 363, fc1960: 372, iwrc1960: 402 },
                            { d: 32, fc1570: 530, iwrc1570: 573, fc1770: 598, iwrc1770: 646, fc1960: 662, iwrc1960: 715 },
                            { d: 40, fc1570: 829, iwrc1570: 895, fc1770: 934, iwrc1770: 1009, fc1960: 1035, iwrc1960: 1117 },
                          ].map((row, i) => (
                            <tr key={row.d} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              <td className="px-4 py-3 font-medium text-slate-900 border-b">{row.d} mm</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1570} <span className="text-xs text-slate-400">({Math.round(row.fc1570/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1570} <span className="text-xs text-slate-400">({Math.round(row.iwrc1570/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1770} <span className="text-xs text-slate-400">({Math.round(row.fc1770/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1770} <span className="text-xs text-slate-400">({Math.round(row.iwrc1770/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.fc1960} <span className="text-xs text-slate-400">({Math.round(row.fc1960/5)}T)</span></td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b">{row.iwrc1960} <span className="text-xs text-slate-400">({Math.round(row.iwrc1960/5)}T)</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="px-4 py-3 bg-slate-50 text-xs text-slate-500">
                      6×36 construction offers better flexibility than 6×19 but with slightly less abrasion resistance.
                    </div>
                  </div>
                </div>

                {/* Quick Reference Card */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                    <h4 className="font-bold text-emerald-900 mb-3">Safety Factor</h4>
                    <p className="text-emerald-800 text-sm mb-2">
                      Standard safety factor for wire rope slings is <strong>5:1</strong>
                    </p>
                    <p className="text-emerald-700 text-xs">
                      WLL = Minimum Breaking Force ÷ 5
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-3">Grade Selection</h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>• <strong>1570 MPa</strong>: Standard duty</li>
                      <li>• <strong>1770 MPa</strong>: Most common (EIPS)</li>
                      <li>• <strong>1960 MPa</strong>: High strength</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                    <h4 className="font-bold text-amber-900 mb-3">Core Types</h4>
                    <ul className="text-amber-800 text-sm space-y-1">
                      <li>• <strong>FC</strong>: Fiber Core - More flexible</li>
                      <li>• <strong>IWRC</strong>: Steel Core - 7.5% stronger</li>
                    </ul>
                  </div>
                </div>

                {/* Sling Angle Warning */}
                <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                  <h4 className="font-bold text-amber-900 mb-2">⚠️ Sling Angle Effect on Capacity</h4>
                  <p className="text-amber-800 text-sm">
                    The Working Load Limit decreases as the sling angle from horizontal decreases. 
                    At a 60° included angle between sling legs, the capacity is reduced by 50%. 
                    Never use horizontal angles less than 30°. Formula: Effective WLL = WLL × sin(θ÷2)
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Wire Rope Sling Working Load Limit Tables - Steel Core 6x19, 6x36 & 8x36 */}
          {productId === 'wire-rope-slings' && (
            <section className="py-16 bg-slate-50">
              <div className="container-modern">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    Wire Rope Sling Working Load Limits
                  </h2>
                  <p className="text-slate-600">
                    Working Load Limits (WLL) in tonnes for <strong>Steel Core (6×19, 6×36 & 8×36)</strong> wire rope slings. 
                    Values shown are for Direct attachment (choke hitch for endless). Meets EN 13414-1 standard.
                  </p>
                </div>

                {/* Popular Wire Rope Slings Image */}
                <div className="mb-8">
                  <img
                    src="/images/popular_wire_rope_slings.png"
                    alt="Popular Wire Rope Slings - Working Load Limits Chart"
                    className="w-full max-w-4xl mx-auto rounded-xl shadow-md border border-slate-200"
                    loading="lazy"
                  />
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    { id: 'one', label: 'One Leg Sling', icon: '1' },
                    { id: 'two', label: 'Two Leg Sling', icon: '2' },
                    { id: 'three', label: 'Three & Four Leg', icon: '3/4' },
                    { id: 'endless', label: 'Endless Sling', icon: '∞' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSlingTab(tab.id as typeof activeSlingTab)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${
                        activeSlingTab === tab.id
                          ? 'bg-emerald-600 text-white shadow-md'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        activeSlingTab === tab.id ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {tab.icon}
                      </span>
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* One Leg Sling Table */}
                {activeSlingTab === 'one' && (
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 bg-slate-100 border-b border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900">One Leg Sling (Direct)</h3>
                      <p className="text-sm text-slate-600">Angle to Vertical: 0° | Leg Factor (K<sub>L</sub>): 1.0</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b">Rope Diameter</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b">Working Load Limit (Tonnes)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {slingCapacityData.oneLeg.map((row, i) => (
                            <tr key={row.diameter} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              <td className="px-4 py-3 font-medium text-slate-900 border-b">{row.diameter} mm</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b font-semibold text-emerald-700">{row.wll.toFixed(2)}</td>
                            </tr>
                          ))}
                          <tr className="bg-emerald-50">
                            <td className="px-4 py-3 font-medium text-slate-900 border-b">Leg Factor <em>K</em><sub><em>L</em></sub></td>
                            <td className="px-4 py-3 text-center font-bold text-emerald-700 border-b">1.0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Two Leg Sling Table */}
                {activeSlingTab === 'two' && (
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 bg-slate-100 border-b border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900">Two Leg Sling (Direct)</h3>
                      <p className="text-sm text-slate-600">Working Load Limits vary by angle to vertical</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b" rowSpan={2}>Rope Diameter</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>Working Load Limits (Tonnes)</th>
                          </tr>
                          <tr>
                            <th className="px-4 py-2 text-center text-xs font-semibold text-slate-600 border-b bg-slate-100">Angle to Vertical<br/>0° - 45°</th>
                            <th className="px-4 py-2 text-center text-xs font-semibold text-slate-600 border-b bg-slate-100">Angle to Vertical<br/>45° - 60°</th>
                          </tr>
                        </thead>
                        <tbody>
                          {slingCapacityData.twoLeg.map((row, i) => (
                            <tr key={row.diameter} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              <td className="px-4 py-3 font-medium text-slate-900 border-b">{row.diameter} mm</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b font-semibold text-emerald-700">{row.wll_0_45.toFixed(2)}</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b font-semibold text-emerald-700">{row.wll_45_60.toFixed(2)}</td>
                            </tr>
                          ))}
                          <tr className="bg-emerald-50">
                            <td className="px-4 py-3 font-medium text-slate-900 border-b">Leg Factor <em>K</em><sub><em>L</em></sub></td>
                            <td className="px-4 py-3 text-center font-bold text-emerald-700 border-b">1.4</td>
                            <td className="px-4 py-3 text-center font-bold text-emerald-700 border-b">1.0</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Three & Four Leg Sling Table */}
                {activeSlingTab === 'three' && (
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 bg-slate-100 border-b border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900">Three & Four Leg Sling (Direct)</h3>
                      <p className="text-sm text-slate-600">Working Load Limits vary by angle to vertical. Note: 3 & 4 leg slings have same WLL ratings.</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b" rowSpan={2}>Rope Diameter</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b" colSpan={2}>Working Load Limits (Tonnes)</th>
                          </tr>
                          <tr>
                            <th className="px-4 py-2 text-center text-xs font-semibold text-slate-600 border-b bg-slate-100">Angle to Vertical<br/>0° - 45°</th>
                            <th className="px-4 py-2 text-center text-xs font-semibold text-slate-600 border-b bg-slate-100">Angle to Vertical<br/>45° - 60°</th>
                          </tr>
                        </thead>
                        <tbody>
                          {slingCapacityData.threeFourLeg.map((row, i) => (
                            <tr key={row.diameter} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              <td className="px-4 py-3 font-medium text-slate-900 border-b">{row.diameter} mm</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b font-semibold text-emerald-700">{row.wll_0_45.toFixed(2)}</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b font-semibold text-emerald-700">{row.wll_45_60.toFixed(2)}</td>
                            </tr>
                          ))}
                          <tr className="bg-emerald-50">
                            <td className="px-4 py-3 font-medium text-slate-900 border-b">Leg Factor <em>K</em><sub><em>L</em></sub></td>
                            <td className="px-4 py-3 text-center font-bold text-emerald-700 border-b">2.1</td>
                            <td className="px-4 py-3 text-center font-bold text-emerald-700 border-b">1.5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Endless Sling Table */}
                {activeSlingTab === 'endless' && (
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 bg-slate-100 border-b border-slate-200">
                      <h3 className="text-lg font-bold text-slate-900">Endless Sling (Choke Hitch)</h3>
                      <p className="text-sm text-slate-600">Angle to Vertical: 0° | Leg Factor (K<sub>L</sub>): 1.6</p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50">
                          <tr>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b">Rope Diameter</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700 border-b">Working Load Limit (Tonnes)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {slingCapacityData.endless.map((row, i) => (
                            <tr key={row.diameter} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                              <td className="px-4 py-3 font-medium text-slate-900 border-b">{row.diameter} mm</td>
                              <td className="px-4 py-3 text-center text-slate-600 border-b font-semibold text-emerald-700">{row.wll.toFixed(2)}</td>
                            </tr>
                          ))}
                          <tr className="bg-emerald-50">
                            <td className="px-4 py-3 font-medium text-slate-900 border-b">Leg Factor <em>K</em><sub><em>L</em></sub></td>
                            <td className="px-4 py-3 text-center font-bold text-emerald-700 border-b">1.6</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Leg Factor Explanation */}
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Leg Factor (K<sub>L</sub>) Explained
                    </h4>
                    <p className="text-blue-800 text-sm mb-3">
                      The Leg Factor is a multiplier used to calculate the total sling capacity based on the number of legs and their angle.
                    </p>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• <strong>1.0</strong> = Single leg (direct)</li>
                      <li>• <strong>1.4</strong> = Two legs at 0°-45° angle</li>
                      <li>• <strong>2.1</strong> = Three legs at 0°-45° angle</li>
                      <li>• <strong>1.6</strong> = Endless/choke hitch</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                    <h4 className="font-bold text-amber-900 mb-3">⚠️ Important Safety Notes</h4>
                    <ul className="text-amber-800 text-sm space-y-2">
                      <li>• Never exceed the Working Load Limit</li>
                      <li>• Capacity decreases as sling angle increases</li>
                      <li>• For 3-leg slings, if one leg is not loaded, use 2-leg WLL</li>
                      <li>• For 4-leg slings, typically only 2 legs carry the load</li>
                      <li>• Always inspect slings before use</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Stud Link Anchor Cables Table - Only for Industrial Chains */}
          {productId === 'industrial-chains' && (
            <section className="py-16 bg-white">
              <div className="container-modern">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                    Strength for Stud Link Anchor Cables
                  </h2>
                  <p className="text-slate-600 mb-6">
                    Technical specifications for stud link anchor chains. Proof Load and Break Load values in kN for different chain grades.
                  </p>
                  
                  {/* PDF Download Button */}
                  <a
                    href="/catalogue/Strength-for-stud-link-anchor-cables.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download Full Table (PDF)
                  </a>
                </div>

                {/* Stud Link Anchor Cables Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-emerald-700">
                        <tr>
                          <th rowSpan={2} className="px-3 py-3 text-center font-semibold text-white border-r border-emerald-600">Chain Diameter</th>
                          <th colSpan={2} className="px-3 py-2 text-center font-semibold text-white border-r border-emerald-600">Grade 1</th>
                          <th colSpan={2} className="px-3 py-2 text-center font-semibold text-white border-r border-emerald-600">Grade 2</th>
                          <th colSpan={2} className="px-3 py-2 text-center font-semibold text-white">Grade 3</th>
                        </tr>
                        <tr className="bg-emerald-800">
                          <th className="px-3 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Proof Load<br/>(kN)</th>
                          <th className="px-3 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Break Load<br/>(kN)</th>
                          <th className="px-3 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Proof Load<br/>(kN)</th>
                          <th className="px-3 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Break Load<br/>(kN)</th>
                          <th className="px-3 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Proof Load<br/>(kN)</th>
                          <th className="px-3 py-2 text-center font-medium text-emerald-100">Break Load<br/>(kN)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { dia: '1/2"', mm: '12.5', g1p: '46', g1b: '66', g2p: '66', g2b: '92', g3p: '-', g3b: '-' },
                          { dia: '9/16"', mm: '14', g1p: '58', g1b: '82', g2p: '82', g2b: '116', g3p: '-', g3b: '-' },
                          { dia: '5/8"', mm: '16', g1p: '76', g1b: '107', g2p: '107', g2b: '150', g3p: '-', g3b: '-' },
                          { dia: '11/16"', mm: '17.5', g1p: '89', g1b: '127', g2p: '127', g2b: '179', g3p: '-', g3b: '-' },
                          { dia: '3/4"', mm: '19', g1p: '105', g1b: '150', g2p: '150', g2b: '211', g3p: '-', g3b: '-' },
                          { dia: '13/16"', mm: '20.5', g1p: '123', g1b: '175', g2p: '175', g2b: '244', g3p: '244', g3b: '349' },
                          { dia: '7/8"', mm: '22', g1p: '140', g1b: '200', g2p: '200', g2b: '280', g3p: '280', g3b: '401' },
                          { dia: '15/16"', mm: '24', g1p: '167', g1b: '237', g2p: '237', g2b: '332', g3p: '332', g3b: '476' },
                          { dia: '1"', mm: '26', g1p: '194', g1b: '278', g2p: '278', g2b: '389', g3p: '389', g3b: '556' },
                          { dia: '1 1/8"', mm: '28', g1p: '225', g1b: '321', g2p: '321', g2b: '449', g3p: '449', g3b: '642' },
                          { dia: '1 3/16"', mm: '30', g1p: '257', g1b: '368', g2p: '368', g2b: '514', g3p: '514', g3b: '735' },
                          { dia: '1 1/4"', mm: '32', g1p: '291', g1b: '417', g2p: '417', g2b: '583', g3p: '583', g3b: '833' },
                          { dia: '1 5/16"', mm: '34', g1p: '328', g1b: '468', g2p: '468', g2b: '655', g3p: '655', g3b: '937' },
                          { dia: '1 3/8"', mm: '35', g1p: '366', g1b: '523', g2p: '523', g2b: '732', g3p: '732', g3b: '1050' },
                          { dia: '1 7/16"', mm: '38', g1p: '406', g1b: '581', g2p: '581', g2b: '812', g3p: '812', g3b: '1160' },
                          { dia: '1 1/2"', mm: '40', g1p: '454', g1b: '647', g2p: '647', g2b: '908', g3p: '908', g3b: '1290' },
                          { dia: '1 5/8"', mm: '42', g1p: '497', g1b: '711', g2p: '711', g2b: '994', g3p: '994', g3b: '1420' },
                          { dia: '1 3/4"', mm: '44', g1p: '560', g1b: '800', g2p: '800', g2b: '1120', g3p: '1120', g3b: '1600' },
                          { dia: '1 13/16"', mm: '46', g1p: '603', g1b: '861', g2p: '861', g2b: '1204', g3p: '1204', g3b: '1720' },
                          { dia: '1 7/8"', mm: '48', g1p: '664', g1b: '949', g2p: '949', g2b: '1328', g3p: '1328', g3b: '1900' },
                          { dia: '2"', mm: '50', g1p: '732', g1b: '1045', g2p: '1045', g2b: '1464', g3p: '1464', g3b: '2090' },
                        ].map((row, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-3 py-2 text-center font-semibold text-slate-900 border-r border-slate-200">
                              {row.dia}<br/><span className="text-xs text-slate-500">{row.mm}mm</span>
                            </td>
                            <td className="px-3 py-2 text-center text-emerald-700 border-r border-slate-200">{row.g1p}</td>
                            <td className="px-3 py-2 text-center text-red-600 border-r border-slate-200">{row.g1b}</td>
                            <td className="px-3 py-2 text-center text-emerald-700 border-r border-slate-200">{row.g2p}</td>
                            <td className="px-3 py-2 text-center text-red-600 border-r border-slate-200">{row.g2b}</td>
                            <td className="px-3 py-2 text-center text-emerald-700 border-r border-slate-200">{row.g3p}</td>
                            <td className="px-3 py-2 text-center text-red-600">{row.g3b}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm">
                    <strong>Note:</strong> The measurements in tables may vary between different models. Sotra Anchor & Chain AS can not be held responsible for any deviate between tables and delivered equipment.
                  </div>
                </div>

                {/* Studless Chain Tables */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Studless Chain Specifications
                  </h3>
                  
                  {/* Table 1 - Main Studless Chain Data */}
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-emerald-700">
                          <tr>
                            <th className="px-3 py-3 text-center font-semibold text-white border-r border-emerald-600">Inside Pitch</th>
                            <th className="px-3 py-3 text-center font-semibold text-white border-r border-emerald-600">Weight per mtr</th>
                            <th className="px-3 py-3 text-center font-semibold text-white border-r border-emerald-600">Breakload Grade 2</th>
                            <th className="px-3 py-3 text-center font-semibold text-white border-r border-emerald-600">Breakload Grade 3</th>
                            <th className="px-3 py-3 text-center font-semibold text-white">Length</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { pitch: '45 × 18 mm', weight: '3.5 Kgs', bl2: '98 kN', bl3: '-', length: '50 mtr Ta' },
                            { pitch: '99 × 32 mm', weight: '4.5 Kgs', bl2: '132.5 kN', bl3: '-', length: '50 mtr Ta' },
                            { pitch: '119 × 34 mm', weight: '6.3 Kgs', bl2: '187 kN', bl3: '184.8 kN', length: '100 mtr Ta' },
                            { pitch: '127 × 34 mm', weight: '8.6 Kgs', bl2: '290 kN', bl3: '260.6 kN', length: '100 mtr Ta' },
                            { pitch: '96 × 36 mm', weight: '11.5 Kgs', bl2: '298.9 kN', bl3: '349.4 kN', length: '100 mtr Ta' },
                            { pitch: '104 × 39 mm', weight: '14 Kgs', bl2: '350.8 kN', bl3: '415.8 kN', length: '100 mtr Ta' },
                            { pitch: '112 × 42 mm', weight: '16 Kgs', bl2: '405.9 kN', bl3: '488 kN', length: '50/55 mtr Ta' },
                            { pitch: '120 × 45 mm', weight: '18.5 Kgs', bl2: '467.5 kN', bl3: '566 kN', length: '50/55 mtr Ta' },
                            { pitch: '60 × 20 mm', weight: '1.75 Kgs', bl2: '91.2 kN', bl3: '649.8 kN', length: '100 mtr' },
                            { pitch: '81 × 22 mm', weight: '2.9 Kgs', bl2: '184.95 kN', bl3: '-', length: '50 mtr' },
                            { pitch: '100 × 26 mm', weight: '4.3 Kgs', bl2: '279.98 kN', bl3: '-', length: '50 mtr' },
                            { pitch: '100 × 28 mm', weight: '6.5 Kgs', bl2: '395.01 kN', bl3: '-', length: '50 mtr' },
                            { pitch: '120 × 32 mm', weight: '8.5 Kgs', bl2: '529.95 kN', bl3: '-', length: '50 mtr' },
                            { pitch: '140 × 41 mm', weight: '11.2 Kgs', bl2: '684.99 kN', bl3: '-', length: '50 mtr' },
                          ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                              <td className="px-3 py-2 text-center font-semibold text-slate-900 border-r border-slate-200">{row.pitch}</td>
                              <td className="px-3 py-2 text-center text-slate-700 border-r border-slate-200">{row.weight}</td>
                              <td className="px-3 py-2 text-center text-red-600 border-r border-slate-200">{row.bl2}</td>
                              <td className="px-3 py-2 text-center text-red-600 border-r border-slate-200">{row.bl3}</td>
                              <td className="px-3 py-2 text-center text-slate-700">{row.length}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* PDF Download */}
                  <a
                    href="/catalogue/studless-chain.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download Studless Chain Table (PDF)
                  </a>
                </div>

                {/* Weight for Stud Link Anchor Chains */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                    Weight for Stud Link Anchor Chains
                  </h3>
                  
                  {/* Grade Legend */}
                  <div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-xs text-slate-600 font-medium mb-2">Grade Legend (5 values per cell):</p>
                    <div className="flex flex-wrap gap-3 text-xs">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">1st: U1 (Grade 1)</span>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded">2nd: U2 (Grade 2)</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded">3rd: U3 (Grade 3)</span>
                      <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded">4th: ORQ/ORM</span>
                      <span className="px-2 py-1 bg-rose-100 text-rose-800 rounded">5th: R3/R4</span>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs">
                        <thead className="bg-emerald-700">
                          <tr>
                            <th rowSpan={2} className="px-2 py-3 text-center font-semibold text-white border-r border-emerald-600">Diam<br/>(mm)</th>
                            <th colSpan={2} className="px-2 py-2 text-center font-semibold text-white border-r border-emerald-600">Chain Weights</th>
                            <th colSpan={7} className="px-2 py-2 text-center font-semibold text-white">Component Weights (Kgs)</th>
                          </tr>
                          <tr className="bg-emerald-800">
                            <th className="px-2 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Kgs/mtr</th>
                            <th className="px-2 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Kgs/27.5m</th>
                            <th className="px-2 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Common<br/>Link</th>
                            <th className="px-2 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Enlarged<br/>Link</th>
                            <th className="px-2 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">End<br/>Link</th>
                            <th className="px-2 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Kenter<br/>Shackle</th>
                            <th className="px-2 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Anchor<br/>Shackle</th>
                            <th className="px-2 py-2 text-center font-medium text-emerald-100 border-r border-emerald-600">Swivel</th>
                            <th className="px-2 py-2 text-center font-medium text-emerald-100">Swivel<br/>Shackle</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { dia: '12.5', w1: '3.5 / 4.4 / 5.8 / 7.0 / 8.1', w2: '96 / 121 / 160 / 193 / 223', cl: '0.17 / 0.24 / 0.36 / 0.47 / 0.60', el: '0.23 / 0.32 / 0.50 / 0.74 / 0.88', endl: '0.23 / 0.36 / 0.51 / 0.68 / 0.89', ks: '0.39 / 0.51 / 0.62 / 0.82 / 1.00', ast: '1.1 / 1.3 / 1.6 / 2.0 / 2.5', sw: '0.9 / 1.3 / 1.7 / 2.1 / 2.5', ss: '– / – / – / – / 9.0' },
                            { dia: '14', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '16', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '17.5', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '19', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '20.5', w1: '10.0 / 11.1 / 13.3 / 15.7 / 18.3', w2: '275 / 305 / 366 / 432 / 503', cl: '0.75 / 0.93 / 1.21 / 1.55 / 1.9', el: '1.10 / 1.25 / 1.70 / 2.15 / 2.8', endl: '1.13 / 1.28 / 1.77 / 2.20 / 2.9', ks: '1.35 / 1.6 / 2.0 / 2.7 / 3.3', ast: '3.3 / 4.0 / 5.0 / 6.0 / 8.0', sw: '3.1 / 3.5 / 5.0 / 6.0 / 7.5', ss: '11.3 / 13.9 / 18.1 / 23.9 / 29.6' },
                            { dia: '22', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '24', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '26', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '28', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '30', w1: '21.0 / 23.9 / 27.0 / 30.2 / 33.7', w2: '578 / 657 / 743 / 831 / 927', cl: '2.4 / 2.9 / 3.4 / 4.0 / 4.7', el: '3.2 / 3.9 / 4.7 / 5.5 / 6.1', endl: '3.3 / 4.0 / 5.0 / 5.9 / 6.8', ks: '3.9 / 4.6 / 5.8 / 6.6 / 7.8', ast: '9.5 / 12.0 / 14.0 / 17.0 / 20.0', sw: '9.0 / 11.0 / 13.5 / 16.0 / 19.0', ss: '35.4 / 44.6 / 53.7 / 62.9 / 71.9' },
                            { dia: '32', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '34', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '36', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '38', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '40', w1: '37.1 / 40.5 / 44.3 / 48.5 / 52.8', w2: '1020 / 1114 / 1218 / 1334 / 1452', cl: '5.5 / 6.4 / 7.4 / 8.5 / 9.8', el: '7.1 / 8.4 / 10.0 / 11.5 / 13.1', endl: '8.0 / 9.6 / 11.2 / 13.0 / 15.0', ks: '9.1 / 10.5 / 12.2 / 14.0 / 16.0', ast: '23.0 / 26.0 / 29.0 / 33 / 37', sw: '23.0 / 27.0 / 32.0 / 37.0 / 44.0', ss: '85.9 / 100.0 / 114.0 / 128.0 / 147.5' },
                            { dia: '42', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '44', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '46', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '48', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '50', w1: '57 / 62 / 66 / 71 / 77', w2: '1568 / 1705 / 1815 / 1953 / 2118', cl: '11 / 13 / 14 / 16 / 17', el: '15 / 17 / 19 / 21 / 23', endl: '17 / 20 / 22 / 23 / 25', ks: '18 / 20 / 20 / 24 / 28', ast: '41 / 45 / 50 / 54 / 65', sw: '57 / 57 / 67 / 67 / 80', ss: '167.0 / 186.5 / 206.0 / 232.5 / 259.0' },
                            { dia: '52', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '54', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '56', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '58', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '60', w1: '83 / 88 / 94 / 100 / 107', w2: '2283 / 2420 / 2585 / 2750 / 2943', cl: '19 / 21 / 23 / 25 / 27', el: '25 / 28 / 31 / 34 / 37', endl: '27 / 30 / 34 / 38 / 42', ks: '28 / 33 / 38 / 38 / 44', ast: '70 / 76 / 82 / 94 / 101', sw: '95 / 95 / 112 / 130 / 130', ss: '285.5 / 312.0 / 345.0 / 378.7 / 412.0' },
                            { dia: '62', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '64', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '66', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '68', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '70', w1: '114 / 124 / 135 / 142 / 154', w2: '3135 / 3410 / 3713 / 3905 / 4235', cl: '30 / 34 / 39 / 42 / 46', el: '40 / 45 / 50 / 55 / 61', endl: '45 / 52 / 59 / 63 / 70', ks: '44 / 51 / 58 / 65 / 74', ast: '108 / 124 / 141 / 150 / 171', sw: '152 / 172 / 194 / 194 / 220', ss: '451.2 / 510.0 / 575.0 / 623.4 / 696.0' },
                            { dia: '73', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '76', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '78', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '81', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '84', w1: '166 / 178 / 189 / 199 / 211', w2: '4565 / 4895 / 5198 / 5473 / 5803', cl: '52 / 58 / 64 / 68 / 75', el: '68 / 75 / 82 / 88 / 98', endl: '78 / 86 / 95 / 100 / 112', ks: '84 / 94 / 105 / 105 / 115', ast: '193 / 218 / 243 / 256 / 290', sw: '242 / 270 / 300 / 325 / 350', ss: '776.0 / 867.5 / 959.0 / 1020.0 / 1123.0' },
                            { dia: '87', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '90', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '92', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '95', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '97', w1: '220 / 234 / 243 / 266 / 287', w2: '6050 / 6435 / 6683 / 7315 / 7893', cl: '80 / 88 / 93 / 109 / 120', el: '102 / 112 / 120 / 140 / 160', endl: '120 / 130 / 138 / 158 / 175', ks: '135 / 150 / 150 / 175 / 200', ast: '305 / 335 / 350 / 410 / 445', sw: '350 / 385 / 420 / 495 / 535', ss: '1196.0 / 1310.0 / 1397.3 / 1615.5 / 1792.0' },
                            { dia: '100', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '102', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '107', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '111', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '114', w1: '304 / 317 / 345 / 375 / 400', w2: '8360 / 8718 / 9488 / 10313 / 11000', cl: '130 / 142 / 160 / 182 / 205', el: '173 / 185 / 210 / 235 / 260', endl: '193 / 210 / 235 / 260 / 305', ks: '225 / 225 / 267 / 315 / 370', ast: '475 / 505 / 550 / 600 / 675', sw: '570 / 610 / 650 / 720 / 760', ss: '1959.1 / 2126.1 / 2404.6 / 2683.0 / 3095.4' },
                            { dia: '117', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '122', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '127', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '132', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '137', w1: '436 / 467 / 489 / 535 / 570', w2: '11990 / 12843 / 13723 / 14713 / 15675', cl: '230 / 255 / 280 / 310 / 345', el: '285 / 325 / 395 / 410 / 455', endl: '330 / 375 / 410 / 460 / 510', ks: '390 / 450 / 505 / 545 / 605', ast: '750 / 900 / 1055 / 1200 / 1340', sw: '900 / 1100 / 1200 / 1400 / 1550', ss: '3507.9 / 3920.3 / 4332.7 / 4745.1 / 5157.6' },
                            { dia: '142', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '147', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '152', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '157', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                            { dia: '162', w1: '–', w2: '–', cl: '–', el: '–', endl: '–', ks: '–', ast: '–', sw: '–', ss: '–' },
                          ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                              <td className="px-2 py-2 text-center font-semibold text-slate-900 border-r border-slate-200 whitespace-nowrap">{row.dia}</td>
                              <td className="px-2 py-2 text-center text-slate-700 border-r border-slate-200 whitespace-nowrap">{row.w1}</td>
                              <td className="px-2 py-2 text-center text-slate-700 border-r border-slate-200 whitespace-nowrap">{row.w2}</td>
                              <td className="px-2 py-2 text-center text-slate-700 border-r border-slate-200 whitespace-nowrap">{row.cl}</td>
                              <td className="px-2 py-2 text-center text-slate-700 border-r border-slate-200 whitespace-nowrap">{row.el}</td>
                              <td className="px-2 py-2 text-center text-slate-700 border-r border-slate-200 whitespace-nowrap">{row.endl}</td>
                              <td className="px-2 py-2 text-center text-slate-700 border-r border-slate-200 whitespace-nowrap">{row.ks}</td>
                              <td className="px-2 py-2 text-center text-slate-700 border-r border-slate-200 whitespace-nowrap">{row.ast}</td>
                              <td className="px-2 py-2 text-center text-slate-700 border-r border-slate-200 whitespace-nowrap">{row.sw}</td>
                              <td className="px-2 py-2 text-center text-slate-700 whitespace-nowrap">{row.ss}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* PDF Download */}
                  <a
                    href="/catalogue/chains/weight-for-stud-link-anchor-chains.pdf"
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                    Download Weight Table (PDF)
                  </a>
                </div>
              </div>
            </section>
          )}

          {/* Turnbuckle Types Table - Only for Turnbuckles */}
          {productId === 'turnbuckles' && (
            <section className="py-16 bg-slate-50">
              <div className="container-modern">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Turnbuckle Types & Specifications</h2>
                <p className="text-slate-600 mb-8 max-w-3xl">
                  We stock a comprehensive range of galvanised and stainless steel turnbuckles. Select the appropriate type based on your end fitting requirements and load rating needs.
                </p>
                
                {/* Turnbuckle Types Grid */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-6 py-4 text-left font-semibold text-slate-700 border-b">Turnbuckle Type</th>
                          <th className="px-6 py-4 text-left font-semibold text-slate-700 border-b">Description</th>
                          <th className="px-6 py-4 text-left font-semibold text-slate-700 border-b">Size Range</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.turnbuckleTypes?.map((turnbuckle, i) => (
                          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                            <td className="px-6 py-4 font-medium text-slate-900 border-b">{turnbuckle.name}</td>
                            <td className="px-6 py-4 text-slate-600 border-b">{turnbuckle.description}</td>
                            <td className="px-6 py-4 text-slate-600 border-b">{turnbuckle.capacity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Turnbuckle Selection Guide */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                    <h4 className="font-bold text-emerald-900 mb-3">Tested Grade</h4>
                    <p className="text-emerald-800 text-sm mb-2">
                      For lifting and critical structural applications.
                    </p>
                    <p className="text-emerald-700 text-xs">
                      MBL = 5 × WLL. Test certificates provided. Meets ASTM F1145-92.
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <h4 className="font-bold text-blue-900 mb-3">Commercial Grade</h4>
                    <p className="text-blue-800 text-sm mb-2">
                      For general tensioning and non-critical applications.
                    </p>
                    <p className="text-blue-700 text-xs">
                      DIN1480 standard. Suitable for fencing, bracing, and guy wires.
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                    <h4 className="font-bold text-amber-900 mb-3">Stainless Steel</h4>
                    <p className="text-amber-800 text-sm mb-2">
                      For marine and corrosive environments.
                    </p>
                    <p className="text-amber-700 text-xs">
                      SS316 construction. Superior corrosion resistance for harsh conditions.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Applications */}
          <section className="py-16 bg-white">
            <div className="container-modern">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Applications</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.applications.map((app, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 flex items-center gap-3 border border-slate-100">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 bg-slate-50">
            <div className="container-modern">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 max-w-3xl">
                {product.faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="py-16 bg-white">
            <div className="container-modern">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Related Products</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.relatedProducts.map((relatedId) => {
                  const related = productDatabase[relatedId];
                  if (!related) return null;
                  return (
                    <Link 
                      key={relatedId}
                      to={`/product/${relatedId}`}
                      className="bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all group"
                    >
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                        loading="lazy"
                      />
                      <h3 className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {related.name}
                      </h3>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-emerald-600">
            <div className="container-modern text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Ready to Order {product.name}?
              </h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Get competitive pricing and fast delivery across India. Contact us now for a customized quote for your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/919831144669?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 gap-2">
                    <Phone className="w-5 h-5" />
                    Get Quote Now
                  </Button>
                </a>
                <a href="tel:9831144669">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700 gap-2">
                    <Phone className="w-5 h-5" />
                    Call Us
                  </Button>
                </a>
              </div>
              <p className="text-emerald-200 text-sm mt-6">
                Delivering to: Delhi • Mumbai • Bangalore • Chennai • Hyderabad • Pune • Ahmedabad • Kolkata
              </p>
            </div>
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ProductDetailPage;
