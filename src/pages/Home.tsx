import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Map, TrendingUp, Sparkles, Calculator, Globe2, Calendar } from 'lucide-react';

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

      {/* Latest Intelligence (Blog) Section */}
      <section className="space-y-12">
        <div className="flex justify-between items-end px-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Nomad Intelligence</h2>
            <p className="text-slate-500">Expert analysis on global tax and legal trends.</p>
          </div>
          <Link to="/blog" className="text-indigo-600 font-bold hover:underline hidden md:flex items-center gap-2">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[
            { id: 'tax-residency-183-day-rule', title: 'Ultimate Guide to 183-Day Rule', category: 'Tax Strategy', date: 'Feb 15, 2026' },
            { id: 'best-nomad-visas-2026', title: 'Top 5 Digital Nomad Visas', category: 'Visas', date: 'Feb 10, 2026' },
            { id: 'choosing-nomad-health-insurance', title: 'Global Health Insurance Guide', category: 'Insurance', date: 'Feb 05, 2026' }
          ].map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="glass-card p-6 hover:shadow-xl transition-all group">
              <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3">{post.category}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors">{post.title}</h3>
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Knowledge Base (Text Rich) Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 bg-white rounded-[3rem] border border-slate-100 shadow-sm space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Legal Knowledge Base</h2>
          <p className="text-slate-500">Expert insights on global mobility and tax optimization.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-indigo-600 mb-2">
              <Calculator className="w-5 h-5" />
              <h3 className="font-bold uppercase text-sm tracking-widest">Tax Residency Rules</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              The <strong>183-day rule</strong> is a primary test used by many countries to determine if a person is a tax resident. Nomad Vault helps you track these critical dates across multiple jurisdictions to prevent accidental double taxation.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-emerald-600 mb-2">
              <Globe2 className="w-5 h-5" />
              <h3 className="font-bold uppercase text-sm tracking-widest">Global Health Standards</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              For nomads, having a plan that covers "Out-of-Area" incidents is vital for true freedom of movement. We analyze providers like SafetyWing and PassportCard for global compatibility.
            </p>
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
