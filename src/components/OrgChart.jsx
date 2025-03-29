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
    // Replacing bg-gray-900 with themable classes
    <div
      key={i}
      className="dark:bg-gray-900 dark:hover:bg-gray-800 bg-white hover:shadow-md dark:text-white text-text-main p-4 rounded-lg shadow transition"
    >
      <p className="text-lg font-semibold">
        {person.name}
      </p>
      <p className="dark:text-teal-300 text-teal-600 text-sm font-medium">
        {person.title}
      </p>
      {person.creds && (
        <p className="dark:text-gray-300 text-gray-600 text-sm italic">
          {person.creds}
        </p>
      )}
      {person.contact && (
        <p className="dark:text-gray-400 text-gray-500 text-sm mt-1">
          {person.contact}
        </p>
      )}
    </div>
  );

  return (
    // Updated container background
    <section className="dark:bg-black dark:text-white bg-background-warm text-text-main py-20 px-6 border-t dark:border-gray-800 border-gray-200 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 dark:text-white text-gray-800">
          Meet Our Team
        </h2>
        <p className="dark:text-gray-400 text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our Clinical Services and Recovery Support Services teams work in parallel — 
          collaborating daily to ensure youth receive comprehensive, culturally responsive care 
          at every stage of their journey.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Clinical Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left dark:text-teal-300 text-teal-600">
              Clinical Services
            </h3>
            <div className="space-y-4">
              {clinical.map((person, i) => renderPerson(person, i))}
            </div>
          </div>

          {/* Recovery Support Services */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center md:text-left dark:text-purple-300 text-purple-600">
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
