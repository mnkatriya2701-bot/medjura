import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import navData from "@/data/nav.json";
import branchesData from "@/data/branches.json";

export function Header() {
  const { links, cta } = navData;
  const phone = branchesData.headquarters.contact.phone;
  const email = branchesData.company.email;

  return (
    <header className="sticky top-0 z-30 w-full">
      {/* Top info bar */}
      <div className="bg-medjura-navy text-white text-sm py-3 hidden md:block">
        <div className="container-site flex items-center justify-between gap-4">
          <p className="italic text-white/70">
            Where Medicine....... Meets Justice......
          </p>
          <div className="flex items-center gap-4">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center gap-1 hover:text-medjura-green transition-colors"
              >
                <Phone className="w-3 h-3" />
                {phone}
              </a>
            )}
            <a
              href={`mailto:${email}`}
              className="hover:text-medjura-green transition-colors"
            >
              {email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container-site flex items-center justify-between h-20">
          {/* Logo — capped at 72px tall, width scales proportionally */}
          <Logo displayWidth={150} className="h-[72px]" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <div key={link.href} className="relative group">
                {link.children ? (
                  <>
                    <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-medjura-navy hover:bg-medjura-navy/5 transition-colors">
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-48 overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-medjura-navy hover:text-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-lg text-base font-semibold text-gray-700 hover:text-medjura-navy hover:bg-medjura-navy/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link href={cta.href} className="btn-primary hidden lg:inline-flex text-sm py-2 px-5">
              {cta.label}
            </Link>
            <MobileMenu links={links} cta={cta} />
          </div>
        </div>
      </div>
    </header>
  );
}
