import Link from "next/link";
import { Flame, Check } from "lucide-react";

const plans = [
  { name: "Essential Gas", description: "Simple and flexible natural gas", features: ["Competitive gas rate", "Flexible plan options", "Online account management", "Customer support", "Paperless billing"], cta: "Choose Essential Gas" },
  { name: "Smart Gas", description: "Predictable pricing and convenience", features: ["Fixed-rate options", "Predictable monthly costs", "Online bill management", "Automatic payment options", "Customer support"], cta: "Choose Smart Gas", isPopular: true },
  { name: "Green Gas", description: "Environmentally conscious option", features: ["Carbon offset options", "Flexible plan terms", "Online account management", "Paperless billing", "Customer support"], cta: "Choose Green Gas", isGreen: true },
];

export default function NaturalGasPage() {
  return (
    <div className="pt-20">
      <section className="section-padding gradient-bg">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl mb-6"><Flame className="w-8 h-8 text-white" /></div>
            <h1 className="text-4xl sm:text-5xl font-bold text-charcoal-900 mb-4">Natural Gas Plans Built Around You</h1>
            <p className="text-xl text-charcoal-600 mb-8">Flexible natural gas plans for your home or business.</p>
            <Link href="/availability" className="btn-primary inline-block">Check Availability</Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={"card p-8 relative " + (plan.isPopular ? "border-2 border-primary-500 shadow-xl" : "")}>
                {plan.isPopular && (<div className="absolute -top-4 left-1/2 transform -translate-x-1/2"><span className="bg-primary-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold">MOST POPULAR</span></div>)}
                <div className="text-center mb-6"><h3 className="text-2xl font-bold text-charcoal-900 mb-2">{plan.name}</h3><p className="text-charcoal-600">{plan.description}</p></div>
                <ul className="space-y-3 mb-8">{plan.features.map((feature) => (<li key={feature} className="flex items-start space-x-3"><Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" /><span className="text-charcoal-700">{feature}</span></li>))}</ul>
                <Link href="/my-account" className="btn-primary w-full text-center block">{plan.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
