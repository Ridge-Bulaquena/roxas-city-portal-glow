import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { GraduationCap, BookOpen, Users, Calendar, Star, Brain, MessageCircle, CheckCircle2 } from 'lucide-react';

const gradeLevels = ['Elementary', 'High School', 'College'];
const scholarships = [
  { name: 'City Scholars', status: 'Open', link: '#', level: 'College' },
  { name: 'Barangay Honor Grant', status: 'Ongoing', link: '#', level: 'High School' },
  { name: 'Elementary Nutrition Award', status: 'Closed', link: '#', level: 'Elementary' },
];
const feedingPrograms = [
  { date: 'July 1', school: 'Roxas Central School', barangay: 'Barangay 2' },
  { date: 'July 5', school: 'Baybay Elementary', barangay: 'Barangay 4' },
];
const learningPrograms = [
  { name: 'TESDA Skills Training', link: '#', desc: 'Technical skills for all ages.' },
  { name: 'ALS (Alternative Learning System)', link: '#', desc: 'Flexible learning for out-of-school youth.' },
  { name: 'Community Workshops', link: '#', desc: 'Free workshops in barangay centers.' },
];
const concernTypes = ['Lack of Access', 'No Materials', 'Teacher Issue', 'Other'];

const EducationSupport = () => {
  const [showModal, setShowModal] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [form, setForm] = useState({
    name: '',
    barangay: '',
    concern: '',
    notes: '',
  });
  const [gradeFilter, setGradeFilter] = useState('');

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefNumber(Math.random().toString(36).substring(2, 10).toUpperCase());
    setShowModal(true);
    setForm({ name: '', barangay: '', concern: '', notes: '' });
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#a0d0f3_0%,_#3b76d9_100%)]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16 px-6" style={{ fontFamily: 'Geist, sans-serif' }}>
          <h1 className="text-5xl font-bold text-[#3b76d9] mb-4">Education Support</h1>
          <p className="text-lg text-[#565961] max-w-2xl mx-auto font-figtree">Scholarships, feeding programs, and lifelong learning resources for all citizens.</p>
          <button className="mt-8 bg-[#3b76d9] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[#b6c6e7] transition-all duration-150" style={{ fontFamily: 'Figtree, Inter, sans-serif' }}>
            Support Learners
          </button>
        </section>

        {/* Scholarships Directory */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Scholarships Directory</h2>
            <div className="flex gap-4 mb-8">
              <select className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-figtree shadow" value={gradeFilter} onChange={e => setGradeFilter(e.target.value)}>
                <option value="">All Grade Levels</option>
                {gradeLevels.map(g => <option key={g}>{g}</option>)}
              </select>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {scholarships.filter(s => !gradeFilter || s.level === gradeFilter).map((s, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border border-[var(--border)]">
                  <GraduationCap className="w-10 h-10 mb-2 text-[#3b76d9]" />
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{s.name}</h3>
                  <span className={`mt-2 px-4 py-1 rounded-full text-xs font-bold ${s.status === 'Open' ? 'bg-green-100 text-green-700' : s.status === 'Closed' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{s.status}</span>
                  <a href={s.link} className="mt-4 bg-[var(--chart-3)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Apply</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feeding Programs Section */}
        <section className="py-16 px-6 bg-[#1f3b67] text-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Feeding Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {feedingPrograms.map((f, i) => (
                <div key={i} className="bg-[#3b76d9] rounded-xl shadow p-6 flex flex-col items-center">
                  <Users className="w-10 h-10 mb-2 text-[#a0d0f3]" />
                  <h3 className="font-semibold text-lg mt-2">{f.school}</h3>
                  <p className="text-[#b4d4ee] mt-2">{f.barangay} — {f.date}</p>
                  <button className="mt-4 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold shadow hover:bg-[#4f90e1] transition">Volunteer</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifelong Learning Directory */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>Lifelong Learning Directory</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {learningPrograms.map((l, i) => (
                <a key={i} href={l.link} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center border border-[var(--border)] hover:scale-105 transition-all duration-150">
                  <BookOpen className="w-10 h-10 mb-2 text-[#3b76d9]" />
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{l.name}</h3>
                  <p className="text-[var(--muted-foreground)] mt-2 text-center">{l.desc}</p>
                  <span className="mt-4 text-[var(--chart-2)] font-semibold">Enroll</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Report an Education Issue */}
        <section className="py-16 px-6 bg-[#1f3b67] text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>Report an Education Issue</h2>
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6 animate-fade-in">
              <input name="name" value={form.name} onChange={handleFormChange} required placeholder="Full Name" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <input name="barangay" value={form.barangay} onChange={handleFormChange} required placeholder="Barangay" className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" />
              <select name="concern" value={form.concern} onChange={handleFormChange} required className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none">
                <option value="">Type of Concern</option>
                {concernTypes.map(c => <option key={c}>{c}</option>)}
              </select>
              <textarea name="notes" value={form.notes} onChange={handleFormChange} required placeholder="Notes" className="bg-[var(--input)] border border-[var(--border)] rounded-2xl px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none min-h-[80px]" />
              <button type="submit" className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Submit</button>
            </form>
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>Report Submitted!</h3>
                  <p className="mb-2 font-figtree">Your tracking ID:</p>
                  <div className="font-mono text-lg mb-4">{refNumber}</div>
                  <button onClick={() => setShowModal(false)} className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Close</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* AI Chatbot + Brain IQ Trainer */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>AI Chatbot + Brain IQ Trainer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center border border-[var(--border)]">
                <Brain className="w-12 h-12 mb-4 text-[#3b76d9]" />
                <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">Smart Tutor Chatbot</h3>
                <p className="text-[var(--muted-foreground)] mt-2">Ask questions on math, science, history, or get language help. (Future: connect to GPT/LLM for local school use.)</p>
                <button className="mt-4 bg-[var(--chart-2)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Try Chatbot</button>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center border border-[var(--border)]">
                <Star className="w-12 h-12 mb-4 text-[#3b76d9]" />
                <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">Brain IQ Trainer</h3>
                <p className="text-[var(--muted-foreground)] mt-2">Daily logic puzzles, memory games, and speed challenges. (Future: leaderboards, grant-ready for Google.org, CZI, Solve Education!)</p>
                <button className="mt-4 bg-[var(--chart-2)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">Play Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EducationSupport; 