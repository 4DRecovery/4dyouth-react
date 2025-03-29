// components/ImpactAndTestimonials.jsx

import React, { useEffect, useState } from 'react';
import {
  FaBullseye,
  FaSchool,
  FaUsers,
  FaUndo,
  FaCalendarCheck
} from 'react-icons/fa';

export function ImpactAndTestimonials() {
  const stats = [
    {
      label: 'Made Progress on Their Self-Determined Goals',
      percent: 96.77,
      icon: <FaBullseye />,
      tooltip: 'Based on participant-reported goal tracking data.'
    },
    {
      label: 'Engaged in School',
      percent: 90.32,
      icon: <FaSchool />,
      tooltip: 'Participants actively enrolled and attending.'
    },
    {
      label: 'Improved Family Relationships',
      percent: 83.87,
      icon: <FaUsers />,
      tooltip: 'Measured by parent/caregiver feedback and session attendance.'
    },
    {
      label: 'Retained Last Quarter',
      percent: 91.6,
      icon: <FaUndo />,
      tooltip: 'Youth engaged through entire quarter of services.'
    },
    {
      label: 'Average Abstinence Achieved (RSS)',
      percent: 145,
      icon: <FaCalendarCheck />,
      isDays: true,
      tooltip: 'RSS clients average over 145 days of abstinence.'
    }
  ];

  const [displayed, setDisplayed] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1000;
    const steps = 20;
    const interval = duration / steps;

    const intervalId = setInterval(() => {
      setDisplayed((prev) =>
        prev.map((val, i) => {
          const target = stats[i].percent;
          const increment = target / steps;
          return val + increment >= target ? target : val + increment;
        })
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-black py-20 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          Recovery Mentor Program – Client Outcomes
        </h2>
        <p className="text-gray-400 mb-12">
          Percentage of adolescents demonstrating improved outcomes
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              title={item.tooltip}
              className="flex flex-col items-center justify-center border border-teal-400 rounded-xl w-full h-48 mx-auto text-center p-4 transition hover:scale-105 bg-gray-900 shadow"
            >
              <div className="text-3xl mb-2 text-teal-300">{item.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">
                {item.isDays
                  ? `${Math.round(displayed[index])}+`
                  : `${displayed[index].toFixed(2)}%`}
              </div>
              <p className="text-sm text-gray-300 leading-tight">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial transition */}
        <p className="mt-12 text-gray-300 max-w-3xl mx-auto text-sm italic">
          These numbers represent more than program outcomes — they represent real youth finding hope, rebuilding relationships, and making life-changing progress.
        </p>

        {/* Testimonial Quotes */}
        <h3 className="text-2xl font-bold text-white mt-16 mb-6">
          In Their Own Words
        </h3>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              quote:
                '4D will forever be my first home. When I had nowhere to go, 4D was there.'
            },
            {
              quote:
                '4D has given me a second chance at life, guiding me through my recovery journey with constant support and understanding.'
            },
            {
              quote:
                'Without 4D, I would have never recovered. Today is my two years sober. Adolescents need community and safety — somewhere to belong.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-lg shadow hover:bg-gray-800 transition"
            >
              <p className="text-gray-300 italic mb-4">“{item.quote}”</p>
              <p className="text-teal-400 font-semibold text-sm">
                — Recovery Mentor Program, Client
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
