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
  title: "Masvia - Jamu Celup Mahkota Dewa & Daun Stevia",
  description:
    "Kebaikan Alam dalam Setiap Seduhan. Minuman herbal praktis rendah gula berbahan dasar buah Mahkota Dewa dan daun Stevia alami.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo-masvia.png", type: "image/png" },
    ],
    apple: "/images/logo-masvia.png",
    shortcut: "/favicon.ico",
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
      className={`${anton.variable} ${plusJakartaSans.variable} scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#306D29] text-white selection:bg-[#FBF5DD] selection:text-[#1A1A1A] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
