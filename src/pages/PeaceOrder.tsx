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

const patrolSchedules = [
  {
    barangay: 'Barangay 1',
    schedule: '6:00 AM - 2:00 PM',
    officer: 'PO1 Juan Dela Cruz',
    contact: '+63 912 345 6789',
    outpost: { lat: 11.5851, lng: 122.7511, name: 'Main Police Station' },
    checkpoints: [
      { lat: 11.5855, lng: 122.7515, name: 'Roxas Bridge Checkpoint' },
      { lat: 11.5847, lng: 122.7507, name: 'City Hall Checkpoint' }
    ]
  },
  {
    barangay: 'Barangay 2',
    schedule: '2:00 PM - 10:00 PM',
    officer: 'PO2 Maria Santos',
    contact: '+63 912 345 6790',
    outpost: { lat: 11.5860, lng: 122.7520, name: 'Barangay 2 Outpost' },
    checkpoints: [
      { lat: 11.5865, lng: 122.7525, name: 'Market Area Checkpoint' },
      { lat: 11.5855, lng: 122.7515, name: 'School Zone Checkpoint' }
    ]
  },
  {
    barangay: 'Barangay 3',
    schedule: '10:00 PM - 6:00 AM',
    officer: 'PO3 Pedro Reyes',
    contact: '+63 912 345 6791',
    outpost: { lat: 11.5870, lng: 122.7530, name: 'Barangay 3 Outpost' },
    checkpoints: [
      { lat: 11.5875, lng: 122.7535, name: 'Residential Area Checkpoint' },
      { lat: 11.5865, lng: 122.7525, name: 'Industrial Zone Checkpoint' }
    ]
  }
];

const ordinances = [
  {
    id: 'ORD-2024-001',
    title: 'Anti-Noise Ordinance',
    category: 'Public Order',
    description: 'Regulates noise levels in residential and commercial areas during specific hours.',
    effectiveDate: '2024-01-15',
    status: 'Active',
    fileUrl: '#'
  },
  {
    id: 'ORD-2024-002',
    title: 'Traffic Management Ordinance',
    category: 'Traffic',
    description: 'Establishes traffic rules and regulations for motorists and pedestrians.',
    effectiveDate: '2024-02-01',
    status: 'Active',
    fileUrl: '#'
  },
  {
    id: 'ORD-2024-003',
    title: 'Business Permit Ordinance',
    category: 'Business',
    description: 'Requirements and procedures for business permits and licenses.',
    effectiveDate: '2024-01-20',
    status: 'Active',
    fileUrl: '#'
  },
  {
    id: 'ORD-2024-004',
    title: 'Environmental Protection Ordinance',
    category: 'Environment',
    description: 'Guidelines for waste management and environmental conservation.',
    effectiveDate: '2024-03-01',
    status: 'Active',
    fileUrl: '#'
  },
  {
    id: 'ORD-2024-005',
    title: 'Public Safety Ordinance',
    category: 'Safety',
    description: 'Safety regulations for public events and gatherings.',
    effectiveDate: '2024-02-15',
    status: 'Active',
    fileUrl: '#'
  }
];

const PeaceOrder = () => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [reportRef, setReportRef] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const [reportForm, setReportForm] = useState({
    category: '',
    location: '',
    description: '',
    contact: '',
    anonymous: false
  });

  const handleReportChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setReportForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setReportForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportRef(Math.random().toString(36).substring(2, 10).toUpperCase());
    setShowReportModal(false);
    setShowSuccessModal(true);
    setReportForm({
      category: '',
      location: '',
      description: '',
      contact: '',
      anonymous: false
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filteredOrdinances = ordinances.filter(ordinance =>
    ordinance.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ordinance.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ordinance.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[var(--card)]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center py-16 px-6 bg-gradient-to-br from-slate-800 to-slate-600">
          <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>
            Peace & Order
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto font-inter mb-8">
            Community-focused safety with fair enforcement and local patrol programs.
          </p>
          <button className="bg-blue-600 text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 transition-all duration-150" style={{ fontFamily: 'Inter, sans-serif' }}>
            Promote Safety
          </button>
        </section>

        {/* Patrol Map Viewer */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Patrol Map Viewer
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map Placeholder */}
              <div className="lg:col-span-2 bg-slate-100 rounded-xl p-8 border border-slate-200">
                <div className="flex items-center justify-center h-96 bg-slate-200 rounded-lg">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 font-inter">Interactive Patrol Map</p>
                    <p className="text-sm text-slate-500">Police outposts and checkpoints will be displayed here</p>
                  </div>
                </div>
              </div>

              {/* Patrol Schedules */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Barangay Patrol Schedules</h3>
                {patrolSchedules.map((patrol, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-slate-800">{patrol.barangay}</h4>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="space-y-2 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{patrol.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4" />
                        <span>{patrol.officer}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{patrol.contact}</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Building className="w-3 h-3" />
                        <span>1 Outpost, {patrol.checkpoints.length} Checkpoints</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Reports */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Community Reports
            </h2>
            <p className="text-slate-600 mb-8 font-inter">
              Report incidents anonymously to help maintain peace and order in our community.
            </p>
            
            <div className="bg-white rounded-2xl shadow-md p-8 border border-slate-200">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 rounded-xl border border-red-200">
                  <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Theft</h3>
                  <p className="text-sm text-slate-600">Report stolen property or suspicious activity</p>
                </div>
                <div className="text-center p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                  <Users className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Dispute</h3>
                  <p className="text-sm text-slate-600">Report conflicts or disturbances</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <Shield className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Domestic Violence</h3>
                  <p className="text-sm text-slate-600">Report domestic abuse or violence</p>
                </div>
              </div>
              
              <button 
                onClick={() => setShowReportModal(true)}
                className="w-full bg-red-600 text-white rounded-full px-8 py-4 font-semibold shadow-md hover:scale-105 hover:bg-red-700 focus:ring-2 focus:ring-red-400 transition-all duration-150"
              >
                Report an Incident
              </button>
            </div>
          </div>
        </section>

        {/* Ordinance Hub */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Ordinance Hub
            </h2>
            <div className="mb-8">
              <div className="flex gap-4 flex-wrap">
                <div className="relative flex-1 min-w-64">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search ordinances..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-800 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                </div>
                <select 
                  className="bg-slate-50 border border-slate-200 text-slate-800 rounded-full px-6 py-3 focus:ring-2 focus:ring-blue-400 outline-none"
                  value={categoryFilter} 
                  onChange={e => setCategoryFilter(e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="Public Order">Public Order</option>
                  <option value="Traffic">Traffic</option>
                  <option value="Business">Business</option>
                  <option value="Environment">Environment</option>
                  <option value="Safety">Safety</option>
                </select>
              </div>
            </div>
            
            <div className="grid gap-6">
              {filteredOrdinances
                .filter(ordinance => !categoryFilter || ordinance.category === categoryFilter)
                .map((ordinance, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg text-slate-800">{ordinance.title}</h3>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{ordinance.status}</span>
                      </div>
                      <p className="text-slate-600 mb-3">{ordinance.description}</p>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          {ordinance.id}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Effective: {ordinance.effectiveDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <Filter className="w-4 h-4" />
                          {ordinance.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition-all">
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                    <button className="flex items-center gap-2 bg-slate-600 text-white rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition-all">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-16 px-6 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Emergency Contacts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700 rounded-xl p-6">
                <Phone className="w-12 h-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Emergency Hotline</h3>
                <p className="text-slate-300 mb-3">For immediate assistance</p>
                <p className="text-2xl font-bold text-red-400">911</p>
              </div>
              <div className="bg-slate-700 rounded-xl p-6">
                <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Police Station</h3>
                <p className="text-slate-300 mb-3">Roxas City Police</p>
                <p className="text-lg font-semibold text-blue-400">+63 36 621 1234</p>
              </div>
              <div className="bg-slate-700 rounded-xl p-6">
                <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email Reports</h3>
                <p className="text-slate-300 mb-3">For non-emergency reports</p>
                <p className="text-sm font-semibold text-green-400">peace@roxascity.gov.ph</p>
              </div>
            </div>
          </div>
        </section>

        {/* Report Modal */}
        {showReportModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
              <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>
                Report an Incident
              </h3>
              <form onSubmit={handleReportSubmit} className="space-y-4">
                <select 
                  name="category" 
                  value={reportForm.category} 
                  onChange={handleReportChange} 
                  required 
                  className="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-3 text-slate-800 focus:ring-2 focus:ring-red-400 outline-none"
                >
                  <option value="">Select Category</option>
                  <option value="theft">Theft</option>
                  <option value="dispute">Dispute</option>
                  <option value="domestic-violence">Domestic Violence</option>
                  <option value="suspicious-activity">Suspicious Activity</option>
                  <option value="other">Other</option>
                </select>
                
                <input 
                  name="location" 
                  value={reportForm.location} 
                  onChange={handleReportChange} 
                  required 
                  placeholder="Location/Address" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-3 text-slate-800 focus:ring-2 focus:ring-red-400 outline-none" 
                />
                
                <textarea 
                  name="description" 
                  value={reportForm.description} 
                  onChange={handleReportChange} 
                  required 
                  placeholder="Describe the incident..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-slate-800 focus:ring-2 focus:ring-red-400 outline-none min-h-[100px]" 
                />
                
                <input 
                  name="contact" 
                  value={reportForm.contact} 
                  onChange={handleReportChange} 
                  placeholder="Contact Number (Optional)" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-3 text-slate-800 focus:ring-2 focus:ring-red-400 outline-none" 
                />
                
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={reportForm.anonymous}
                    onChange={handleReportChange}
                    className="rounded border-slate-200"
                  />
                  <label className="text-sm text-slate-600">Submit anonymously</label>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <button 
                    type="submit" 
                    className="flex-1 bg-red-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-400 transition-all"
                  >
                    Submit Report
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowReportModal(false)} 
                    className="flex-1 bg-slate-200 text-slate-800 rounded-full px-6 py-3 font-semibold hover:bg-slate-300 focus:ring-2 focus:ring-slate-400 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                Report Submitted!
              </h3>
              <p className="mb-2 font-inter">Your reference number:</p>
              <div className="font-mono text-lg mb-4 bg-slate-100 p-3 rounded-lg">{reportRef}</div>
              <p className="text-sm text-slate-600 mb-4">
                Thank you for helping maintain peace and order in our community.
              </p>
              <button 
                onClick={() => setShowSuccessModal(false)} 
                className="bg-blue-600 text-white rounded-full px-8 py-3 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-blue-400 transition-all duration-150"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PeaceOrder; 