import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyOberex from './components/WhyOberex';
import ProductScreens from './components/ProductScreens';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      {/* background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_0%_40%,rgba(59,130,246,0.12),transparent),radial-gradient(900px_400px_at_100%_40%,rgba(147,51,234,0.12),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyOberex />
        <ProductScreens />
        <UseCases />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
