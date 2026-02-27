import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Map, TrendingUp, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative flex flex-col items-center justify-center min-h-[85vh] text-center py-20 px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 text-sm font-bold mb-8 animate-bounce-slow">
          <Sparkles className="w-4 h-4" />
          <span>New for 2026: AI-Powered Tax Treaties Analysis</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-6 max-w-4xl mb-12">
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Global Freedom, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              Zero Tax Worry.
            </span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Protect your wealth and health with our all-in-one optimizer. 
            Tailored for digital nomads who demand total financial agility.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link to="/form" className="btn-primary group">
            Start Free Optimizer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/tracker" className="px-8 py-4 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
            Try Day Tracker First
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {[
            {
              icon: <TrendingUp className="w-8 h-8 text-indigo-500" />,
              title: "Tax Residency 2.0",
              desc: "Deep analysis of 2026 tax treaties to find your ideal base.",
              gradient: "from-indigo-500/5 to-transparent"
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
              title: "Insurtech Matching",
              desc: "Tailored health plans that move with you across borders.",
              gradient: "from-emerald-500/5 to-transparent"
            },
            {
              icon: <Map className="w-8 h-8 text-rose-500" />,
              title: "Smart Day Tracker",
              desc: "Prevent residency triggers with automated boundary alerts.",
              gradient: "from-rose-500/5 to-transparent"
            }
          ].map((feature, idx) => (
            <div 
              key={idx}
              className={`glass-card p-8 text-left hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-white shadow-sm border border-slate-100 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
