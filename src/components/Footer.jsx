// components/Footer.jsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-center text-sm text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <p>© {new Date().getFullYear()} 4D Recovery, Youth Services. All rights reserved.</p>
        <p className="mt-2">
         <a href="mailto:support@4drecovery.org" className="text-teal-300 hover:text-purple-300">support@4drecovery.org</a> · (971) 703-4623
        </p>
        <div className="mt-4 space-x-4 text-xs">
          <a
            href="https://www.4drecovery.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-300"
          >
            Main Site
          </a>
          <a
            href="https://sites.google.com/4drecovery.org/youth/meeting-board"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-300"
          >
            Youth Portal
          </a>
        </div>
      </div>
    </footer>
  );
}
