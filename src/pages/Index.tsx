import { Navigation } from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import SlidersSection from '@/components/SlidersSection';
import TransparencySection from '@/components/TransparencySection';
import VoiceYourConcernsSection from '@/components/VoiceYourConcernsSection';
import CommunityVoice from '@/components/CommunityVoice';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Index = () => {
  const [userType, setUserType] = useState<'resident' | 'official' | 'visitor'>(
    () => (localStorage.getItem('userType') as 'resident' | 'official' | 'visitor') || 'resident'
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation userType={userType} setUserType={setUserType} />
      <main>
        <HeroSection />
        <ServicesGrid />
        <TransparencySection />
        <VoiceYourConcernsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
