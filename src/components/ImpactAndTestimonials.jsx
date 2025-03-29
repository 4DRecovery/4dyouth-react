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
    const duration = 10000; // 10s total
    const steps = 200;      // how many increments
    const interval = duration / steps; // ms each step

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

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((item, index) => {
            // We'll remove any 'bg-white' or 'dark:bg-gray-900' so our gradient shows.
            // Instead, we use a 'relative' container with an absolutely-positioned gradient that animates.
            return (
              <div
                key={index}
                className="relative border dark:border-teal-300 border-teal-600 rounded-xl w-full h-48 mx-auto text-center p-4 transition hover:shadow-md overflow-hidden"
              >
                {/* 
                  1) Animated gradient layer:
                     - Absolutely positioned
                     - Start width: 0; animate to width: 100% over 10s
                     - Use linear-gradient from a bluish to pinkish color 
                */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '0%',
                    background: 'linear-gradient(to right, #63B3ED, #D53F8C)',
                    animation: 'fillGradient 10s forwards',
                    borderRadius: '0.75rem',  // match card's rounding
                    zIndex: 0
                  }}
                />
                {/* 
                  2) Inline CSS for keyframes:
                     We name it fillGradient, going 0%→100% width over 10s
                */}
                <style>
                  {`
                    @keyframes fillGradient {
                      0% { width: 0%; }
                      100% { width: 100%; }
                    }
                  `}
                </style>

                {/* 
                  3) Actual content on top:
                     - Put it in a relative container with zIndex:1 so it sits above the gradient
                */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="text-3xl mb-2 dark:text-white text-black">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold mb-1 dark:text-white text-black">
                    {item.isDays
                      ? `${Math.round(displayed[index])}+`
                      : `${displayed[index].toFixed(2)}%`}
                  </div>
                  <p className="text-sm leading-tight dark:text-gray-200 text-gray-800">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-12 max-w-3xl mx-auto text-sm italic dark:text-gray-300 text-gray-600">
          These numbers represent more than program outcomes — they represent real youth 
          finding hope, rebuilding relationships, and making life-changing progress.
        </p>

        {/* Testimonials */}
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
