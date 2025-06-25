import React from 'react';
import { Helmet } from 'react-helmet';

const OfficialDashboard = () => (
  <div className="section section-official-dashboard min-h-screen flex flex-col items-center justify-center">
    <Helmet>
      <title>Official Dashboard – Roxas City</title>
      <meta name="description" content="Dashboard and resources for Roxas City officials." />
      <meta name="keywords" content="roxas city official, official dashboard, city government" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Official Dashboard – Roxas City',
        'description': 'Dashboard and resources for Roxas City officials.',
        'url': 'https://roxas-city.vercel.app/official-dashboard',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roxas-city.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Official Dashboard', item: 'https://roxas-city.vercel.app/official-dashboard' }
          ]
        }
      })}</script>
    </Helmet>
    <h1 className="text-4xl font-bold mb-4">Official Dashboard</h1>
    <p className="text-lg text-center max-w-xl mb-8">Dashboard and resources for Roxas City officials.</p>
    <div className="bg-gray-100 rounded-lg p-8 shadow text-center">(This is a placeholder. Official dashboard and tools coming soon.)</div>
  </div>
);

export default OfficialDashboard; 