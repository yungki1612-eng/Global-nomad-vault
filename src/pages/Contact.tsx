import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4 space-y-24">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Get in Touch</h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto">
          Have questions about your tax residency or our legal simulations? Our team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 space-y-8">
          {[
            { icon: <Mail className="w-6 h-6" />, title: "Email Us", detail: "support@nomadvault.com", desc: "Response within 24 hours" },
            { icon: <MessageSquare className="w-6 h-6" />, title: "Live Chat", detail: "Available 24/7", desc: "For premium members" },
            { icon: <MapPin className="w-6 h-6" />, title: "Headquarters", detail: "Remote First", desc: "Registered in Estonia" }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="text-indigo-600 font-bold text-sm">{item.detail}</p>
                <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-bold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 glass-card p-8 md:p-12">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all appearance-none bg-white">
                <option>Tax Residency Question</option>
                <option>Health Insurance Inquiry</option>
                <option>Technical Support</option>
                <option>Partnership</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all" placeholder="How can we help you today?"></textarea>
            </div>
            <button className="btn-primary w-full justify-center gap-2 group">
              Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
