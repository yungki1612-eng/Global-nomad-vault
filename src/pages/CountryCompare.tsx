import { useState } from 'react';
import { Scale, Zap, Globe, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

const countryData = [
  { id: 'portugal', name: 'Portugal', tax: '20% (NHR)', internet: 'High', cost: 'Moderate', visa: 'D7/D8', rating: 4.5 },
  { id: 'thailand', name: 'Thailand', tax: '0% (Foreign Source)', internet: 'Ultra High', cost: 'Low', visa: 'DTV', rating: 4.8 },
  { id: 'spain', name: 'Spain', tax: '24% (Beckham Law)', internet: 'High', cost: 'Moderate', visa: 'Digital Nomad', rating: 4.2 },
  { id: 'dubai', name: 'Dubai (UAE)', tax: '0%', internet: 'Very High', cost: 'High', visa: 'Remote Work', rating: 4.0 },
  { id: 'estonia', name: 'Estonia', tax: '20%', internet: 'High', cost: 'Moderate', visa: 'E-Residency', rating: 4.3 },
  { id: 'georgia', name: 'Georgia', tax: '1% (Individual Entrepreneur)', internet: 'Moderate', cost: 'Very Low', visa: '1-Year Visa Free', rating: 4.6 },
];

export default function CountryCompare() {
  const [c1, setC1] = useState(countryData[0]);
  const [c2, setC2] = useState(countryData[1]);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Country Comparison Engine</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Compare the world's most popular nomad destinations side-by-side to find your next home base.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Country 1 Selection */}
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select Destination A</label>
          <select 
            className="w-full p-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 outline-none focus:ring-4 focus:ring-indigo-500/10 appearance-none shadow-sm"
            value={c1.id}
            onChange={(e) => setC1(countryData.find(c => c.id === e.target.value) || countryData[0])}
          >
            {countryData.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>

        {/* Country 2 Selection */}
        <div className="space-y-4">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select Destination B</label>
          <select 
            className="w-full p-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-900 outline-none focus:ring-4 focus:ring-indigo-500/10 appearance-none shadow-sm"
            value={c2.id}
            onChange={(e) => setC2(countryData.find(c => c.id === e.target.value) || countryData[1])}
          >
            {countryData.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
      </div>

      <div className="glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="p-6 text-left text-xs uppercase tracking-widest font-black">Feature</th>
              <th className="p-6 text-left text-xl font-black">{c1.name}</th>
              <th className="p-6 text-left text-xl font-black">{c2.name}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { label: "Tax Optimization", key: "tax", icon: <Scale className="w-4 h-4" /> },
              { label: "Internet Infrastructure", key: "internet", icon: <Zap className="w-4 h-4" /> },
              { label: "Cost of Living", key: "cost", icon: <DollarSign className="w-4 h-4" /> },
              { label: "Available Visas", key: "visa", icon: <Globe className="w-4 h-4" /> },
            ].map((row) => (
              <tr key={row.key} className="hover:bg-slate-50 transition-colors">
                <td className="p-6">
                  <div className="flex items-center gap-3 font-bold text-slate-500 text-sm">
                    {row.icon} {row.label}
                  </div>
                </td>
                <td className="p-6 font-bold text-slate-900">{c1[row.key as keyof typeof c1]}</td>
                <td className="p-6 font-bold text-slate-900">{c2[row.key as keyof typeof c2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="p-8 bg-indigo-50 rounded-[2rem] border border-indigo-100 space-y-4">
            <h3 className="text-xl font-bold text-indigo-900">Why {c1.name}?</h3>
            <p className="text-indigo-800/70 text-sm leading-relaxed">
              {c1.name} offers a unique balance of {c1.internet.toLowerCase()} internet and {c1.cost.toLowerCase()} living costs. 
              The {c1.visa} visa is particularly popular among digital nomads in 2026.
            </p>
            <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-indigo-600 uppercase">Top Rated</span>
               <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-indigo-600 uppercase">Fast Internet</span>
            </div>
         </div>

         <div className="p-8 bg-emerald-50 rounded-[2rem] border border-emerald-100 space-y-4">
            <h3 className="text-xl font-bold text-emerald-900">Why {c2.name}?</h3>
            <p className="text-emerald-800/70 text-sm leading-relaxed">
              Choosing {c2.name} means prioritizing {c2.tax} tax rates and a {c2.cost.toLowerCase()} lifestyle. 
              Perfect for those looking to maximize their savings while enjoying a new culture.
            </p>
            <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-emerald-600 uppercase">Low Tax</span>
               <span className="px-3 py-1 bg-white rounded-full text-[10px] font-bold text-emerald-600 uppercase">Nomad Hub</span>
            </div>
         </div>
      </div>

      <div className="text-center bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black text-slate-900">Need a deeper analysis?</h2>
        <p className="text-slate-500">Run our full tax residency simulation for a 10-page personalized report.</p>
        <button className="btn-primary group">
          Start Full Optimizer <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
