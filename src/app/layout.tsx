import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AiChatWidget } from "@/components/AiChat";
import MobileActionBar from "@/components/MobileActionBar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "کلینیک زیبایی",
    "کلینیک آبین",
    "ابین کلینیک",
    "فیلر",
    "بوتاکس",
    "لیفت با نخ",
    "لیزر موهای زائد",
    "میکروبلیدینگ",
    "رینوپلاستی",
    "کلینیک زیبایی تهران",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "fa_IR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#b5566f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* فونت وزیرمتن از CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        {/* فضای هدر ثابت */}
        <div className="h-[68px] lg:h-[112px]" />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
        <AiChatWidget />
      </body>
    </html>
  );
}
