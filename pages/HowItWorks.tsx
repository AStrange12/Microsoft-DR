
import React from 'react';
import { Send, Cpu, Database, BellRing, Shield, Layers, Zap, ExternalLink, Code, Terminal, AlertTriangle, CheckCircle2 } from 'lucide-react';

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
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900">Developer Cloud Architecture</h1>
        <p className="text-xl text-slate-500 leading-relaxed">
          Bypassing account restrictions by using a Microsoft 365 Developer Sandbox for hackathon deployment.
        </p>
      </div>

      {/* Account Fix Section */}
      <div className="mb-20 p-8 bg-amber-50 rounded-3xl border border-amber-200 shadow-inner">
        <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-amber-500 rounded-lg">
                <AlertTriangle className="text-white w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-amber-900">Account Restricted? Follow This Fix:</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
                <p className="text-amber-800 text-sm leading-relaxed">
                    Student accounts often block Excel Online, and Personal accounts block Premium Power Automate (Webhooks). 
                    <strong> The solution used for this project is the M365 Developer Program.</strong>
                </p>
                <ul className="space-y-2">
                    <li className="flex items-center text-sm text-amber-900">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-amber-600" />
                        Go to <a href="https://developer.microsoft.com/en-us/microsoft-365/dev-program" target="_blank" className="font-bold underline ml-1">M365 Dev Center</a>
                    </li>
                    <li className="flex items-center text-sm text-amber-900">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-amber-600" />
                        Join for FREE to get an E5 Developer License
                    </li>
                    <li className="flex items-center text-sm text-amber-900">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-amber-600" />
                        Get full access to Webhooks, Excel, and Lists
                    </li>
                </ul>
            </div>
            <div className="bg-white/50 p-6 rounded-2xl border border-amber-200">
                <div className="flex items-center mb-3">
                    <Terminal className="w-4 h-4 mr-2 text-amber-700" />
                    <span className="text-xs font-bold uppercase text-amber-700">Developer Sandbox Credentials</span>
                </div>
                <div className="font-mono text-[10px] space-y-1 text-amber-800">
                    <p>Account: user@yourdomain.onmicrosoft.com</p>
                    <p>Status: Active E5 Enterprise License</p>
                    <p>Features: All Premium Connectors Enabled</p>
                </div>
            </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        <StepCard
          number="1"
          icon={<Send className="w-8 h-8 text-blue-500" />}
          title="Submission"
          description="React frontend sends a JSON payload to a Power Automate HTTP Webhook endpoint."
          tools={["React", "Fetch", "CORS"]}
          color="bg-blue-500"
        />
        <StepCard
          number="2"
          icon={<Cpu className="w-8 h-8 text-indigo-500" />}
          title="Logic Layer"
          description="Power Automate Cloud Flow parses the request and initiates the business logic sequence."
          tools={["Cloud Flow", "JSON Parse"]}
          color="bg-indigo-500"
        />
        <StepCard
          number="3"
          icon={<Database className="w-8 h-8 text-green-500" />}
          title="Persistence"
          description="The task is stored in a Microsoft List or Excel Table acting as a serverless database."
          tools={["MS Lists", "Dataverse"]}
          color="bg-green-500"
        />
        <StepCard
          number="4"
          icon={<BellRing className="w-8 h-8 text-orange-500" />}
          title="Notification"
          description="Automated email triggers are sent via the Office 365 Outlook connector."
          tools={["Outlook V2"]}
          color="bg-orange-500"
        />
      </div>

      <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
            <Layers className="w-64 h-64" />
        </div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Enterprise Infrastructure</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">M365 E5 Security</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Full identity protection and data encryption provided by the Developer Sandbox environment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-lg mr-4 mt-1">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Webhooks & APIs</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">Direct integration between modern React frontends and Microsoft's enterprise backend.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                System Flow Diagram
            </h4>
            <div className="space-y-4">
                <div className="bg-white/10 p-3 rounded-lg border border-white/5 text-sm text-center">React Frontend (.tsx)</div>
                <div className="flex justify-center py-1">
                    <div className="h-4 w-0.5 bg-blue-400/50"></div>
                </div>
                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30 text-sm text-center font-semibold text-blue-300">HTTP Webhook (Premium Trigger)</div>
                <div className="flex justify-center py-1">
                    <div className="h-4 w-0.5 bg-blue-400/50"></div>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30 text-sm text-center font-semibold text-green-300">M365 Data Storage (Lists/Excel)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
