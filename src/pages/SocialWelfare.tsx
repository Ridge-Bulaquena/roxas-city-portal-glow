import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Users, 
  Heart, 
  FileText, 
  Calendar, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Star,
  Shield,
  Baby,
  UserCheck,
  Building2,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const recipientGroups = ['All Groups', 'PWD', 'Solo Parent', 'Senior', 'Indigent'];
const supportPrograms = [
  { 
    name: 'PWD Financial Assistance', 
    description: 'Monthly financial support for persons with disabilities',
    group: 'PWD',
    status: 'Available',
    howToApply: 'Submit PWD ID and medical certificate at City Hall'
  },
  { 
    name: 'Solo Parent Support Grant', 
    description: 'Educational and livelihood assistance for single parents',
    group: 'Solo Parent',
    status: 'Available',
    howToApply: 'Present Solo Parent ID and proof of income'
  },
  { 
    name: 'Senior Citizen Care Package', 
    description: 'Monthly care packages and medical assistance for seniors',
    group: 'Senior',
    status: 'Available',
    howToApply: 'Senior Citizen ID required, visit barangay health center'
  },
  { 
    name: 'Indigent Family Support', 
    description: 'Comprehensive support for low-income families',
    group: 'Indigent',
    status: 'Available',
    howToApply: 'Submit barangay certificate and income declaration'
  },
  { 
    name: 'PWD Employment Program', 
    description: 'Job placement and skills training for PWDs',
    group: 'PWD',
    status: 'Pending',
    howToApply: 'Register at DSWD office with resume and certificates'
  },
  { 
    name: 'Senior Wellness Program', 
    description: 'Free health checkups and wellness activities',
    group: 'Senior',
    status: 'Ended',
    howToApply: 'Program ended, check for next cycle'
  }
];

const outreachEvents = [
  {
    title: 'Medical Mission for Seniors',
    date: 'July 15, 2024',
    location: 'City Health Center',
    description: 'Free health checkups, medicines, and consultations for senior citizens',
    type: 'Medical'
  },
  {
    title: 'PWD Skills Training Workshop',
    date: 'July 20, 2024',
    location: 'TESDA Training Center',
    description: 'Computer literacy and vocational skills training for PWDs',
    type: 'Training'
  },
  {
    title: 'Solo Parent Support Group Meeting',
    date: 'July 25, 2024',
    location: 'City Social Welfare Office',
    description: 'Monthly support group meeting with counseling and resource sharing',
    type: 'Support'
  },
  {
    title: 'Community Feeding Program',
    date: 'July 30, 2024',
    location: 'Barangay 1 Plaza',
    description: 'Free nutritious meals for indigent families and children',
    type: 'Feeding'
  }
];

const SocialWelfare = () => {
  const [showModal, setShowModal] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [groupFilter, setGroupFilter] = useState('');
  const [form, setForm] = useState({
    name: '',
    barangay: '',
    idType: '',
    needType: '',
    contactNumber: '',
    additionalInfo: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRefNumber(Math.random().toString(36).substring(2, 10).toUpperCase());
    setShowModal(true);
    setForm({ 
      name: '', 
      barangay: '', 
      idType: '', 
      needType: '', 
      contactNumber: '', 
      additionalInfo: '' 
    });
  };

  const filteredPrograms = supportPrograms.filter(program => 
    !groupFilter || groupFilter === 'All Groups' || program.group === groupFilter
  );

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_var(--chart-2)_0%,_var(--chart-3)_100%)]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16 px-6" style={{ fontFamily: 'Geist, sans-serif' }}>
          <h1 className="text-5xl font-bold text-white mb-4">Social Welfare</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-figtree">
            Programs for PWDs, solo parents, seniors, and marginalized families.
          </p>
          <button className="mt-8 bg-white text-[#1e293b] rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-white/50 transition-all duration-150" style={{ fontFamily: 'Figtree, Inter, sans-serif' }}>
            Uplift Communities
          </button>
        </section>

        {/* Support Directory */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Support Directory
            </h2>
            <div className="flex gap-4 mb-8 flex-wrap">
              <select 
                className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 pr-10 font-figtree shadow"
                value={groupFilter} 
                onChange={e => setGroupFilter(e.target.value)}
              >
                <option value="">All Recipient Groups</option>
                {recipientGroups.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((program, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {program.group === 'PWD' && <Shield className="w-5 h-5 text-[var(--chart-2)]" />}
                      {program.group === 'Solo Parent' && <Baby className="w-5 h-5 text-[var(--chart-2)]" />}
                      {program.group === 'Senior' && <UserCheck className="w-5 h-5 text-[var(--chart-2)]" />}
                      {program.group === 'Indigent' && <Heart className="w-5 h-5 text-[var(--chart-2)]" />}
                      <span className="text-sm font-semibold text-[var(--chart-2)]">{program.group}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      program.status === 'Available' ? 'bg-green-100 text-green-700' : 
                      program.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
                      'bg-red-100 text-red-700'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)]">{program.name}</h3>
                  <p className="text-[var(--muted-foreground)] text-sm mb-4">{program.description}</p>
                  <div className="bg-[var(--muted)] p-3 rounded-lg mb-4">
                    <p className="text-xs text-[var(--muted-foreground)]">
                      <strong>How to Apply:</strong> {program.howToApply}
                    </p>
                  </div>
                  <button className="w-full bg-[var(--chart-3)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Request Assistance */}
        <section className="py-16 px-6 bg-[var(--background)]">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>
              Request Assistance
            </h2>
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={handleFormChange} 
                  required 
                  placeholder="Full Name" 
                  className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" 
                />
                <input 
                  name="barangay" 
                  value={form.barangay} 
                  onChange={handleFormChange} 
                  required 
                  placeholder="Barangay" 
                  className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" 
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <select 
                  name="idType" 
                  value={form.idType} 
                  onChange={handleFormChange} 
                  required 
                  className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 pr-10 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none"
                >
                  <option value="">ID Type</option>
                  <option value="PWD ID">PWD ID</option>
                  <option value="Solo Parent ID">Solo Parent ID</option>
                  <option value="Senior Citizen ID">Senior Citizen ID</option>
                  <option value="Barangay Certificate">Barangay Certificate</option>
                  <option value="None">None</option>
                </select>
                <select 
                  name="needType" 
                  value={form.needType} 
                  onChange={handleFormChange} 
                  required 
                  className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 pr-10 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none"
                >
                  <option value="">Type of Need</option>
                  <option value="Financial Assistance">Financial Assistance</option>
                  <option value="Medical Support">Medical Support</option>
                  <option value="Educational Support">Educational Support</option>
                  <option value="Livelihood Training">Livelihood Training</option>
                  <option value="Housing Support">Housing Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <input 
                name="contactNumber" 
                value={form.contactNumber} 
                onChange={handleFormChange} 
                required 
                placeholder="Contact Number" 
                className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" 
              />
              <textarea 
                name="additionalInfo" 
                value={form.additionalInfo} 
                onChange={handleFormChange} 
                placeholder="Additional Information" 
                className="bg-[var(--input)] border border-[var(--border)] rounded-2xl px-6 py-3 font-figtree text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none min-h-[80px]" 
              />
              <button 
                type="submit" 
                className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150"
              >
                Submit Request
              </button>
            </form>
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                    Request Submitted!
                  </h3>
                  <p className="mb-2 font-figtree">Your tracking ID:</p>
                  <div className="font-mono text-lg mb-4 bg-[var(--muted)] p-3 rounded-lg">
                    {refNumber}
                  </div>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4">
                    We'll contact you within 3-5 business days to discuss your request.
                  </p>
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

        {/* Benefit Claim Tracker */}
        <section className="py-16 px-6 bg-[var(--card)]">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Benefit Claim Tracker
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-8 border border-[var(--border)] text-center">
              <Clock className="w-16 h-16 text-[var(--muted-foreground)] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-[var(--muted-foreground)] mb-6">
                Track the status of your submitted applications and benefit claims.
              </p>
              <div className="bg-[var(--muted)] p-4 rounded-lg">
                <p className="text-sm text-[var(--muted-foreground)]">
                  <strong>Future Features:</strong> Real-time status updates, document uploads, 
                  and direct communication with social workers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Outreach Notices */}
        <section className="py-16 px-6 bg-[var(--background)]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Community Outreach Notices
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {outreachEvents.map((event, i) => (
                <div key={i} className="bg-[var(--card)] rounded-xl shadow-sm p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {event.type === 'Medical' && <Heart className="w-5 h-5 text-red-500" />}
                      {event.type === 'Training' && <Star className="w-5 h-5 text-yellow-500" />}
                      {event.type === 'Support' && <Users className="w-5 h-5 text-blue-500" />}
                      {event.type === 'Feeding' && <Building2 className="w-5 h-5 text-green-500" />}
                      <span className="text-sm font-semibold text-[var(--chart-2)]">{event.type}</span>
                    </div>
                    <span className="text-sm text-[var(--muted-foreground)]">{event.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-[var(--foreground)]">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-3">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <p className="text-[var(--muted-foreground)] text-sm mb-4">{event.description}</p>
                  <button className="bg-[var(--chart-3)] text-white rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150 flex items-center gap-2">
                    Register Interest
                    <ArrowRight className="w-4 h-4" />
                  </button>
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

export default SocialWelfare; 