import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, CheckCircle, Loader2, AlertCircle, Calendar, User, Tag } from 'lucide-react';
import { Task } from '../types';
import { DB_KEY } from '../constants';

const CreateReminder: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium' as const,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a brief database write delay for UX
    setTimeout(() => {
        const newTask: Task = {
            ...formData,
            id: Math.random().toString(36).substr(2, 9),
            status: 'Scheduled',
            createdAt: Date.now()
        };

        // Get existing or init empty
        const existingRaw = localStorage.getItem(DB_KEY);
        const tasks: Task[] = existingRaw ? JSON.parse(existingRaw) : [];
        
        // Save
        tasks.unshift(newTask);
        localStorage.setItem(DB_KEY, JSON.stringify(tasks));

        setIsSubmitting(false);
        setIsSubmitted(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center animate-in zoom-in duration-300">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100 text-center max-w-lg w-full">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-green-500 w-14 h-14" />
          </div>
          <h2 className="text-3xl font-black mb-2 text-slate-900">Task Saved Locally</h2>
          <p className="text-slate-500 mb-8 px-4">
            The database has been updated successfully. Your task is now persistent.
          </p>
          <div className="flex flex-col gap-3">
            <button 
                onClick={() => navigate('/list')}
                className="w-full py-4 bg-microsoft-blue text-white font-bold rounded-2xl hover:bg-blue-600 transition-all shadow-lg"
            >
                Go to Pipeline
            </button>
            <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full py-4 bg-slate-50 text-slate-600 font-bold rounded-2xl hover:bg-slate-100 transition-all"
            >
                Create Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-black mb-2 text-slate-900">New Reminder</h1>
          <p className="text-slate-400 font-medium">Add a task to your persistent cloud-ready database.</p>
        </div>

        <div className="bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <User className="w-3 h-3" /> Submitter Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Satya Nadella"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-microsoft-blue outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <User className="w-3 h-3" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@microsoft.com"
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-microsoft-blue outline-none transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <Tag className="w-3 h-3" /> Task Title
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="What needs to be done?"
                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-microsoft-blue outline-none transition-all font-medium"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400">Description</label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Additional details..."
                className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-microsoft-blue outline-none transition-all font-medium resize-none"
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  required
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-microsoft-blue outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Priority</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-microsoft-blue outline-none transition-all font-bold appearance-none"
                >
                  <option value="Low">Low Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="High">High Priority</option>
                  <option value="Urgent">Urgent Alert</option>
                </select>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-microsoft-blue text-white font-black text-lg rounded-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-6 h-6" />
                    <span>Saving to Database...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Save Reminder</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateReminder;