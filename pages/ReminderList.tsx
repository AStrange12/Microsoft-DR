import React, { useState, useEffect } from 'react';
import { Priority, Status, Task } from '../types';
import { DB_KEY } from '../constants';
import { Calendar, Filter, Trash2, Database, Search } from 'lucide-react';

const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case 'Urgent': return 'bg-red-50 text-red-600 border-red-100';
    case 'High': return 'bg-orange-50 text-orange-600 border-orange-100';
    case 'Medium': return 'bg-blue-50 text-blue-600 border-blue-100';
    case 'Low': return 'bg-slate-50 text-slate-500 border-slate-100';
    default: return 'bg-slate-50 text-slate-500';
  }
};

const ReminderList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem(DB_KEY);
    if (raw) {
      setTasks(JSON.parse(raw));
    }
  }, []);

  const deleteTask = (id: string) => {
    const updated = tasks.filter(t => t.id !== id);
    setTasks(updated);
    localStorage.setItem(DB_KEY, JSON.stringify(updated));
  };

  const filteredTasks = tasks.filter(t => 
    t.title.toLowerCase().includes(search.toLowerCase()) || 
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black mb-3 text-slate-900 tracking-tight">Organization Pipeline</h1>
          <p className="text-slate-400 font-medium">
            Real-time view of your persistent task database.
          </p>
        </div>
        
        <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
                type="text" 
                placeholder="Search database..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all text-sm font-medium"
            />
        </div>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="bg-white rounded-[32px] border-2 border-dashed border-slate-100 p-20 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-slate-200" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">No Records Found</h3>
            <p className="text-slate-400 max-w-xs mx-auto mb-6">Your local-first database is currently empty or matches no search criteria.</p>
            <a href="#/create" className="text-microsoft-blue font-bold text-sm hover:underline">Add your first task &rarr;</a>
        </div>
      ) : (
        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Mission Detail</th>
                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Deadline</th>
                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Priority</th>
                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                {filteredTasks.map((task) => (
                    <tr key={task.id} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-6">
                        <div className="font-bold text-slate-800 mb-0.5">{task.title}</div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase text-slate-300">Submitter:</span>
                            <span className="text-xs font-medium text-slate-500">{task.name}</span>
                        </div>
                    </td>
                    <td className="px-8 py-6">
                        <div className="flex items-center text-slate-600 text-sm font-semibold">
                        <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                        {new Date(task.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                    </td>
                    <td className="px-8 py-6">
                        <span className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase border ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                        </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                        <button 
                            onClick={() => deleteTask(task.id)}
                            className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
      )}
    </div>
  );
};

export default ReminderList;