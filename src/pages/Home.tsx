import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Map, TrendingUp, Sparkles, BookOpen, Calculator, Globe2, HelpCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="relative flex flex-col items-center justify-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold mb-8 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered 2026 Optimization</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Global Nomad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Vault of Intelligence.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            Optimize your tax residency and insurance coverage with our legal-tech engine. Secure your freedom in an increasingly complex world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/form" className="btn-primary group text-lg">
              Start Free Optimizer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              { icon: <TrendingUp className="w-8 h-8 text-indigo-500" />, title: "Tax Residency", desc: "Navigate 2026 tax treaties with ease." },
              { icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, title: "Nomad Health", desc: "Global insurance that follows your route." },
              { icon: <Map className="w-8 h-8 text-rose-500" />, title: "Visa Alerts", desc: "Never miss a 183-day residency trigger." }
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-8 text-left hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group">
                <div className="mb-6 p-3 bg-white shadow-sm border border-slate-100 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Approval Content Section: Knowledge Base (Text Rich) */}
      <section className="max-w-4xl mx-auto px-4 py-16 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Digital Nomad Knowledge Base</h2>
          <p className="text-slate-500">Expert insights on global mobility and tax optimization.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-indigo-600 mb-2">
              <Calculator className="w-5 h-5" />
              <h3 className="font-bold uppercase text-sm tracking-widest">Tax Residency Rules</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              The <strong>183-day rule</strong> is a primary test used by many countries to determine if a person is a tax resident. Triggering this status often means you are liable for taxes on your global income. Nomad Vault helps you track these critical dates across multiple jurisdictions to prevent accidental double taxation.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-600 mb-2">
              <Globe2 className="w-5 h-5" />
              <h3 className="font-bold uppercase text-sm tracking-widest">Global Health Standards</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike traditional travel insurance, <strong>International Health Insurance</strong> (IPMI) provides comprehensive coverage including wellness checks and hospitalization. For nomads, having a plan that covers "Out-of-Area" incidents is vital for true freedom of movement.
            </p>
          </div>
        </div>

        {/* AdSense Slot: Mid Content (336x280) */}
        <div className="bg-slate-50 border-2 border-dashed border-slate-100 rounded-2xl py-12 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-4">AdSense Managed Slot</span>
          <div className="w-[336px] h-[280px] bg-white border border-slate-200 rounded-xl shadow-inner flex items-center justify-center text-slate-200 text-sm">
            Content-Adaptive Ad
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-2 font-black text-xl text-slate-900">
            <HelpCircle className="w-6 h-6 text-indigo-500" />
            Frequently Asked Questions
          </div>
          <div className="grid grid-cols-1 gap-6">
            {[
              { q: "How does the 183-day rule affect my taxes?", a: "In most countries, spending more than 183 days within a fiscal year automatically makes you a tax resident, meaning your global income could be subject to local tax laws." },
              { q: "What is the difference between tax residency and visa status?", a: "Visa status determines your right to stay, while tax residency determines your tax obligations. You can have a valid visa but still be a tax resident of another country." },
              { q: "Do I need insurance if my home country provides it?", a: "Most domestic insurance plans do not provide coverage once you are abroad for more than 30-90 days. Nomad-specific insurance is required for long-term travelers." }
            ].map((faq, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-colors">
                <h4 className="font-bold text-slate-900 mb-2 text-sm">{faq.q}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Information Disclaimer */}
      <section className="text-center space-y-8 pb-20">
        <h2 className="text-3xl font-black text-slate-900">Ready to secure your global lifestyle?</h2>
        <Link to="/form" className="btn-primary mx-auto">Get Started Now</Link>
        <p className="text-[10px] text-slate-400 max-w-lg mx-auto uppercase tracking-widest leading-loose">
          Global Nomad Vault provides analytical tools for educational purposes. We are not a law firm. All simulations should be verified by professional tax advisors.
        </p>
      </section>
    </div>
  );
}
