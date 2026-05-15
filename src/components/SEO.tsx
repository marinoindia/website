import { Helmet } from 'react-helmet-async';

type Props = {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageAlt?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const DEFAULT_OG_IMAGE = 'https://marinoindia.co.in/logo/logo_marino.jpeg';
const DEFAULT_OG_IMAGE_WIDTH = 1024;
const DEFAULT_OG_IMAGE_HEIGHT = 1024;
const DEFAULT_OG_IMAGE_ALT = 'Marino Corporation Of India logo';

export const SEO = ({
  title,
  description,
  canonical,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageWidth = DEFAULT_OG_IMAGE_WIDTH,
  ogImageHeight = DEFAULT_OG_IMAGE_HEIGHT,
  ogImageAlt = DEFAULT_OG_IMAGE_ALT,
  ogType = 'website',
  jsonLd,
}: Props) => {
  const ldBlocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en-IN" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={String(ogImageWidth)} />
      <meta property="og:image:height" content={String(ogImageHeight)} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Marino Corporation Of India" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {ldBlocks.map((block, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
