
import React from 'react';
// Added Zap to the import list to resolve "Cannot find name 'Zap'" error
import { Send, Cpu, Database, BellRing, Shield, Layers, Zap } from 'lucide-react';

const StepCard: React.FC<{
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
  color: string;
}> = ({ number, icon, title, description, tools, color }) => (
  <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center">
    <div className={`absolute -top-4 -left-4 w-10 h-10 ${color} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}>
      {number}
    </div>
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 transition-transform hover:scale-110`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
    <p className="text-slate-500 mb-6 text-sm leading-relaxed">
      {description}
    </p>
    <div className="mt-auto pt-4 flex flex-wrap justify-center gap-2">
      {tools.map(tool => (
        <span key={tool} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded tracking-wider">
          {tool}
        </span>
      ))}
    </div>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Serverless Modern Infrastructure</h1>
        <p className="text-xl text-slate-500">
          By leveraging the Microsoft Power Platform, we eliminate the need for custom backend servers, reducing maintenance costs and security vulnerabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <StepCard
          number="1"
          icon={<Send className="w-8 h-8 text-blue-500" />}
          title="Submission"
          description="User submits a task through the premium React frontend. A request is sent to a unique HTTP Webhook endpoint."
          tools={["React", "TypeScript", "HTTP Webhook"]}
          color="bg-blue-500"
        />
        <StepCard
          number="2"
          icon={<Cpu className="w-8 h-8 text-indigo-500" />}
          title="Orchestration"
          description="Power Automate cloud flow receives the payload, parses JSON data, and validates fields against business rules."
          tools={["Power Automate", "JSON", "Cloud Flow"]}
          color="bg-indigo-500"
        />
        <StepCard
          number="3"
          icon={<Database className="w-8 h-8 text-green-500" />}
          title="Persistence"
          description="The validated task is stored in Microsoft Lists or Dataverse, automatically creating a record with a unique ID."
          tools={["MS Lists", "Dataverse", "Storage"]}
          color="bg-green-500"
        />
        <StepCard
          number="4"
          icon={<BellRing className="w-8 h-8 text-orange-500" />}
          title="Automation"
          description="A delay-until or scheduled trigger monitors the record. At the right time, alerts are pushed to the user."
          tools={["Outlook", "Teams", "Push API"]}
          color="bg-orange-500"
        />
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <Layers className="w-64 h-64" />
        </div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Microsoft Ecosystem?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Integrated Security</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Identity management is handled by Microsoft Entra ID (formerly Azure AD), providing SSO and enterprise-grade protection.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Rapid Deployment</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Skip the backend coding. Microsoft's Low-Code tools allow us to build complex logic 5x faster than traditional stacks.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                  <Database className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Dataverse Connectivity</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Scale from a simple list to a complex relational database with thousands of tables without changing your architecture.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold mb-4 flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-blue-400" />
                Conceptual Architecture Diagram
            </h4>
            <div className="space-y-4">
                <div className="bg-white/10 p-3 rounded-lg border border-white/5 text-sm text-center">Frontend Layer (Vercel / Azure Static Web Apps)</div>
                <div className="flex justify-center py-1">
                    <div className="h-4 w-0.5 bg-blue-400/50"></div>
                </div>
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30 text-sm text-center font-semibold text-blue-300">HTTP Request → Power Automate</div>
                <div className="flex justify-center py-1">
                    <div className="h-4 w-0.5 bg-blue-400/50"></div>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30 text-sm text-center font-semibold text-green-300">Logic & Storage (Lists / Dataverse)</div>
                <div className="flex justify-center py-1">
                    <div className="h-4 w-0.5 bg-blue-400/50"></div>
                </div>
                <div className="bg-orange-500/20 p-3 rounded-lg border border-orange-500/30 text-sm text-center font-semibold text-orange-300">Output Layer (Outlook / Teams / SMS)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
