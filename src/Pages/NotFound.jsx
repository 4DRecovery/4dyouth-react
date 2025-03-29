// pages/NotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="bg-black text-white min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-purple-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 max-w-md">
        Sorry, the page you're looking for doesn’t exist or may have been moved.
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-300 hover:to-purple-300 text-black font-semibold py-2 px-5 rounded-lg transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
