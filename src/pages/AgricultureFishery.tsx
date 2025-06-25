import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Tractor, Fish, Calendar, Leaf, CheckCircle2, BookOpen } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const regions = ['North', 'South', 'East', 'West'];
const commodities = ['Rice', 'Fish', 'Vegetables'];
const programs = [
  { title: 'Seedling Kit Subsidy', region: 'North', commodity: 'Rice', desc: 'Free seedling kits for rice farmers.' },
  { title: 'Boat Repair Aid', region: 'South', commodity: 'Fish', desc: 'Subsidized boat repair for fisherfolk.' },
  { title: 'Vegetable Starter Pack', region: 'East', commodity: 'Vegetables', desc: 'Starter kits for new vegetable growers.' },
];
const trainings = [
  { date: 'July 10', title: 'Organic Farming Workshop', location: 'Barangay 2', org: 'DA' },
  { date: 'July 15', title: 'Fish Cage Management', location: 'Barangay 5', org: 'TESDA' },
];

const AgricultureFishery = () => {
  const [regionFilter, setRegionFilter] = useState('');
  const [commodityFilter, setCommodityFilter] = useState('');
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.2 });

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16 px-6 bg-gradient-to-br from-primary to-[#3b76d9] text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agriculture & Fishery Support
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-figtree">Empowering local producers with training, access, and innovation.</p>
          <button className="mt-8 bg-white text-primary rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-white/50 transition-all duration-150">
            Support Local Producers
          </button>
        </section>

        {/* Farmer & Fisher Assistance Directory */}
        <section ref={sectionRef} className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Farmer & Fisher Assistance Directory
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-figtree shadow" value={regionFilter} onChange={e => setRegionFilter(e.target.value)}>
                <option value="">All Regions</option>
                {regions.map(r => <option key={r}>{r}</option>)}
              </select>
              <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-figtree shadow" value={commodityFilter} onChange={e => setCommodityFilter(e.target.value)}>
                <option value="">All Commodities</option>
                {commodities.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {programs.filter(p => (!regionFilter || p.region === regionFilter) && (!commodityFilter || p.commodity === commodityFilter)).map((p, i) => (
                <div 
                  key={i} 
                  className={`bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border border-[var(--border)] service-card${sectionVisible ? ' entry-animate' : ''}`}
                  style={{
                    animationDelay: sectionVisible ? `${0.15 * i + 0.5}s` : '0s',
                  }}
                >
                  <Tractor className="w-10 h-10 mb-2 text-primary" />
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{p.title}</h3>
                  <p className="text-[var(--muted-foreground)] mt-2 text-center">{p.desc}</p>
                  <span className="mt-2 text-xs text-[var(--chart-3)]">{p.region} • {p.commodity}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Calendar */}
        <section className="py-16 px-6 bg-[#eafafa]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Training Calendar
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {trainings.map((t, i) => (
                <div 
                  key={i} 
                  className={`bg-white rounded-xl shadow p-6 flex flex-col items-center border border-[var(--border)] service-card${sectionVisible ? ' entry-animate' : ''}`}
                  style={{
                    animationDelay: sectionVisible ? `${0.15 * i + 0.5}s` : '0s',
                  }}
                >
                  <Calendar className="w-10 h-10 mb-2 text-primary" />
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{t.title}</h3>
                  <p className="text-[var(--muted-foreground)] mt-2 text-center">{t.location} — {t.date}</p>
                  <span className="mt-2 text-xs text-[var(--chart-2)]">{t.org}</span>
                  <div className="flex gap-2 mt-4">
                    <button className="bg-primary text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Volunteer</button>
                    <button className="bg-[var(--chart-2)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Register</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplace Launch (Future) */}
        <section className="py-16 px-6 bg-[var(--card)] text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Marketplace Launch (Coming Soon)
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <p className="text-lg text-[var(--muted-foreground)] mb-6 font-figtree">A future eKadiwa-like local marketplace for Roxas City's producers and consumers.</p>
            <div className="flex justify-center">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgricultureFishery; 