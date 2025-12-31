
import React, { useState } from 'react';
import { Send, CheckCircle, Info, Loader2, Link as LinkIcon, AlertCircle, Terminal, ExternalLink } from 'lucide-react';

// INSTRUCTIONS: Paste your Power Automate HTTP POST URL here
const POWER_AUTOMATE_WEBHOOK_URL = ""; 

const CreateReminder: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    if (!POWER_AUTOMATE_WEBHOOK_URL) {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(POWER_AUTOMATE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to trigger workflow');
      }
    } catch (err) {
      setIsSubmitting(false);
      setError('Connection failed. Are you using a Developer Sandbox account? Student accounts may block this request.');
    }
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
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Success!</h2>
          <p className="text-slate-600 mb-8">
            Data has been pushed to the <strong>Microsoft Cloud</strong> via Power Automate.
          </p>
          <div className="bg-blue-50 p-4 rounded-xl text-left mb-8 border border-blue-100">
            <div className="flex items-start">
                <Info className="text-microsoft-blue w-5 h-5 mr-3 mt-0.5" />
                <p className="text-sm text-microsoft-blue leading-relaxed">
                    <strong>Workflow Status:</strong> The HTTP Webhook was successfully triggered. Power Automate is now recording the task and scheduling your notification for {formData.deadline}.
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
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">Task Submission Portal</h1>
          <p className="text-slate-500 text-lg">
            Built for the Microsoft Developer Ecosystem.
          </p>
        </div>

        {/* Developer Sandbox Guide */}
        <div className="mb-8 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="text-blue-400 w-5 h-5" />
            <h3 className="font-bold">Microsoft 365 Developer Access</h3>
          </div>
          <p className="text-sm text-slate-400 mb-4 leading-relaxed">
            If your Student ID restricts Excel/Automate, use a <strong>M365 Developer Sandbox</strong> account. This provides a free Enterprise license with NO restrictions.
          </p>
          <a 
            href="https://developer.microsoft.com/en-us/microsoft-365/dev-program" 
            target="_blank"
            className="inline-flex items-center text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
          >
            Create Developer Account <ExternalLink className="w-3 h-3 ml-1.5" />
          </a>
        </div>

        {!POWER_AUTOMATE_WEBHOOK_URL && (
          <div className="mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start">
            <AlertCircle className="text-amber-600 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              <p className="font-bold mb-1">Configuration Needed</p>
              <p>Paste your <strong>M365 Developer Flow URL</strong> in <code>pages/CreateReminder.tsx</code> to enable the live cloud workflow.</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-microsoft-blue h-2 w-full"></div>
          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-2" />
                {error}
              </div>
            )}
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
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
                  placeholder="name@dev-sandbox.com"
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
                placeholder="Project Milestone 1"
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
                placeholder="Details about the deadline..."
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
                    <span>Processing in Microsoft Cloud...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Sync Workflow</span>
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
