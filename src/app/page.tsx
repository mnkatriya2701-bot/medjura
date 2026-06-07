import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { DivisionsSection } from "@/components/home/DivisionsSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { WhyMedjura } from "@/components/home/WhyMedjura";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "Medjura Lifecare Pvt. Ltd. | Orthopedic, Gynec & Physicians Pharma",
  description:
    "Medjura Lifecare — trusted pharma distribution in Ahmedabad, Gujarat. Science-backed Orthopedic, Gynec, and Physicians formulations. Where Medicine Meets Justice.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DivisionsSection />
      <FeaturedProducts />
      <WhyMedjura />
      <CtaBanner />
    </>
  );
}
