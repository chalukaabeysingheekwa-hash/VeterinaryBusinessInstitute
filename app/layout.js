import { Cormorant_Garamond, IBM_Plex_Mono, Manrope } from "next/font/google";
import { basePath } from "./lib/base-path";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import CookieBanner from "./components/CookieBanner";
import ExitIntentPopup from "./components/ExitIntentPopup";
import ChatWidget from "./components/ChatWidget";
import WhatsNewBanner from "./components/WhatsNewBanner";
import BackToTop from "./components/BackToTop";
import {
  contactAddress,
  contactDetails,
  marketingPageLink,
  panelFolderLink,
  podcastHubLink,
  socialLinks,
  webinarArchiveLink,
} from "./lib/site-data";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["500", "600"],
});

const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://www.veterinarybusinessinstitute.com";
const siteUrl = `${siteOrigin}${basePath}`;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veterinary Business Institute",
  url: siteUrl,
  logo: `${siteUrl}/assets/logo.svg`,
  email: "team@veterinarybusinessinstitute.com",
  telephone: contactDetails[0]?.label,
  address: {
    "@type": "PostalAddress",
    streetAddress: contactAddress,
  },
  sameAs: socialLinks.map((item) => item.href),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Veterinary Business Institute",
  url: siteUrl,
  description:
    "Veterinary leadership education, podcast episodes, event panel replays, webinar archives, and growth strategy support.",
  hasPart: [podcastHubLink, panelFolderLink, webinarArchiveLink, marketingPageLink],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Veterinary Business Institute | Practice Growth, Leadership, and Education",
  description:
    "Veterinary Business Institute helps veterinary leaders grow through podcasts, webinar replays, marketing guidance, and practical business education.",
  openGraph: {
    title: "Veterinary Business Institute",
    description:
      "Veterinary leadership education, podcast episodes, event panel replays, webinar archives, and growth strategy support.",
    type: "website",
    url: siteUrl,
    siteName: "Veterinary Business Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veterinary Business Institute",
    description:
      "Veterinary leadership education, podcast episodes, event panel replays, webinar archives, and growth strategy support.",
  },
};

export default function RootLayout({ children }) {
  // Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
  const gaId = "G-XXXXXXXXXX"; 

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply saved theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('vbi-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        {/* Replace GTM-XXXXXXX with your actual Google Tag Manager ID */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
        {/* Replace G-XXXXXXXXXX with your actual GA4 Measurement ID */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
        <script
          dangerouslySetInnerHTML={{
             __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Replace XXXXXXX with your Hotjar or MS Clarity tracking ID */}
        <script
          dangerouslySetInnerHTML={{
             __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:XXXXXXX,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `,
          }}
        />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable} ${plexMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <div className="site-shell">
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <SiteHeader />
          <main className="site-main">{children}</main>
          <SiteFooter />
          <CookieBanner />
          <ExitIntentPopup />
          <ChatWidget />
          <WhatsNewBanner />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
