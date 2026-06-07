import Link from "next/link";
import { ArrowRight } from "lucide-react";
import productsData from "@/data/products.json";
import type { DivisionId } from "@/lib/types";

const divisionConfig: Record<DivisionId, { bg: string; badge: string; cta: string; dot: string; href: string }> = {
  ortho: {
    bg: "bg-gradient-to-br from-medjura-navy to-[#0f1a42]",
    badge: "badge-ortho",
    cta: "bg-medjura-navy text-white hover:bg-medjura-navy/90",
    dot: "bg-medjura-teal",
    href: "/products/ortho",
  },
  gynec: {
    bg: "bg-gradient-to-br from-medjura-pink to-[#c95c7a]",
    badge: "badge-gynec",
    cta: "bg-white text-medjura-pink hover:bg-white/90",
    dot: "bg-medjura-green",
    href: "/products/gynec",
  },
  physicians: {
    bg: "bg-gradient-to-br from-[#2C5364] via-[#203A43] to-[#0F2027]",
    badge: "badge-physicians",
    cta: "bg-medjura-teal text-white hover:bg-medjura-teal/90",
    dot: "bg-white/70",
    href: "/products/physicians",
  },
};

export function DivisionsSection() {
  const { divisions, products } = productsData;

  const divisionsWithProducts = divisions.map((division) => ({
    ...division,
    config: divisionConfig[division.id as DivisionId],
    productNames: Array.from(
      new Set(products.filter((p) => p.division === division.id).map((p) => p.name))
    ),
  }));

  return (
    <section className="section-pad bg-gray-50">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title text-medjura-navy">Our Divisions</h2>
          <p className="section-subtitle mx-auto mt-3">
            Three focused therapeutic divisions — each with dedicated formulations
            for better patient outcomes.
          </p>
        </div>

        {/* Division cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisionsWithProducts.map((division) => (
            <div
              key={division.id}
              className={`${division.config.bg} rounded-2xl p-8 text-white relative overflow-hidden`}
            >
              {/* Decoration circle */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none" />

              <span className={division.config.badge}>{division.label}</span>

              <h3 className="mt-4 text-2xl font-bold">{division.name}</h3>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">
                {division.description}
              </p>

              {/* Product list */}
              <ul className="mt-5 space-y-2">
                {division.productNames.map((name) => (
                  <li key={name} className="flex items-center gap-2 text-sm text-white/90">
                    <span className={`w-1.5 h-1.5 rounded-full ${division.config.dot}`} />
                    {name}
                  </li>
                ))}
              </ul>

              <Link
                href={division.config.href}
                className={`mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${division.config.cta} border border-white/20`}
              >
                View {division.label} Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
