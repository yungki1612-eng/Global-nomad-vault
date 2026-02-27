import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    id: 'tax-residency-183-day-rule',
    title: 'The Ultimate Guide to the 183-Day Tax Residency Rule',
    excerpt: 'Understanding how spending more than half a year in one country can trigger global tax liabilities.',
    date: 'Feb 15, 2026',
    author: 'Vault Expert Team',
    category: 'Tax Strategy'
  },
  {
    id: 'best-nomad-visas-2026',
    title: 'Top 5 Digital Nomad Visas in 2026: Comparison and Costs',
    excerpt: 'From Portugal to Thailand, we compare the best legal bases for your remote work lifestyle.',
    date: 'Feb 10, 2026',
    author: 'Legal Dept.',
    category: 'Visas'
  },
  {
    id: 'choosing-nomad-health-insurance',
    title: 'How to Choose Global Health Insurance as a Remote Worker',
    excerpt: 'Why standard travel insurance isn’t enough for long-term nomads and what to look for instead.',
    date: 'Feb 05, 2026',
    author: 'Insurtech Specialist',
    category: 'Insurance'
  }
];

export default function BlogIndex() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Nomad Vault Intelligence</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Deep dives into international tax laws, visa strategies, and global insurance for the modern explorer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.id}`}
            className="glass-card overflow-hidden group hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="h-48 bg-slate-200 animate-pulse relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-white/50" />
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-3">
                {post.category}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-widest pt-4 border-t border-slate-50">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1 group-hover:text-indigo-600">Read More <ArrowRight className="w-3 h-3" /></span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
