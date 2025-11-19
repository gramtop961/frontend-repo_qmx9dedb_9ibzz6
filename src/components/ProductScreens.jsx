export default function ProductScreens() {
  return (
    <section id="screens" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Beautiful, practical interfaces</h2>
          <p className="mt-3 text-slate-300">Clean UI, modern charts, and smooth workflows your team will love.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">
            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-purple-600/20 border border-white/10"></div>
            <div className="mt-3 text-slate-300 text-sm">Analytics dashboard with real-time charts</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">
            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-purple-600/20 border border-white/10"></div>
            <div className="mt-3 text-slate-300 text-sm">POS checkout with offline mode</div>
          </div>
        </div>
      </div>
    </section>
  );
}
