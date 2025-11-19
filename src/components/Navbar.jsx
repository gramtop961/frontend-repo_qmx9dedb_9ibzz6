import { Menu, Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-400 via-blue-400 to-purple-500 shadow-md"></div>
              <span className="text-white font-semibold text-lg tracking-tight">Oberex</span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
              <a href="#features" className="hover:text-white transition">Features</a>
              <a href="#why" className="hover:text-white transition">Why Oberex</a>
              <a href="#screens" className="hover:text-white transition">Product</a>
              <a href="#use-cases" className="hover:text-white transition">Use Cases</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition text-sm">
                <Phone size={16} /> Contact Sales
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition text-sm">
                <Mail size={16} /> Email
              </a>
              <a href="#demo" className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition">Get a Demo</a>
            </div>
            <button className="md:hidden text-slate-200" aria-label="Menu">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
