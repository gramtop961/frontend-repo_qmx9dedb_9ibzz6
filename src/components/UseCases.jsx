const items = [
  { title: "Retail Shops", desc: "Barcode scanning, SKUs, and multi-location inventory." },
  { title: "Restaurants & Cafés", desc: "Table management, modifiers, and kitchen printing." },
  { title: "Pharmacies", desc: "Batches, expiries, and controlled inventory workflows." },
  { title: "Small Businesses", desc: "Simple invoicing, expenses, and cash flow tracking." },
  { title: "Service Providers", desc: "Bookings, CRM, and automated follow-ups." },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Built for real-world industries</h2>
          <p className="mt-3 text-slate-300">Flexible configuration that adapts to how you work.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg">
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
