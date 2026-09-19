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
    <header className="sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center p-2 shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden">
            <Image
              src="/images/logo-masvia.png"
              alt="Logo Masvia"
              width={56}
              height={56}
              className="w-full h-full object-contain rounded-full"
              priority
            />
          </div>
        </Link>

        {/* Center Pill Navigation with sliding indicator (Desktop & Tablet) */}
        <nav className="hidden md:flex relative items-center bg-[#FBF5DD] rounded-full p-1.5 shadow-inner min-w-[340px] lg:min-w-[420px]">
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
                className={`relative z-10 flex-1 flex items-center justify-center px-3.5 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold will-change-transform transition-transform duration-300 ease-[cubic-bezier(1,0.25,1,0.5)] text-center select-none ${
                  isActive ? "text-white" : "text-[#1A1A1A] hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (Desktop & Tablet) */}
        <div className="hidden md:flex items-center">
          <Link
            href="/produk"
            className="bg-[#FBF5DD] hover:bg-[#FFFDF5] text-[#1A1A1A] text-xs lg:text-sm font-semibold px-4 lg:px-6 py-2.5 lg:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <ShoppingCart size={18} weight="bold" />
            <span>Beli sekarang</span>
          </Link>
        </div>

        {/* Mobile Hamburger & Quick CTA (Mobile) */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/produk"
            className="flex items-center gap-1.5 bg-[#FBF5DD] hover:bg-[#FFFDF5] text-[#1A1A1A] text-xs font-semibold px-3.5 py-2.5 rounded-full shadow-sm whitespace-nowrap active:scale-95 transition-all"
          >
            <ShoppingCart size={18} weight="bold" className="shrink-0" />
            <span>Beli sekarang</span>
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-[#FBF5DD] text-[#1A1A1A] hover:bg-white focus:outline-none transition-colors duration-200 active:scale-95"
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu with secondary color background */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 w-full grid transition-all duration-300 ease-in-out bg-[#FBF5DD] shadow-2xl border-b border-[#EBE6D0] z-50 ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100 pointer-events-auto"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`px-4 sm:px-6 py-5 transition-all duration-300 ease-out ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto">
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
                    className={`px-5 py-3 rounded-full text-center font-semibold text-base transition-all duration-200 ${
                      isActive
                        ? "bg-black text-white shadow-md"
                        : "text-[#1A1A1A] hover:bg-[#EBE6D0]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
