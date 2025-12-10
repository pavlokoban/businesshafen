export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BusinessHafen",
              "url": "https://businesshafen.vercel.app/",
              "description":
                "BusinessHafen entwickelt KI-freundliche WordPress-Websites und bietet technische SEO sowie AI-Optimierung für Unternehmen in Deutschland und Frankfurt am Main.",
              "publisher": {
                "@type": "Organization",
                "name": "BusinessHafen"
              },
              "inLanguage": "de-DE"
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "BusinessHafen – KI-freundliche Webentwicklung & AI SEO",
              "url": "https://businesshafen.vercel.app/",
              "image": "https://businesshafen.vercel.app//og-image.jpg",
              "description":
                "Spezialist für KI-freundliche WordPress-Webentwicklung, technische SEO und AI-Optimierung in Frankfurt am Main.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Frankfurt am Main",
                "addressCountry": "DE"
              },
              "areaServed": [
                "Deutschland",
                "Frankfurt am Main",
                "Hessen"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/DEINPROFILE",
                "https://github.com/DEINGITHUB"
              ],
              "makesOffer": [
                {
                  "@type": "Service",
                  "name": "KI-freundliche Webentwicklung",
                  "description":
                    "Moderne WordPress-Websites mit klarer Struktur, hoher Performance und AI-Optimierung."
                },
                {
                  "@type": "Service",
                  "name": "AI SEO & Webseiten-Promotion",
                  "description":
                    "SEO-Optimierung für bessere Sichtbarkeit in Google und AI Overviews."
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Startseite – BusinessHafen",
              "url": "https://businesshafen.vercel.app/",
              "description":
                "Startseite von BusinessHafen – Ihr Partner für KI-freundliche WordPress-Webentwicklung & AI SEO in Frankfurt am Main.",
              "inLanguage": "de-DE",
              "isPartOf": {
                "@type": "WebSite",
                "url": "https://businesshafen.vercel.app/"
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Startseite",
                    "item": "https://businesshafen.vercel.app/"
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Startseite",
                  "item": "https://businesshafen.vercel.app/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Leistungen",
                  "item": "https://businesshafen.vercel.app//services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Webentwicklung",
                  "item": "https://businesshafen.vercel.app//web-development"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "SEO",
                  "item": "https://businesshafen.vercel.app//seo"
                }
              ]
            }
          ])
        }}
      />
    </>
  );
}
