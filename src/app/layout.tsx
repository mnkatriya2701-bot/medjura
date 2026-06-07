import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  metadataBase: new URL("https://medjuralifecre.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://medjuralifecre.com",
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
      </body>
    </html>
  );
}
