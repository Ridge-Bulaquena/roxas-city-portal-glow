import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Calendar, 
  Search, 
  Download, 
  Eye, 
  MessageSquare, 
  CheckCircle2, 
  Clock,
  DollarSign,
  Building2,
  Users,
  Award,
  Filter,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import SeaweedThreadBackground from '@/components/SeaweedThreadBackground';

const budgetData = [
  { department: 'Health Services', allocated: 45000000, spent: 42000000, year: 2024 },
  { department: 'Education', allocated: 38000000, spent: 36500000, year: 2024 },
  { department: 'Public Works', allocated: 52000000, spent: 48000000, year: 2024 },
  { department: 'Social Welfare', allocated: 28000000, spent: 27500000, year: 2024 },
  { department: 'Public Safety', allocated: 32000000, spent: 31000000, year: 2024 },
  { department: 'Environmental', allocated: 18000000, spent: 16500000, year: 2024 },
  { department: 'Administration', allocated: 25000000, spent: 24000000, year: 2024 },
  { department: 'Tourism', allocated: 15000000, spent: 14200000, year: 2024 }
];

const procurementRecords = [
  {
    id: 'PR-2024-001',
    title: 'City Hall Renovation Project',
    contractor: 'Roxas Construction Co.',
    amount: 25000000,
    status: 'Awarded',
    date: '2024-06-15',
    category: 'Infrastructure',
    description: 'Renovation of main city hall building including electrical and plumbing upgrades'
  },
  {
    id: 'PR-2024-002',
    title: 'Medical Equipment Supply',
    contractor: 'HealthTech Solutions',
    amount: 8500000,
    status: 'In Progress',
    date: '2024-06-10',
    category: 'Healthcare',
    description: 'Supply of medical equipment for city health centers'
  },
  {
    id: 'PR-2024-003',
    title: 'School Furniture Procurement',
    contractor: 'EduFurnish Inc.',
    amount: 5200000,
    status: 'Completed',
    date: '2024-05-28',
    category: 'Education',
    description: 'Furniture and equipment for public schools'
  },
  {
    id: 'PR-2024-004',
    title: 'Road Maintenance Equipment',
    contractor: 'InfraTools Ltd.',
    amount: 12000000,
    status: 'Bidding',
    date: '2024-06-20',
    category: 'Infrastructure',
    description: 'Heavy equipment for road maintenance and repair'
  },
  {
    id: 'PR-2024-005',
    title: 'Digital Services Platform',
    contractor: 'TechSolutions PH',
    amount: 6800000,
    status: 'Awarded',
    date: '2024-06-05',
    category: 'Technology',
    description: 'Development of citizen portal and digital services platform'
  }
];

const performanceMetrics = [
  {
    category: 'Citizen Services',
    metrics: [
      { name: 'Permits Processed', value: 1247, target: 1200, unit: 'permits' },
      { name: 'Complaints Resolved', value: 892, target: 800, unit: 'cases' },
      { name: 'Health Consultations', value: 3456, target: 3000, unit: 'visits' },
      { name: 'Educational Programs', value: 156, target: 150, unit: 'programs' }
    ]
  },
  {
    category: 'Infrastructure',
    metrics: [
      { name: 'Roads Repaired', value: 45, target: 40, unit: 'km' },
      { name: 'Bridges Built', value: 3, target: 3, unit: 'bridges' },
      { name: 'Street Lights Installed', value: 234, target: 200, unit: 'lights' },
      { name: 'Drainage Systems', value: 12, target: 10, unit: 'systems' }
    ]
  },
  {
    category: 'Community Engagement',
    metrics: [
      { name: 'Town Hall Meetings', value: 24, target: 20, unit: 'meetings' },
      { name: 'Citizen Feedback', value: 567, target: 500, unit: 'responses' },
      { name: 'Volunteer Hours', value: 2840, target: 2500, unit: 'hours' },
      { name: 'Community Events', value: 89, target: 80, unit: 'events' }
    ]
  }
];

const GovernanceTransparency = () => {
  const [showModal, setShowModal] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('2024');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: '',
    anonymous: false
  });

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
    setForm({ 
      name: '', 
      email: '', 
      category: '', 
      subject: '', 
      message: '', 
      anonymous: false 
    });
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filteredBudget = budgetData.filter(item => 
    (!departmentFilter || item.department === departmentFilter) &&
    item.year.toString() === yearFilter
  );

  const filteredProcurement = procurementRecords.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.contractor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Awarded': return 'bg-green-100 text-green-700';
      case 'Completed': return 'bg-blue-100 text-blue-700';
      case 'In Progress': return 'bg-yellow-100 text-yellow-700';
      case 'Bidding': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-[var(--card)]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="relative text-center py-16 px-6 bg-gradient-to-br from-[var(--chart-1)] to-[var(--card)]">
          <SeaweedThreadBackground />
          <h1 className="text-5xl font-bold text-[var(--foreground)] mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>
            Governance & Transparency
          </h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto font-inter">
            Access city budgets, procurement records, and performance data in real time.
          </p>
          <button className="mt-8 bg-[var(--primary)] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150" style={{ fontFamily: 'Inter, sans-serif' }}>
            Track Governance
          </button>
        </section>

        {/* Budget Explorer */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Budget Explorer
            </h2>
            <div className="flex gap-4 mb-8 flex-wrap">
              <select 
                className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-inter shadow"
                value={departmentFilter} 
                onChange={e => setDepartmentFilter(e.target.value)}
              >
                <option value="">All Departments</option>
                {Array.from(new Set(budgetData.map(item => item.department))).map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <select 
                className="bg-[var(--card)] border border-[var(--border)] text-[var(--card-foreground)] rounded-full px-6 py-3 font-inter shadow"
                value={yearFilter} 
                onChange={e => setYearFilter(e.target.value)}
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            
            <div className="bg-[var(--card)] rounded-xl shadow-sm border border-[var(--border)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[var(--muted)]">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-[var(--foreground)]">Department</th>
                      <th className="px-6 py-4 text-right font-semibold text-[var(--foreground)]">Allocated</th>
                      <th className="px-6 py-4 text-right font-semibold text-[var(--foreground)]">Spent</th>
                      <th className="px-6 py-4 text-right font-semibold text-[var(--foreground)]">Utilization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBudget.map((item, index) => {
                      const utilization = (item.spent / item.allocated) * 100;
                      return (
                        <tr key={index} className="border-b border-[var(--border)] hover:bg-[var(--muted)]/50">
                          <td className="px-6 py-4 font-medium text-[var(--foreground)]">{item.department}</td>
                          <td className="px-6 py-4 text-right text-[var(--foreground)]">{formatCurrency(item.allocated)}</td>
                          <td className="px-6 py-4 text-right text-[var(--foreground)]">{formatCurrency(item.spent)}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <div className="w-20 bg-[var(--muted)] rounded-full h-2">
                                <div 
                                  className={`h-2 rounded-full ${utilization > 90 ? 'bg-red-500' : utilization > 75 ? 'bg-yellow-500' : 'bg-green-500'}`}
                                  style={{ width: `${Math.min(utilization, 100)}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-[var(--muted-foreground)]">{utilization.toFixed(1)}%</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Procurement Records Viewer */}
        <section className="py-16 px-6 bg-[var(--muted)]/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Procurement Records Viewer
            </h2>
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[var(--muted-foreground)] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by title, contractor, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-full text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none"
                />
              </div>
            </div>
            
            <div className="grid gap-6">
              {filteredProcurement.map((record, index) => (
                <div key={index} className="bg-[var(--card)] rounded-xl shadow-sm p-6 border border-[var(--border)] hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-[var(--foreground)] mb-2">{record.title}</h3>
                      <p className="text-[var(--muted-foreground)] text-sm mb-2">{record.description}</p>
                      <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                        <span><Building2 className="w-4 h-4 inline mr-1" />{record.contractor}</span>
                        <span><Calendar className="w-4 h-4 inline mr-1" />{record.date}</span>
                        <span><Award className="w-4 h-4 inline mr-1" />{record.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-[var(--foreground)] mb-2">{formatCurrency(record.amount)}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(record.status)}`}>
                        {record.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 bg-[var(--primary)] text-white rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition-all">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 bg-[var(--chart-1)] text-white rounded-full px-4 py-2 text-sm font-semibold hover:scale-105 transition-all">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Dashboard */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
              Performance Dashboard
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {performanceMetrics.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-[var(--card)] rounded-xl shadow-sm p-6 border border-[var(--border)]">
                  <div 
                    className="flex items-center justify-between cursor-pointer mb-4"
                    onClick={() => toggleSection(`category-${categoryIndex}`)}
                  >
                    <h3 className="font-semibold text-lg text-[var(--foreground)]">{category.category}</h3>
                    {expandedSections[`category-${categoryIndex}`] ? (
                      <ChevronUp className="w-5 h-5 text-[var(--muted-foreground)]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[var(--muted-foreground)]" />
                    )}
                  </div>
                  
                  {expandedSections[`category-${categoryIndex}`] && (
                    <div className="space-y-4">
                      {category.metrics.map((metric, metricIndex) => {
                        const percentage = (metric.value / metric.target) * 100;
                        return (
                          <div key={metricIndex} className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-[var(--foreground)]">{metric.name}</span>
                              <span className="text-[var(--muted-foreground)]">
                                {metric.value.toLocaleString()} / {metric.target.toLocaleString()} {metric.unit}
                              </span>
                            </div>
                            <div className="w-full bg-[var(--muted)] rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${percentage > 100 ? 'bg-green-500' : percentage > 80 ? 'bg-blue-500' : 'bg-yellow-500'}`}
                                style={{ width: `${Math.min(percentage, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="py-16 px-6 bg-[var(--muted)]/30">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--chart-3)] mb-4" style={{ fontFamily: 'Geist, sans-serif' }}>
              Share Your Feedback
            </h2>
            <p className="text-[var(--muted-foreground)] mb-8">
              Help us improve transparency and governance by sharing your thoughts on budgets, procurement, or performance.
            </p>
            
            <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-md p-8 flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  name="name" 
                  value={form.name} 
                  onChange={handleFormChange} 
                  required={!form.anonymous}
                  placeholder="Full Name" 
                  className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-inter text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" 
                />
                <input 
                  name="email" 
                  value={form.email} 
                  onChange={handleFormChange} 
                  required={!form.anonymous}
                  placeholder="Email Address" 
                  className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-inter text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" 
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <select 
                  name="category" 
                  value={form.category} 
                  onChange={handleFormChange} 
                  required 
                  className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-inter text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none"
                >
                  <option value="">Feedback Category</option>
                  <option value="Budget Allocation">Budget Allocation</option>
                  <option value="Procurement Process">Procurement Process</option>
                  <option value="Performance Metrics">Performance Metrics</option>
                  <option value="Transparency Issues">Transparency Issues</option>
                  <option value="General Governance">General Governance</option>
                </select>
                <input 
                  name="subject" 
                  value={form.subject} 
                  onChange={handleFormChange} 
                  required 
                  placeholder="Subject" 
                  className="bg-[var(--input)] border border-[var(--border)] rounded-full px-6 py-3 font-inter text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none" 
                />
              </div>
              
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleFormChange} 
                required 
                placeholder="Your feedback or suggestions..." 
                className="bg-[var(--input)] border border-[var(--border)] rounded-2xl px-6 py-3 font-inter text-[var(--foreground)] focus:ring-2 focus:ring-[var(--ring)] outline-none min-h-[120px]" 
              />
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="anonymous"
                  checked={form.anonymous}
                  onChange={handleFormChange}
                  className="rounded border-[var(--border)]"
                />
                <label className="text-sm text-[var(--muted-foreground)]">Submit anonymously</label>
              </div>
              
              <button 
                type="submit" 
                className="bg-[var(--chart-3)] text-white rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150"
              >
                Submit Feedback
              </button>
            </form>
            {showModal && (
              <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
                  <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Geist, sans-serif' }}>
                    Feedback Submitted!
                  </h3>
                  <p className="mb-2 font-inter">Your tracking ID:</p>
                  <div className="font-mono text-lg mb-4 bg-[var(--muted)] p-3 rounded-lg">{refNumber}</div>
                  <p className="text-sm text-[var(--muted-foreground)] mb-4">
                    Thank you for helping improve our governance transparency.
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
      </main>
      <Footer />
    </div>
  );
};

export default GovernanceTransparency; 