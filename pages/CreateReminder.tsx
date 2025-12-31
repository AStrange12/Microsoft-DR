
import React, { useState } from 'react';
import { Send, CheckCircle, Info, Loader2 } from 'lucide-react';

const CreateReminder: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to Power Automate Webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
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
        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 text-center max-w-lg w-full">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-green-600 w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Reminder Scheduled!</h2>
          <p className="text-slate-600 mb-8">
            Your task "<span className="font-semibold text-slate-800">{formData.title}</span>" has been successfully added to Microsoft Lists.
          </p>
          <div className="bg-blue-50 p-4 rounded-xl text-left mb-8 border border-blue-100">
            <div className="flex items-start">
                <Info className="text-microsoft-blue w-5 h-5 mr-3 mt-0.5" />
                <p className="text-sm text-microsoft-blue leading-relaxed">
                    <strong>Technical Note:</strong> A Power Automate cloud flow has been triggered. It will monitor the deadline ({formData.deadline}) and send a notification to {formData.email}.
                </p>
            </div>
          </div>
          <button 
            onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', title: '', description: '', deadline: '', priority: 'Medium' });
            }}
            className="w-full py-4 bg-microsoft-blue text-white font-bold rounded-xl hover-microsoft-blue transition-all"
          >
            Create Another Reminder
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">New Task Reminder</h1>
          <p className="text-slate-500 text-lg">
            Complete the form below to initiate an automated reminder workflow.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-microsoft-blue h-2 w-full"></div>
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Satya Nadella"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Task Title</label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="Briefly describe the task"
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Description</label>
              <textarea
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                placeholder="Any additional details or context..."
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Deadline Date</label>
                <input
                  type="date"
                  name="deadline"
                  required
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Priority Level</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Urgent</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-microsoft-blue text-white font-bold rounded-xl hover-microsoft-blue transition-all shadow-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    <span>Triggering Power Automate...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit to Workflow</span>
                  </>
                )}
              </button>
              <p className="text-center text-slate-400 text-xs mt-4 italic">
                Real backend workflow runs through Microsoft Power Automate and stores in Microsoft Lists.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateReminder;
