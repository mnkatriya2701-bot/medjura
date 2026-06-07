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
    default: "Medjura Lifecare Pvt. Ltd. | Ortho, Gynec & Physicians Pharma",
    template: "%s | Medjura Lifecare",
  },
  description:
    "Medjura Lifecare Pvt. Ltd. — trusted pharma distribution company in Ahmedabad, Gujarat. Specialists in Ortho, Gynec and Physicians divisions. Where Medicine Meets Justice.",
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
    "physicians medicine",
  ],
  authors: [{ name: "Medjura Lifecare Pvt. Ltd." }],
  creator: "Medjura Lifecare Pvt. Ltd.",
  metadataBase: new URL("https://medjuralifecare.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://medjuralifecare.com",
    siteName: "Medjura Lifecare",
    title: "Medjura Lifecare Pvt. Ltd. | Ortho, Gynec & Physicians Pharma",
    description:
      "Trusted pharma distribution in Ahmedabad — Ortho, Gynec & Physicians specialists. Where Medicine Meets Justice.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medjura Lifecare Pvt. Ltd.",
    description: "Trusted pharma distribution — Ortho, Gynec & Physicians specialists.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
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
