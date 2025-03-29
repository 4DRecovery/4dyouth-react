// components/CommunityAgreements.jsx

import React from 'react';

export function CommunityAgreements() {
  const agreements = [
    { label: 'Respect', detail: 'Treat all individuals with dignity and respect.' },
    { label: 'Abstinence', detail: 'Commit to maintaining sobriety.' },
    { label: 'Accountability', detail: 'Take responsibility for your actions.' },
    { label: 'Confidentiality', detail: 'Respect the privacy of fellow participants.' },
    { label: 'Contribution', detail: 'Engage actively in community activities.' },
    { label: 'Clean Up', detail: 'Keep shared spaces clean and orderly.' },
    { label: 'Boundaries', detail: 'Set and respect personal boundaries.' },
    { label: 'Safety', detail: 'No weapons, hate speech, or drugs.' },
    { label: 'Nicotine-Free', detail: 'Tobacco use is not permitted.' }
  ];

  return (
    <section className="bg-gray-950 py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">🌟 Community Center Agreements</h2>
        <p className="text-gray-300 text-center mb-12">
          To ensure a safe and inclusive space, all participants agree to the following:
        </p>
        <div className="space-y-4">
          {agreements.map((item, idx) => (
            <details
              key={idx}
              className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition"
            >
              <summary className="cursor-pointer text-teal-300 font-semibold">
                {item.label}
              </summary>
              <p className="text-gray-300 mt-2 text-sm">{item.detail}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
