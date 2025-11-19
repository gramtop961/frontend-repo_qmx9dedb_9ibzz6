import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Switching to Oberex unified our sales and accounting in a week. The analytics helped us spot 3% margin leakage immediately.",
    name: "Mariam K.",
    role: "Retail Owner",
  },
  {
    quote:
      "POS is lightning fast even offline. Our team adopted it without training—it's that intuitive.",
    name: "Hassan A.",
    role: "Cafe Manager",
  },
  {
    quote:
      "The CRM automations increased repeat purchases by 18%. Setup took less than a day.",
    name: "Sofia L.",
    role: "Ecommerce Lead",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">What customers say</h2>
          <p className="mt-3 text-slate-300">Proven in the field across SMBs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
              <Stars />
              <p className="mt-3 text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.name} • {t.role}</div>
              <div className="mt-4 flex items-center gap-4 opacity-80">
                <img src="/badge-trustpilot.svg" alt="Trustpilot" className="h-6" />
                <img src="/badge-g2.svg" alt="G2" className="h-6" />
                <img src="/badge-capterra.svg" alt="Capterra" className="h-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
