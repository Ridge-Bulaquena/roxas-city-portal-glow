import React from 'react';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Play, BookOpen, Users, Calendar, Star, MessageSquare, GalleryHorizontal, Ticket, Bot, Compass, Globe, CheckCircle2 } from 'lucide-react';
import { AnimateOnView } from '@/components/AnimateOnView';
import SeaweedThreadBackground from '@/components/SeaweedThreadBackground';

const miniApps = [
  { icon: <Compass className="w-8 h-8 text-[var(--chart-3)] icon" />, title: '360° Virtual Plaza Tour', desc: 'Walk through Roxas City\'s plazas and landmarks in immersive 3D.' },
  { icon: <Play className="w-8 h-8 text-[var(--chart-3)] icon" />, title: 'Festival Replay Theater', desc: 'Watch past parades and festivals on demand.' },
  { icon: <BookOpen className="w-8 h-8 text-[var(--chart-3)] icon" />, title: 'Cultural Trivia Game', desc: 'Test your knowledge of Roxas heritage and win badges.' },
  { icon: <Star className="w-8 h-8 text-[var(--chart-3)] icon" />, title: 'Cuisine Explorer', desc: 'Discover local dishes, recipes, and food tours.' },
  { icon: <Calendar className="w-8 h-8 text-[var(--chart-3)] icon" />, title: 'Event RSVP Engine', desc: 'Reserve your spot at upcoming events and get reminders.' },
  { icon: <Ticket className="w-8 h-8 text-[var(--chart-3)] icon" />, title: 'Tourist Permit Assistant', desc: 'Apply for permits and get travel tips instantly.' },
  { icon: <MapPin className="w-8 h-8 text-[var(--chart-3)] icon" />, title: 'Heritage Map & Quiz', desc: 'Explore heritage sites and take interactive quizzes.' },
  { icon: <Bot className="w-8 h-8 text-[var(--chart-3)] icon" />, title: 'Live Chat Concierge', desc: 'Get real-time help and recommendations from our AI concierge.' },
  { icon: <GalleryHorizontal className="w-8 h-8 text-[var(--chart-3)] icon" />, title: 'Art Gallery Carousel', desc: 'Browse digital exhibits of Roxas artists and galleries.' },
  { icon: <Globe className="w-8 h-8 text-[var(--chart-3)] icon" />, title: 'Digital Passport', desc: 'Collect digital stamps as you visit attractions and events.' },
];

const subSiloLinks = [
  { label: 'Cultural Heritage', href: '/tourism-culture/showcase/cultural-heritage/' },
  { label: 'Attractions', href: '/tourism-culture/showcase/attractions/' },
  { label: 'Economic Impact', href: '/tourism-culture/showcase/economic-impact/' },
  { label: 'Community', href: '/tourism-culture/showcase/community/' },
];

const TourismCulture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--chart-1)] to-[var(--chart-3)]">
      <Navigation userType="resident" setUserType={() => {}} />
      <main className="pt-8 pb-16">
        {/* Hero Section */}
        <AnimateOnView type="card" delay={0}>
          <section className="relative text-center py-16 px-6">
            <SeaweedThreadBackground />
            <AnimateOnView type="icon" delay={0.1}>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-[var(--chart-3)] icon" />
            </AnimateOnView>
            <AnimateOnView type="title" delay={0.2}>
              <h1 className="text-5xl font-bold text-white mb-4 section-title underline-animate" style={{ fontFamily: 'Geist, sans-serif' }}>
                Tourism & Culture
              </h1>
            </AnimateOnView>
            <AnimateOnView type="subtitle" delay={0.3}>
              <p className="text-lg text-white/90 max-w-2xl mx-auto font-figtree mb-6">
                Discover festivals, food, heritage, and sights of Roxas.
              </p>
            </AnimateOnView>
            <AnimateOnView type="button" delay={0.4}>
              <button className="bg-white text-[var(--chart-3)] rounded-full px-8 py-3 font-semibold shadow-md hover:scale-105 hover:brightness-110 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150">
                Explore Roxas Culture
              </button>
            </AnimateOnView>
            <AnimateOnView type="subtitle" delay={0.5}>
              <p className="text-base text-white/80 max-w-2xl mx-auto mt-8">
                Explore Roxas like never before. Walk through our heritage zones virtually, watch parades live, and plan your visit with immersive guides, cultural games, and real-time visitor tools.
              </p>
            </AnimateOnView>
          </section>
        </AnimateOnView>

        {/* Sub-Silo Navigation */}
        <AnimateOnView type="card" delay={0.6}>
          <nav className="flex flex-wrap justify-center gap-4 mb-12">
            {subSiloLinks.map((link, i) => (
              <AnimateOnView type="button" delay={0.1 * i} key={link.href}>
                <a href={link.href} className="bg-white text-[var(--chart-3)] rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150 border border-transparent hover:border-[rgba(173,201,226,0.8)]">
                  {link.label}
                </a>
              </AnimateOnView>
            ))}
          </nav>
        </AnimateOnView>

        {/* Mini-Apps Grid */}
        <section className="py-8 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miniApps.map((app, i) => (
              <AnimateOnView type="card" delay={0.15 * i} key={app.title}>
                <div className="bg-[var(--card)] rounded-[var(--radius)] p-6 border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.04)] card group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[rgba(173,201,226,0.8)]">
                  <div className="mb-4 flex justify-center">
                    {app.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-[var(--chart-3)] section-title underline-animate mb-2 text-center">
                    {app.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-center mb-2">
                    {app.desc}
                  </p>
                  <button className="mt-4 bg-white text-[var(--chart-3)] rounded-full px-6 py-2 font-semibold shadow hover:scale-105 focus:ring-2 focus:ring-[var(--ring)] transition-all duration-150 border border-transparent hover:border-[rgba(173,201,226,0.8)]">
                    Open
                  </button>
                </div>
              </AnimateOnView>
            ))}
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

export default TourismCulture; 