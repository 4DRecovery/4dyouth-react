import React from 'react';

export function StaffInfo() {
  return (
    <section className="dark:bg-black dark:text-white bg-background-warm text-text-main py-20 px-6 border-t dark:border-gray-800 border-gray-200 transition-colors">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white text-gray-800">
          Meet Your 4D Recovery Team
        </h2>

        <p className="dark:text-gray-300 text-gray-700 mb-6 text-center">
          Many youth and families entering treatment have questions — especially about who they'll meet and what everyone does. Here's an overview of the professionals who support your recovery.
        </p>

        <p className="dark:text-gray-300 text-gray-700 mb-4">
          At 4D Recovery, two equal departments collaborate closely:
          {' '}
          <span className="dark:text-teal-300 text-teal-600 font-medium">Clinical Services</span>
          {' '}and{' '}
          <span className="dark:text-purple-300 text-purple-600 font-medium">Recovery Support Services</span>.
          {' '}
          Together, these teams ensure a wraparound approach to each youth’s journey.
        </p>

        {/* Substance Use Disorder Counselors (CADC) */}
        <h3 className="text-xl font-semibold mt-10 mb-2 dark:text-teal-300 text-teal-600">
          Substance Use Disorder Counselors (CADC)
        </h3>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          CADCs provide assessments, group and individual sessions, treatment planning, and discharges.
          Levels include CADC-I (associate), CADC-II (bachelor), and CADC-III (master).
        </p>

        {/* Mental Health Counselors */}
        <h3 className="text-xl font-semibold mt-8 mb-2 dark:text-teal-300 text-teal-600">
          Mental Health Counselors (QMHP, LPC, LMHC, LMFT, LCSW)
        </h3>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          These professionals hold advanced degrees in counseling, social work, or family therapy. They support youth 
          through specialized mental health treatment alongside substance use care.
        </p>

        {/* Clinical Mentors */}
        <h3 className="text-xl font-semibold mt-8 mb-2 dark:text-teal-300 text-teal-600">
          Clinical Mentors
        </h3>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          Clinical Mentors support youth inside treatment. They help navigate barriers like housing 
          and transportation, lead skills-based groups, and create warm handoffs to long-term mentors.
        </p>

        {/* Certified Recovery Mentors */}
        <h3 className="text-xl font-semibold mt-8 mb-2 dark:text-purple-300 text-purple-600">
          Certified Recovery Mentors (CRM, CRM-II)
        </h3>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          Recovery Mentors are trained professionals with lived experience who walk alongside youth through 
          every stage of recovery — before, during, and after treatment. They help build identity, resilience, 
          and community connection.
        </p>

        {/* Wraparound Coordination */}
        <h3 className="text-xl font-semibold mt-8 mb-2 dark:text-gray-100 text-gray-800">
          Wraparound Coordination
        </h3>
        <p className="dark:text-gray-300 text-gray-700">
          4D’s staff meet daily across departments to coordinate support for every youth. Your care isn't siloed 
          — it's team-driven, coordinated, and always person-centered.
        </p>
      </div>
    </section>
  );
}
