import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import branchesData from "@/data/branches.json";

export function CtaBanner() {
  const { headquarters } = branchesData;

  return (
    <section className="bg-medjura-navy">
      <div className="container-site py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h2 className="text-3xl font-extrabold" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
              Partner with Medjura Lifecare
            </h2>
            <p className="mt-2 text-white/85 text-base max-w-xl">
              Doctors, distributors, and pharmacies across Gujarat trust us for
              quality Orthopedic, Gynec, and Physicians formulations. Get in touch today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            {headquarters.contact.phone && (
              <a
                href={`tel:${headquarters.contact.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-medjura-green text-white font-semibold text-sm hover:bg-medjura-green/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {headquarters.contact.phone}
              </a>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-medjura-orange transition-colors"
            >
              Send Enquiry
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
