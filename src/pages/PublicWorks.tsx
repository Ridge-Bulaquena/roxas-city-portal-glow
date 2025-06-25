import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Wrench, MapPin, Calendar, Building2, CheckCircle2, AlertCircle } from 'lucide-react';

const projectTypes = ['Road', 'Housing', 'Facility'];
const projectStatuses = ['Ongoing', 'Completed'];
const projects = [
  { title: 'Baybay Road Widening', type: 'Road', status: 'Ongoing', location: 'Baybay', timeline: 'May–Aug 2024', contractor: 'ABC Infra', funding: '₱5M' },
  { title: 'Barangay 3 Housing', type: 'Housing', status: 'Completed', location: 'Barangay 3', timeline: 'Jan–Apr 2024', contractor: 'HomeBuild', funding: '₱8M' },
  { title: 'City Hall Renovation', type: 'Facility', status: 'Ongoing', location: 'Downtown', timeline: 'Mar–Dec 2024', contractor: 'BuildPro', funding: '₱12M' },
];
const announcements = [
  { title: 'Bridge Opening', desc: 'New bridge in Barangay 5 opens July 10.', icon: <AlertCircle className="w-6 h-6 text-[#3b76d9]" /> },
  { title: 'Traffic Reroute', desc: 'Temporary reroute on Roxas Ave. July 1–15.', icon: <AlertCircle className="w-6 h-6 text-[#3b76d9]" /> },
  { title: 'Facility Repairs', desc: 'Barangay 2 gym closed for repairs July 5–20.', icon: <AlertCircle className="w-6 h-6 text-[#3b76d9]" /> },
];

const PublicWorks = () => {
  const [showModal, setShowModal] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [form, setForm] = useState({
    name: '',
    barangay: '',
    concern: '',
  });
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefNumber(Math.random().toString(36).substring(2, 10).toUpperCase());
    setShowModal(true);
    setForm({ name: '', barangay: '', concern: '' });
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#4f90e1_0%,_#3b76d9_100%)]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16 px-6" style={{ fontFamily: 'Geist, sans-serif' }}>
          <h1 className="text-5xl font-bold text-[#3b76d9] mb-4">Public Works & Infrastructure</h1>
          <p className="text-lg text-[#565961] max-w-2xl mx-auto font-inter">Monitor ongoing roadworks, housing projects, and facility upgrades.</p>
          <button className="mt-8 bg-[#3b76d9] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[#b6c6e7] transition-all duration-150" style={{ fontFamily: 'Inter, Figtree, sans-serif' }}>
            View City Projects
          </button>
        </section>

        {/* Project Tracker */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Project Tracker</h2>
            <div className="flex gap-4 mb-8">
              <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-inter shadow" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                <option value="">All Types</option>
                {projectTypes.map(t => <option key={t}>{t}</option>)}
              </select>
              <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-inter shadow" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="">All Statuses</option>
                {projectStatuses.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.filter(p => (!typeFilter || p.type === typeFilter) && (!statusFilter || p.status === statusFilter)).map((p, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start border border-[var(--border)]">
                  <Wrench className="w-8 h-8 mb-2 text-[#3b76d9]" />
                  <h3 className="font-semibold text-lg text-[var(--foreground)]">{p.title}</h3>
                  <div className="text-sm text-[var(--muted-foreground)] mb-2">{p.type} • {p.status}</div>
                  <div className="text-sm mb-1"><MapPin className="inline w-4 h-4 mr-1" />{p.location}</div>
                  <div className="text-sm mb-1"><Calendar className="inline w-4 h-4 mr-1" />{p.timeline}</div>
                  <div className="text-sm mb-1"><Building2 className="inline w-4 h-4 mr-1" />{p.contractor}</div>
                  <div className="text-sm mb-1">Funding: {p.funding}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Submit Infrastructure Feedback */}
        <section className="py-16 px-6 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>Submit Infrastructure Feedback</h2>
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6 animate-fade-in">
              <input name="name" value={form.name} onChange={handleFormChange} required placeholder="Full Name" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-inter text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <input name="barangay" value={form.barangay} onChange={handleFormChange} required placeholder="Barangay" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-inter text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <textarea name="concern" value={form.concern} onChange={handleFormChange} required placeholder="Describe the issue" className="bg-[var(--input)] border border-[var(--border)] rounded-2xl px-6 py-3 font-inter text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none min-h-[80px]" />
              <button type="submit" className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Submit</button>
            </form>
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>Feedback Submitted!</h3>
                  <p className="mb-2 font-inter">Your ticket number:</p>
                  <div className="font-mono text-lg mb-4">{refNumber}</div>
                  <button onClick={() => setShowModal(false)} className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Close</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Infrastructure Announcements */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Infrastructure Announcements</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {announcements.map((a, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 flex items-center border border-[var(--border)] gap-4 hover:shadow-md transition-all duration-150">
                  {a.icon}
                  <div>
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">{a.title}</h3>
                    <p className="text-[var(--muted-foreground)] mt-1">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicWorks; 