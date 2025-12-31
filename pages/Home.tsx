
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Database, Bell, ShieldCheck, Cpu } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-microsoft-blue text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Empowering Teams with Automation
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Never Miss a <span className="text-microsoft-blue">Deadline</span> Again.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              A premium task management portal seamlessly integrated with the Microsoft ecosystem for reliable, multi-channel reminder workflows.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/create"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-microsoft-blue text-white font-bold text-lg hover-microsoft-blue transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Create New Reminder
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-lg hover:bg-slate-50 transition-all"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">The Problem: Deadlines Slip Through the Cracks</h2>
              <p className="text-lg text-slate-600 mb-6">
                Manual tracking, scattered spreadsheets, and missed emails lead to project delays and team stress. Most organizations struggle to maintain a centralized, automated source of truth for critical tasks.
              </p>
              <ul className="space-y-4">
                {[
                  "Disconnected data across multiple apps",
                  "Manual follow-ups that waste precious time",
                  "No automated notification triggers",
                  "Lack of audit trails for task status"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <div className="bg-red-100 p-1 rounded-full mr-3">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <img 
                    src="https://picsum.photos/seed/deadline/600/400" 
                    alt="Productivity Visualization" 
                    className="rounded-lg shadow-sm mb-6 w-full"
                />
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <p className="font-bold text-slate-800">Productivity Gap</p>
                        <p className="text-sm text-slate-500">Without automation, teams lose 12 hours/week.</p>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
                        <Zap className="text-amber-500 w-5 h-5" />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Solution: Intelligent Automation</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
            We replace manual oversight with a robust, enterprise-grade workflow using the Microsoft tools you already own.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-microsoft-blue w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Enterprise Grade</h3>
              <p className="text-slate-500">Built on Dataverse, ensuring your data is secure, scalable, and compliant.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Database className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Single Source of Truth</h3>
              <p className="text-slate-500">All reminders are stored in Microsoft Lists for easy reporting and management.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="text-purple-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Triggers</h3>
              <p className="text-slate-500">Power Automate monitors deadlines and sends alerts via Outlook, Teams, or SMS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 h-full w-full">
                {Array.from({length: 144}).map((_, i) => (
                    <div key={i} className="border border-white/20"></div>
                ))}
            </div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Powered by Microsoft Power Automate + Microsoft Lists / Dataverse</h2>
            <p className="text-slate-400 text-lg">Our architecture is designed for zero-maintenance and high reliability by leveraging the Power Platform.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {/* Step 1 */}
            <div className="flex-1 max-w-xs text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-xl">1</span>
              </div>
              <h4 className="font-bold text-lg mb-2">Frontend Form</h4>
              <p className="text-sm text-slate-400">User submits reminder details via our portal.</p>
            </div>

            <div className="hidden md:block w-12 border-t border-dashed border-white/30"></div>

            {/* Step 2 */}
            <div className="flex-1 max-w-xs text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-blue-400">Power Automate</h4>
              <p className="text-sm text-slate-400">Webhook triggers the cloud flow sequence.</p>
            </div>

            <div className="hidden md:block w-12 border-t border-dashed border-white/30"></div>

            {/* Step 3 */}
            <div className="flex-1 max-w-xs text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-white w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-green-400">Microsoft Lists</h4>
              <p className="text-sm text-slate-400">Reminders are stored in a secure list database.</p>
            </div>

            <div className="hidden md:block w-12 border-t border-dashed border-white/30"></div>

            {/* Step 4 */}
            <div className="flex-1 max-w-xs text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="text-white w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg mb-2 text-orange-400">Notifications</h4>
              <p className="text-sm text-slate-400">Automated alerts via Outlook & MS Teams.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
