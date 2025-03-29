// components/FamilySupport.jsx

import React from 'react';

export function FamilySupport() {
  return (
    <section className="bg-gray-950 py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Support for Families</h2>
        <p className="text-gray-300 mb-6">
          Helping a child who struggles with substance use can be a very lonely journey, made worse by lack of understanding, fear, and the impact of stigma and shame.
        </p>
        <p className="text-gray-300 mb-4">
          <em>
            “We bring evidence-based ideas together with kindness so you can support your child in a way that is genuinely helpful and aligned with your values.”
          </em>
          <br />
          <span className="text-teal-400 font-semibold block mt-2">— Meggan McEvoy, LCSW</span>
        </p>
        <p className="text-gray-400 text-sm mt-6 mb-6">
          Learn more about our parent support group and the <strong>Invitation to Change</strong> framework offered at our Youth Recovery Center.
        </p>
        <a
          href="https://www.twinflowercounseling.com/4d-parent-group"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-300 hover:to-purple-300 text-black font-semibold py-3 px-6 rounded-lg transition shadow-lg"
        >
          Learn More About the Parent Group
        </a>
      </div>
    </section>
  );
}
