import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2, AlertCircle } from 'lucide-react';

const articleContent = {
  'tax-residency-183-day-rule': {
    title: 'The Ultimate Guide to the 183-Day Tax Residency Rule',
    date: 'Feb 15, 2026',
    author: 'Vault Expert Team',
    content: `
      <p>As a digital nomad, understanding the <strong>183-day rule</strong> is arguably the most critical part of your financial planning. This rule is a standard benchmark used by nearly 140 countries to determine when a foreign visitor becomes a tax resident.</p>
      
      <h2>What Exactly is the 183-Day Rule?</h2>
      <p>In simple terms, if you spend more than 183 days within a specific country during a 12-month period or a fiscal year, that country considers you a "Tax Resident." This means you are typically liable to pay taxes on your <strong>global income</strong>, not just the income you earned while in that country.</p>
      
      <h3>Why the Number 183?</h3>
      <p>It represents more than half a year (365 / 2 = 182.5). Once you've spent the majority of your time in one jurisdiction, international law assumes you have established a "center of vital interest" there.</p>
      
      <h2>Common Pitfalls for Digital Nomads</h2>
      <ul>
        <li><strong>Cumulative Days:</strong> Many nomads assume the days must be consecutive. They are not. Any day spent in the country counts toward the total.</li>
        <li><strong>Partial Days:</strong> In many jurisdictions like the UK or USA, even a few hours in a day can count as a "full day" for tax residency purposes.</li>
        <li><strong>The 183-Day Trap:</strong> Some nomads try to jump between three countries for 120 days each. While this avoids residency in those three, it may leave you "tax homeless," which can lead to severe penalties from your home country.</li>
      </ul>

      <h2>How to Protect Your Global Assets</h2>
      <p>To optimize your tax burden, you should proactively track your movement. Using tools like <strong>Nomad Vault's Day Tracker</strong> allows you to receive alerts when you are approaching the 75% mark of a residency trigger.</p>
      
      <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 my-8">
        <h4 class="font-bold text-indigo-900 mb-2">Pro Tip for 2026</h4>
        <p class="text-indigo-800 text-sm">Always check if your host country has a "Digital Nomad Visa" with specific tax exemptions. Countries like Greece and Croatia offer reduced rates or 0% tax for the first 12-24 months for qualified nomads.</p>
      </div>
    `
  },
  'best-nomad-visas-2026': {
    title: 'Top 5 Digital Nomad Visas in 2026: Comparison and Costs',
    date: 'Feb 10, 2026',
    author: 'Legal Dept.',
    content: `
      <p>The landscape of remote work visas has shifted dramatically in 2026. Governments are no longer just looking for tourists; they are competing for high-net-worth digital talent.</p>
      
      <h2>1. Portugal: The NHR 2.0 Era</h2>
      <p>Portugal remains a top choice despite the changes to the Non-Habitual Resident (NHR) program. The new "Digital Nomad Visa" (D8) offers a clear path to residency for those earning at least €3,280 per month.</p>
      
      <h2>2. Thailand: Destination Thailand Visa (DTV)</h2>
      <p>Launched in late 2024 and expanded in 2026, the DTV is a game-changer. It allows for a 5-year stay with multiple entries, targeting remote workers and "cultural explorers" with a very low application fee compared to the old Elite Visa.</p>
      
      <h2>3. United Arab Emirates: Dubai Remote Work Visa</h2>
      <p>With <strong>0% personal income tax</strong>, Dubai is the ultimate optimization destination. The 1-year virtual work program is easily renewable and provides access to world-class infrastructure.</p>
      
      <h2>Key Factors to Compare</h2>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Min. Income</th>
            <th>Tax Rate</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Portugal</td>
            <td>€3,280/mo</td>
            <td>20% (Flat)</td>
            <td>2 Years</td>
          </tr>
          <tr>
            <td>Dubai</td>
            <td>$3,500/mo</td>
            <td>0%</td>
            <td>1 Year</td>
          </tr>
          <tr>
            <td>Thailand</td>
            <td>$1,500/mo</td>
            <td>Local (Exempt if foreign source)</td>
            <td>5 Years</td>
          </tr>
        </tbody>
      </table>
    `
  },
  'choosing-nomad-health-insurance': {
    title: 'How to Choose Global Health Insurance as a Remote Worker',
    date: 'Feb 05, 2026',
    author: 'Insurtech Specialist',
    content: `
      <p>If you are living out of a suitcase for 300 days a year, your standard travel insurance is likely <strong>void</strong>. Most travel plans require you to have a "permanent residence" to return to in case of a claim.</p>
      
      <h2>The Difference: Travel vs. Nomad Health Insurance</h2>
      <p>Travel insurance is for emergencies (broken legs, lost bags). <strong>Nomad Health Insurance</strong> is a replacement for your domestic health plan. It covers wellness checks, dental, and even pre-existing conditions in some cases.</p>
      
      <h3>What to Look for in a 2026 Plan:</h3>
      <ul>
        <li><strong>Full Private Room:</strong> Ensure your plan covers private hospital stays, especially in Southeast Asia.</li>
        <li><strong>Repatriation of Remains:</strong> A grim but necessary requirement for long-term travelers.</li>
        <li><strong>USA Coverage Toggle:</strong> Since US healthcare is the most expensive in the world, many plans allow you to exclude it to save 50% on premiums.</li>
      </ul>
      
      <p>At Nomad Vault, we recommend partners like <strong>SafetyWing</strong> and <strong>PassportCard</strong> because they offer "subscription-style" payments that can be paused or resumed as you move.</p>
    `
  }
};

export default function BlogArticle() {
  const { id } = useParams();
  const article = articleContent[id as keyof typeof articleContent];

  if (!article) return <div className="text-center py-20">Article not found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Link to="/blog" className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold text-xs uppercase tracking-widest mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Intelligence
      </Link>
      
      <article className="space-y-8">
        <header className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-between py-6 border-y border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-900">{article.author}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{article.date}</div>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </header>

        <div 
          className="prose prose-slate prose-indigo max-w-none 
          prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg
          prose-li:text-slate-600 prose-strong:text-slate-900
          prose-table:text-sm prose-thead:text-slate-900 prose-thead:font-bold prose-thead:border-b-2
          "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <footer className="pt-12 mt-12 border-t border-slate-100 text-center space-y-6">
          <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white space-y-4 shadow-xl shadow-indigo-200">
            <h3 className="text-2xl font-bold">Ready to apply these insights?</h3>
            <p className="text-indigo-100">Get your personalized tax and insurance roadmap in 2 minutes.</p>
            <Link to="/form" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black hover:bg-slate-50 transition-colors">
              Start Simulation
            </Link>
          </div>
          
          <div className="flex items-center gap-2 justify-center text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
            <AlertCircle className="w-3.5 h-3.5" />
            Educational Content Only • Not Legal Advice
          </div>
        </footer>
      </article>
    </div>
  );
}
