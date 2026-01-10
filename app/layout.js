import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

// --- FONTS ---
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Best practice for font loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// --- SEO CONFIGURATION ---
// Replace 'https://www.jaagosaran.com' with your actual domain when you buy it.
const SITE_URL = "https://www.jaagosaran.com"; 

export const metadata = {
  metadataBase: new URL(SITE_URL),
  
  // 1. Titles & Templates
  title: {
    default: "Jaago Saran | Building the Next Unicorns of Bihar",
    template: "%s | Jaago Saran",
  },
  
  // 2. Description (Based on your Hero Text)
  description: "Jaago Saran creates the infrastructure for hyper-growth in Bihar. We connect ambitious founders with global capital, military-grade incubation, and elite mentorship.",
  
  // 3. Keywords (For Google Search)
  keywords: [
    "Startup Bihar", 
    "Saran Incubator", 
    "Business Accelerator Bihar", 
    "Funding for Startups Bihar", 
    "Mentorship Patna", 
    "Jaago Saran", 
    "Entrepreneurship Bihar",
    "Angel Investors Bihar"
  ],

  // 4. Authors & Creator
  authors: [{ name: "Jaago Saran Team" }],
  creator: "Jaago Saran",
  publisher: "Jaago Saran",

  // 5. Open Graph (For beautiful links on LinkedIn, WhatsApp, Facebook)
  openGraph: {
    type: "website",
    locale: "en_IN", // English, India
    url: SITE_URL,
    title: "Jaago Saran - Building Bihar's Next Unicorns",
    description: "Join the movement. We analyze 500+ startup failures to build a system that removes luck. 12-week accelerator, funding access, and mentorship.",
    siteName: "Jaago Saran",
    images: [
      {
        url: "/logo.png", // Using your logo as the preview image
        width: 1200,
        height: 630,
        alt: "Jaago Saran Logo",
      },
    ],
  },

  // 6. Twitter Card (For Twitter sharing)
  twitter: {
    card: "summary_large_image",
    title: "Jaago Saran | Impact & Glory",
    description: "Connecting ambitious founders in Bihar with global capital and giants.",
    images: ["/logo.png"],
  },

  // 7. Icons (Favicon setup)
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  // 8. Robots (Allow Google to index the site)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// --- STRUCTURED DATA (JSON-LD) ---
// This tells Google exactly where you are located and what you do.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jaago Saran",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "description": "Jaago Saran creates the infrastructure for hyper-growth startups in Bihar.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Innovation Tower, 4th Floor",
    "addressLocality": "Saran",
    "addressRegion": "Bihar",
    "postalCode": "841301",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-98765-43210",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://twitter.com/jaagosaran",
    "https://linkedin.com/company/jaagosaran",
    "https://instagram.com/jaagosaran"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAFAFA] text-[#1a1b26]`}
      >
        {/* Inject JSON-LD for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}