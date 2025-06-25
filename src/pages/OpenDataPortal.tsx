import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BarChart3, FileText, Download, Search, PieChart, TrendingUp, Users, CheckCircle2, Bot } from 'lucide-react';
import SeaweedThreadBackground from '@/components/SeaweedThreadBackground';

const OpenDataPortal = () => {
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [showAISuccess, setShowAISuccess] = useState(false);

  // Placeholder for AI response
  const handleAIAsk = (e: React.FormEvent) => {
    e.preventDefault();
    setAiResponse('In 2024, ₱45,000,000 was allocated to Health Services. Download the full breakdown below.');
    setShowAISuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--chart-3)] to-[#1a223a]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="relative text-center py-16 px-6">
          <SeaweedThreadBackground />
          <h1 className="text-5xl font-bold mb-4 typewriter text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
            Open Data Portal
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto font-inter mb-8">
            Empower yourself with facts. From infrastructure budgets to procurement records, Roxas City opens its books to you. Analyze, visualize, and share real-time civic data — no coding needed.
          </p>
          <button className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow-md glassmorphic hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150" style={{ fontFamily: 'Inter, sans-serif' }}>
            Explore Open Data
          </button>
        </section>

        {/* Glassmorphic Card Grid */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GPT-Powered Data Advisor */}
            <div className="glassmorphic p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <Bot className="w-10 h-10 text-[var(--chart-3)] mb-2" />
              <h2 className="text-xl font-bold mb-2 text-[var(--chart-3)]">GPT-Powered Data Advisor</h2>
              <form onSubmit={handleAIAsk} className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  value={aiQuestion}
                  onChange={e => setAiQuestion(e.target.value)}
                  placeholder='Ask: "How much was allocated to health in 2024?"'
                  className="w-full px-4 py-2 rounded-full border border-slate-200 bg-white/60 text-[var(--chart-3)] focus:ring-2 focus:ring-[var(--ring)] outline-none"
                />
                <button type="submit" className="bg-[var(--chart-3)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">Ask</button>
              </form>
              {showAISuccess && (
                <div className="mt-4 bg-white/80 rounded-xl p-4 text-left w-full animate-fade-in">
                  <div className="flex items-center gap-2 mb-2 text-green-700 font-bold"><CheckCircle2 className="w-5 h-5" />AI Response</div>
                  <div className="text-[var(--chart-3)] mb-2">{aiResponse}</div>
                  <button className="flex items-center gap-2 bg-[var(--chart-3)] text-white rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition-all">
                    <Download className="w-4 h-4" />
                    Download Chart
                  </button>
                </div>
              )}
            </div>

            {/* Data Visualizer */}
            <div className="glassmorphic p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <PieChart className="w-10 h-10 text-[var(--chart-3)] mb-2" />
              <h2 className="text-xl font-bold mb-2 text-[var(--chart-3)]">Data Visualizer</h2>
              <p className="text-[var(--chart-3)] mb-4 text-center">Upload datasets or use city data to generate pie charts, bar graphs, and trends. Export as PNG/PDF.</p>
              <button className="bg-[var(--chart-3)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">Try Visualizer</button>
            </div>

            {/* Budget Explorer */}
            <div className="glassmorphic p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <BarChart3 className="w-10 h-10 text-[var(--chart-3)] mb-2" />
              <h2 className="text-xl font-bold mb-2 text-[var(--chart-3)]">Budget Explorer</h2>
              <p className="text-[var(--chart-3)] mb-4 text-center">Interactive breakdown of the annual city budget. Drill down by department, sector, year. See timelines and percent completion.</p>
              <button className="bg-[var(--chart-3)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">Explore Budgets</button>
            </div>

            {/* Procurement Transparency Viewer */}
            <div className="glassmorphic p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <FileText className="w-10 h-10 text-[var(--chart-3)] mb-2" />
              <h2 className="text-xl font-bold mb-2 text-[var(--chart-3)]">Procurement Transparency</h2>
              <p className="text-[var(--chart-3)] mb-4 text-center">View awarded contracts by amount, contractor, or project type. Filter by year, value, or status.</p>
              <button className="bg-[var(--chart-3)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">View Contracts</button>
            </div>

            {/* Digital Summary Generator */}
            <div className="glassmorphic p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <Users className="w-10 h-10 text-[var(--chart-3)] mb-2" />
              <h2 className="text-xl font-bold mb-2 text-[var(--chart-3)]">Digital Summary Generator</h2>
              <p className="text-[var(--chart-3)] mb-4 text-center">Robot assistant produces human-readable summaries of budgets & datasets. Download one-pagers.</p>
              <button className="bg-[var(--chart-3)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">Generate Summary</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .glassmorphic {
          background: rgba(255,255,255,0.18);
          box-shadow: 0 8px 32px 0 rgba(31,38,135,0.15);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.25);
        }
        .typewriter {
          overflow: hidden;
          border-right: .15em solid #fff;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: .05em;
          animation: typing 2.5s steps(30, end), blink-caret .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #fff; }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};

export default OpenDataPortal; 