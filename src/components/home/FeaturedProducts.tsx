import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import productsData from "@/data/products.json";
import type { Product } from "@/lib/types";

const divisionStyle = {
  ortho:       { bar: "bg-medjura-navy",     badge: "bg-medjura-navy/10 text-medjura-navy",         dot: "bg-medjura-navy",     tagline: "text-medjura-teal",    link: "text-medjura-navy hover:text-medjura-teal" },
  gynec:       { bar: "bg-medjura-pink",     badge: "bg-medjura-pink/10 text-medjura-pink",         dot: "bg-medjura-pink",     tagline: "text-medjura-green",   link: "text-medjura-pink hover:text-medjura-green" },
  physicians:  { bar: "bg-medjura-teal",     badge: "bg-medjura-teal/10 text-medjura-teal",         dot: "bg-medjura-teal",     tagline: "text-medjura-teal",    link: "text-medjura-teal hover:text-medjura-navy" },
} as const;

function ProductCard({ product }: { product: Product }) {
  const style = divisionStyle[product.division] ?? divisionStyle.ortho;
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Color bar */}
      <div className={cn("h-1.5", style.bar)} />

      <div className="p-6 flex flex-col flex-1">
        {/* Division badge */}
        <span className={cn("self-start text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full", style.badge)}>
          {product.division}
        </span>

        <h3 className="mt-3 text-xl font-bold text-gray-900 group-hover:text-medjura-navy transition-colors">
          {product.name}
        </h3>
        <p className={cn("text-sm font-medium mt-0.5", style.tagline)}>
          {product.tagline}
        </p>

        <p className="mt-3 text-xs text-gray-500 leading-relaxed line-clamp-2">
          {product.composition}
        </p>

        {/* Indications */}
        <ul className="mt-4 space-y-1.5 flex-1">
          {product.indications.slice(0, 3).map((ind) => (
            <li key={ind} className="flex items-start gap-2 text-xs text-gray-600">
              <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", style.dot)} />
              {ind}
            </li>
          ))}
        </ul>

        {/* Dosage */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400">{product.packSize}</span>
          <Link
            href={`/products/${product.division}#${product.id}`}
            className={cn("text-xs font-semibold flex items-center gap-1 transition-colors", style.link)}
          >
            Learn more <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  const featured = productsData.products.filter((p) => p.featured) as Product[];

  return (
    <section className="section-pad bg-gray-50">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="section-title text-medjura-navy">Featured Products</h2>
          <p className="section-subtitle mx-auto mt-3">
            Clinically backed formulations across our Orthopedic, Gynec, and Physicians divisions —
            trusted by doctors across Gujarat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/products" className="btn-outline-navy">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
