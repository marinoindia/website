import { Badge } from '@/components/ui/badge';
import msmeImg from '@/assets/logo/accreditation/msme.png';
import iecImg from '@/assets/logo/accreditation/IEC.png';
import is2266Img from '@/assets/logo/accreditation/IS2266.png';

const certifications = [
  {
    src: msmeImg,
    alt: 'MSME',
    label: 'MSME Accredited Company',
  },
  {
    src: iecImg,
    alt: 'IEC',
    label: 'Export Import License (IEC)',
  },
  {
    src: is2266Img,
    alt: 'IS 2266',
    label: 'IS 2266 Conformity',
  },
  {
    comingSoon: true,
    label: 'ISO 9001:2015',
    sublabel: 'Coming Soon',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-2 sm:py-3 md:py-4 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-2 sm:mb-3">
          <h2 className="section-title text-[#0d3d26] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Certifications
            <span className="text-[#0d3d26]"> & Accreditations</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg mt-1">
            Committed to quality and compliance.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {certifications.map((item, index) => (
              <div
                key={index}
                className="card-industrial p-3 sm:p-4 bg-muted/50 rounded-xl border border-border/50 flex flex-col items-center justify-center text-center min-h-[120px] sm:min-h-[140px]"
              >
                {'comingSoon' in item && item.comingSoon ? (
                  <>
                    <div className="text-[#0d3d26] font-semibold text-sm sm:text-base mb-1">
                      {item.label}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {item.sublabel}
                    </Badge>
                  </>
                ) : (
                  <>
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-12 sm:h-14 md:h-16 w-auto object-contain mb-2"
                      loading="lazy"
                    />
                    <span className="text-muted-foreground text-xs sm:text-sm font-medium">
                      {item.label}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
