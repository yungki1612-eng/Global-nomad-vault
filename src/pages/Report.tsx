import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { AlertCircle, FileText, CheckCircle, Shield, TrendingDown, ExternalLink, Download } from 'lucide-react';

export default function Report() {
  const { userData } = useStore();

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Strategy Report</h1>
          <p className="text-slate-500 text-lg font-medium">Personalized optimization for {userData.incomeCountry || 'Global'} residency.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <Download className="w-5 h-5" /> Save PDF
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-lg">
            Share Report
          </button>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-8 bg-gradient-to-br from-indigo-600 to-indigo-700 text-white">
          <div className="flex items-center gap-2 text-indigo-200 font-bold text-xs uppercase tracking-widest mb-4">
            <TrendingDown className="w-4 h-4" /> Estimated Savings
          </div>
          <div className="text-5xl font-extrabold mb-2">$14,250</div>
          <p className="text-indigo-100/80 text-sm">Potential yearly tax reduction</p>
        </div>
        
        <div className="glass-card p-8 bg-white">
          <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest mb-4">
            <Shield className="w-4 h-4" /> Health Score
          </div>
          <div className="text-5xl font-extrabold text-slate-900 mb-2">94%</div>
          <p className="text-slate-500 text-sm">Coverage optimization level</p>
        </div>

        <div className="glass-card p-8 bg-white border-rose-100">
          <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-widest mb-4">
            <AlertCircle className="w-4 h-4" /> Tax Residency Risk
          </div>
          <div className="text-5xl font-extrabold text-rose-600 mb-2">High</div>
          <p className="text-slate-500 text-sm">Thailand stay approaching 180 days</p>
        </div>
      </div>

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tax Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-indigo-50 rounded-2xl">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Tax Optimization Logic</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full uppercase">AI Verified</span>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-3">Recommendation: Portugal Digital Nomad Visa (D8)</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Based on your income of ${userData.incomeAmount.toLocaleString()}, moving your primary tax residency to Portugal could trigger the NHR 2.0 regime, effectively reducing your effective tax rate by 15% compared to your current setup.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Double Taxation Treaty between US & Portugal applied.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Business expenses of ${userData.deductibleExpenses.toLocaleString()} fully deductible under Portuguese law.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Insurance & Affiliate Sidebar */}
        <div className="space-y-6">
          <div className="glass-card p-8 border-indigo-100 bg-indigo-50/30">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 bg-white shadow-sm border border-indigo-100 rounded-3xl">
                <Shield className="w-10 h-10 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Top Insurance Pick</h3>
                <p className="text-slate-500 text-sm">Best for {userData.coveragePreference} seekers</p>
              </div>
              
              <div className="w-full pt-4 space-y-4">
                <div className="flex justify-between text-sm border-b border-indigo-100 pb-2">
                  <span className="text-slate-500">Provider</span>
                  <span className="font-bold text-slate-900">SafetyWing</span>
                </div>
                <div className="flex justify-between text-sm border-b border-indigo-100 pb-2">
                  <span className="text-slate-500">Plan</span>
                  <span className="font-bold text-slate-900">Nomad Health</span>
                </div>
                <div className="flex justify-between text-sm border-b border-indigo-100 pb-2">
                  <span className="text-slate-500">Monthly Est.</span>
                  <span className="font-bold text-indigo-600">$124.00</span>
                </div>
              </div>

              <a 
                href="https://safetywing.com/nomad-health?referenceID=vault" 
                target="_blank" 
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group"
              >
                Apply via Nomad Vault <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">Official Insurtech Partner</p>
            </div>
          </div>

          <div className="p-6 bg-rose-50 rounded-3xl border border-rose-100">
            <h4 className="text-sm font-bold text-rose-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Legal Disclaimer
            </h4>
            <p className="text-[11px] text-rose-800 leading-relaxed opacity-80">
              This report uses AI to analyze global tax treaties. It is NOT legal advice. Always verify with a qualified tax professional (CPA/Lawyer) before initiating relocation.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center pt-8">
        <Link to="/tracker" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-3 transition-all">
          View Live Residency Tracker <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
