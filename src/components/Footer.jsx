export default function Footer() {
  return (
    <footer id="contact" className="relative mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-slate-300">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 via-blue-400 to-purple-500" />
              <span className="text-white font-semibold">Oberex</span>
            </div>
            <p className="mt-3 text-sm text-slate-400">All-in-one Accounting, POS, and CRM for modern SMBs.</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white">Customers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Email: hello@oberex.io</li>
              <li>Sales: +1 (555) 555-0123</li>
              <li>Support: support@oberex.io</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Social</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Twitter/X</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-sm text-slate-500">© {new Date().getFullYear()} Oberex. All rights reserved.</div>
      </div>
    </footer>
  );
}
