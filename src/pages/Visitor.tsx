import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Visitor = () => {
  return (
    <>
      <Navigation userType="visitor" setUserType={() => {}} />
      <main>
        {/* Hero Section */}
        <section className="text-center bg-white py-16 px-6">
          <h1 className="text-4xl font-bold text-[#2c3e50]">Welcome to Roxas City</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore, invest, and experience culture — all in one platform built for visitors like you.
          </p>
        </section>

        {/* Visitor Paths Section */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
            {/* Tourist */}
            <div className="bg-white rounded-xl shadow-md p-6 card-float">
              <span className="text-3xl">🌴</span>
              <h3 className="text-xl font-semibold mt-4">Tourist</h3>
              <p className="text-gray-600 mt-2">Interactive maps, virtual tours, festivals, and nature.</p>
              <button className="mt-4 bg-[#1472f4] text-white py-2 px-4 rounded-lg btn">Explore</button>
            </div>
            {/* Cultural Explorer */}
            <div className="bg-white rounded-xl shadow-md p-6 card-float">
              <span className="text-3xl">🎭</span>
              <h3 className="text-xl font-semibold mt-4">Cultural Explorer</h3>
              <p className="text-gray-600 mt-2">Virtual museums, art galleries, and historical trails.</p>
              <button className="mt-4 bg-[#1472f4] text-white py-2 px-4 rounded-lg btn">Explore</button>
            </div>
            {/* Investor */}
            <div className="bg-white rounded-xl shadow-md p-6 card-float">
              <span className="text-3xl">📈</span>
              <h3 className="text-xl font-semibold mt-4">Investor</h3>
              <p className="text-gray-600 mt-2">Track economic growth, tourism revenue, and market entry.</p>
              <button className="mt-4 bg-[#1472f4] text-white py-2 px-4 rounded-lg btn">Explore</button>
            </div>
          </div>
        </section>

        {/* Why Roxas Section */}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold text-[#2c3e50]">Why Roxas?</h2>
          <p className="mt-2 text-gray-600">Beaches, seafood, culture, and community — a true gem of Western Visayas.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="text-4xl">🌊</div>
              <h3 className="text-xl font-bold mt-4">Unspoiled Beaches</h3>
              <p className="text-gray-600 mt-2">White sands, clear water, and peaceful coastlines.</p>
            </div>
            <div>
              <div className="text-4xl">🍤</div>
              <h3 className="text-xl font-bold mt-4">Seafood Capital</h3>
              <p className="text-gray-600 mt-2">Fresh talaba, crabs, and shrimp, caught daily.</p>
            </div>
            <div>
              <div className="text-4xl">🎉</div>
              <h3 className="text-xl font-bold mt-4">Festival Culture</h3>
              <p className="text-gray-600 mt-2">Experience the vibrant 'Sinadya sa Halaran'.</p>
            </div>
          </div>
        </section>

        {/* Plan Your Visit */}
        <section className="py-16 px-6 bg-gray-50 text-center">
          <h2 className="text-3xl font-semibold text-[#2c3e50]">Plan Your Visit</h2>
          <p className="mt-2 text-gray-600">From cultural calendars to booking tools — we make it easy.</p>
          <button className="mt-6 bg-[#1472f4] text-white py-2 px-6 rounded-lg btn">Start Planning</button>
        </section>

        {/* Connect with Locals */}
        <section className="py-16 px-6 bg-white text-center">
          <h2 className="text-3xl font-semibold text-[#2c3e50]">Connect with Locals</h2>
          <p className="mt-2 text-gray-600">Find guides, events, and people ready to help you experience Roxas the local way.</p>
          <button className="mt-6 bg-[#1472f4] text-white py-2 px-6 rounded-lg btn">Explore the Map</button>
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