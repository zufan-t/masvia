"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { List, X, ShoppingCart } from "@phosphor-icons/react";

const NAV_LINKS = [
  { name: "Beranda", href: "/" },
  { name: "Produk", href: "/produk" },
  { name: "Tentang", href: "/tentang" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [targetIndex, setTargetIndex] = useState<number | null>(null);

  const routeIndex = NAV_LINKS.findIndex((link) =>
    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
  );

  useEffect(() => {
    setTargetIndex(null);
  }, [pathname]);

  const activeIndex = targetIndex !== null ? targetIndex : routeIndex;

  return (
    <header className="sticky top-0 z-50 w-full bg-[#306D29]/95 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center p-2 shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden">
            <Image
              src="/images/logo-masvia.png"
              alt="Logo Masvia"
              width={56}
              height={56}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </Link>

        {/* Center Pill Navigation with sliding indicator (Desktop & Tablet) */}
        <nav className="hidden md:flex relative items-center bg-[#FBF5DD] rounded-full p-1.5 shadow-inner min-w-[420px]">
          {/* Animated sliding indicator pill */}
          {activeIndex >= 0 && (
            <div
              className="absolute top-1 bottom-1 left-1 rounded-full bg-black shadow-md will-change-transform pointer-events-none transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                width: `calc((100% - 8px) / ${NAV_LINKS.length})`,
                transform: `translate3d(${activeIndex * 100}%, 0, 0)`,
              }}
            />
          )}

          {NAV_LINKS.map((link, idx) => {
            const isActive = activeIndex === idx;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setTargetIndex(idx)}
                className={`relative z-10 flex-1 flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 text-center select-none ${
                  isActive ? "text-white" : "text-[#1A1A1A] hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/produk"
            className="bg-[#FBF5DD] hover:bg-[#FFFDF5] text-[#1A1A1A] text-sm font-semibold px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingCart size={18} weight="bold" />
            <span>Beli sekarang</span>
          </Link>
        </div>

        {/* Mobile Hamburger & Quick CTA */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/produk"
            className="bg-[#FBF5DD] text-[#1A1A1A] text-xs font-semibold px-4 py-2 rounded-full shadow-sm"
          >
            Beli sekarang
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#FBF5DD] text-[#1A1A1A] hover:bg-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with slide animation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#306D29] border-t border-[#447B3E] animate-slide-down">
          <div className="bg-[#FBF5DD] rounded-2xl p-4 flex flex-col gap-2 shadow-lg">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-xl text-center font-semibold text-base transition-colors ${
                    isActive
                      ? "bg-black text-white shadow"
                      : "text-[#1A1A1A] hover:bg-[#EBE6D0]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
