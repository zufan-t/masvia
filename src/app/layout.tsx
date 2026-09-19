import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masvia.vercel.app"),
  title: "Masvia - Jamu Celup Mahkota Dewa & Daun Stevia",
  description:
    "Kebaikan Alam dalam Setiap Seduhan. Minuman herbal praktis rendah gula berbahan dasar buah Mahkota Dewa dan daun Stevia alami.",
  applicationName: "Masvia",
  keywords: [
    "Masvia",
    "Jamu Celup Masvia",
    "Mahkota Dewa",
    "Daun Stevia",
    "Herbal Rendah Gula",
    "Minuman Diabetes",
    "Jamu Herbal Semarang",
  ],
  authors: [{ name: "Masvia Team" }],
  creator: "Masvia",
  publisher: "Masvia",
  icons: {
    icon: [
      { url: "/images/logo-masvia.png?v=2", type: "image/png" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    shortcut: "/images/logo-masvia.png?v=2",
    apple: [
      { url: "/images/logo-masvia.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://masvia.vercel.app",
    siteName: "Masvia",
    title: "Masvia - Jamu Celup Mahkota Dewa & Daun Stevia",
    description:
      "Kebaikan Alam dalam Setiap Seduhan. Minuman herbal praktis rendah gula berbahan dasar buah Mahkota Dewa dan daun Stevia alami.",
    images: [
      {
        url: "/images/logo-masvia.png",
        width: 800,
        height: 800,
        alt: "Logo Masvia",
      },
      {
        url: "/images/masvia-front.png",
        width: 800,
        height: 1000,
        alt: "Kemasan Jamu Celup Masvia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masvia - Jamu Celup Mahkota Dewa & Daun Stevia",
    description:
      "Kebaikan Alam dalam Setiap Seduhan. Minuman herbal praktis rendah gula berbahan dasar buah Mahkota Dewa dan daun Stevia alami.",
    images: ["/images/logo-masvia.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${anton.variable} ${plusJakartaSans.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#306D29] text-white selection:bg-[#FBF5DD] selection:text-[#1A1A1A] antialiased overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
