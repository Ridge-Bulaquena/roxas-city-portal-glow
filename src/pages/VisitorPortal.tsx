import React from 'react';
import { Helmet } from 'react-helmet';

const VisitorPortal = () => (
  <div className="section section-visitor-portal min-h-screen flex flex-col items-center justify-center">
    <Helmet>
      <title>Visitor Portal – Roxas City</title>
      <meta name="description" content="Information and resources for visitors to Roxas City." />
      <meta name="keywords" content="roxas city visitor, visitor portal, tourism, travel" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Visitor Portal – Roxas City',
        'description': 'Information and resources for visitors to Roxas City.',
        'url': 'https://roxas-city.vercel.app/visitor-portal',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roxas-city.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Visitor Portal', item: 'https://roxas-city.vercel.app/visitor-portal' }
          ]
        }
      })}</script>
    </Helmet>
    <h1 className="text-4xl font-bold mb-4">Visitor Portal</h1>
    <p className="text-lg text-center max-w-xl mb-8">Information and resources for visitors to Roxas City.</p>
    <div className="bg-gray-100 rounded-lg p-8 shadow text-center">(This is a placeholder. Visitor info and tools coming soon.)</div>
  </div>
);

export default VisitorPortal; 