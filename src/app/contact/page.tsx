import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import branchesData from "@/data/branches.json";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Medjura Lifecare Pvt. Ltd. — GF-14, Shree Ratna Complex, Nava Vadaj, Ahmedabad, Gujarat. Call +91 74052 78264 or email medjuralifecare@gmail.com.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Our Address",
    color: "bg-blue-950 text-medjura-teal",
    lines: [
      "GF-14, Shree Ratna Complex,",
      "Near Krishnanagar Bus Stand,",
      "Akhbarnagar Road, Nava Vadaj,",
      "Ahmedabad, Gujarat – 380013",
    ],
  },
  {
    icon: Phone,
    label: "Call Us",
    color: "bg-medjura-green/10 text-medjura-green",
    href: "tel:+917405278264",
    lines: ["+91 74052 78264"],
  },
  {
    icon: Mail,
    label: "Email Us",
    color: "bg-pink-50 text-pink-600",
    href: "mailto:medjuralifecare@gmail.com",
    lines: ["medjuralifecare@gmail.com"],
  },
  {
    icon: Clock,
    label: "Working Hours",
    color: "bg-medjura-lavender/10 text-medjura-lavender",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"],
  },
];

export default function ContactPage() {
  const { company } = branchesData;

  return (
    <>
      {/* Page hero */}
      <section className="bg-gradient-to-r from-blue-950 via-indigo-950 to-pink-900 text-white py-16 md:py-20">
        <div className="container-site max-w-3xl">
          <p className="text-medjura-green text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="section-title text-white mb-4">Contact Us</h1>
          <p className="text-white/70 text-lg leading-relaxed">
            We&apos;d love to hear from you — whether you&apos;re a doctor, distributor,
            or pharmacist. Reach out and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section className="section-pad bg-gray-50">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* ── Left: Contact cards ─────────────────── */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-medjura-navy" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Our Details
              </h2>

              {contactDetails.map(({ icon: Icon, label, color, href, lines }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex items-start gap-5"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-medjura-navy font-semibold text-base hover:text-medjura-green transition-colors"
                      >
                        {lines[0]}
                      </a>
                    ) : (
                      lines.map((line, i) => (
                        <p key={i} className="text-gray-700 text-sm leading-relaxed">
                          {line}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}

              {/* Google Maps embed placeholder */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-56">
                <iframe
                  title="Medjura Lifecare Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.3!2d72.5669!3d23.0637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzQ5LjMiTiA3MsKwMzQnMDQuOCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* ── Right: Enquiry form ─────────────────── */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-medjura-navy mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                Send an Enquiry
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Fill in the form and we&apos;ll respond within 24 hours.
              </p>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Dr. Rajesh Patel"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medjura-navy/30 focus:border-medjura-navy transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medjura-navy/30 focus:border-medjura-navy transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medjura-navy/30 focus:border-medjura-navy transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    I am a
                  </label>
                  <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-medjura-navy/30 focus:border-medjura-navy transition">
                    <option value="">Select your role</option>
                    <option>Doctor / Physician</option>
                    <option>Distributor</option>
                    <option>Pharmacist</option>
                    <option>Patient / General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your enquiry here..."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-medjura-navy/30 focus:border-medjura-navy transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3.5 text-base justify-center"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
