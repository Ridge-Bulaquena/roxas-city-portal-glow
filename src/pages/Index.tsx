
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import TransparencySection from '@/components/TransparencySection';
import CommunityVoice from '@/components/CommunityVoice';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesGrid />
        <TransparencySection />
        <CommunityVoice />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
