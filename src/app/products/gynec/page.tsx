import type { Metadata } from "next";
import { ProductCard } from "@/components/shared/ProductCard";
import productsData from "@/data/products.json";
import type { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: "Gynec Division Products",
  description:
    "Medjura Lifecare Gynec Division — Vamachol XT, Primovelle, Auramag D, Chalixjura. Comprehensive women's health formulations for preconception, pregnancy, lactation and beyond.",
};

export default function GynecProductsPage() {
  const products = productsData.products.filter(
    (p) => p.division === "gynec"
  ) as Product[];

  return (
    <>
      {/* Division hero */}
      <section className="bg-gradient-to-br from-medjura-lavender to-medjura-pink text-white py-16 md:py-20">
        <div className="container-site">
          <span className="badge-gynec mb-4 inline-block">Gynec Division</span>
          <h1 className="section-title text-white mb-4">Gynec Products</h1>
          <p className="section-subtitle text-white/80">
            Comprehensive women&apos;s health formulations for preconception,
            pregnancy, lactation and beyond — care for every stage of life.
          </p>
        </div>
      </section>

      {/* Problem statement banner */}
      <section className="bg-medjura-pink/10 border-y border-medjura-pink/20 py-6">
        <div className="container-site text-center">
          <p className="text-medjura-lavender font-semibold text-base md:text-lg">
            "For Optimized Support Across Preconception, Pregnancy & Lactation"
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Folate · Choline · Magnesium · Calcium — science-backed for better maternal &amp; foetal outcomes.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} variant="detail" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
