import { Shield, Globe, Users, Target, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-xs font-bold uppercase tracking-widest">
          <Target className="w-4 h-4" />
          <span>Our Mission</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-none">
          Empowering the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
            Global Workforce.
          </span>
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
          Global Nomad Vault was founded in 2024 to simplify the increasingly complex world of international tax, 
          legal residency, and health insurance for the digital nomad community.
        </p>
      </section>

      {/* Values Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          {
            icon: <Shield className="w-8 h-8 text-indigo-600" />,
            title: "Legal Transparency",
            desc: "We believe in making complex international laws accessible and understandable for everyone."
          },
          {
            icon: <Globe className="w-8 h-8 text-emerald-600" />,
            title: "Borderless Freedom",
            desc: "Supporting the right to live and work from anywhere while remaining compliant and secure."
          },
          {
            icon: <Users className="w-8 h-8 text-rose-600" />,
            title: "Community First",
            desc: "Built by nomads, for nomads. Every feature is designed based on real-world travel experiences."
          }
        ].map((item, i) => (
          <div key={i} className="glass-card p-10 space-y-6 hover:shadow-2xl transition-all">
            <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-50 inline-block">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Story Section */}
      <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black tracking-tight">Why We Built the Vault</h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                In 2024, our founders realized that while remote work was exploding, the "infrastructure of life"—taxes, 
                healthcare, and visas—was still stuck in the 20th century.
              </p>
              <p>
                People were being hit with unexpected tax bills, losing their health coverage, or overstaying 
                visas simply because the rules were too hard to track.
              </p>
              <p>
                <strong>The Vault</strong> was created to be your digital legal assistant, keeping you 
                one step ahead of the regulators.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {['100+ Countries', '50k+ Users', '99% Accuracy'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {badge}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
             <div className="aspect-square bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-[3rem] border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-2xl">
                <Globe className="w-32 h-32 text-white/50 animate-[spin_20s_linear_infinite]" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
