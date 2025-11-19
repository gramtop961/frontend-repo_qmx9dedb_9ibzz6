import { Check } from "lucide-react";
import { useState } from "react";

const tiers = [
  {
    name: "Basic",
    priceMonthly: 19,
    priceYearly: 190,
    features: ["Single outlet", "Basic accounting", "Email support"],
  },
  {
    name: "Pro",
    priceMonthly: 49,
    priceYearly: 490,
    features: ["Multi-outlet", "Advanced reports", "CRM automations", "Priority support"],
    highlight: true,
  },
  {
    name: "Ultimate",
    priceMonthly: 99,
    priceYearly: 990,
    features: ["All features", "Unlimited users", "Dedicated success manager"],
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple pricing that scales</h2>
          <p className="mt-3 text-slate-300">Pay monthly or save 2 months on annual plans</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-white/90">
            <button onClick={() => setYearly(false)} className={`px-4 py-1.5 rounded-full ${!yearly ? 'bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500' : ''}`}>Monthly</button>
            <button onClick={() => setYearly(true)} className={`px-4 py-1.5 rounded-full ${yearly ? 'bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500' : ''}`}>Annual</button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg ${t.highlight ? 'ring-2 ring-indigo-500/60' : ''}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg">{t.name}</h3>
                {t.highlight && <span className="text-xs text-indigo-200">Popular</span>}
              </div>
              <div className="mt-3 text-4xl font-semibold text-white">${yearly ? t.priceYearly : t.priceMonthly}
                <span className="text-sm text-slate-400 font-normal">/{yearly ? 'yr' : 'mo'}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="text-emerald-400" size={18}/> {f}</li>
                ))}
              </ul>
              <a href="#demo" className="mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white font-medium shadow-md hover:shadow-lg transition">Start free trial</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
