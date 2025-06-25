import React from 'react';
import { Helmet } from 'react-helmet';

const PublicServices = () => (
  <div className="section section-public-services min-h-screen flex flex-col items-center justify-center">
    <Helmet>
      <title>Public Services – Roxas City</title>
      <meta name="description" content="Browse health, education, social welfare, environment, and more services available for all residents." />
      <meta name="keywords" content="health services, education, social welfare, environment, infrastructure" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Public Services – Roxas City',
        'description': 'Browse health, education, social welfare, environment, and more services available for all residents.',
        'url': 'https://roxas-city.vercel.app/public-services',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roxas-city.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Public Services', item: 'https://roxas-city.vercel.app/public-services' }
          ]
        }
      })}</script>
    </Helmet>
    <h1 className="text-4xl font-bold mb-4">Public Services</h1>
    <p className="text-lg text-center max-w-xl mb-8">Browse health, education, social welfare, environment, and more services available for all residents.</p>
    <div className="bg-gray-100 rounded-lg p-8 shadow text-center">(This is a placeholder. Service directories and tools coming soon.)</div>
  </div>
);

export default PublicServices; 