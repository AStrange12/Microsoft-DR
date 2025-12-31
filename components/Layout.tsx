
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Bell, Layout as LayoutIcon, Cpu, HelpCircle } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-microsoft-blue p-1.5 rounded-lg">
            <Bell className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block">
            Deadline <span className="text-microsoft-blue">Reminder Bot</span>
          </span>
        </Link>

        <nav className="flex items-center space-x-1 md:space-x-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === item.path
                  ? 'text-microsoft-blue bg-blue-50'
                  : 'text-slate-600 hover:text-microsoft-blue hover:bg-slate-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
          <div>
            <div className="flex items-center space-x-2 justify-center md:justify-start mb-4">
               <div className="bg-slate-200 p-1 rounded">
                <Bell className="text-slate-600 w-4 h-4" />
               </div>
               <span className="font-bold text-slate-800">Deadline Reminder Bot</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Streamlining organizational efficiency through Microsoft-powered automation.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-1 text-xs text-slate-400">
               <div className="w-2 h-2 rounded-full bg-microsoft-blue"></div>
               <span>Power Automate</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-slate-400">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
               <span>Microsoft Lists</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-slate-400">
               <div className="w-2 h-2 rounded-full bg-purple-500"></div>
               <span>Dataverse</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 mt-8 pt-8 text-center">
          <p className="text-xs text-slate-400 italic">
            Backend workflow and data storage are powered by Microsoft Azure
          </p>
          <p className="text-[10px] text-slate-300 mt-2 uppercase tracking-widest">
          </p>
        </div>
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
