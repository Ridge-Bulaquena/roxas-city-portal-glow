import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Shield, 
  MapPin, 
  Clock, 
  Users, 
  FileText, 
  Search, 
  Download, 
  Eye, 
  AlertTriangle, 
  CheckCircle2,
  Phone,
  Mail,
  Calendar,
  Filter,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Car,
  Building,
  UserCheck,
  Bell
} from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import SeaweedThreadBackground from '@/components/SeaweedThreadBackground';

const barangays = [
  'Barangay 1', 'Barangay 2', 'Barangay 3', 'Barangay 4', 'Barangay 5', 'Barangay 6', 'Barangay 7', 'Barangay 8',
  'Barangay 9', 'Barangay 10', 'Barangay 11', 'Barangay 12', 'Barangay 13', 'Barangay 14', 'Barangay 15', 'Barangay 16',
  'Barangay 17', 'Barangay 18', 'Barangay 19', 'Barangay 20', 'Barangay 21', 'Barangay 22', 'Barangay 23', 'Barangay 24',
  'Barangay 25', 'Barangay 26', 'Barangay 27', 'Barangay 28', 'Barangay 29', 'Barangay 30', 'Barangay 31', 'Barangay 32',
  'Barangay 33', 'Barangay 34', 'Barangay 35', 'Barangay 36', 'Barangay 37', 'Barangay 38', 'Barangay 39', 'Barangay 40',
  'Barangay 41', 'Barangay 42', 'Barangay 43', 'Barangay 44', 'Barangay 45', 'Barangay 46', 'Barangay 47'
];

const incidentTypes = ['Theft', 'Dispute', 'Domestic Violence', 'Vandalism', 'Noise Complaint', 'Traffic Violation', 'Other'];

const patrolSchedules = [
  { barangay: 'Barangay 1', time: '6AM-2PM', officer: 'PO Santos', status: 'Active' },
  { barangay: 'Barangay 2', time: '2PM-10PM', officer: 'PO Dela Cruz', status: 'Active' },
  { barangay: 'Barangay 3', time: '10PM-6AM', officer: 'PO Rodriguez', status: 'Active' },
  { barangay: 'Barangay 4', time: '6AM-2PM', officer: 'PO Garcia', status: 'Active' },
  { barangay: 'Barangay 5', time: '2PM-10PM', officer: 'PO Martinez', status: 'Active' },
];

const policeOutposts = [
  { name: 'City Police Station', location: 'Downtown', status: '24/7', contact: '123-4567' },
  { name: 'Barangay 1 Outpost', location: 'Barangay 1', status: '8AM-8PM', contact: '123-4568' },
  { name: 'Barangay 5 Checkpoint', location: 'Barangay 5', status: '24/7', contact: '123-4569' },
  { name: 'Baybay Police Post', location: 'Baybay', status: '6AM-10PM', contact: '123-4570' },
];

const ordinances = [
  { 
    title: 'Anti-Noise Ordinance', 
    code: '2024-001', 
    desc: 'Regulates noise levels in residential areas during specific hours.',
    category: 'Public Order',
    date: 'January 2024'
  },
  { 
    title: 'Curfew for Minors', 
    code: '2024-002', 
    desc: 'Establishes curfew hours for minors under 18 years old.',
    category: 'Youth Protection',
    date: 'February 2024'
  },
  { 
    title: 'Traffic Management', 
    code: '2024-003', 
    desc: 'Comprehensive traffic rules and parking regulations.',
    category: 'Traffic',
    date: 'March 2024'
  },
  { 
    title: 'Public Safety', 
    code: '2024-004', 
    desc: 'Guidelines for public gatherings and events.',
    category: 'Public Order',
    date: 'April 2024'
  },
];

const PeaceOrder = () => {
  const [showModal, setShowModal] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [form, setForm] = useState({
    name: '',
    barangay: '',
    incident: '',
    description: '',
    anonymous: false,
  });
  const [barangayFilter, setBarangayFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.2 });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefNumber(Math.random().toString(36).substring(2, 10).toUpperCase());
    setShowModal(true);
    setForm({ name: '', barangay: '', incident: '', description: '', anonymous: false });
  };

  const filteredOrdinances = ordinances.filter(ord => 
    ord.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ord.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ord.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPatrols = patrolSchedules.filter(patrol => 
    !barangayFilter || patrol.barangay === barangayFilter
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="relative text-center py-16 px-6 bg-gradient-to-br from-[#1e3a8a] to-[#475569] text-white">
          <SeaweedThreadBackground />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Peace & Order
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-figtree">
            Community-focused safety with fair enforcement and local patrol programs.
          </p>
          <button className="mt-8 bg-white text-[var(--chart-3)] rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-white/50 transition-all duration-150">
            Promote Safety
          </button>
        </section>

        {/* Patrol Map Viewer */}
        <section ref={sectionRef} className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Patrol Map Viewer
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <select 
                className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-figtree shadow"
                value={barangayFilter} 
                onChange={e => setBarangayFilter(e.target.value)}
              >
                <option value="">All 47 Barangays</option>
                {barangays.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
              <button className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">
                View Live Patrols
              </button>
            </div>

            {/* Patrol Schedules Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredPatrols.map((patrol, index) => (
                <div 
                  key={index} 
                  className={`bg-[var(--card)] rounded-[var(--radius)] p-4 md:p-6 border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.04)] card transition-all duration-300 group${sectionVisible ? ' entry-animate' : ''}`}
                  style={{
                    animationDelay: sectionVisible ? `${0.15 * index + 0.5}s` : '0s',
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-[var(--chart-3)]" />
                    <div>
                      <h3 className="font-semibold text-lg text-[var(--foreground)]">{patrol.barangay}</h3>
                      <p className="text-[var(--muted-foreground)] text-sm">{patrol.officer}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                      {patrol.status}
                    </span>
                    <span className="text-sm text-[var(--muted-foreground)]">{patrol.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Police Outposts */}
            <div className="bg-[var(--card)] rounded-[var(--radius)] p-4 md:p-6 border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.04)] card">
              <h3 className="text-2xl font-bold mb-6 text-[var(--foreground)]">Police Outposts & Checkpoints</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {policeOutposts.map((outpost, i) => (
                  <div 
                    key={i} 
                    className={`bg-[var(--card)] rounded-[var(--radius)] p-4 md:p-6 border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.04)] card transition-all duration-300 group`}
                    style={{
                      animationDelay: sectionVisible ? `${0.15 * (i + 5) + 0.5}s` : '0s',
                    }}
                  >
                    <MapPin className="w-6 h-6 text-[var(--chart-3)] mb-2" />
                    <h4 className="font-semibold text-[var(--foreground)]">{outpost.name}</h4>
                    <p className="text-sm text-[var(--muted-foreground)] mb-2">{outpost.location}</p>
                    <p className="text-xs text-[var(--chart-3)] font-semibold">{outpost.status}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">{outpost.contact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Reports */}
        <section className="py-16 px-6 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Community Reports
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6 animate-fade-in">
              <div className="flex items-center gap-3">
                <input 
                  type="checkbox" 
                  name="anonymous" 
                  checked={form.anonymous} 
                  onChange={handleFormChange}
                  className="rounded border-[var(--border)]"
                />
                <label className="text-sm font-figtree">Report anonymously</label>
              </div>
              
              {!form.anonymous && (
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={handleFormChange} 
                  required 
                  placeholder="Full Name" 
                  className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" 
                />
              )}
              
              <select 
                name="barangay" 
                value={form.barangay} 
                onChange={handleFormChange} 
                required 
                className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none"
              >
                <option value="">Select Barangay</option>
                {barangays.map(b => <option key={b}>{b}</option>)}
              </select>
              
              <select 
                name="incident" 
                value={form.incident} 
                onChange={handleFormChange} 
                required 
                className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none"
              >
                <option value="">Type of Incident</option>
                {incidentTypes.map(c => <option key={c}>{c}</option>)}
              </select>
              
              <textarea 
                name="description" 
                value={form.description} 
                onChange={handleFormChange} 
                required 
                placeholder="Describe the incident in detail" 
                className="bg-[var(--input)] border border-[var(--border)] rounded-2xl px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none min-h-[80px]" 
              />
              
              <button 
                type="submit" 
                className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150"
              >
                Submit Report
              </button>
            </form>
            
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Report Submitted!</h3>
                  <p className="mb-2 font-figtree">Your reference number:</p>
                  <div className="font-mono text-lg mb-4 bg-[var(--muted)] p-3 rounded-lg">{refNumber}</div>
                  <button 
                    onClick={() => setShowModal(false)} 
                    className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Ordinance Hub */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 group">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ordinance Hub
              </h2>
              <div className="section-underline-wrapper">
                <div className="section-underline"></div>
              </div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                <input 
                  type="text" 
                  placeholder="Search ordinances..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[var(--input)] border border-[var(--border)] rounded-full pl-12 pr-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {filteredOrdinances.map((ordinance, i) => (
                <div 
                  key={i} 
                  className={`bg-[var(--card)] rounded-[var(--radius)] p-4 md:p-6 border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.04)] card transition-all duration-300 group`}
                  style={{
                    animationDelay: sectionVisible ? `${0.15 * i + 0.5}s` : '0s',
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-[var(--foreground)]">{ordinance.title}</h3>
                      <p className="text-sm text-[var(--muted-foreground)]">{ordinance.code}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--chart-3)] text-white">
                      {ordinance.category}
                    </span>
                  </div>
                  <p className="text-[var(--muted-foreground)] mb-4">{ordinance.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--muted-foreground)]">{ordinance.date}</span>
                    <div className="flex gap-2">
                      <button className="bg-[var(--chart-3)] text-white rounded-full px-4 py-2 text-sm font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        Preview
                      </button>
                      <button className="bg-[var(--destructive)] text-white rounded-full px-4 py-2 text-sm font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150 flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
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

export default PeaceOrder; 