// components/OrgChart.jsx

import React from 'react';

export function OrgChart() {
  const clinical = [
    {
      name: 'Nick Crapser',
      title: 'Clinical Director',
      creds: 'Ph.D., LPC, LMHC, CADC-III, SUDP, CGAC-R, CRM-II, NCC, MAC, ACS, CSC'
    },
    {
      name: 'Mike Martini',
      title: 'Clinical Supervisor',
      creds: 'CADC-II, QMHA-II',
      contact: 'mike.martini@4drecovery.org'
    },
    {
      name: 'Emma Sornson',
      title: 'Adolescent Drug and Alcohol Counselor',
      creds: 'BA, CADC-I'
    },
    {
      name: 'Brittany Lyons',
      title: 'Lead Office Coordinator',
      creds: 'CADC-R, QMHA-R, CGAC-R, THW-PWS, CRM-II'
    },
    {
      name: 'Drew Anderson',
      title: 'Adolescent Drug and Alcohol Counselor',
      creds: 'CADC-I, QMHA-I'
    },
    {
      name: 'Jarren Anderson',
      title: 'Youth IOP Office Coordinator',
      creds: 'CADC-R, CRM'
    },
    {
      name: 'Hannah Grasser',
      title: 'Billing, Compliance, and Credentialing Specialist'
    }
  ];

  const recovery = [
    {
      name: 'Robert Sanders',
      title: 'Director of Youth Services',
      creds: 'CRM-II, CADC-I, QMHA-R'
    },
    {
      name: 'Harlo Haynes',
      title: 'Youth Community Center Director',
      creds: 'CRM-II, CADC-R',
      contact: 'harlo.haynes@4drecovery.org'
    },
    {
      name: 'Courday Rose',
      title: 'Youth Lead Mentor',
      creds: 'CRM'
    },
    {
      name: 'Alyxann Attaran',
      title: 'Youth Mentor',
      creds: 'CRM'
    },
    {
      name: 'Jessie Clements',
      title: 'Youth Mentor',
      creds: 'CRM'
    },
    {
      name: 'Jade Medgin',
      title: 'Youth Mentor',
      creds: 'CRM'
    }
  ];

  const renderPerson = (person, i) => (
    <div
      key={i}
      className="bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-800 transition"
    >
      <p className="text-lg font-semibold text-white">{person.name}</p>
      <p className="text-teal-300 text-sm">{person.title}</p>
      {person.creds && (
        <p className="text-gray-400 text-sm italic">{person.creds}</p>
      )}
      {person.contact && (
        <p className="text-gray-400 text-sm mt-1">{person.contact}</p>
      )}
    </div>
  );

  return (
    <section className="bg-black py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Meet Our Team
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Our Clinical Services and Recovery Support Services teams work in
          parallel — collaborating daily to ensure youth receive comprehensive,
          culturally responsive care at every stage of their journey.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Clinical Services */}
          <div>
            <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center md:text-left">
              Clinical Services
            </h3>
            <div className="space-y-4">
              {clinical.map((person, i) => renderPerson(person, i))}
            </div>
          </div>

          {/* Recovery Support Services */}
          <div>
            <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center md:text-left">
              Recovery Support Services
            </h3>
            <div className="space-y-4">
              {recovery.map((person, i) => renderPerson(person, i))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
