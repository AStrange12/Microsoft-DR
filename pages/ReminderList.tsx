
import React from 'react';
import { MOCK_TASKS } from '../constants';
import { Priority, Status } from '../types';
import { AlertCircle, Calendar, Filter, Download } from 'lucide-react';

const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case 'Urgent': return 'bg-red-100 text-red-700 border-red-200';
    case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'Medium': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'Low': return 'bg-slate-100 text-slate-600 border-slate-200';
    default: return 'bg-slate-100 text-slate-600';
  }
};

const getStatusColor = (status: Status) => {
  switch (status) {
    case 'Scheduled': return 'text-blue-600';
    case 'In Progress': return 'text-amber-600';
    case 'Completed': return 'text-green-600';
    case 'Delayed': return 'text-red-600';
    default: return 'text-slate-600';
  }
};

const ReminderList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h1 className="text-4xl font-bold mb-3 text-slate-900">Current Task Pipeline</h1>
          <p className="text-slate-500 text-lg">
            Active reminders being managed by the Microsoft Power Platform.
          </p>
        </div>
        <div className="flex gap-3">
            <button className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
                <Filter className="w-4 h-4 mr-2" />
                Filter
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
            </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Task Title</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Deadline</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_TASKS.map((task) => (
                <tr key={task.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="font-semibold text-slate-800">{task.title}</div>
                    <div className="text-xs text-slate-500 truncate max-w-[200px]">{task.description}</div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center text-slate-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                      {new Date(task.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center text-sm font-medium">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        task.status === 'Scheduled' ? 'bg-blue-500' : 
                        task.status === 'In Progress' ? 'bg-amber-500' :
                        task.status === 'Completed' ? 'bg-green-500' : 'bg-red-500'
                      }`}></div>
                      <span className={getStatusColor(task.status)}>{task.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="text-sm font-medium text-slate-700">{task.name}</div>
                    <div className="text-xs text-slate-400">{task.email}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 flex items-center p-4 bg-amber-50 rounded-xl border border-amber-100">
        <AlertCircle className="text-amber-600 w-5 h-5 mr-3 flex-shrink-0" />
        <p className="text-sm text-amber-800">
          <strong>Transparency Note:</strong> In a real production deployment, this data is dynamically fetched from <strong>Microsoft Lists / Dataverse</strong> via the Microsoft Graph API or Power Automate responses.
        </p>
      </div>
    </div>
  );
};

export default ReminderList;
