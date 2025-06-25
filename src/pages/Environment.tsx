import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Leaf, TreePine, Droplets, AlertCircle, CheckCircle2, BookOpen } from 'lucide-react';

const ecoInitiatives = [
  { title: 'Clean-up Drive', desc: 'Join our next coastal clean-up in Baybay.', icon: <Droplets className="w-8 h-8 text-[#4f90e1]" /> },
  { title: 'Tree Planting', desc: 'Help plant 1,000 trees in Barangay 4.', icon: <TreePine className="w-8 h-8 text-[#4f90e1]" /> },
  { title: 'Urban Greening', desc: 'Beautify city parks and open spaces.', icon: <Leaf className="w-8 h-8 text-[#4f90e1]" /> },
  { title: 'Water Monitoring', desc: 'Volunteer for water quality checks.', icon: <Droplets className="w-8 h-8 text-[#4f90e1]" /> },
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
    <div className="min-h-screen bg-[linear-gradient(135deg,_#a0d0f3_0%,_#4f90e1_100%)]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16 px-6" style={{ fontFamily: 'Geist, sans-serif' }}>
          <h1 className="text-5xl font-bold text-[#4f90e1] mb-4">Environmental Management</h1>
          <p className="text-lg text-[#565961] max-w-2xl mx-auto font-figtree">Preserve clean air, water, and sustainable land use in Roxas.</p>
          <button className="mt-8 bg-[#4f90e1] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[#b6c6e7] transition-all duration-150" style={{ fontFamily: 'Figtree, Inter, sans-serif' }}>
            Protect Our Environment
          </button>
        </section>

        {/* Eco-Initiatives Directory */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-2)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Eco-Initiatives Directory</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {ecoInitiatives.map((e, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border border-[var(--border)]">
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
            <h2 className="text-3xl font-bold text-[var(--chart-2)] mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>Citizen Eco-Reports</h2>
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6 animate-fade-in">
              <input name="name" value={form.name} onChange={handleFormChange} required placeholder="Full Name" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <input name="barangay" value={form.barangay} onChange={handleFormChange} required placeholder="Barangay" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <textarea name="concern" value={form.concern} onChange={handleFormChange} required placeholder="Describe the issue" className="bg-[var(--input)] border border-[var(--border)] rounded-2xl px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none min-h-[80px]" />
              <input type="file" accept="image/*" onChange={handleImage} className="font-figtree" />
              <button type="submit" className="bg-[var(--chart-2)] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Submit</button>
            </form>
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>Report Submitted!</h3>
                  <p className="mb-2 font-figtree">Your reference number:</p>
                  <div className="font-mono text-lg mb-4">{refNumber}</div>
                  <button onClick={() => setShowModal(false)} className="bg-[var(--chart-2)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Close</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Sustainable Practices Resources */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-2)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Sustainable Practices Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((r, i) => (
                <a key={i} href={r.link} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border border-[var(--border)] hover:scale-105 transition-all duration-150">
                  <BookOpen className="w-10 h-10 mb-2 text-[#4f90e1]" />
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
    </div>
  );
};

export default Environment; 