import { Outlet, Link, useLocation } from 'react-router-dom';
import { Globe, Shield, Home as HomeIcon, BookOpen, Scale, ShieldAlert } from 'lucide-react';
import { cn } from '../../lib/utils';

export function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* AdSense Slot: Top Leaderboard (Optional - only shown if approved/configured) */}
      <div className="bg-white border-b border-slate-100 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-center min-h-[90px] items-center text-[10px] text-slate-300 uppercase tracking-widest border-2 border-dashed border-slate-50">
          ADVERTISING SPACE (728x90)
        </div>
      </div>

      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex items-center gap-2.5 text-indigo-600 transition-transform hover:scale-105">
              <div className="bg-indigo-600 p-1.5 rounded-xl shadow-lg shadow-indigo-200">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-slate-900">Nomad Vault</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8 text-sm font-bold text-slate-500">
              <Link to="/" className={cn("hover:text-indigo-600 transition-colors flex items-center gap-1.5", location.pathname === '/' && "text-indigo-600")}>
                <HomeIcon className="w-4 h-4" /> Home
              </Link>
              <Link to="/tracker" className={cn("hover:text-indigo-600 transition-colors flex items-center gap-1.5", location.pathname === '/tracker' && "text-indigo-600")}>
                <BookOpen className="w-4 h-4" /> Day Tracker
              </Link>
              <Link to="/report" className={cn("hover:text-indigo-600 transition-colors flex items-center gap-1.5", location.pathname === '/report' && "text-indigo-600")}>
                <Shield className="w-4 h-4" /> My Strategy
              </Link>
            </nav>

            <Link to="/form" className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-md">
              Free Checkup
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumbs for better UX/SEO */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
          <Link to="/" className="hover:text-indigo-600">Vault</Link>
          <span>/</span>
          <span className="text-slate-900">{location.pathname.replace('/', '') || 'Home'}</span>
        </div>
        
        <Outlet />
      </main>

      {/* Footer: Vital for AdSense Approval */}
      <footer className="bg-white border-t border-slate-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2 text-indigo-600">
                <Globe className="w-6 h-6" />
                <span className="font-black text-xl tracking-tighter text-slate-900">Nomad Vault</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                Global Nomad Vault is the leading intelligence platform for international tax optimization and insurtech solutions. Empowering 10,000+ digital nomads to live legally and securely across borders.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Solutions</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link to="/tracker" className="hover:text-indigo-600 transition-colors">183-Day Tracker</Link></li>
                <li><Link to="/report" className="hover:text-indigo-600 transition-colors">Tax Simulation</Link></li>
                <li><Link to="/form" className="hover:text-indigo-600 transition-colors">Insurance Match</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Legal & Compliance</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-indigo-600 transition-colors flex items-center gap-2"><Scale className="w-4 h-4" /> Terms of Service</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors flex items-center gap-2"><ShieldAlert className="w-4 h-4" /> Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
            <p>© 2026 Global Nomad Vault. All Rights Reserved. Not Legal Advice.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-900">LinkedIn</a>
              <a href="#" className="hover:text-slate-900">Twitter</a>
              <a href="#" className="hover:text-slate-900">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
