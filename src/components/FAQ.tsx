import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
      'You can contact us by phone (+919831144669), email (marinocoindia@gmail.com), or through the enquiry form on our website. We deliver across India with reliable logistics and timely dispatch. We serve customers from Kolkata and Calcutta to all major cities in India.',
  },
  {
    question: 'How do I find a reliable wire rope, sling and chain supplier in India?',
    answer:
      'Look for a supplier with BIS-conformant products (e.g. IS 2266 for wire ropes), relevant certifications (MSME, IEC, ISO where applicable), experience in industrial and marine applications, and strong after-sales support. Marino Corporation Of India has over 40 years of experience as a wire rope, sling and chain supplier in Kolkata/Calcutta and across India, with quality assurance and pan-India delivery.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-2 sm:py-3 md:py-4 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="section-title text-[#0d3d26] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked
            <span className="text-[#0d3d26]"> Questions</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-1">
            Common questions about wire ropes, slings, and chains.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-[#0d3d26] font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
