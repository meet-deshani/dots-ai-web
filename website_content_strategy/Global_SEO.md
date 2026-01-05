# Global SEO Configuration

## index.html (Base Meta Tags)
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6YY65MG3TJ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-6YY65MG3TJ');
    </script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ZeroOne DOTS AI Consulting | AI Driven Data Operations Tech Strategy Solution</title>
    <meta name="description" content="ZeroOne DOTS AI Consulting scales founders with AI-driven Data, Operations, Tech & Strategy solutions. Zero billing until outcomes, building operational systems that compound." />
    <meta name="author" content="ZeroOne DOTS AI Consulting" />
    <meta name="keywords" content="data consulting, operations consulting, tech consulting, strategy consulting, data architecture, analytics stack, dashboard development, startup consulting, outcome-based consulting" />

    <meta property="og:title" content="ZeroOne DOTS AI Consulting | AI Driven Data Operations Tech Strategy Solution" />
    <meta property="og:description" content="Scale from 0 → 1 → ∞ with AI-driven Data, Operations, Tech & Strategy solutions. 100% outcome-driven." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/share-1200.png" />
    <meta property="og:image:alt" content="ZeroOne DOTS AI Consulting brand mark" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="ZeroOne DOTS AI Consulting | AI Driven Data Operations Tech Strategy Solution" />
    <meta name="twitter:description" content="Scale from 0 → 1 → ∞ with full-stack Data, Tech & Strategy consulting." />
    <meta name="twitter:image" content="/share-1200.png" />
    <meta name="twitter:image:alt" content="ZeroOne DOTS AI Consulting brand mark" />
    <meta name="theme-color" content="#050505" />

    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## src/components/SEO.tsx (Reusable Component)
```tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title,
    description,
    keywords = "Heat Exchanger Design, HTRI Consultant, Thermal Analysis, TEMA Standards",
    image = "/og-image.png",
    url
}: SEOProps) => {
    const siteTitle = "ZeroOne Outcome Engine";
    const fullTitle = `${title} | ${siteTitle}`;

    return (
        <Helmet>
            {/* Basic Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            {url && <meta property="og:url" content={url} />}
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
```
