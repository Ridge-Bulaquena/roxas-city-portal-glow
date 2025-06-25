import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => (
  <div className="section section-contact min-h-screen flex flex-col items-center justify-center">
    <Helmet>
      <title>Contact Roxas City Government</title>
      <meta name="description" content="Contact Roxas City government offices, directory, phone, and email." />
      <meta name="keywords" content="roxas city contact, directory, phone, email" />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Contact Roxas City Government',
        'description': 'Contact Roxas City government offices, directory, phone, and email.',
        'url': 'https://roxas-city.vercel.app/contact',
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roxas-city.vercel.app/' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://roxas-city.vercel.app/contact' }
          ]
        }
      })}</script>
    </Helmet>
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="text-lg text-center max-w-xl mb-8">Contact Roxas City government offices, directory, phone, and email.</p>
    <div className="bg-gray-100 rounded-lg p-8 shadow text-center">(This is a placeholder. Directory and contact forms coming soon.)</div>
  </div>
);

export default Contact; 