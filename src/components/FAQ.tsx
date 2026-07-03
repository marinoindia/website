export const faqItems: { question: string; answer: string }[] = [
  {
    question: 'Why should I choose wire rope slings over other lifting solutions?',
    answer:
      'Wire rope slings offer high strength-to-weight ratio, durability, and resistance to abrasion and crushing. They are suitable for heavy-duty applications and can be supplied in BIS-compliant constructions (e.g. per IS 6594 and IS 2266) with various rope grades (1570, 1770, 1960) and fibre or steel core for different lifting needs. They require less maintenance than some alternatives and are widely used in cranes, excavators, and general engineering.',
  },
  {
    question: 'What types of slings do you offer?',
    answer:
      'We offer wire rope slings, chain slings, and related lifting equipment. Our wire rope slings are available in multiple constructions and grades to suit general engineering, cranes, and excavators. We also supply chain slings, shackles, hooks, turn buckles, pulley blocks, and safety and lifting tackles. Products can be selected or customized based on your load, environment, and compliance requirements.',
  },
  {
    question: 'What types of wire ropes are available and for which applications?',
    answer:
      'We supply steel wire ropes for general engineering purposes as per IS 2266, including common constructions such as 6×7, 6×19, 6×36, and 8×19 types, in rope grades 1570, 1770, 1960, and 2160 with fibre or steel core. These are used in cranes, excavators, hoisting, and other industrial applications. Sizes and constructions are available to match your diameter and breaking force requirements.',
  },
  {
    question: 'What types of chains do you supply?',
    answer:
      'We supply a range of industrial and marine chains including lifting chains, lashing chains, anchor chains, and chain slings. Our chain products are used in material handling, marine equipment, securing loads, and lifting applications. We can help you select the right type and grade for your use.',
  },
  {
    question: 'Are your wire ropes and slings safe for heavy-duty and marine use?',
    answer:
      'Yes. Our wire ropes and slings are manufactured to meet relevant Indian standards and are suitable for heavy-duty and marine applications. We maintain IS 2266 conformity for steel wire ropes for general engineering purposes. We are also MSME accredited and hold IEC for export-import. For marine and corrosive environments, galvanized or appropriately specified ropes can be supplied.',
  },
  {
    question: 'Can slings and chains be customized?',
    answer:
      'Yes. We offer customization in terms of length, configuration, end fittings, and specifications to match your application. Custom constructions and sizes can be supplied as agreed between manufacturer and purchaser, in line with standard practice.',
  },
  {
    question: 'What is the typical lifespan of wire rope slings and chains?',
    answer:
      'With proper use, inspection, and maintenance, wire rope slings and chains can last for many years. Lifespan depends on load, environment, abrasion, and care. Regular inspection and replacement when wear or damage is detected are essential for safety. We can advise on selection and care to maximize service life.',
  },
  {
    question: 'How do I get a quote and do you deliver across India?',
    answer:
      'You can call or WhatsApp us on +91 98311 44669, or email marinocoindia@gmail.com. We deliver across India with reliable logistics and timely dispatch. We serve customers from Kolkata and Calcutta to all major cities in India.',
  },
  {
    question: 'How do I find a reliable wire rope, sling and chain supplier in India?',
    answer:
      'Look for a supplier with BIS-conformant products (e.g. IS 2266 for wire ropes), relevant certifications (MSME, IEC), experience in industrial and marine applications, and strong after-sales support. Marino Corporation Of India has over 40 years of experience as a wire rope, sling and chain supplier in Kolkata/Calcutta and across India, with quality assurance and pan-India delivery.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-5 sm:py-6 md:py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-4">
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#0d3d26]">
            Frequently Asked
            <span className="text-[#0d3d26]"> Questions</span>
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">
            Common questions about wire ropes, slings, and chains.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Native <details> keeps every answer in the prerendered HTML, so the
              FAQPage JSON-LD on the homepage matches the visible content. */}
          {faqItems.map((item) => (
            <details key={item.question} className="group border-b border-border">
              <summary className="cursor-pointer list-none py-3 flex items-start justify-between gap-4 text-left text-[#0d3d26] font-semibold text-sm">
                <span>{item.question}</span>
                <span className="text-[#0d3d26] text-lg leading-none flex-shrink-0 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-muted-foreground text-xs leading-snug pb-3">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
