import { MapPin, AlertTriangle, Calendar, RefreshCcw, Bell } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Tracker() {
  const countries = [
    { name: 'Thailand', days: 142, limit: 180, status: 'danger', icon: '🇹🇭' },
    { name: 'Portugal', days: 45, limit: 183, status: 'safe', icon: '🇵🇹' },
    { name: 'Indonesia (Bali)', days: 22, limit: 183, status: 'safe', icon: '🇮🇩' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Live Day Tracker</h1>
          <p className="text-slate-500 text-lg font-medium">Monitoring your 183-day tax residency boundaries.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm text-sm">
          <RefreshCcw className="w-4 h-4" /> Sync Calendar
        </button>
      </div>

      {/* Main Tracker Card */}
      <div className="glass-card overflow-hidden">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-white/50">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-indigo-600" />
            2026 Fiscal Year Log
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Safe</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Risk</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-10">
          {countries.map((country, idx) => {
            const percentage = (country.days / country.limit) * 100;
            const isRisk = country.days > (country.limit * 0.75);

            return (
              <div key={idx} className="group">
                <div className="flex justify-between items-end mb-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                      <span className="text-2xl">{country.icon}</span>
                      {country.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                      Trigger limit: {country.limit} Days
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={cn(
                      "text-3xl font-black mb-1",
                      isRisk ? "text-rose-600" : "text-emerald-600"
                    )}>
                      {country.days} <span className="text-slate-300 text-xl font-medium">Days</span>
                    </div>
                  </div>
                </div>

                <div className="relative w-full h-4 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all duration-1000 ease-out",
                      isRisk ? "bg-gradient-to-r from-rose-500 to-orange-400 shadow-[0_0_10px_rgba(244,63,94,0.3)]" : "bg-gradient-to-r from-emerald-500 to-teal-400"
                    )}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>

                {isRisk && (
                  <div className="mt-4 p-4 bg-rose-50 border border-rose-100 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
                    <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-rose-900">Tax Residency Warning</p>
                      <p className="text-xs text-rose-800 opacity-80 leading-relaxed">
                        You have {country.limit - country.days} days left until you trigger tax residency in {country.name}. 
                        Relocation advised before <strong>April 14th, 2026</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Integration Card */}
      <div className="glass-card p-10 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-widest">
              <Bell className="w-3.5 h-3.5" /> Pro Feature
            </div>
            <h3 className="text-3xl font-bold">Automate Your Tracking</h3>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Connect Google Calendar or TripIt to automatically log cross-border movements and visa expirations.
            </p>
          </div>
          <button className="shrink-0 px-10 py-5 bg-white text-slate-900 font-black rounded-3xl hover:bg-slate-100 transition-all active:scale-95 shadow-xl">
            Connect Now
          </button>
        </div>
      </div>
    </div>
  );
}
