import React from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Landmark, Users, Calendar, Star } from 'lucide-react';

const Visitor = () => {
  return (
    <>
      <Navigation userType="visitor" setUserType={() => {}} />
      <main>
        {/* Hero Section */}
        <section className="text-center bg-[#f9fafa] py-16 px-6">
          <div className="flex justify-center mb-6">
            <div className="bg-[#a0d0f3] rounded-full p-4 inline-flex items-center justify-center">
              <MapPin className="w-10 h-10 text-[#2a2b37]" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#2c3e50]">Welcome to Roxas City</h1>
          <p className="mt-4 text-lg text-[#565961] max-w-2xl mx-auto">
            Explore, invest, and experience culture — all in one platform built for visitors like you.
          </p>
        </section>

        {/* Visitor Paths Section */}
        <section className="py-16 px-6 bg-[#1f3b67] text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            {/* Tourist */}
            <div className="bg-[#2f62c5] rounded-xl shadow-md p-8 flex flex-col items-center">
              <Landmark className="w-12 h-12 mb-4 text-[#a0d0f3]" />
              <h3 className="text-xl font-semibold mt-2">Tourist</h3>
              <p className="text-[#b4d4ee] mt-2">Interactive maps, virtual tours, festivals, and nature.</p>
              <button className="mt-6 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold shadow hover:bg-[#4f90e1] transition">Explore</button>
            </div>
            {/* Cultural Explorer */}
            <div className="bg-[#3b76d9] rounded-xl shadow-md p-8 flex flex-col items-center">
              <Star className="w-12 h-12 mb-4 text-[#a0d0f3]" />
              <h3 className="text-xl font-semibold mt-2">Cultural Explorer</h3>
              <p className="text-[#b4d4ee] mt-2">Virtual museums, art galleries, and historical trails.</p>
              <button className="mt-6 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold shadow hover:bg-[#4f90e1] transition">Explore</button>
            </div>
            {/* Investor */}
            <div className="bg-[#2f4f9d] rounded-xl shadow-md p-8 flex flex-col items-center">
              <Users className="w-12 h-12 mb-4 text-[#a0d0f3]" />
              <h3 className="text-xl font-semibold mt-2">Investor</h3>
              <p className="text-[#b4d4ee] mt-2">Track economic growth, tourism revenue, and market entry.</p>
              <button className="mt-6 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold shadow hover:bg-[#4f90e1] transition">Explore</button>
            </div>
          </div>
        </section>

        {/* Why Roxas Section */}
        <section className="py-16 px-6 bg-[#f9fafa] text-center">
          <h2 className="text-3xl font-semibold text-[#2c3e50]">Why Roxas?</h2>
          <p className="mt-2 text-[#565961]">Beaches, seafood, culture, and community — a true gem of Western Visayas.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <MapPin className="w-10 h-10 mb-2 text-[#2f62c5]" />
              <h3 className="text-xl font-bold mt-2">Unspoiled Beaches</h3>
              <p className="text-[#565961] mt-2">White sands, clear water, and peaceful coastlines.</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 mb-2 text-[#2f62c5]" />
              <h3 className="text-xl font-bold mt-2">Seafood Capital</h3>
              <p className="text-[#565961] mt-2">Fresh talaba, crabs, and shrimp, caught daily.</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="w-10 h-10 mb-2 text-[#2f62c5]" />
              <h3 className="text-xl font-bold mt-2">Festival Culture</h3>
              <p className="text-[#565961] mt-2">Experience the vibrant 'Sinadya sa Halaran'.</p>
            </div>
          </div>
        </section>

        {/* Plan Your Visit */}
        <section className="py-16 px-6 bg-[#1f3b67] text-center">
          <h2 className="text-3xl font-semibold text-white">Plan Your Visit</h2>
          <p className="mt-2 text-[#b4d4ee]">From cultural calendars to booking tools — we make it easy.</p>
          <button className="mt-6 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold shadow hover:bg-[#4f90e1] transition">Start Planning</button>
        </section>

        {/* Connect with Locals */}
        <section className="py-16 px-6 bg-[#f9fafa] text-center">
          <h2 className="text-3xl font-semibold text-[#2c3e50]">Connect with Locals</h2>
          <p className="mt-2 text-[#565961]">Find guides, events, and people ready to help you experience Roxas the local way.</p>
          <button className="mt-6 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold shadow hover:bg-[#4f90e1] transition">Explore the Map</button>
        </section>
      </main>
      <Footer />
      {/* Footer Quick Links */}
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
        <a href="/visitor#help" className="hover:text-[#1472f4]">Tourist Info Desk</a>
        <a href="/downloads/attractions-map.pdf" className="hover:text-[#1472f4]">Attractions Map</a>
        <a href="/emergency" className="hover:text-[#1472f4]">Emergency Hotline</a>
        <a href="/culture/etiquette" className="hover:text-[#1472f4]">Cultural Etiquette</a>
      </div>
    </>
  );
};

export default Visitor; 