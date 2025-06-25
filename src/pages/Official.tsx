import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';
import ThreadBackground from "@/components/ThreadBackground";
import { BarChart3, MessageSquare, FileText, Calendar, Users, BookOpen, ClipboardList, Gavel, UserCheck } from 'lucide-react';

const Official = () => {
  const [userType, setUserType] = useState<'resident' | 'official' | 'visitor'>(
    () => (localStorage.getItem('userType') as 'resident' | 'official' | 'visitor') || 'official'
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f6f9ff]">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="text-center bg-[#f9fafa] py-16 px-6">
          <div className="flex justify-center mb-6">
            <div className="bg-[#a0d0f3] rounded-full p-4 inline-flex items-center justify-center">
              <Gavel className="w-10 h-10 text-[#2a2b37]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#2c3e50]">Roxas City Leadership Portal</h1>
          <p className="mt-4 text-lg text-[#565961] max-w-2xl mx-auto">
            Data, tools, and strategies to help officials lead effectively and legislate wisely.
          </p>
        </section>

        {/* Governance Dashboard Overview */}
        <section className="py-16 px-6 bg-[#1f3b67] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-white">City Governance at a Glance</h2>
            <p className="mt-2 text-[#b4d4ee]">Get real-time access to metrics on public services, budgets, citizen feedback, and development indicators.</p>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <div className="bg-[#2f62c5] rounded-xl shadow p-8 flex flex-col items-center">
                <BarChart3 className="w-12 h-12 mb-4 text-[#a0d0f3]" />
                <h3 className="text-xl font-bold">Budget Utilization</h3>
                <p className="text-[#b4d4ee] mt-2">See LGU spending aligned with AIP, GAD, and CIP plans.</p>
              </div>
              <div className="bg-[#3b76d9] rounded-xl shadow p-8 flex flex-col items-center">
                <MessageSquare className="w-12 h-12 mb-4 text-[#a0d0f3]" />
                <h3 className="text-xl font-bold">Citizen Feedback</h3>
                <p className="text-[#b4d4ee] mt-2">Track most-requested services and issues reported.</p>
              </div>
              <div className="bg-[#2f4f9d] rounded-xl shadow p-8 flex flex-col items-center">
                <FileText className="w-12 h-12 mb-4 text-[#a0d0f3]" />
                <h3 className="text-xl font-bold">Barangay Reports</h3>
                <p className="text-[#b4d4ee] mt-2">Get granular barangay-level data for informed ordinance crafting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ordinance & Policy Tools */}
        <section className="py-16 px-6 bg-[#f9fafa]">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#2c3e50]">Smart Legislation Toolkit</h2>
            <p className="text-[#565961] mt-4">
              Use data-driven templates and issue trackers to create ordinances aligned with national mandates and local needs.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#ebf1f9] p-6 rounded-xl shadow flex flex-col items-center">
              <BookOpen className="w-10 h-10 mb-2 text-[#2f62c5]" />
              <h3 className="font-bold text-lg mb-2">Template Ordinances</h3>
              <p className="text-[#565961]">Browse model ordinances from DILG and customize for local relevance.</p>
            </div>
            <div className="bg-[#ebf1f9] p-6 rounded-xl shadow flex flex-col items-center">
              <ClipboardList className="w-10 h-10 mb-2 text-[#2f62c5]" />
              <h3 className="font-bold text-lg mb-2">Citizen Sentiment Reports</h3>
              <p className="text-[#565961]">See what issues are trending among constituents in real-time.</p>
            </div>
            <div className="bg-[#ebf1f9] p-6 rounded-xl shadow flex flex-col items-center">
              <Calendar className="w-10 h-10 mb-2 text-[#2f62c5]" />
              <h3 className="font-bold text-lg mb-2">Compliance Calendar</h3>
              <p className="text-[#565961]">Stay ahead of DILG deadlines and reporting periods (LGPMS, CDP, etc).</p>
            </div>
            <div className="bg-[#ebf1f9] p-6 rounded-xl shadow flex flex-col items-center">
              <UserCheck className="w-10 h-10 mb-2 text-[#2f62c5]" />
              <h3 className="font-bold text-lg mb-2">Ordinance Collaboration</h3>
              <p className="text-[#565961]">Each Councilor can draft, share, and refine ordinance proposals digitally.</p>
            </div>
          </div>
        </section>

        {/* Data for Policy Alignment */}
        <section className="py-16 px-6 bg-[#1f3b67]">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">Key Development Indicators</h2>
            <p className="text-[#b4d4ee] mt-2">Track sectoral data to prioritize issues by urgency and impact.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 mb-2 text-[#a0d0f3]" />
              <h3 className="text-xl font-semibold text-white">Social Welfare</h3>
              <p className="text-[#b4d4ee] mt-2">4Ps coverage, solo parents, marginalized communities.</p>
            </div>
            <div className="flex flex-col items-center">
              <BarChart3 className="w-10 h-10 mb-2 text-[#a0d0f3]" />
              <h3 className="text-xl font-semibold text-white">Infrastructure & Utilities</h3>
              <p className="text-[#b4d4ee] mt-2">Water access, road maintenance, disaster resilience.</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-10 h-10 mb-2 text-[#a0d0f3]" />
              <h3 className="text-xl font-semibold text-white">Education & Youth</h3>
              <p className="text-[#b4d4ee] mt-2">School drop-out rates, literacy, tech training.</p>
            </div>
          </div>
        </section>

        {/* Mayor's and Councilors' Tools */}
        <section className="py-16 px-6 bg-[#f9fafa]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-semibold text-[#2c3e50] text-center">Leadership & Oversight</h2>
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <Gavel className="w-10 h-10 mb-2 text-[#2f62c5]" />
                <h3 className="text-lg font-bold">Mayor's Control Panel</h3>
                <ul className="list-disc pl-6 mt-2 text-[#565961] space-y-2">
                  <li>Municipal Development Tracker (AIP, CDP, GAD)</li>
                  <li>Citizen Service Quality Analytics</li>
                  <li>Department KPI Dashboards</li>
                </ul>
              </div>
              <div className="flex flex-col items-center">
                <ClipboardList className="w-10 h-10 mb-2 text-[#2f62c5]" />
                <h3 className="text-lg font-bold">Councilors' Toolkit</h3>
                <ul className="list-disc pl-6 mt-2 text-[#565961] space-y-2">
                  <li>Ordinance Builder & Submission History</li>
                  <li>Public Hearings Scheduler</li>
                  <li>Barangay Issue Heatmap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Links for Officials */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
          <a href="https://lga.gov.ph" target="_blank" className="hover:text-[#1472f4]">LGA Portal</a>
          <a href="/uploads/dilg-checklist.pdf" className="hover:text-[#1472f4]">DILG Compliance Guide</a>
          <a href="/official/report" className="hover:text-[#1472f4]">Submit Monthly Report</a>
          <a href="/official/training" className="hover:text-[#1472f4]">Training Schedule</a>
          <a href="/visitor" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200">
            Visitor Portal
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Official; 