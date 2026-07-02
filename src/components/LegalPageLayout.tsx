import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

interface LegalPageLayoutProps {
  title: string;
  description: string;
  canonicalPath: string;
  lastUpdated: string;
  children: ReactNode;
}

// Shared wrapper for all legal / policy pages. Provides consistent SEO,
// header, prose styling and a "last updated" line.
const LegalPageLayout = ({ title, description, canonicalPath, lastUpdated, children }: LegalPageLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | Marino Corporation Of India</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://marinoindia.co.in${canonicalPath}/`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0d3d26] mb-2">{title}</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: {lastUpdated}</p>

            <div className="legal-prose space-y-6 text-[15px] leading-relaxed text-foreground/90 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#0d3d26] [&_h2]:mt-8 [&_h2]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-1 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1 [&_a]:text-emerald-700 [&_a]:underline">
              {children}
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default LegalPageLayout;
