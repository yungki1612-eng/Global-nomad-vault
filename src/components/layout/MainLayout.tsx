import { Outlet, Link } from 'react-router-dom';
import { Globe, Shield, Home as HomeIcon } from 'lucide-react';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans text-neutral-900">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2 text-indigo-600">
              <Globe className="w-8 h-8" />
              <span className="font-bold text-xl tracking-tight">Nomad Vault</span>
            </Link>
            
            <nav className="flex space-x-6 text-sm font-medium text-neutral-600">
              <Link to="/" className="hover:text-indigo-600 flex items-center gap-1 transition-colors">
                <HomeIcon className="w-4 h-4" /> Home
              </Link>
              <Link to="/tracker" className="hover:text-indigo-600 flex items-center gap-1 transition-colors">
                <Globe className="w-4 h-4" /> Tax Day Tracker
              </Link>
              <Link to="/report" className="hover:text-indigo-600 flex items-center gap-1 transition-colors">
                <Shield className="w-4 h-4" /> My Report
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-neutral-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center text-sm text-neutral-500">
          <p>© 2026 Global Nomad Vault. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-neutral-900">Terms</a>
            <a href="#" className="hover:text-neutral-900">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
