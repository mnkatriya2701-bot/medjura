import { Target, Eye } from "lucide-react";

const items = [
  {
    icon: Target,
    label: "Our Mission",
    color: {
      bg: "bg-medjura-navy",
      light: "bg-medjura-navy/5",
      border: "border-medjura-navy/10",
      icon: "text-medjura-teal",
      accent: "bg-medjura-teal",
    },
    text: "To deliver innovative pharmaceuticals and nutraceuticals that enhance bone health, women's wellness, and overall quality of life through science, trust, and excellence.",
  },
  {
    icon: Eye,
    label: "Our Vision",
    color: {
      bg: "bg-medjura-lavender",
      light: "bg-medjura-lavender/5",
      border: "border-medjura-lavender/10",
      icon: "text-medjura-pink",
      accent: "bg-medjura-pink",
    },
    text: "To be the most trusted healthcare partner in Orthopaedics, Gynaecology, and Nutritional Wellness.",
  },
];

export function MissionVision() {
  return (
    <section className="section-pad bg-white">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-medjura-green text-sm font-semibold uppercase tracking-widest mb-2">
            Who We Are
          </p>
          <h2 className="section-title text-medjura-navy">
            Mission &amp; Vision
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {items.map(({ icon: Icon, label, color, text }) => (
            <div
              key={label}
              className={`relative rounded-2xl border ${color.border} ${color.light} p-8 overflow-hidden`}
            >
              {/* Decorative arc */}
              <div
                className={`absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-10 ${color.bg}`}
              />

              {/* Icon badge */}
              <div
                className={`w-14 h-14 rounded-2xl ${color.bg} flex items-center justify-center mb-6 shadow-md`}
              >
                <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
              </div>

              {/* Accent line */}
              <div className={`w-10 h-1 rounded-full ${color.accent} mb-4`} />

              {/* Label */}
              <h3
                className="text-xl font-extrabold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                {label}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
