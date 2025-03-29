import React from 'react';
import { StaffInfo } from '../components/StaffInfo';
import { OrgChart } from '../components/OrgChart';

export default function Staff() {
  return (
    <section className="dark:bg-black dark:text-white bg-background-warm text-text-main border-t dark:border-gray-800 border-gray-200 transition-colors">
      {/* Staff Info + Org Chart */}
      <StaffInfo />
      <OrgChart />

      {/* Join Our Team Banner */}
      <div className="dark:bg-gray-900 dark:text-white bg-white text-text-main py-12 text-center border-t dark:border-gray-800 border-gray-200 transition-colors">
        <h3 className="text-2xl font-bold text-center mb-4">
          Want to help us change lives?
        </h3>
        <p className="text-sm max-w-xl mx-auto mb-6 dark:text-gray-400 text-gray-600">
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
