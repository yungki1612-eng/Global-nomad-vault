import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ArrowRight, ArrowLeft, CheckCircle2, DollarSign, Briefcase, Globe2, Heart, Target } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  { id: 1, title: 'Income', icon: <DollarSign className="w-4 h-4" /> },
  { id: 2, title: 'Journey', icon: <Globe2 className="w-4 h-4" /> },
  { id: 3, title: 'Coverage', icon: <Heart className="w-4 h-4" /> },
  { id: 4, title: 'Strategy', icon: <Target className="w-4 h-4" /> },
];

export default function FormFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { userData, updateUserData } = useStore();

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1);
    else navigate('/report');
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      {/* Premium Stepper */}
      <div className="mb-12 flex justify-between px-2">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex flex-col items-center relative flex-1">
            {idx < steps.length - 1 && (
              <div className={cn(
                "absolute top-5 left-[60%] w-[80%] h-[2px] -z-10",
                currentStep > step.id ? "bg-indigo-600" : "bg-slate-200"
              )} />
            )}
            <div className={cn(
              "w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300",
              currentStep >= step.id ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 ring-4 ring-indigo-50" : "bg-white text-slate-400 border border-slate-200"
            )}>
              {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : step.icon}
            </div>
            <span className={cn(
              "mt-3 text-xs font-bold tracking-tight uppercase",
              currentStep >= step.id ? "text-slate-900" : "text-slate-400"
            )}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* Main Form Card */}
      <div className="glass-card overflow-hidden">
        <div className="p-8 md:p-12">
          {currentStep === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Financial Profile</h2>
                <p className="text-slate-500 text-lg">Define your current income and professional status.</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Annual Income (USD)</label>
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                      <DollarSign className="w-5 h-5" />
                    </span>
                    <input 
                      type="number" 
                      value={userData.incomeAmount || ''}
                      onChange={(e) => updateUserData({ incomeAmount: Number(e.target.value) })}
                      className="input-field pl-12 text-lg font-semibold"
                      placeholder="e.g. 120,000"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Professional Status</label>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { id: 'Freelancer', label: 'Freelancer / Independent Contractor', icon: <Briefcase className="w-4 h-4" /> },
                      { id: 'Corporate', label: 'Remote Corporate Employee', icon: <Globe2 className="w-4 h-4" /> },
                      { id: 'Business Owner', label: 'Business Owner / Digital CEO', icon: <Target className="w-4 h-4" /> }
                    ].map((type) => (
                      <div 
                        key={type.id}
                        onClick={() => updateUserData({ employmentType: type.id as any })}
                        className={cn(
                          "flex items-center gap-4 p-4 border-2 rounded-2xl cursor-pointer transition-all duration-200",
                          userData.employmentType === type.id 
                            ? "bg-indigo-50/50 border-indigo-600 text-indigo-900" 
                            : "bg-white border-slate-100 text-slate-600 hover:border-indigo-200 hover:bg-slate-50"
                        )}
                      >
                        <div className={cn(
                          "p-2 rounded-lg",
                          userData.employmentType === type.id ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-500"
                        )}>
                          {type.icon}
                        </div>
                        <span className="font-bold">{type.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Global Journey</h2>
                <p className="text-slate-500 text-lg">Where will you be making memories (and paying taxes) in 2026?</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Primary Tax Residency</label>
                  <input 
                    type="text" 
                    value={userData.currentCountry}
                    onChange={(e) => updateUserData({ currentCountry: e.target.value })}
                    className="input-field text-lg font-semibold"
                    placeholder="e.g. United States"
                  />
                </div>
                
                <div className="p-6 bg-slate-900 rounded-3xl text-white space-y-4">
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm uppercase tracking-widest">
                    <Sparkles className="w-4 h-4" /> Feature Preview
                  </div>
                  <h4 className="text-xl font-bold">Planned Route Builder</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Soon you'll be able to map out your entire year. Our AI will automatically flag countries where you're at risk of triggering tax residency based on your stay duration.
                  </p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Security & Health</h2>
                <p className="text-slate-500 text-lg">Select the protection level that matches your risk appetite.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { id: 'Basic', label: 'Essential', price: 'Low', desc: 'Basic 질병/상해 보장' },
                  { id: 'Comprehensive', label: 'Premium', price: 'Mid', desc: '치과/안과 포함 풀패키지' },
                  { id: 'Extreme Sports', label: 'Adventure', price: 'High', desc: '레저/익스트림 스포츠 특화' }
                ].map((tier) => (
                  <div 
                    key={tier.id}
                    onClick={() => updateUserData({ coveragePreference: tier.id as any })}
                    className={cn(
                      "p-6 border-2 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col items-center text-center space-y-4",
                      userData.coveragePreference === tier.id 
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-200 scale-105" 
                        : "bg-white border-slate-100 text-slate-600 hover:border-indigo-200"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mb-2",
                      userData.coveragePreference === tier.id ? "bg-white/20" : "bg-slate-100"
                    )}>
                      <Heart className={cn("w-6 h-6", userData.coveragePreference === tier.id ? "text-white" : "text-indigo-600")} />
                    </div>
                    <div className="space-y-1">
                      <div className="font-bold text-lg">{tier.label}</div>
                      <div className={cn("text-xs font-bold uppercase", userData.coveragePreference === tier.id ? "text-indigo-200" : "text-slate-400")}>
                        {tier.price} Budget
                      </div>
                    </div>
                    <p className={cn("text-xs leading-relaxed", userData.coveragePreference === tier.id ? "text-white/80" : "text-slate-400")}>
                      {tier.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Optimization Logic</h2>
                <p className="text-slate-500 text-lg">Final details for tax deduction and long-term wealth strategy.</p>
              </div>
              
              <div className="space-y-6">
                <label className={cn(
                  "flex items-center gap-4 p-6 border-2 rounded-3xl cursor-pointer transition-all duration-200",
                  userData.hasRetirementAccount ? "bg-emerald-50 border-emerald-500" : "bg-white border-slate-100"
                )}>
                  <input 
                    type="checkbox" 
                    checked={userData.hasRetirementAccount}
                    onChange={(e) => updateUserData({ hasRetirementAccount: e.target.checked })}
                    className="h-6 w-6 text-emerald-600 rounded-lg border-slate-300 focus:ring-emerald-500" 
                  />
                  <div>
                    <div className="font-bold text-slate-900">Tax-Advantaged Accounts</div>
                    <div className="text-slate-500 text-sm">I have active 401k, ISA, or NHR-style benefits.</div>
                  </div>
                </label>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Business Deductions (Yearly)</label>
                  <div className="relative group">
                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                      <DollarSign className="w-5 h-5" />
                    </span>
                    <input 
                      type="number" 
                      value={userData.deductibleExpenses || ''}
                      onChange={(e) => updateUserData({ deductibleExpenses: Number(e.target.value) })}
                      className="input-field pl-12 text-lg font-semibold"
                      placeholder="e.g. 15,000"
                    />
                  </div>
                  <p className="text-slate-400 text-xs mt-2 pl-1">Hardware, travel expenses, co-working space fees, etc.</p>
                </div>
              </div>
            </div>
          )}

          {/* Premium Navigation Controls */}
          <div className="mt-16 flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={cn(
                "flex items-center gap-2 px-8 py-4 font-bold rounded-full transition-all duration-200",
                currentStep === 1 ? "text-slate-300 cursor-not-allowed" : "text-slate-600 hover:bg-slate-100 active:scale-95"
              )}
            >
              <ArrowLeft className="w-5 h-5" /> Back
            </button>
            
            <button
              onClick={handleNext}
              className="btn-primary group"
            >
              {currentStep === 4 ? 'Generate Global Strategy' : 'Next Phase'} 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Step Indicator Sidebar (Hidden on Mobile) */}
        <div className="bg-slate-50/50 p-6 border-t border-slate-100 flex justify-between items-center">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            Vault Encryption: 256-bit AES
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className={cn("w-8 h-1 rounded-full transition-colors", currentStep >= s ? "bg-indigo-600" : "bg-slate-200")} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
