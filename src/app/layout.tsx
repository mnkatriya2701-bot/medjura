import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-0SPHTNMFBB";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Medjura Lifecare Pvt. Ltd. | Ortho & Gynec Pharma",
    template: "%s | Medjura Lifecare",
  },
  description:
    "Medjura Lifecare Pvt. Ltd. — trusted pharma distribution company in Ahmedabad, Gujarat. Specialists in Ortho and Gynec divisions. Where Medicine Meets Justice.",
  keywords: [
    "Medjura Lifecare",
    "pharma distribution",
    "Ahmedabad",
    "Gujarat",
    "Jointcync",
    "Auramag D",
    "Mytocarn T+",
    "Chalixjura",
    "Vamachol-XT",
    "Primovelle",
    "ortho medicine",
    "gynec medicine",
  ],
  authors: [{ name: "Medjura Lifecare Pvt. Ltd." }],
  creator: "Medjura Lifecare Pvt. Ltd.",
  metadataBase: new URL("https://medjuralifecare.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://medjuralifecare.com",
    siteName: "Medjura Lifecare",
    title: "Medjura Lifecare Pvt. Ltd. | Ortho & Gynec Pharma",
    description:
      "Trusted pharma distribution in Ahmedabad — Ortho & Gynec specialists. Where Medicine Meets Justice.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medjura Lifecare Pvt. Ltd.",
    description: "Trusted pharma distribution — Ortho & Gynec specialists.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <WhatsAppButton />
      </body>
    </html>
  );
}
