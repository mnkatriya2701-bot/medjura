import { FlaskConical, Truck, HeartHandshake, BadgeCheck } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Science-Backed",
    description: "Every formulation is grounded in clinical evidence with precise ingredient combinations and therapeutic doses.",
    color: "text-medjura-teal bg-medjura-teal/10",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assured",
    description: "Products manufactured in certified facilities with stringent quality control at every stage.",
    color: "text-medjura-navy bg-medjura-navy/10",
  },
  {
    icon: HeartHandshake,
    title: "Doctor Trusted",
    description: "Built in close collaboration with orthopedic, gynecology, and physicians specialists across India.",
    color: "text-medjura-purple bg-medjura-purple/10",
  },
  {
    icon: Truck,
    title: "Reliable Distribution",
    description: "Fast, dependable supply chain ensuring medicines reach pharmacies and clinics on time.",
    color: "text-medjura-orange bg-medjura-orange/10",
  },
];

export function WhyMedjura() {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-site">
        <div className="text-center mb-12">
          <h2 className="section-title text-medjura-navy">Why Medjura Lifecare?</h2>
          <p className="section-subtitle mx-auto mt-3">
            A pharma distribution partner you can count on — from formulation to delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${pillar.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{pillar.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
