import React from 'react';

export function TimelineOfServices() {
  const phases = [
    {
      label: 'Stabilize',
      color: 'teal',
      steps: [
        {
          title: 'Clinical Assessment & Treatment Plan',
          content: (
            <>
              <p className="font-semibold">Walk-ins and Same-Day Service Available</p>
              <p>
                Participants receive a comprehensive assessment and treatment plan to address
                immediate needs and begin their recovery journey.
              </p>
              <p className="mt-2 font-semibold">Clinically Indicated Services</p>
              <p>
                Clinical and therapeutic support tailored to individual needs. Focus on stabilization,
                mental health treatment, and substance use care.
              </p>
            </>
          ),
        },
        {
          title: 'Works with Clinical Supports',
          content: (
            <p>
              Provides short-term stabilization to lay the foundation for long-term success.
            </p>
          ),
        },
      ],
    },
    {
      label: 'Engage',
      color: 'purple',
      steps: [
        {
          title: 'Connected with Recovery Mentor Program',
          content: (
            <>
              <p>
                Participants engage with Recovery Mentors and the community center, building a
                support network that fosters skill-building and self-direction through lived
                experience.
              </p>
              <p className="mt-2">
                Services are guided by the participant’s own goals and values. Youth lead and design
                events, share their voices, and build recovery identities through fun, leadership, and
                community.
              </p>
            </>
          ),
        },
      ],
    },
    {
      label: 'Sustain',
      color: 'purple',
      steps: [
        {
          title: 'Sustained Recovery & Community Engagement',
          content: (
            <>
              <p>
                Recovery becomes a way of life — built on joy, leadership, and lasting community.
                Youth participate in peer-led activities, mentorship, and connection that they helped
                create.
              </p>
              <p className="mt-2">
                Participants choose their own goals, create events, and shape what recovery looks
                like — for themselves and for others.
              </p>
            </>
          ),
        },
      ],
    },
  ];

  return (
    // Light vs Dark: (dark:...) for backgrounds/borders, default white
    <section className="dark:bg-gray-900 dark:text-gray-100 bg-white text-text-main py-20 px-6 border-t dark:border-gray-800 border-gray-200 transition-colors">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 dark:text-white text-gray-800">
          Timeline of Services
        </h2>

        <p className="text-center max-w-2xl mx-auto mb-6 dark:text-gray-300 text-gray-700">
          We know it can be confusing to navigate care. That’s why we offer{' '}
          <span className="dark:text-teal-300 text-teal-600 font-semibold">same-day assessments</span> and
          work closely with families to build the right plan.
        </p>
        <p className="text-center max-w-xl mx-auto mb-12 dark:text-gray-400 text-gray-500">
          Whether youth start in clinical treatment, recovery mentorship, or both — this timeline
          outlines how support evolves at 4D. Our team works collaboratively across every phase.
        </p>

        <div className="space-y-16">
          {phases.map((phase, phaseIdx) => {
            // We'll define color classes for each phase
            const isPurple = phase.color === 'purple';
            const phaseDotBgDark = isPurple ? 'bg-purple-300' : 'bg-teal-300'; // dot color in dark mode
            const phaseDotBgLight = isPurple ? 'bg-purple-600' : 'bg-teal-600';
            const borderDark = isPurple ? 'border-purple-300' : 'border-teal-300';
            const borderLight = isPurple ? 'border-purple-600' : 'border-teal-600';
            const headingDark = isPurple ? 'text-purple-300' : 'text-teal-300';
            const headingLight = isPurple ? 'text-purple-600' : 'text-teal-600';

            return (
              <div key={phaseIdx}>
                {/* Phase Label */}
                <div className="flex items-center mb-8">
                  <div
                    className={`w-5 h-5 rounded-full mr-3 transition-colors 
                      dark:${phaseDotBgDark} ${phaseDotBgLight}`}
                  />
                  <h3 className="text-xl font-semibold uppercase tracking-wide dark:text-white text-gray-800">
                    {phase.label}
                  </h3>
                </div>

                {/* Steps */}
                <div className="border-l dark:border-gray-700 border-gray-300 space-y-12 pl-6">
                  {phase.steps.map((step, i) => (
                    <div key={i} className="relative">
                      <span
                        className={`absolute -left-[11px] top-1 w-4 h-4 rounded-full border-2 transition-colors 
                          dark:${borderDark} ${borderLight} 
                          dark:bg-gray-900 bg-white
                        `}
                      />
                      <h4
                        className={`text-lg font-semibold mb-2 pl-2 transition-colors 
                          dark:${headingDark} ${headingLight}`}
                      >
                        {step.title}
                      </h4>
                      <div className="dark:text-gray-300 text-gray-700 text-sm space-y-2">
                        {step.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-16 text-sm text-center italic max-w-xl mx-auto dark:text-gray-400 text-gray-500">
          Participants may enter care at any phase. Our team will meet you where you are.
        </p>
      </div>
    </section>
  );
}
