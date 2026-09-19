"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const pouchWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current || !pouchWrapperRef.current) return;

      const getNavHeight = () => {
        const header = document.querySelector("header");
        return header ? header.offsetHeight : 80;
      };

      // Set initial state: pouch is centered horizontally, placed below viewport, scaled down, hidden, rotation 0
      gsap.set(pouchWrapperRef.current, {
        xPercent: -50,
        yPercent: -50,
        y: () => window.innerHeight * 0.85,
        scale: 0.45,
        rotation: 0,
        opacity: 0,
      });

      // Pin hero section and scrub pouch entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: () => `top ${getNavHeight()}px`,
          end: () => `+=${Math.max(window.innerHeight * 1.1, 750)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Fade in smoothly as it enters from the bottom (0% -> 25%)
      tl.to(
        pouchWrapperRef.current,
        {
          opacity: 1,
          duration: 0.25,
          ease: "power1.out",
        },
        0
      );

      // 2. Move upward, scale to final size, and rotate 15 degrees at stuck position (0% -> 100%)
      tl.to(
        pouchWrapperRef.current,
        {
          y: 0,
          scale: 1,
          rotation: 15,
          duration: 1,
          ease: "power1.out",
        },
        0
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full">
      <section
        ref={heroRef}
        className="relative w-full h-[calc(100svh-5rem)] sm:h-[calc(100svh-6rem)] min-h-[460px] sm:min-h-[520px] flex flex-col justify-between pt-6 sm:pt-10 pb-8 sm:pb-12 overflow-hidden select-none"
      >
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          {/* Massive Brand Name Behind Product */}
          <div className="relative flex items-center justify-center py-4 sm:py-8">
            <h1 className="font-anton text-[22vw] md:text-[200px] lg:text-[380px] xl:text-[400px] leading-none tracking-normal text-[#FBF5DD] select-none opacity-95 drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
              MASVIA
            </h1>

            {/* Centered Product Pouch Mockup - GSAP Controlled Outer Wrapper */}
            <div
              ref={pouchWrapperRef}
              className="absolute top-1/2 left-1/2 z-10 will-change-transform pointer-events-none"
              style={{
                opacity: 0,
                transform:
                  "translate(-50%, -50%) translate3d(0, 100vh, 0) scale(0.45)",
              }}
            >
              {/* Inner Interactive Pouch with 3D drop shadow and subtle hover scaling */}
              <div className="w-44 sm:w-60 md:w-72 lg:w-80 xl:w-96 filter drop-shadow-[-16px_22px_28px_rgba(0,0,0,0.7)] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out hover:scale-105 hover:rotate-3 pointer-events-auto cursor-pointer">
                <Image
                  src="/images/masvia-front.png"
                  alt="Kemasan Jamu Celup Masvia"
                  width={400}
                  height={550}
                  className="w-full h-auto object-contain max-h-[65vh] sm:max-h-[75vh] md:max-h-[85vh]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Sub-tags flanking the hero */}
          <div className="flex items-center justify-between max-w-2xl mx-auto mt-6 sm:mt-10 px-4 text-base sm:text-xl font-medium tracking-wide">
            <span className="text-[#FBF5DD]/90">Jamu celup</span>
            <span className="text-[#FBF5DD]/90">Herbal</span>
          </div>
        </div>
      </section>
    </div>
  );
}
