import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";
import branchesData from "@/data/branches.json";
import navData from "@/data/nav.json";
import productsData from "@/data/products.json";
import type { DivisionId } from "@/lib/types";

const divisionFooterStyle: Record<DivisionId, string> = {
  ortho: "text-medjura-teal",
  gynec: "text-medjura-green",
  physicians: "text-medjura-pink",
};

export function Footer() {
  const { company, headquarters } = branchesData;
  const { line1, line2, city, state, pincode } = headquarters.address;

  const productsByDivision = productsData.divisions.map((division) => ({
    ...division,
    names: Array.from(
      new Set(
        productsData.products
          .filter((p) => p.division === division.id)
          .map((p) => p.name)
      )
    ),
  }));

  return (
    <footer className="bg-medjura-navy text-white">
      {/* Main footer */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo size="2xl" />
            <p className="mt-4 text-sm text-white/70 leading-relaxed italic">
              "{company.tagline}"
            </p>
            <div className="mt-6 flex gap-3">
              <span className="badge-ortho text-[10px]">Ortho</span>
              <span className="badge-gynec text-[10px]">Gynec</span>
              <span className="badge-physicians text-[10px]">Physicians</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-medjura-orange mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navData.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-medjura-orange mb-4">
              Our Products
            </h3>
            <div className="space-y-4">
              {productsByDivision.map((division) => (
                <div key={division.id}>
                  <p className={cn("text-xs font-semibold uppercase tracking-wider mb-1", divisionFooterStyle[division.id as DivisionId])}>
                    {division.label}
                  </p>
                  <ul className="space-y-1">
                    {division.names.map((name) => (
                      <li key={name}>
                        <Link
                          href={`/products/${division.id}`}
                          className="text-sm text-white/70 hover:text-white transition-colors"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-medjura-orange mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-medjura-teal shrink-0 mt-0.5" />
                <span>
                  {line1}, {line2}, {city}, {state} – {pincode}
                </span>
              </li>
              {headquarters.contact.phone && (
                <li className="flex gap-3 text-sm text-white/70">
                  <Phone className="w-4 h-4 text-medjura-teal shrink-0 mt-0.5" />
                  <a href={`tel:${headquarters.contact.phone}`} className="hover:text-white transition-colors">
                    {headquarters.contact.phone}
                  </a>
                </li>
              )}
              <li className="flex gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-medjura-teal shrink-0 mt-0.5" />
                <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Ahmedabad, Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}
