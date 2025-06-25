import React from 'react';
import { Helmet } from 'react-helmet';

const ResidentPortal = () => (
  <div className="section section-resident-portal min-h-screen flex flex-col items-center justify-center">
    <Helmet>
      <title>Resident Portal – Roxas City</title>
      <meta name="description" content="Access personalized services and resources for Roxas City residents." />
      <meta name="keywords" content="roxas city resident, resident portal, citizen services" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Resident Portal – Roxas City',
        'description': 'Access personalized services and resources for Roxas City residents.',
        'url': 'https://roxas-city.vercel.app/resident-portal',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roxas-city.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Resident Portal', item: 'https://roxas-city.vercel.app/resident-portal' }
          ]
        }
      })}</script>
    </Helmet>
    <h1 className="text-4xl font-bold mb-4">Resident Portal</h1>
    <p className="text-lg text-center max-w-xl mb-8">Access personalized services and resources for Roxas City residents.</p>
    <div className="bg-gray-100 rounded-lg p-8 shadow text-center">(This is a placeholder. Resident dashboard and tools coming soon.)</div>
  </div>
);

export default ResidentPortal; 