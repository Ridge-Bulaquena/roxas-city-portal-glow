import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Visitor = () => {
  const [userType, setUserType] = useState<'resident' | 'official' | 'visitor'>(
    () => (localStorage.getItem('userType') as 'resident' | 'official' | 'visitor') || 'visitor'
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="pt-8 pb-16">
        <div className="max-w-3xl mx-auto mt-24 text-center">
          <h1 className="text-3xl font-bold text-[#14274E] mb-4 font-figtree">Welcome, Visitor!</h1>
          <p className="text-lg text-gray-700 font-figtree">This is the Visitor page. Discover what Roxas City has to offer for guests, tourists, and newcomers.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Visitor; 