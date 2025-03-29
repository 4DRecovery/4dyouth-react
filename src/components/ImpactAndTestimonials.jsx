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
      icon: <FaBullseye />
    },
    {
      label: 'Engaged in School',
      percent: 90.32,
      icon: <FaSchool />
    },
    {
      label: 'Improved Family Relationships',
      percent: 83.87,
      icon: <FaUsers />
    },
    {
      label: 'Retained Last Quarter',
      percent: 91.6,
      icon: <FaUndo />
    },
    {
      label: 'Average Abstinence Achieved (RSS)',
      percent: 145,
      icon: <FaCalendarCheck />,
      isDays: true
    }
  ];

  // For the percentage increment effect
  const [displayed, setDisplayed] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 10000; // 10 seconds
    const steps = 200;
    const interval = duration / steps;

    const intervalId = setInterval(() => {
      setDisplayed((prev) =>
        prev.map((val, i) => {
          const target = stats[i].percent;
          const increment = target / steps;
          const newVal = val + increment;
          return newVal >= target ? target : newVal;
        })
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [stats]);

  return (
    <section className="dark:bg-black dark:text-white bg-background-warm text-text-main py-20 px-4 border-t dark:border-gray-800 border-gray-200 transition-colors">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 dark:text-white text-gray-800">
          Recovery Mentor Program – Client Outcomes
        </h2>
        <p className="dark:text-gray-400 text-gray-600 mb-12 text-sm">
          Percentage of adolescents demonstrating improved outcomes
        </p>

        {/* 
          1) Wrap the entire grid in a relative container 
             so we can place an absolute "loading bar" behind it 
        */}
        <div className="relative mb-8">
          {/* 
            2) The background gradient bar (absolute). 
               We'll animate width from 0%→100% using keyframes 
               for 10s. 
               Colors: teal→purple matching your logo brand. 
          */}
          <div
            className="absolute top-0 left-0 h-full w-0 rounded-md"
            style={{
              background: 'linear-gradient(to right, #2dd4bf, #a78bfa)', // teal-400 to purple-400
              animation: 'loadBar 10s forwards',
              zIndex: 0
            }}
          />
          <style>
            {`
              @keyframes loadBar {
                0% { width: 0%; }
                100% { width: 100%; }
              }
            `}
          </style>

          {/* 
            3) The outcome boxes 
               must have relative z-10 so they're on top. 
               Keep backgrounds transparent or minimal so you see the bar behind. 
          */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl w-full h-48 mx-auto text-center p-4 
                           flex flex-col items-center justify-center 
                           dark:border-teal-300 border-teal-600 border
                           bg-transparent" // ensures we see gradient behind
                title={item.label}
              >
                <div className="text-3xl mb-2 dark:text-white text-black">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold mb-1 dark:text-white text-black">
                  {item.isDays
                    ? `${Math.round(displayed[idx])}+`
                    : `${displayed[idx].toFixed(2)}%`}
                </div>
                <p className="text-sm leading-tight dark:text-gray-200 text-gray-800">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Extra text and testimonials */}
        <p className="mt-12 max-w-3xl mx-auto text-sm italic dark:text-gray-300 text-gray-600">
          These numbers represent more than program outcomes — they represent real youth 
          finding hope, rebuilding relationships, and making life-changing progress.
        </p>

        <h3 className="text-2xl font-bold mt-16 mb-6 dark:text-white text-gray-800">
          In Their Own Words
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              quote:
                '“4D will forever be my first home. When I had nowhere to go, 4D was there.”'
            },
            {
              quote:
                '“4D has given me a second chance at life, guiding me through my recovery journey with constant support and understanding.”'
            },
            {
              quote:
                '“Without 4D, I would have never recovered. Today is my two years sober. Adolescents need community and safety — somewhere to belong.”'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="dark:bg-gray-900 bg-white dark:hover:bg-gray-800 dark:text-white text-text-main p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="italic mb-4 dark:text-gray-300 text-gray-600">{item.quote}</p>
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
