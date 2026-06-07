import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  variant?: "grid" | "detail";
}

export function ProductCard({ product, variant = "grid" }: ProductCardProps) {
  const isOrtho = product.division === "ortho";
  const imgSrc = product.image || null;

  return (
    <div
      id={product.id}
      className={cn(
        "group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col",
        variant === "detail" && "lg:flex-row lg:items-stretch"
      )}
    >
      {/* Image */}
      {imgSrc && (
        <div
          className={cn(
            "relative bg-gray-50 flex items-center justify-center shrink-0",
            variant === "grid" ? "h-48 w-full" : "h-56 lg:h-auto lg:w-72"
          )}
        >
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            sizes={variant === "grid" ? "320px" : "288px"}
          />
          {/* Division stripe */}
          <div
            className={cn(
              "absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full text-white",
              isOrtho ? "bg-medjura-navy" : "bg-medjura-lavender"
            )}
          >
            {product.division}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="mb-3">
          <h3
            className={cn(
              "font-extrabold text-gray-900 leading-tight",
              variant === "grid" ? "text-xl" : "text-2xl"
            )}
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            {product.name}
          </h3>
          <p className={cn("text-sm font-medium mt-0.5", isOrtho ? "text-medjura-teal" : "text-medjura-pink")}>
            {product.tagline}
          </p>
        </div>

        {/* Composition */}
        <div className="mb-4 p-3 rounded-xl bg-gray-50 border border-gray-100">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Composition</p>
          <p className="text-xs text-gray-600 leading-relaxed">{product.composition}</p>
        </div>

        {/* Indications */}
        <div className="mb-4 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Indicated in</p>
          <ul className="grid grid-cols-1 gap-1">
            {product.indications.slice(0, variant === "detail" ? undefined : 3).map((ind) => (
              <li key={ind} className="flex items-start gap-2 text-xs text-gray-600">
                <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full shrink-0", isOrtho ? "bg-medjura-teal" : "bg-medjura-pink")} />
                {ind}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer: dosage + pack */}
        <div className={cn("pt-4 border-t border-gray-100 flex flex-wrap gap-3", variant === "detail" && "mt-auto")}>
          <div className={cn("flex-1 rounded-xl px-3 py-2 text-center", isOrtho ? "bg-medjura-navy/8" : "bg-medjura-lavender/10")}>
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Dosage</p>
            <p className={cn("text-xs font-semibold mt-0.5", isOrtho ? "text-medjura-navy" : "text-medjura-lavender")}>
              {product.dosage}
            </p>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl px-3 py-2 text-center">
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Pack Size</p>
            <p className="text-xs font-semibold text-gray-700 mt-0.5">{product.packSize}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
