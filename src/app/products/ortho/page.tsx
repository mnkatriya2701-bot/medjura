import type { Metadata } from "next";
import { ProductCard } from "@/components/shared/ProductCard";
import productsData from "@/data/products.json";
import type { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: "Orthopedic Division Products",
  description:
    "Medjura Lifecare Orthopedic Division — Jointcync, Auramag D, Mytocarn T+, Chalixjura. Science-backed orthopedic formulations for joint health, bone strength and nerve recovery.",
};

export default function OrthoProductsPage() {
  const products = productsData.products.filter(
    (p) => p.division === "ortho"
  ) as Product[];

  return (
    <>
      {/* Division hero */}
      <section className="bg-gradient-to-br from-[#0b1840] via-medjura-navy to-[#162460] text-white py-16 md:py-20">
        <div className="container-site">
          <span className="badge-ortho mb-4 inline-block">Orthopedic Division</span>
          <h1 className="section-title text-white mb-4">Orthopedic Products</h1>
          <p className="section-subtitle text-white/70">
            Advanced orthopedic formulations targeting cartilage repair, bone
            strength, nerve recovery and musculoskeletal wellness.
          </p>
        </div>
      </section>

      {/* Problem statement banner */}
      <section className="bg-medjura-teal/10 border-y border-medjura-teal/20 py-6">
        <div className="container-site text-center">
          <p className="text-medjura-navy font-semibold text-base md:text-lg">
            "In Osteoarthritis… Pain is just the beginning."
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Cartilage damage · Inflammation · Oxidative stress — treatment should address all factors together.
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
