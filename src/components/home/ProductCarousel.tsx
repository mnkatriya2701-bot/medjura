"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Award, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import productsData from "@/data/products.json";
import type { Product, DivisionId } from "@/lib/types";

/** Carousel styling derived from a product's division — keeps products.json free of CSS class names */
const divisionSlideStyle: Record<DivisionId, { label: string; badgeClass: string; glowColor: string }> = {
  ortho:      { label: "Orthopedic", badgeClass: "bg-medjura-navy",  glowColor: "from-medjura-teal/30" },
  gynec:      { label: "Gynec",      badgeClass: "bg-medjura-pink",  glowColor: "from-medjura-pink/30" },
  physicians: { label: "Physicians", badgeClass: "bg-medjura-teal",  glowColor: "from-medjura-teal/40" },
};

const slides = (productsData.products as Product[]).filter((p) => p.slide);

export function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setAnimating(false), 500);
    },
    [animating]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];
  const style = divisionSlideStyle[slide.division];

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-r from-blue-950 via-indigo-950 to-pink-900 overflow-hidden flex items-center">

      {/* ── Decorative background shapes ─────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-80px] right-[-60px] w-[420px] h-[420px] rounded-full bg-pink-700/25 blur-3xl" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full bg-blue-800/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-900/30 blur-3xl" />
        {/* Subtle grid dots */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="container-site relative z-10 w-full py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Brand text ──────────────────────── */}
          <div className="text-white order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-3 mb-6 justify-center lg:justify-start">
              <span className="badge-ortho">Orthopedic Division</span>
              <span className="badge-gynec">Gynec Division</span>
              <span className="badge-physicians">Physicians Division</span>
            </div>

            <h1 className="heading-display text-5xl md:text-6xl leading-[1.1] mb-5">
              Where Medicine
              <span className="block text-medjura-green mt-1">Meets Justice</span>
            </h1>

            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Medjura Lifecare Pvt. Ltd. — trusted pharma company across
              Gujarat. Science-backed Orthopedic, Gynec, and Physicians
              formulations, delivered with integrity.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/products" className="btn-primary px-7 py-3 text-sm">
                Explore Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-white/25 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-medjura-teal shrink-0" />
                Quality Assured
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-medjura-green shrink-0" />
                Science-Backed
              </span>
              {/* Location — premium pill */}
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-white font-medium text-sm">
                <MapPin className="w-4 h-4 text-pink-300 shrink-0" />
                Ahmedabad, Gujarat
              </span>
            </div>
          </div>

          {/* ── RIGHT: Product showcase ───────────────── */}
          <div className="order-1 lg:order-2 flex flex-col items-center gap-5">

            {/* Product image with glow */}
            <div className="relative w-full max-w-[420px]">
              {/* Dynamic glow behind product */}
              <div className={cn("absolute inset-8 rounded-full bg-gradient-to-br blur-3xl transition-all duration-700", style.glowColor, "to-transparent")} />

              {/* Slides */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                {slides.map((s, i) => {
                  const slideStyle = divisionSlideStyle[s.division];
                  return (
                    <div
                      key={s.id}
                      className={cn(
                        "absolute inset-0 transition-all duration-500 bg-gradient-to-br",
                        slideStyle.glowColor,
                        "to-white/5",
                        i === current
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      )}
                    >
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 90vw, 42vw"
                        priority={i === 0}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Glassmorphism product info card */}
            <div className="w-full max-w-[380px] bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4 text-center shadow-xl">
              <span className={cn("inline-block text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full text-white mb-2", style.badgeClass)}>
                {style.label}
              </span>
              <h3 className="text-white text-xl font-extrabold" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                {slide.name}
              </h3>
              <p className="text-white/60 text-xs mt-1">{slide.tagline}</p>
            </div>

            {/* Navigation controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-9 h-9 rounded-full border border-white/20 text-white/60 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-400",
                      i === current
                        ? "w-7 bg-medjura-green"
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    )}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next"
                className="w-9 h-9 rounded-full border border-white/20 text-white/60 hover:bg-white/15 hover:text-white flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
