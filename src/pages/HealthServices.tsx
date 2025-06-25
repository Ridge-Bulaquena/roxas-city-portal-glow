import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, AlertCircle, Phone, Hospital, CheckCircle2 } from 'lucide-react';

const barangays = [
  'Barangay 1', 'Barangay 2', 'Barangay 3', 'Barangay 4', 'Barangay 5',
];
const concernTypes = [
  'Medical Emergency', 'Dengue', 'Maternal Care', 'Vaccination', 'Other',
];
const healthAlerts = [
  { title: 'Dengue Alert', desc: 'Increased dengue cases in Barangay 3. Keep surroundings clean and use mosquito nets.', icon: <AlertCircle className="w-7 h-7 text-[#3b76d9]" /> },
  { title: 'Vaccination Drive', desc: 'Free measles vaccination at City Hall, June 30, 8am-4pm.', icon: <Hospital className="w-7 h-7 text-[#3b76d9]" /> },
  { title: 'Medical Outreach', desc: 'Mobile clinic in Barangay 5, July 2.', icon: <Hospital className="w-7 h-7 text-[#3b76d9]" /> },
];
const hotlines = [
  { label: 'Emergency', number: '166', icon: <Phone className="w-6 h-6 text-[#3b76d9]" /> },
  { label: 'Barangay Health Unit', number: '123-4567', icon: <Hospital className="w-6 h-6 text-[#3b76d9]" /> },
  { label: 'City Health Office', number: '987-6543', icon: <Hospital className="w-6 h-6 text-[#3b76d9]" /> },
];

const HealthServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [form, setForm] = useState({
    name: '',
    barangay: '',
    concern: '',
    desc: '',
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
    setForm({ name: '', barangay: '', concern: '', desc: '', image: null });
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#a0d0f3_0%,_#3b76d9_100%)]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16 px-6" style={{ fontFamily: 'Geist, sans-serif' }}>
          <h1 className="text-5xl font-bold text-[#3b76d9] mb-4">Health Services</h1>
          <p className="text-lg text-[#565961] max-w-2xl mx-auto font-figtree">Find nearby health stations, track urgent health concerns, and get connected to support.</p>
          <button className="mt-8 bg-[#3b76d9] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[#b6c6e7] transition-all duration-150" style={{ fontFamily: 'Figtree, Inter, sans-serif' }}>
            Access Health Support
          </button>
        </section>

        {/* Nearby Health Stations */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Nearby Health Stations</h2>
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-figtree shadow" defaultValue="">
                <option value="">Filter by Barangay</option>
                {barangays.map(b => <option key={b}>{b}</option>)}
              </select>
              <button className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Nearest Open Facility</button>
            </div>
            {/* Placeholder for Google Map or custom map */}
            <div className="rounded-2xl border border-[var(--border)] bg-white shadow-md h-72 flex items-center justify-center text-[var(--card-foreground)] font-figtree">
              <span className="text-lg">[Map with health post markers here]</span>
            </div>
          </div>
        </section>

        {/* Report a Health Concern */}
        <section className="py-16 px-6 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>Report a Health Concern</h2>
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6 animate-fade-in">
              <input name="name" value={form.name} onChange={handleFormChange} required placeholder="Full Name" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <select name="barangay" value={form.barangay} onChange={handleFormChange} required className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none">
                <option value="">Select Barangay</option>
                {barangays.map(b => <option key={b}>{b}</option>)}
              </select>
              <select name="concern" value={form.concern} onChange={handleFormChange} required className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none">
                <option value="">Type of Concern</option>
                {concernTypes.map(c => <option key={c}>{c}</option>)}
              </select>
              <textarea name="desc" value={form.desc} onChange={handleFormChange} required placeholder="Description" className="bg-[var(--input)] border border-[var(--border)] rounded-2xl px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none min-h-[80px]" />
              <input type="file" accept="image/*" onChange={handleImage} className="font-figtree" />
              <button type="submit" className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Submit</button>
            </form>
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>Report Submitted!</h3>
                  <p className="mb-2 font-figtree">Your reference number:</p>
                  <div className="font-mono text-lg mb-4">{refNumber}</div>
                  <button onClick={() => setShowModal(false)} className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Close</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Health Alerts & Notices */}
        <section className="py-16 px-6 bg-[var(--secondary)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Health Alerts & Notices</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {healthAlerts.map((alert, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border border-[var(--border)]">
                  {alert.icon}
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{alert.title}</h3>
                  <p className="text-[var(--muted-foreground)] mt-2 text-center">{alert.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Hotline Directory */}
        <section className="py-16 px-6 bg-[var(--background)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Emergency Hotline Directory</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {hotlines.map((h, i) => (
                <a key={i} href={`tel:${h.number}`} className="bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-all duration-150">
                  {h.icon}
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{h.label}</h3>
                  <p className="text-[var(--muted-foreground)] mt-2">{h.number}</p>
                  <button className="mt-4 bg-[var(--chart-2)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Tap to Call</button>
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

export default HealthServices; 