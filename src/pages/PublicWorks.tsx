import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Wrench, MapPin, Calendar, Building2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

const projectTypes = ['Road', 'Housing', 'Facility'];
const projectStatuses = ['Ongoing', 'Completed'];
const projects = [
  { title: 'Baybay Road Widening', type: 'Road', status: 'Ongoing', location: 'Baybay', timeline: 'May–Aug 2024', contractor: 'ABC Infra', funding: '₱5M' },
  { title: 'Barangay 3 Housing', type: 'Housing', status: 'Completed', location: 'Barangay 3', timeline: 'Jan–Apr 2024', contractor: 'HomeBuild', funding: '₱8M' },
  { title: 'City Hall Renovation', type: 'Facility', status: 'Ongoing', location: 'Downtown', timeline: 'Mar–Dec 2024', contractor: 'BuildPro', funding: '₱12M' },
];
const announcements = [
  { title: 'Bridge Opening', desc: 'New bridge in Barangay 5 opens July 10.', icon: <AlertCircle className="w-6 h-6 text-primary" /> },
  { title: 'Traffic Reroute', desc: 'Temporary reroute on Roxas Ave. July 1–15.', icon: <AlertCircle className="w-6 h-6 text-primary" /> },
  { title: 'Facility Repairs', desc: 'Barangay 2 gym closed for repairs July 5–20.', icon: <AlertCircle className="w-6 h-6 text-primary" /> },
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
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.2 });

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
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="relative text-center py-16 px-6 bg-gradient-to-br from-primary to-[#3b76d9] text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Public Works & Infrastructure
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-figtree">Monitor ongoing roadworks, housing projects, and facility upgrades.</p>
          <button className="mt-8 bg-white text-[var(--chart-3)] rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-white/50 transition-all duration-150">
            View City Projects
          </button>
        </section>

        {/* Project Tracker */}
        <section ref={sectionRef} className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Project Tracker
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <div className="flex gap-4 mb-8">
              <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-figtree shadow" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                <option value="">All Types</option>
                {projectTypes.map(t => <option key={t}>{t}</option>)}
              </select>
              <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-figtree shadow" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
                <option value="">All Statuses</option>
                {projectStatuses.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.filter(p => (!typeFilter || p.type === typeFilter) && (!statusFilter || p.status === statusFilter)).map((p, i) => (
                <div 
                  key={i} 
                  className={`bg-white rounded-xl shadow-sm p-6 flex flex-col items-start border border-[var(--border)] service-card${sectionVisible ? ' entry-animate' : ''}`}
                  style={{
                    animationDelay: sectionVisible ? `${0.15 * i + 0.5}s` : '0s',
                  }}
                >
                  <Wrench className="w-8 h-8 mb-2 text-primary" />
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
            <div className="text-center mb-16 group">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Submit Infrastructure Feedback
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6 animate-fade-in">
              <input name="name" value={form.name} onChange={handleFormChange} required placeholder="Full Name" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <input name="barangay" value={form.barangay} onChange={handleFormChange} required placeholder="Barangay" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <textarea name="concern" value={form.concern} onChange={handleFormChange} required placeholder="Describe the issue" className="bg-[var(--input)] border border-[var(--border)] rounded-2xl px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none min-h-[80px]" />
              <button type="submit" className="bg-primary text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Submit</button>
            </form>
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Feedback Submitted!</h3>
                  <p className="mb-2 font-figtree">Your ticket number:</p>
                  <div className="font-mono text-lg mb-4">{refNumber}</div>
                  <button onClick={() => setShowModal(false)} className="bg-primary text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Close</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Infrastructure Announcements */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Infrastructure Announcements
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              {announcements.map((a, i) => (
                <div 
                  key={i} 
                  className={`bg-white rounded-xl shadow-sm p-6 flex items-center border border-[var(--border)] gap-4 hover:shadow-md transition-all duration-300 service-card${sectionVisible ? ' entry-animate' : ''}`}
                  style={{
                    animationDelay: sectionVisible ? `${0.15 * i + 0.5}s` : '0s',
                  }}
                >
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