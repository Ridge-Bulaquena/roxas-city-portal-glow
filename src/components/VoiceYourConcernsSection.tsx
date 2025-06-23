import { useInView } from '@/hooks/use-in-view';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Megaphone, MapPin } from 'lucide-react';

const cards = [
  {
    icon: Megaphone,
    title: 'File a Complaint',
    desc: 'Report issues that matter to your community',
    button: 'Start Filing',
  },
  {
    icon: MapPin,
    title: 'Track Progress',
    desc: 'Monitor the status of your submitted complaints',
    button: 'Track Complaints',
  },
];

export default function VoiceYourConcernsSection() {
  const [sectionRef, sectionVisible] = useInView({ threshold: 0.15 });
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (sectionVisible) setEntered(true);
  }, [sectionVisible]);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[#121212]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 group">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide uppercase text-gray-100">VOICE YOUR CONCERNS</h2>
          <div className="section-underline-wrapper">
            <div className="section-underline" style={{ background: 'linear-gradient(90deg,#aee7ff,#1a2238)' }}></div>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Report issues, track progress, and see real solutions. Your complaints drive positive change in our community.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`voice-card bg-[#181c23] border border-gray-700 rounded-2xl flex-1 min-w-[260px] max-w-md p-8 flex flex-col items-center shadow-md relative overflow-hidden transition-all duration-300 will-change-transform ${entered ? 'entry-animate' : ''}`}
                style={{
                  animationDelay: entered ? `${0.15 * i + 0.2}s` : '0s',
                  boxShadow: '0 2px 16px 0 rgba(30,41,59,0.10)',
                }}
                tabIndex={0}
              >
                <div className="voice-icon mb-4" aria-hidden>
                  <Icon className="w-12 h-12 text-[#aee7ff]" />
                </div>
                <h3 className="voice-title text-xl font-semibold text-gray-100 mb-2 tracking-wide">{card.title}</h3>
                <p className="voice-desc text-gray-300 mb-6 text-center text-base">{card.desc}</p>
                <Button
                  className="voice-btn px-6 py-2 rounded-full font-semibold text-base bg-[#232b3a] text-[#aee7ff] border border-[#2e3a4d] hover:bg-[#1a2238] hover:text-white hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#aee7ff] transition-all duration-300 shadow-none"
                  style={{ minWidth: 140, whiteSpace: 'nowrap' }}
                >
                  {card.button}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .voice-card {
          transition: box-shadow 0.3s ease, transform 0.3s cubic-bezier(0.4,0,0.2,1), border-color 0.3s;
        }
        .voice-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg,rgba(174,231,255,0.08) 0%,rgba(26,34,56,0.10) 100%);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s cubic-bezier(0.4,0,0.2,1);
          z-index: 2;
        }
        .voice-card:hover,
        .voice-card:focus-within {
          transform: scale(1.02);
          border-color: #aee7ff;
          box-shadow: 0 8px 32px 0 rgba(174,231,255,0.10), 0 1.5px 6px 0 rgba(80,120,200,0.08);
        }
        .voice-card:hover::before,
        .voice-card:focus-within::before {
          opacity: 1;
        }
        .voice-icon, .voice-title, .voice-desc, .voice-btn {
          opacity: 1;
          transform: none;
          transition: opacity 0.3s, transform 0.3s, box-shadow 0.3s;
          will-change: opacity, transform;
        }
        .voice-card:hover .voice-icon {
          opacity: 1;
          transform: translateY(-10px);
          transition-delay: 0.05s;
        }
        .voice-card:hover .voice-title {
          opacity: 1;
          transform: scale(1.04);
          transition-delay: 0.12s;
        }
        .voice-card:hover .voice-desc {
          opacity: 1;
          transform: translateY(-4px);
          transition-delay: 0.18s;
        }
        .voice-card:hover .voice-btn {
          opacity: 1;
          transform: scale(1.05);
          box-shadow: 0 0 0 2px #aee7ff44;
          transition-delay: 0.25s;
        }
        @media (prefers-reduced-motion: no-preference) {
          .voice-card.entry-animate {
            opacity: 0;
            transform: translateY(32px) scale(0.98);
            animation: voiceCardEntry 0.7s cubic-bezier(0.4,0,0.2,1) forwards;
          }
        }
        @keyframes voiceCardEntry {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .voice-card,
          .voice-card * {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
} 