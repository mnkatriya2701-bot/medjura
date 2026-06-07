import type { Metadata } from "next";
import { ProductCard } from "@/components/shared/ProductCard";
import productsData from "@/data/products.json";
import type { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: "Physicians Division Products",
  description:
    "Medjura Lifecare Physicians Division — cross-specialty formulations trusted by general practitioners for comprehensive patient management across orthopedic, gynecological, and systemic health needs.",
};

export default function PhysiciansProductsPage() {
  const products = productsData.products.filter(
    (p) => p.division === "physicians"
  ) as Product[];

  return (
    <>
      {/* Division hero */}
      <section className="bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-16 md:py-20">
        <div className="container-site">
          <span className="badge-physicians mb-4 inline-block">Physicians Division</span>
          <h1 className="section-title text-white mb-4">Physicians Products</h1>
          <p className="section-subtitle text-white/70">
            Versatile cross-specialty formulations trusted by general practitioners
            for comprehensive patient management — bridging orthopedic, gynecological,
            and systemic health needs.
          </p>
        </div>
      </section>

      {/* Problem statement banner */}
      <section className="bg-medjura-teal/10 border-y border-medjura-teal/20 py-6">
        <div className="container-site text-center">
          <p className="text-medjura-navy font-semibold text-base md:text-lg">
            "One prescription — bridging Orthopedic, Gynec &amp; Physicians care."
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Magnesium deficiency · Bone health · Systemic wellness — addressed with a single trusted formulation.
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
