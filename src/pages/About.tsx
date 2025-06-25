import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => (
  <div className="section section-about min-h-screen flex flex-col items-center justify-center">
    <Helmet>
      <title>About Roxas City</title>
      <meta name="description" content="Learn about Roxas City: history, city officials, districts, and contact information." />
      <meta name="keywords" content="roxas city history, city officials, barangay" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'About Roxas City',
        'description': 'Learn about Roxas City: history, city officials, districts, and contact information.',
        'url': 'https://roxas-city.vercel.app/about',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roxas-city.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'About', item: 'https://roxas-city.vercel.app/about' }
          ]
        }
      })}</script>
    </Helmet>
    <h1 className="text-4xl font-bold mb-4">About Roxas City</h1>
    <p className="text-lg text-center max-w-xl mb-8">Learn about Roxas City: history, city officials, districts, and contact information.</p>
    <div className="bg-gray-100 rounded-lg p-8 shadow text-center">(This is a placeholder. City history, officials, and contact info coming soon.)</div>
  </div>
);

export default About; 