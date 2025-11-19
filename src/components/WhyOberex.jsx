import { ShieldCheck, Zap, BrainCircuit, Wrench } from "lucide-react";

export default function WhyOberex() {
  return (
    <section id="why" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Why businesses choose Oberex</h2>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3 text-slate-300"><Zap className="mt-1 text-indigo-400" size={18}/> Lightning-fast performance across web and POS</li>
              <li className="flex items-start gap-3 text-slate-300"><ShieldCheck className="mt-1 text-indigo-400" size={18}/> Enterprise-grade reliability and security</li>
              <li className="flex items-start gap-3 text-slate-300"><BrainCircuit className="mt-1 text-indigo-400" size={18}/> AI-assisted reporting and anomaly detection</li>
              <li className="flex items-start gap-3 text-slate-300"><Wrench className="mt-1 text-indigo-400" size={18}/> Setup in minutes with smart defaults</li>
            </ul>

            <div className="mt-8 flex items-center gap-6">
              <img src="/badge-soc2.svg" alt="SOC2" className="h-10 opacity-80"/>
              <img src="/badge-gdpr.svg" alt="GDPR" className="h-10 opacity-80"/>
              <img src="/badge-iso.svg" alt="ISO" className="h-10 opacity-80"/>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 grid grid-cols-3 gap-3 p-3">
              <div className="rounded-xl bg-white/10" />
              <div className="rounded-xl bg-white/10" />
              <div className="rounded-xl bg-white/10" />
              <div className="col-span-3 rounded-xl bg-white/10" />
            </div>
            <p className="mt-4 text-sm text-slate-400">Trusted by teams across retail, F&B, and services. Clean data, clean decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
