import React from 'react';
import { Cloud, Github, Globe, Shield, Terminal, Zap, CheckCircle2, Info } from 'lucide-react';

const ConfigItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 mb-2">
    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</span>
    <code className="text-sm font-mono text-microsoft-blue bg-blue-50 px-2 py-0.5 rounded">{value}</code>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-slate-900">
            Deploying to <span className="text-microsoft-blue">Azure</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Follow this guide to host your application on Azure Static Web Apps using your $100 credit.
          </p>
        </div>

        <div className="grid gap-12">
          {/* Step 1: GitHub */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -mr-8 -mt-8 flex items-center justify-center pt-8 pl-8">
              <Github className="w-10 h-10 text-slate-200" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl">1</div>
                <h2 className="text-2xl font-black text-slate-900">Prepare Repository</h2>
              </div>
              <p className="text-slate-500 mb-6">
                Azure Static Web Apps works best with a git-based workflow. Ensure your code is pushed to a <strong>GitHub</strong> or <strong>Azure DevOps</strong> repository.
              </p>
              <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs text-blue-300">
                git init <br/>
                git add . <br/>
                git commit -m "Initial Azure Commit" <br/>
                git push origin main
              </div>
            </div>
          </div>

          {/* Step 2: Portal Settings */}
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 flex items-center justify-center pt-8 pl-8">
              <Cloud className="w-10 h-10 text-blue-100" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-microsoft-blue text-white rounded-2xl flex items-center justify-center font-black text-xl">2</div>
                <h2 className="text-2xl font-black text-slate-900">Azure Portal Config</h2>
              </div>
              <p className="text-slate-500 mb-8">
                Search for <strong>"Static Web Apps"</strong> in the Azure Portal. Use these exact settings during the creation process:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <ConfigItem label="Build Preset" value="Other" />
                  <ConfigItem label="App Location" value="/" />
                </div>
                <div className="space-y-2">
                  <ConfigItem label="Api Location" value="[Empty]" />
                  <ConfigItem label="Output Location" value="/" />
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <Info className="w-5 h-5 text-microsoft-blue mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600 leading-relaxed">
                  <strong>Why "/" for Output?</strong> Because this app uses browser-native ESM modules. There is no build step required, so Azure simply serves your files as they are.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Database Explanation */}
          <div className="bg-slate-900 rounded-[32px] p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-5">
                <Terminal className="w-64 h-64" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white text-slate-900 rounded-2xl flex items-center justify-center font-black text-xl">3</div>
                <h2 className="text-2xl font-black">Database Persistence</h2>
              </div>
              <p className="text-slate-400 mb-8 max-w-xl">
                The current system uses <strong>Persistent Local Storage</strong>. This is the most cost-effective way to store data because it costs exactly <strong>$0.00</strong>.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                   </div>
                   <span className="text-sm font-medium">No server-side database setup required</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                   </div>
                   <span className="text-sm font-medium">Unlimited tasks (within browser storage limits)</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                   </div>
                   <span className="text-sm font-medium">Automatic data persistence across browser sessions</span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <Zap className="w-8 h-8 text-amber-400" />
                    <div>
                        <p className="font-bold">Ready to Deploy?</p>
                        <p className="text-xs text-slate-500">Your $100 Azure credit is safe.</p>
                    </div>
                </div>
                <button 
                    onClick={() => window.open('https://portal.azure.com', '_blank')}
                    className="px-8 py-3 bg-microsoft-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center gap-2"
                >
                    <Globe className="w-4 h-4" />
                    Open Azure Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;