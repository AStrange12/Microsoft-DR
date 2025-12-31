import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Database, CheckCircle2, Clock, AlertTriangle, Plus, Shield, BellRing, Target } from 'lucide-react';
import { Task } from '../types';
import { DB_KEY } from '../constants';

const Home: React.FC = () => {
  const [stats, setStats] = useState({ total: 0, urgent: 0, scheduled: 0 });

  useEffect(() => {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) {
      const tasks: Task[] = JSON.parse(raw);
      setStats({
        total: tasks.length,
        urgent: tasks.filter(t => t.priority === 'Urgent').length,
        scheduled: tasks.filter(t => t.status === 'Scheduled').length
      });
    }
  }, []);

  return (
    <div className="animate-in fade-in duration-700 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-100 py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none hidden md:block"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-microsoft-blue text-[10px] md:text-xs font-bold mb-6 uppercase tracking-widest border border-blue-100">
              <Shield className="w-3.5 h-3.5 mr-2" />
              Enterprise Task Management
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-6 leading-tight lg:leading-[0.9]">
              Never Miss a <br className="hidden sm:block" />
              <span className="text-microsoft-blue">Deadline Again.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl font-medium">
              A premium task management portal seamlessly integrated with the Microsoft ecosystem for reliable, multi-channel reminder workflows.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                to="/create"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-microsoft-blue text-white font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-200 active:scale-95"
              >
                <Plus className="mr-2 w-5 h-5" />
                Create New Reminder
              </Link>
              <Link
                to="/list"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-slate-50 text-slate-700 font-bold hover:bg-slate-100 transition-all border border-slate-200 active:scale-95"
              >
                Organization Pipeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Cards - Adjusted for better responsiveness */}
      <section className="container mx-auto px-4 md:px-6 -mt-8 md:-mt-12 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-xl md:shadow-2xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between group hover:border-blue-300 transition-all hover:-translate-y-1">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Active Pipeline</p>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900">{stats.total}</h3>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 text-microsoft-blue rounded-2xl flex items-center justify-center group-hover:bg-microsoft-blue group-hover:text-white transition-all">
              <Database className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-xl md:shadow-2xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between group hover:border-red-300 transition-all hover:-translate-y-1">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Critical Priority</p>
              <h3 className="text-3xl md:text-4xl font-black text-red-600">{stats.urgent}</h3>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all">
              <AlertTriangle className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-xl md:shadow-2xl shadow-slate-200/50 border border-slate-100 flex items-center justify-between group hover:border-green-300 transition-all hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Status: Scheduled</p>
              <h3 className="text-3xl md:text-4xl font-black text-green-600">{stats.scheduled}</h3>
            </div>
            <div className="w-12 h-12 md:w-14 md:h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
              <Clock className="w-6 h-6 md:w-7 md:h-7" />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Premium Illustration */}
      <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 md:space-y-10">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Enterprise Reliability</h2>
                  <p className="text-slate-500 text-base md:text-lg">Designed for professional environments where accountability is paramount.</p>
                </div>
                
                <div className="space-y-6 md:space-y-8">
                    <div className="flex gap-4 md:gap-5">
                        <div className="bg-blue-600 p-3 md:p-4 rounded-xl md:rounded-2xl text-white h-fit shadow-lg shadow-blue-100 shrink-0">
                            <BellRing className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg md:text-xl text-slate-800 mb-1">Smart Reminders</h4>
                            <p className="text-sm md:text-base text-slate-500 leading-relaxed">Automated notifications via the Microsoft ecosystem ensure that no stakeholder is left behind on critical milestones.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 md:gap-5">
                        <div className="bg-slate-900 p-3 md:p-4 rounded-xl md:rounded-2xl text-white h-fit shadow-lg shadow-slate-200 shrink-0">
                            <Target className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg md:text-xl text-slate-800 mb-1">Precision Tracking</h4>
                            <p className="text-sm md:text-base text-slate-500 leading-relaxed">Visualize the entire organizational pipeline with granular priority levels and real-time status updates.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 md:gap-5">
                        <div className="bg-green-500 p-3 md:p-4 rounded-xl md:rounded-2xl text-white h-fit shadow-lg shadow-green-100 shrink-0">
                            <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg md:text-xl text-slate-800 mb-1">Persistent Compliance</h4>
                            <p className="text-sm md:text-base text-slate-500 leading-relaxed">Every entry is securely hashed and stored in your persistent organizational environment for full audit capability.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Improved Visual - Made more responsive */}
            <div className="relative group mt-8 lg:mt-0">
                <div className="absolute inset-0 bg-microsoft-blue/5 rounded-[32px] md:rounded-[48px] blur-3xl group-hover:bg-microsoft-blue/10 transition-colors"></div>
                <div className="relative bg-white p-3 md:p-4 rounded-[32px] md:rounded-[40px] border border-slate-100 shadow-2xl overflow-hidden">
                   <div className="bg-slate-50 p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-slate-100 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1.5 md:gap-2">
                          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400"></div>
                          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest">Workflow Preview</span>
                      </div>
                      
                      {/* Decorative Dashboard Elements */}
                      <div className="space-y-3 md:space-y-4">
                        {[
                          { title: 'Project Alpha Review', time: '14:00 PM', color: 'bg-blue-500' },
                          { title: 'Azure Cost Optimization', time: '16:30 PM', color: 'bg-microsoft-blue' },
                          { title: 'Urgent Stakeholder Call', time: '10:00 AM', color: 'bg-red-500' }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between animate-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                              <div className={`w-1.5 md:w-2 h-8 md:h-10 rounded-full ${item.color} shrink-0`}></div>
                              <div className="truncate">
                                <p className="font-bold text-slate-800 text-xs md:text-sm truncate">{item.title}</p>
                                <p className="text-[9px] md:text-[10px] text-slate-400 font-medium">Due Today • {item.time}</p>
                              </div>
                            </div>
                            <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-slate-100 shrink-0" />
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 md:pt-4 flex justify-center">
                        <div className="flex -space-x-2 md:-space-x-3">
                          {[1,2,3,4].map(i => (
                            <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 border-2 border-white ring-2 ring-slate-50 flex items-center justify-center overflow-hidden shrink-0">
                              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}`} alt="User" />
                            </div>
                          ))}
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 border-2 border-white ring-2 ring-slate-50 flex items-center justify-center text-[9px] md:text-[10px] font-bold text-microsoft-blue shrink-0">
                            +12
                          </div>
                        </div>
                      </div>
                   </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;