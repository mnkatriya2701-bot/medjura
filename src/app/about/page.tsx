import type { Metadata } from "next";
import { MapPin, Phone, Mail, FlaskConical, HeartHandshake, BadgeCheck, Truck } from "lucide-react";
import { MissionVision } from "@/components/shared/MissionVision";
import branchesData from "@/data/branches.json";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Medjura Lifecare Pvt. Ltd. — our mission, vision, and commitment to delivering science-backed Ortho, Gynec and Physicians pharma formulations across Gujarat.",
};

const values = [
  {
    icon: FlaskConical,
    title: "Science-Backed",
    desc: "Every formulation grounded in clinical evidence with precise therapeutic doses.",
    color: "bg-medjura-teal/10 text-medjura-teal",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    desc: "Manufactured in certified facilities with stringent quality control at every stage.",
    color: "bg-medjura-navy/10 text-medjura-navy",
  },
  {
    icon: HeartHandshake,
    title: "Doctor Trusted",
    desc: "Built in close collaboration with orthopedic, gynecology and physician specialists.",
    color: "bg-medjura-lavender/10 text-medjura-lavender",
  },
  {
    icon: Truck,
    title: "Reliable Distribution",
    desc: "Fast, dependable supply chain ensuring medicines reach clinics on time.",
    color: "bg-medjura-green/10 text-medjura-green",
  },
];

export default function AboutPage() {
  const { company, headquarters } = branchesData;
  const { line1, line2, city, state, pincode } = headquarters.address;

  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-to-br from-[#0b1840] via-medjura-navy to-[#162460] text-white py-16 md:py-20">
        <div className="container-site max-w-3xl">
          <p className="text-medjura-green text-sm font-semibold uppercase tracking-widest mb-3">
            About Us
          </p>
          <h1 className="section-title text-white mb-4">
            Medjura Lifecare Pvt. Ltd.
          </h1>
          <p className="text-white/70 text-lg leading-relaxed italic">
            "{company.tagline}"
          </p>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-pad bg-gray-50">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-medjura-green text-sm font-semibold uppercase tracking-widest mb-2">
              Our Story
            </p>
            <h2 className="section-title text-medjura-navy mb-5">
              Trusted Pharma Company Across Gujarat
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Medjura Lifecare Pvt. Ltd. is a dedicated pharma company based in
              Ahmedabad, Gujarat. Founded with the belief that every patient deserves
              access to innovative, science-backed medicine, we specialise in
              Orthopaedic and Gynaecological formulations that address the root causes
              of disease — not just the symptoms.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              From joint health to women's wellness, our carefully curated product
              portfolio is built on clinical evidence, formulated for real-world
              outcomes, and manufactured with the integrity our name stands for.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Core values */}
      <section className="section-pad bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-10">
            <p className="text-medjura-green text-sm font-semibold uppercase tracking-widest mb-2">
              What Drives Us
            </p>
            <h2 className="section-title text-medjura-navy">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${v.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact info strip */}
      <section className="bg-medjura-navy text-white py-12">
        <div className="container-site">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-medjura-teal" />
              <p className="text-sm text-white/70">
                {line1}, {line2}, {city}, {state} – {pincode}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-medjura-green" />
              <a href={`tel:${headquarters.contact.phone}`} className="text-sm text-white/70 hover:text-white transition-colors">
                {headquarters.contact.phone}
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-medjura-pink" />
              <a href={`mailto:${company.email}`} className="text-sm text-white/70 hover:text-white transition-colors">
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
