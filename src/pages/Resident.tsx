import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

const Resident = () => {
  const [userType, setUserType] = useState<'resident' | 'official' | 'visitor'>(
    () => (localStorage.getItem('userType') as 'resident' | 'official' | 'visitor') || 'resident'
  );

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="pt-8 pb-16">
        <div className="max-w-3xl mx-auto mt-24 text-center">
          <h1 className="text-3xl font-bold text-[#14274E] mb-4 font-figtree">Welcome, Resident!</h1>
          <p className="text-lg text-gray-700 font-figtree">This is the Resident page. Here you can access resident-specific services, news, and updates for Roxas City.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resident; 