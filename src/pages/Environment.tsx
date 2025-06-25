import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Leaf, TreePine, Droplets, AlertCircle, CheckCircle2, BookOpen } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import SeaweedThreadBackground from '@/components/SeaweedThreadBackground';

const ecoInitiatives = [
  { title: 'Clean-up Drive', desc: 'Join our next coastal clean-up in Baybay.', icon: <Droplets className="w-8 h-8 text-primary" /> },
  { title: 'Tree Planting', desc: 'Help plant 1,000 trees in Barangay 4.', icon: <TreePine className="w-8 h-8 text-primary" /> },
  { title: 'Urban Greening', desc: 'Beautify city parks and open spaces.', icon: <Leaf className="w-8 h-8 text-primary" /> },
  { title: 'Water Monitoring', desc: 'Volunteer for water quality checks.', icon: <Droplets className="w-8 h-8 text-primary" /> },
];
const resources = [
  { name: 'Composting Guide', link: '#', desc: 'How to compost at home.' },
  { name: 'Recycling Tips', link: '#', desc: 'Reduce, reuse, recycle.' },
  { name: 'Carpooling 101', link: '#', desc: 'Save fuel and reduce traffic.' },
  { name: 'DENR Partners', link: 'https://denr.gov.ph', desc: 'Learn more from DENR.' },
];

const Environment = () => {
  const [showModal, setShowModal] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [form, setForm] = useState({
    name: '',
    barangay: '',
    concern: '',
    image: null as File | null,
  });
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.2 });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setForm((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefNumber(Math.random().toString(36).substring(2, 10).toUpperCase());
    setShowModal(true);
    setForm({ name: '', barangay: '', concern: '', image: null });
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="relative text-center py-16 px-6 bg-gradient-to-br from-primary to-[#4f90e1] text-white">
          <SeaweedThreadBackground />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Environmental Management
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-figtree">Preserve clean air, water, and sustainable land use in Roxas.</p>
          <button className="mt-8 bg-white text-[var(--chart-3)] rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-white/50 transition-all duration-150">
            Protect Our Environment
          </button>
        </section>

        {/* Eco-Initiatives Directory */}
        <section ref={sectionRef} className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Eco-Initiatives Directory
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {ecoInitiatives.map((e, i) => (
                <div 
                  key={i} 
                  className={`bg-[var(--card)] rounded-[var(--radius)] p-4 md:p-6 border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.04)] card transition-all duration-300 group`}
                  style={{
                    animationDelay: sectionVisible ? `${0.15 * i + 0.5}s` : '0s',
                  }}
                >
                  {e.icon}
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{e.title}</h3>
                  <p className="text-[var(--muted-foreground)] mt-2 text-center">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Citizen Eco-Reports */}
        <section className="py-16 px-6 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Citizen Eco-Reports
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6 animate-fade-in">
              <input name="name" value={form.name} onChange={handleFormChange} required placeholder="Full Name" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <input name="barangay" value={form.barangay} onChange={handleFormChange} required placeholder="Barangay" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <textarea name="concern" value={form.concern} onChange={handleFormChange} required placeholder="Describe the issue" className="bg-[var(--input)] border border-[var(--border)] rounded-2xl px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none min-h-[80px]" />
              <input type="file" accept="image/*" onChange={handleImage} className="font-figtree" />
              <button type="submit" className="bg-primary text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Submit</button>
            </form>
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Report Submitted!</h3>
                  <p className="mb-2 font-figtree">Your reference number:</p>
                  <div className="font-mono text-lg mb-4">{refNumber}</div>
                  <button onClick={() => setShowModal(false)} className="bg-primary text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Close</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Sustainable Practices Resources */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Sustainable Practices Resources
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((r, i) => (
                <a 
                  key={i} 
                  href={r.link} 
                  className={`bg-[var(--card)] rounded-[var(--radius)] p-4 md:p-6 border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.04)] card transition-all duration-300 group`}
                  style={{
                    animationDelay: sectionVisible ? `${0.15 * i + 0.5}s` : '0s',
                  }}
                >
                  <BookOpen className="w-10 h-10 mb-2 text-primary" />
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{r.name}</h3>
                  <p className="text-[var(--muted-foreground)] mt-2 text-center">{r.desc}</p>
                  <span className="mt-4 text-[var(--chart-2)] font-semibold">Learn More</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
.card {
  position: relative;
  border: 1.5px solid transparent;
  border-radius: var(--radius, 1rem);
  background: var(--card);
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  transition: border 0.3s ease, box-shadow 0.3s ease, transform 0.2s cubic-bezier(.4,2,.3,1);
}
.card:hover {
  border-color: rgba(173,201,226,0.8);
  box-shadow: 0 6px 16px rgba(173,201,226,0.15);
  transform: scale(1.03) translateY(-4px);
}
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1.5px solid rgba(173,201,226,0.0);
  pointer-events: none;
  transition: border-color 0.4s cubic-bezier(.4,2,.3,1);
}
.card:hover::before {
  border-color: rgba(173,201,226,0.8);
}
.card .icon, .card .section-title {
  transition: transform 0.2s cubic-bezier(.4,2,.3,1), filter 0.2s cubic-bezier(.4,2,.3,1);
}
.card:hover .icon {
  filter: drop-shadow(0 2px 8px var(--ring));
  transform: scale(1.08) rotate(2deg);
}
.card:hover .section-title {
  text-decoration: underline;
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
  text-decoration-color: var(--chart-1);
}
.underline-animate {
  display: inline-block;
  position: relative;
}
.underline-animate::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--chart-1), var(--ring));
  transition: width 0.3s cubic-bezier(.4,2,.3,1), left 0.3s cubic-bezier(.4,2,.3,1);
}
.card:hover .underline-animate::after {
  width: 100%;
  left: 0;
}
`}</style>
    </div>
  );
};

export default Environment; 