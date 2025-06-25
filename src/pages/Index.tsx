import { Navigation } from '@/components/Navigation';
import ThreadBackground from '@/components/ThreadBackground';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import SlidersSection from '@/components/SlidersSection';
import TransparencySection from '@/components/TransparencySection';
import VoiceYourConcernsSection from '@/components/VoiceYourConcernsSection';
import CommunityVoice from '@/components/CommunityVoice';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const Index = () => {
  const [userType, setUserType] = useState<'resident' | 'official' | 'visitor'>(
    () => (localStorage.getItem('userType') as 'resident' | 'official' | 'visitor') || 'resident'
  );

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Helmet>
        <title>Roxas City Citizen Portal – Home</title>
        <meta name="description" content="Access services, news, transparency tools, and civic participation for Roxas City." />
        <meta name="keywords" content="Roxas City, citizen portal, home, local government, services" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Roxas City Citizen Portal',
          'url': 'https://roxas-city.vercel.app/',
          'description': 'Access services, news, transparency tools, and civic participation for Roxas City.',
          'publisher': {
            '@type': 'Organization',
            'name': 'Roxas City Government',
            'url': 'https://roxas-city.vercel.app/'
          },
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roxas-city.vercel.app/' }
            ]
          }
        })}</script>
      </Helmet>
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
