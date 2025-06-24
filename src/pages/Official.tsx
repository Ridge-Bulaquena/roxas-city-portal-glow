import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Official = () => {
  const [userType, setUserType] = useState<'resident' | 'official' | 'visitor'>(
    () => (localStorage.getItem('userType') as 'resident' | 'official' | 'visitor') || 'official'
  );

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="pt-8 pb-16">
        <div className="max-w-3xl mx-auto mt-24 text-center">
          <h1 className="text-3xl font-bold text-[#14274E] mb-4 font-figtree">Welcome, Official!</h1>
          <p className="text-lg text-gray-700 font-figtree">This is the Official page. Access tools, resources, and updates for Roxas City government officials.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Official; 