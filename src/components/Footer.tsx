"use client";

import Link from "next/link";
import Image from "next/image";
import {
  InstagramLogo,
  WhatsappLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FBF5DD] text-[#1A1A1A] py-12 md:py-16 mt-auto border-t border-[#EBE6D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Brand & Rights */}
          <div className="space-y-4">
            <h2 className="font-anton text-4xl sm:text-5xl tracking-wide text-[#1A1A1A] uppercase">
              MASVIA
            </h2>
            <p className="text-sm font-medium text-[#1A1A1A]/80">
              All rights reserved. @2026.
            </p>

            <div className="pt-2">
              <p className="text-sm font-semibold mb-3">More info:</p>
              <div className="flex items-center gap-4 text-2xl">
                <a
                  href="https://instagram.com/masvia2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Masvia"
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <InstagramLogo size={22} weight="bold" />
                </a>
                <a
                  href="https://wa.me/628214569052"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Masvia"
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-[#306D29] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <WhatsappLogo size={22} weight="fill" />
                </a>
                <a
                  href="mailto:jamumasvia@gmail.com"
                  aria-label="Email Masvia"
                  className="w-10 h-10 rounded-full bg-white/80 hover:bg-black hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                >
                  <EnvelopeSimple size={22} weight="bold" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:text-center">
            <h3 className="text-base font-bold mb-4 tracking-wide text-[#1A1A1A]">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#306D29] hover:font-bold transition-colors inline-block py-0.5"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/produk"
                  className="hover:text-[#306D29] hover:font-bold transition-colors inline-block py-0.5"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang"
                  className="hover:text-[#306D29] hover:font-bold transition-colors inline-block py-0.5"
                >
                  Tentang
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#306D29] hover:font-bold transition-colors inline-block py-0.5"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Big Logo Badge */}
          <div className="flex md:justify-end items-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white shadow-md p-4 flex items-center justify-center overflow-hidden hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo-masvia.png"
                alt="Masvia Badge"
                width={140}
                height={140}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
