// pages/Staff.jsx

import React from 'react';
import { StaffInfo } from '../components/StaffInfo';
import { OrgChart } from '../components/OrgChart';

export default function Staff() {
  return (
    <section className="bg-black text-white border-t border-gray-800">
      <StaffInfo />
      <OrgChart />

      {/* Join Our Team Banner */}
      <div className="bg-gray-900 py-12 text-center border-t border-gray-800">
        <h3 className="text-2xl font-bold text-white mb-4">
          Want to help us change lives?
        </h3>
        <p className="text-gray-400 mb-6 text-sm max-w-xl mx-auto">
          We’re always looking for passionate people to join our mission. Explore open roles at 4D Recovery.
        </p>
        <a
          href="https://4drecovery.org/jobs/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-300 hover:to-purple-300 text-black font-semibold py-3 px-6 rounded-lg transition"
        >
          Join Our Team
        </a>
      </div>
    </section>
  );
}
