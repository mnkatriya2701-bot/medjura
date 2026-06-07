import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  /** Override displayed width in px — height scales proportionally via CSS */
  displayWidth?: number;
}

export function Logo({ className, size = "md", displayWidth }: LogoProps) {
  const heights: Record<string, number> = { sm: 52, md: 72, lg: 88, xl: 110, "2xl": 200 };
  const h = heights[size];
  const w = Math.round(h * 0.78);

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label="Medjura Lifecare — Home"
    >
      <Image
        src="/images/logo.png"
        alt="Medjura Lifecare"
        width={400}
        height={514}
        priority
        className="object-contain w-auto h-full"
        style={
          displayWidth
            ? { maxWidth: displayWidth }
            : { width: w, height: h }
        }
      />
    </Link>
  );
}
