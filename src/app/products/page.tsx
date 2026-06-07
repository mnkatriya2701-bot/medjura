import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import productsData from "@/data/products.json";
import type { DivisionId, Product } from "@/lib/types";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore Medjura Lifecare's complete range of Ortho, Gynec and Physicians pharma products — Jointcync, Auramag D, Mytocarn T+, Chalixjura, Vamachol XT, Primovelle and more.",
};

const divisionCardStyle: Record<DivisionId, { badgeClass: string; gradient: string }> = {
  ortho: { badgeClass: "badge-ortho", gradient: "from-medjura-navy to-[#0f1a42]" },
  gynec: { badgeClass: "badge-gynec", gradient: "from-medjura-lavender to-medjura-pink" },
  physicians: { badgeClass: "badge-physicians", gradient: "from-medjura-teal to-medjura-navy" },
};

export default function ProductsPage() {
  const { divisions, products } = productsData;
  const featured = products.filter((p) => p.featured) as Product[];

  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-to-br from-[#0b1840] via-medjura-navy to-[#162460] text-white py-16 md:py-20">
        <div className="container-site">
          <p className="text-medjura-green text-sm font-semibold uppercase tracking-widest mb-3">
            Our Portfolio
          </p>
          <h1 className="section-title text-white mb-4">Products</h1>
          <p className="section-subtitle text-white/70">
            Science-backed formulations across three focused therapeutic divisions —
            trusted by doctors across Gujarat.
          </p>
        </div>
      </section>

      {/* Division cards */}
      <section className="section-pad bg-gray-50">
        <div className="container-site">
          <h2 className="section-title text-medjura-navy text-center mb-10">Our Divisions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {divisions.map((div) => {
              const style = divisionCardStyle[div.id as DivisionId];
              return (
                <Link
                  key={div.id}
                  href={`/products/${div.id}`}
                  className={`group relative rounded-2xl p-8 overflow-hidden text-white transition-transform hover:-translate-y-1 bg-gradient-to-br ${style.gradient}`}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none" />
                  <span className={style.badgeClass}>{div.label}</span>
                  <h3 className="mt-4 text-2xl font-bold">{div.name}</h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed max-w-sm">{div.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90 group-hover:gap-3 transition-all">
                    View Products <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 className="section-title text-medjura-navy">Featured Products</h2>
            <p className="section-subtitle mx-auto mt-3">
              Our most recommended formulations across all three divisions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
