import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Briefcase, Store, Lightbulb, CheckSquare, FileText, Users, Download, Bot, ShoppingBag } from 'lucide-react';

const mentors = [
  { name: 'Maria Santos', field: 'Retail', rating: 4.8, testimonials: 12 },
  { name: 'Juan Dela Cruz', field: 'Tech', rating: 4.9, testimonials: 8 },
  { name: 'Josefa Reyes', field: 'F&B', rating: 4.7, testimonials: 15 },
];

const BusinessSupport = () => {
  const [gptQuestion, setGptQuestion] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [showGPTSuccess, setShowGPTSuccess] = useState(false);

  const handleGPTAsk = (e: React.FormEvent) => {
    e.preventDefault();
    setGptResponse('To get BIR clearance, visit the BIR office with your business permit, fill out Form 1901, and submit required documents. See full checklist below.');
    setShowGPTSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--chart-1)] to-[var(--chart-3)]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16 px-6">
          <h1 className="text-5xl font-bold mb-4 text-[var(--chart-3)]" style={{ fontFamily: 'Geist, sans-serif' }}>
            Business Support
          </h1>
          <p className="text-lg text-[var(--chart-1)] max-w-2xl mx-auto font-inter mb-8">
            From sari-sari stores to tech startups, Roxas City fuels local businesses with digital tools, financial programs, and a vibrant mentorship network.
          </p>
          <button className="bg-[var(--chart-1)] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150" style={{ fontFamily: 'Inter, sans-serif' }}>
            Start or Grow Your Business
          </button>
        </section>

        {/* Mini-Apps & AI Features */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Smart Permit System */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-[#b6f0e6]">
                <div className="flex items-center gap-3 mb-2">
                  <FileText className="w-8 h-8 text-[var(--chart-1)]" />
                  <h2 className="text-xl font-bold text-[var(--chart-3)]">Smart Permit System</h2>
                </div>
                <p className="text-[var(--chart-3)]">Apply, upload docs, and track your business permit. Smart form auto-fills using uploaded PDFs.</p>
                <button className="bg-[var(--chart-1)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">Apply for Permit</button>
              </div>

              {/* Incentive Eligibility Checker */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-[#b6f0e6]">
                <div className="flex items-center gap-3 mb-2">
                  <CheckSquare className="w-8 h-8 text-[var(--chart-1)]" />
                  <h2 className="text-xl font-bold text-[var(--chart-3)]">Incentive Eligibility Checker</h2>
                </div>
                <p className="text-[var(--chart-3)]">GPT form analyzes your business profile and matches you to tax breaks, grants, and exemptions.</p>
                <button className="bg-[var(--chart-1)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">Check Eligibility</button>
              </div>

              {/* Business GPT Coach */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-[#b6f0e6]">
                <div className="flex items-center gap-3 mb-2">
                  <Bot className="w-8 h-8 text-[var(--chart-1)]" />
                  <h2 className="text-xl font-bold text-[var(--chart-3)]">Business GPT Coach</h2>
                </div>
                <form onSubmit={handleGPTAsk} className="w-full flex flex-col gap-2">
                  <input
                    type="text"
                    value={gptQuestion}
                    onChange={e => setGptQuestion(e.target.value)}
                    placeholder='Ask: "How do I get BIR clearance?"'
                    className="w-full px-4 py-2 rounded-full border border-[#b6f0e6] bg-white/60 text-[var(--chart-3)] focus:ring-2 focus:ring-[var(--ring)] outline-none"
                  />
                  <button type="submit" className="bg-[var(--chart-1)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">Ask</button>
                </form>
                {showGPTSuccess && (
                  <div className="mt-4 bg-white/90 rounded-xl p-4 text-left w-full animate-fade-in">
                    <div className="flex items-center gap-2 mb-2 text-green-700 font-bold"><CheckSquare className="w-5 h-5" />GPT Response</div>
                    <div className="text-[var(--chart-3)] mb-2">{gptResponse}</div>
                    <button className="flex items-center gap-2 bg-[var(--chart-1)] text-white rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition-all">
                      <Download className="w-4 h-4" />
                      Download Checklist
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Mentorship Matchmaker */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-[#b6f0e6]">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-8 h-8 text-[var(--chart-1)]" />
                  <h2 className="text-xl font-bold text-[var(--chart-3)]">Mentorship Matchmaker</h2>
                </div>
                <ul className="mb-2">
                  {mentors.map((m, i) => (
                    <li key={i} className="flex items-center gap-3 mb-1">
                      <Briefcase className="w-5 h-5 text-[var(--chart-3)]" />
                      <span className="font-semibold text-[var(--chart-3)]">{m.name}</span>
                      <span className="text-xs text-[var(--chart-1)]">{m.field}</span>
                      <span className="text-xs text-yellow-500">★ {m.rating}</span>
                      <span className="text-xs text-[var(--muted-foreground)]">({m.testimonials} reviews)</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-[var(--chart-1)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">Schedule Consult</button>
              </div>

              {/* eKadiwa Marketplace Preview */}
              <div className="bg-white/80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-[#b6f0e6]">
                <div className="flex items-center gap-3 mb-2">
                  <Store className="w-8 h-8 text-[var(--chart-1)]" />
                  <h2 className="text-xl font-bold text-[var(--chart-3)]">eKadiwa Marketplace Preview</h2>
                </div>
                <p className="text-[var(--chart-3)]">Sell your products directly to locals. Filter by barangay, pickup/delivery.</p>
                <button className="bg-[var(--chart-1)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all">Preview Marketplace</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessSupport; 