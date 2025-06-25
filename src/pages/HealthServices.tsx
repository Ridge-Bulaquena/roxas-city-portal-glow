import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, AlertCircle, Phone, Hospital, CheckCircle2, Heart, Users, Calendar, Star } from 'lucide-react';

const barangays = [
  'Barangay 1', 'Barangay 2', 'Barangay 3', 'Barangay 4', 'Barangay 5', 'Barangay 6', 'Barangay 7', 'Barangay 8',
  'Barangay 9', 'Barangay 10', 'Barangay 11', 'Barangay 12', 'Barangay 13', 'Barangay 14', 'Barangay 15', 'Barangay 16',
  'Barangay 17', 'Barangay 18', 'Barangay 19', 'Barangay 20', 'Barangay 21', 'Barangay 22', 'Barangay 23', 'Barangay 24',
  'Barangay 25', 'Barangay 26', 'Barangay 27', 'Barangay 28', 'Barangay 29', 'Barangay 30', 'Barangay 31', 'Barangay 32',
  'Barangay 33', 'Barangay 34', 'Barangay 35', 'Barangay 36', 'Barangay 37', 'Barangay 38', 'Barangay 39', 'Barangay 40',
  'Barangay 41', 'Barangay 42', 'Barangay 43', 'Barangay 44', 'Barangay 45', 'Barangay 46', 'Barangay 47'
];

const concernTypes = [
  'Medical Emergency', 'Dengue', 'Maternal Care', 'Vaccination', 'COVID-19', 'Mental Health', 'Dental Care', 'Other'
];

const healthAlerts = [
  { 
    title: 'Dengue Alert', 
    desc: 'Increased dengue cases in Barangay 3. Keep surroundings clean and use mosquito nets.', 
    icon: <AlertCircle className="w-7 h-7 text-[#14274E]" />,
    date: 'June 25, 2024'
  },
  { 
    title: 'Vaccination Drive', 
    desc: 'Free measles vaccination at City Hall, June 30, 8am-4pm.', 
    icon: <Hospital className="w-7 h-7 text-[#14274E]" />,
    date: 'June 30, 2024'
  },
  { 
    title: 'Medical Outreach', 
    desc: 'Mobile clinic in Barangay 5, July 2.', 
    icon: <Hospital className="w-7 h-7 text-[#14274E]" />,
    date: 'July 2, 2024'
  },
  { 
    title: 'Mental Health Support', 
    desc: 'Free counseling sessions at City Health Office every Tuesday.', 
    icon: <Heart className="w-7 h-7 text-[#14274E]" />,
    date: 'Every Tuesday'
  }
];

const hotlines = [
  { label: 'Emergency', number: '166', icon: <Phone className="w-6 h-6 text-[#14274E]" /> },
  { label: 'Barangay Health Unit', number: '123-4567', icon: <Hospital className="w-6 h-6 text-[#14274E]" /> },
  { label: 'City Health Office', number: '987-6543', icon: <Hospital className="w-6 h-6 text-[#14274E]" /> },
  { label: 'Mental Health Hotline', number: '0917-123-4567', icon: <Heart className="w-6 h-6 text-[#14274E]" /> }
];

const healthStations = [
  { name: 'City Health Office', barangay: 'Barangay 1', status: 'Open', hours: '8AM-5PM' },
  { name: 'Barangay Health Unit 2', barangay: 'Barangay 2', status: 'Open', hours: '8AM-5PM' },
  { name: 'Barangay Health Unit 3', barangay: 'Barangay 3', status: 'Open', hours: '8AM-5PM' },
  { name: 'Barangay Health Unit 4', barangay: 'Barangay 4', status: 'Open', hours: '8AM-5PM' },
  { name: 'Barangay Health Unit 5', barangay: 'Barangay 5', status: 'Open', hours: '8AM-5PM' },
  { name: 'Roxas Memorial Provincial Hospital', barangay: 'Barangay 1', status: '24/7', hours: '24 Hours' }
];

const HealthServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [barangayFilter, setBarangayFilter] = useState('');
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

  const filteredStations = healthStations.filter(station => 
    !barangayFilter || station.barangay === barangayFilter
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16 px-6 bg-gradient-to-br from-[#14274E] to-[#3b76d9] text-white">
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>
            Health Services
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-figtree">
            Find nearby health stations, track urgent health concerns, and get connected to support across all 47 barangays of Roxas City.
          </p>
          <button className="mt-8 bg-white text-[#14274E] rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-white/50 transition-all duration-150" style={{ fontFamily: 'Figtree, Inter, sans-serif' }}>
            Access Health Support
          </button>
        </section>

        {/* Nearby Health Stations */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#14274E] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Nearby Health Stations
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <select 
                className="bg-white border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-figtree shadow"
                value={barangayFilter} 
                onChange={e => setBarangayFilter(e.target.value)}
              >
                <option value="">All 47 Barangays</option>
                {barangays.map(b => <option key={b} value={b}>{b}</option>)}
              </select>
              <button className="bg-[#14274E] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">
                Nearest Open Facility
              </button>
            </div>
            
            {/* Health Stations Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {filteredStations.map((station, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Hospital className="w-8 h-8 text-[#14274E]" />
                    <div>
                      <h3 className="font-semibold text-lg text-[var(--foreground)]">{station.name}</h3>
                      <p className="text-[var(--muted-foreground)] text-sm">{station.barangay}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      station.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {station.status}
                    </span>
                    <span className="text-sm text-[var(--muted-foreground)]">{station.hours}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <div className="rounded-2xl border border-[var(--border)] bg-white shadow-md h-72 flex items-center justify-center text-[var(--card-foreground)] font-figtree">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#14274E] mx-auto mb-4" />
                <span className="text-lg">Interactive Map with Health Station Locations</span>
                <p className="text-sm text-[var(--muted-foreground)] mt-2">Showing all 47 barangays of Roxas City</p>
              </div>
            </div>
          </div>
        </section>

        {/* Report a Health Concern */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#14274E] mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>
              Report a Health Concern
            </h2>
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6">
              <input 
                name="name" 
                value={form.name} 
                onChange={handleFormChange} 
                required 
                placeholder="Full Name" 
                className="bg-white border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[#14274E] outline-none" 
              />
              <select 
                name="barangay" 
                value={form.barangay} 
                onChange={handleFormChange} 
                required 
                className="bg-white border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[#14274E] outline-none"
              >
                <option value="">Select Barangay (47 total)</option>
                {barangays.map(b => <option key={b}>{b}</option>)}
              </select>
              <select 
                name="concern" 
                value={form.concern} 
                onChange={handleFormChange} 
                required 
                className="bg-white border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[#14274E] outline-none"
              >
                <option value="">Type of Concern</option>
                {concernTypes.map(c => <option key={c}>{c}</option>)}
              </select>
              <textarea 
                name="desc" 
                value={form.desc} 
                onChange={handleFormChange} 
                required 
                placeholder="Description" 
                className="bg-white border border-[var(--border)] rounded-2xl px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[#14274E] outline-none min-h-[80px]" 
              />
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImage} 
                className="font-figtree" 
              />
              <button 
                type="submit" 
                className="bg-[#14274E] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150"
              >
                Submit Report
              </button>
            </form>
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                    Report Submitted!
                  </h3>
                  <p className="mb-2 font-figtree">Your reference number:</p>
                  <div className="font-mono text-lg mb-4 bg-[var(--muted)] p-3 rounded-lg">{refNumber}</div>
                  <button 
                    onClick={() => setShowModal(false)} 
                    className="bg-[#14274E] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Health Alerts & Notices */}
        <section className="py-16 px-6 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#14274E] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Health Alerts & Notices
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {healthAlerts.map((alert, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
                  {alert.icon}
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{alert.title}</h3>
                  <p className="text-[var(--muted-foreground)] mt-2 text-sm">{alert.desc}</p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-[var(--muted-foreground)]">
                    <Calendar className="w-4 h-4" />
                    {alert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Hotline Directory */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#14274E] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Emergency Hotline Directory
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hotlines.map((h, i) => (
                <a 
                  key={i} 
                  href={`tel:${h.number}`} 
                  className="bg-[var(--card)] border border-[var(--border)] rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-all duration-150"
                >
                  {h.icon}
                  <h3 className="font-semibold text-lg mt-2 text-[var(--foreground)]">{h.label}</h3>
                  <p className="text-[var(--muted-foreground)] mt-2">{h.number}</p>
                  <button className="mt-4 bg-[#14274E] text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">
                    Tap to Call
                  </button>
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