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
                Participants receive a comprehensive assessment and treatment plan to address immediate needs and begin their recovery journey.
              </p>
              <p className="mt-2 font-semibold">Clinically Indicated Services</p>
              <p>
                Clinical and therapeutic support tailored to individual needs. Focus on stabilization, mental health treatment, and substance use care.
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
                Participants engage with Recovery Mentors and the community center, building a support network that fosters skill-building and self-direction through lived experience.
              </p>
              <p className="mt-2">
                Services are guided by the participant’s own goals and values. Youth lead and design events, share their voices, and build recovery identities through fun, leadership, and community.
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
                Recovery becomes a way of life — built on joy, leadership, and lasting community. Youth participate in peer-led activities, mentorship, and connection that they helped create.
              </p>
              <p className="mt-2">
                Participants choose their own goals, create events, and shape what recovery looks like — for themselves and for others.
              </p>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <section className="bg-gray-950 py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Timeline of Services
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-6">
          We know it can be confusing to navigate care. That’s why we offer{' '}
          <span className="text-teal-300 font-semibold">same-day assessments</span> and work closely with families to build the right plan.
        </p>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
          Whether youth start in clinical treatment, recovery mentorship, or both — this timeline outlines how support evolves at 4D. Our team works collaboratively across every phase.
        </p>

        <div className="space-y-16">
          {phases.map((phase, phaseIdx) => (
            <div key={phaseIdx}>
              {/* Phase Label */}
              <div className="flex items-center mb-8">
                <div
                  className={`w-5 h-5 rounded-full mr-3 ${
                    phase.color === 'purple' ? 'bg-purple-400' : 'bg-teal-400'
                  }`}
                />
                <h3 className="text-xl font-semibold text-white uppercase tracking-wide">
                  {phase.label}
                </h3>
              </div>

              {/* Steps */}
              <div className="border-l border-gray-700 space-y-12 pl-6">
                {phase.steps.map((step, i) => (
                  <div key={i} className="relative">
                    <span
                      className={`absolute -left-[11px] top-1 w-4 h-4 rounded-full border-2 ${
                        phase.color === 'purple' ? 'border-purple-400' : 'border-teal-400'
                      } bg-gray-950`}
                    />
                    <h4
                      className={`text-lg font-semibold mb-2 pl-2 ${
                        phase.color === 'purple' ? 'text-purple-300' : 'text-teal-300'
                      }`}
                    >
                      {step.title}
                    </h4>
                    <div className="text-gray-300 text-sm space-y-2">{step.content}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-16 text-sm text-gray-400 text-center italic max-w-xl mx-auto">
          Participants may enter care at any phase. Our team will meet you where you are.
        </p>
      </div>
    </section>
  );
}
