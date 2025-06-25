import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: Add authentication logic here
    if (!form.email || !form.password) {
      setError('Please enter both email and password.');
    } else {
      setError('');
      alert('Login submitted! (Demo only)');
    }
  };

  return (
    <div className="section section-login min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Helmet>
        <title>Sign In – Roxas City Portal</title>
        <meta name="description" content="Sign in to your Roxas City Portal account." />
        <meta name="keywords" content="roxas city login, sign in, portal access" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          'name': 'Sign In – Roxas City Portal',
          'description': 'Sign in to your Roxas City Portal account.',
          'url': 'https://roxas-city.vercel.app/login',
          'breadcrumb': {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://roxas-city.vercel.app/' },
              { '@type': 'ListItem', position: 2, name: 'Sign In', item: 'https://roxas-city.vercel.app/login' }
            ]
          }
        })}</script>
      </Helmet>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Sign In</button>
        <div className="mt-6 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login; 