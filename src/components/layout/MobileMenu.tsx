"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/types";

interface MobileMenuProps {
  links: NavItem[];
  cta: { label: string; href: string };
}

export function MobileMenu({ links, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      {/* Hamburger button */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="lg:hidden p-2 rounded-md text-medjura-navy hover:bg-medjura-navy/10 transition-colors"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-4 bg-medjura-navy text-white">
          <span className="font-bold text-lg" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Medjura Lifecare
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-1 rounded hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="px-4 py-6 space-y-1">
          {links.map((link) => (
            <div key={link.href}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setExpanded(expanded === link.href ? null : link.href)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        expanded === link.href && "rotate-180"
                      )}
                    />
                  </button>
                  {expanded === link.href && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-medjura-navy transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-medjura-navy transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <Link
            href={cta.href}
            onClick={() => setOpen(false)}
            className="btn-primary w-full justify-center"
          >
            {cta.label}
          </Link>
        </div>
      </div>
    </>
  );
}
