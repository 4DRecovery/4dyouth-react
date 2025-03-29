// components/StaffInfo.jsx

import React from 'react';

export function StaffInfo() {
  return (
    <section className="bg-gray-900 py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Meet Your 4D Recovery Team
        </h2>

        <p className="text-gray-300 mb-6 text-center">
          Many youth and families entering treatment have questions — especially about who they'll meet and what everyone does. Here's an overview of the professionals who support your recovery.
        </p>

        <p className="text-gray-300 mb-4">
          At 4D Recovery, two equal departments collaborate closely: 
          <span className="text-teal-300 font-medium"> Clinical Services</span> and 
          <span className="text-purple-300 font-medium"> Recovery Support Services</span>. 
          Together, these teams ensure a wraparound approach to each youth’s journey.
        </p>

        <h3 className="text-xl text-teal-400 font-semibold mt-10 mb-2">
          Substance Use Disorder Counselors (CADC)
        </h3>
        <p className="text-gray-300 mb-4">
          CADCs provide assessments, group and individual sessions, treatment planning, and discharges. Levels include CADC-I (associate), CADC-II (bachelor), and CADC-III (master).
        </p>

        <h3 className="text-xl text-teal-400 font-semibold mt-8 mb-2">
          Mental Health Counselors (QMHP, LPC, LMHC, LMFT, LCSW)
        </h3>
        <p className="text-gray-300 mb-4">
          These professionals hold advanced degrees in counseling, social work, or family therapy. They support youth through specialized mental health treatment alongside substance use care.
        </p>
        <h3 className="text-xl text-teal-400 font-semibold mt-8 mb-2">
          Clinical Mentors
        </h3>
        <p className="text-gray-300 mb-4">
          Clinical Mentors support youth inside treatment. They help navigate barriers like housing and transportation, lead skills-based groups, and create warm handoffs to long-term mentors.
        </p>
        <h3 className="text-xl text-purple-400 font-semibold mt-8 mb-2">
          Certified Recovery Mentors (CRM, CRM-II)
        </h3>
        <p className="text-gray-300 mb-4">
          Recovery Mentors are trained professionals with lived experience who walk alongside youth through every stage of recovery — before, during, and after treatment. They help build identity, resilience, and community connection.
        </p>

        

        <h3 className="text-xl text-gray-300 font-semibold mt-8 mb-2">
          Wraparound Coordination
        </h3>
        <p className="text-gray-300">
          4D’s staff meet daily across departments to coordinate support for every youth. Your care isn't siloed — it's team-driven, coordinated, and always person-centered.
        </p>
      </div>
    </section>
  );
}
