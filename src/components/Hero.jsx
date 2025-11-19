import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.35),transparent),radial-gradient(900px_400px_at_0%_30%,rgba(59,130,246,0.25),transparent),radial-gradient(900px_400px_at_100%_30%,rgba(147,51,234,0.25),transparent)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-indigo-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" /> New: AI-assisted reporting
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Run your entire business on one modern platform
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Oberex unifies Accounting, POS, and CRM into a single, secure system. Real-time analytics, powerful automations, and smooth workflows—built for SMBs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">
                Get a Demo
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white/10 transition">
                Contact Sales
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-slate-400">
              <div className="text-sm"><span className="text-white font-semibold">99.99%</span> uptime</div>
              <div className="text-sm"><span className="text-white font-semibold">SOC 2</span> compliant</div>
              <div className="text-sm"><span className="text-white font-semibold">GDPR</span> ready</div>
            </div>
          </div>
          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
