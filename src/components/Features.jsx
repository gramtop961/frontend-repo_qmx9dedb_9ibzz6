import { BarChart3, CreditCard, ShoppingBag, Users, Database, Cloud } from "lucide-react";

const items = [
  { icon: CreditCard, title: "Smart Accounting & Reports", desc: "Automated journals, tax-ready reports, and cash flow insights—no spreadsheets required." },
  { icon: ShoppingBag, title: "Fast, intuitive POS", desc: "Beautiful in-store checkout with barcode scan, discounts, and multi-location support." },
  { icon: Users, title: "Customer Management CRM", desc: "Segment customers, track interactions, and automate follow-ups with ease." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Live dashboards and KPIs across sales, inventory, and finance." },
  { icon: Database, title: "Inventory & Stock", desc: "Batches, variants, and low-stock alerts with purchase orders built-in." },
  { icon: Cloud, title: "Cloud Sync + Offline", desc: "Works everywhere—syncs to cloud with resilient offline mode for POS." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything you need to operate</h2>
          <p className="mt-3 text-slate-300">Accounting, POS, and CRM unified with clean, modern tooling.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/10 transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/30">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium text-lg">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
