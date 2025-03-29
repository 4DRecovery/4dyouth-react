import React from 'react';
import { TimelineOfServices } from '../components/TimelineOfServices';

export default function Services() {
  return (
    <section className="bg-black py-20 px-6 text-white border-t border-gray-800 relative">
      <div className="max-w-5xl mx-auto">

        {/* Intro */}
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Comprehensive Adolescent Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From same-day assessments to long-term mentorship — we help youth and families find the support they need, when they need it.
          </p>
        </div>

        {/* What to Expect */}
        <div id="expect" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            What to Expect When You Reach Out
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: '1. Reach Out or Walk In',
                desc: 'We offer same-day clinical assessments. No referral needed.',
              },
              {
                title: '2. Build a Care Plan',
                desc: 'We’ll help you decide what services are the best fit — clinical, peer mentorship, or both.',
              },
              {
                title: '3. Stay Connected',
                desc: 'Youth continue with support through recovery mentorship, community, and care.',
              },
            ].map((step, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg shadow hover:bg-gray-800 transition">
                <h3 className="text-teal-300 font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Family Support */}
<div id="family" className="mb-20 scroll-mt-24">
  <h2 className="text-2xl font-bold text-white text-center mb-4">👨‍👩‍👧‍👦 Family Support</h2>
  <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
    Families are part of the process. We help caregivers feel supported, informed, and involved every step of the way.
  </p>
  <div className="grid sm:grid-cols-2 gap-6">
    {[
      {
        title: 'Family Therapy',
        desc: 'Rebuild trust, communication, and healing through guided sessions.',
      },
      {
        title: 'Parent Education',
        desc: 'Workshops that help caregivers understand and support their teen.',
      },
      {
        title: 'Walk-In Support',
        desc: 'Same-day access to staff and guidance, no appointment needed.',
      },
      {
        title: 'Collaborative Teams',
        desc: 'Clinicians and mentors work together to keep parents in the loop.',
      },
    ].map((item, i) => (
      <div key={i} className="bg-gray-900 p-5 rounded-lg shadow hover:bg-gray-800 transition">
        <h3 className="text-teal-300 font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-300 text-sm">{item.desc}</p>
      </div>
    ))}

    {/* Parent Peer Group (Special Card) */}
    <div className="sm:col-span-2 bg-gray-900 p-6 rounded-lg shadow hover:bg-gray-800 transition">
      <h3 className="text-purple-300 font-semibold text-lg mb-2">Parent Peer Group</h3>
      <p className="text-gray-300 text-sm mb-4">
        Biweekly support group grounded in the <strong>Invitation to Change</strong> model.
      </p>
      <p className="text-sm text-gray-400 italic border-l-4 border-purple-400 pl-4 mb-6">
        “Helping a child who struggles with substance use can be a very lonely journey, made worse by lack of understanding, fear, and the impact of stigma and shame. 4D Youth Center’s Invitation to Change (ITC) parent support group provides a safe space to connect with others who understand what you’re experiencing. We bring evidence-based ideas together with kindness so you can support your child in a way that’s genuinely helpful and aligned with your values. We also emphasize self-care and self-compassion to sustain you through difficult times.”
      </p>
      <div className="text-center">
        <a
          href="https://www.twinflowercounseling.com/4d-parent-group"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-300 hover:to-purple-300 text-black font-semibold py-2 px-5 rounded-lg transition"
        >
          Join the Parent Group
        </a>
      </div>
    </div>
  </div>
</div>


        {/* Clinical Services */}
        <div id="clinical" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl font-bold text-teal-300 text-center mb-8">🩺 Clinical Services</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Same-Day Access',
                desc: 'Clinical assessments and treatment planning without a wait.',
              },
              {
                title: 'Outpatient Treatment',
                desc: 'Levels 1.5, 2.1, and 2.5 tailored to youth needs and progress.',
              },
              {
                title: 'Mental Health Support',
                desc: 'Licensed clinicians to address co-occurring issues like anxiety, depression, and trauma.',
              },
              {
                title: 'Family Therapy',
                desc: 'Sessions that bring caregivers and youth together for healing.',
              },
              {
                title: 'Medication Support',
                desc: 'Optional management (coming soon) for psychiatric stabilization and recovery.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 p-5 rounded-lg shadow hover:bg-gray-800 transition">
                <h3 className="text-teal-300 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Support */}
        <div id="recovery" className="mb-20 scroll-mt-24">
          <h2 className="text-2xl font-bold text-purple-300 text-center mb-8">✨ Recovery Support</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: 'Recovery Mentorship',
                desc: '1:1 guidance from mentors with lived experience.',
              },
              {
                title: 'Peer Groups + Activities',
                desc: 'Youth lead and attend sober groups, meetings, and events.',
              },
              {
                title: 'Leadership Pathways',
                desc: 'Opportunities to take on meaningful roles in the community.',
              },
              {
                title: 'Drop-In Recovery Center',
                desc: 'A safe, fun, inclusive space for daily engagement.',
              },
              {
                title: 'Long-Term Support',
                desc: 'Ongoing help even after treatment ends — because recovery is a journey.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-900 p-5 rounded-lg shadow hover:bg-gray-800 transition">
                <h3 className="text-purple-300 font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline + Calendars */}
        <div id="timeline" className="scroll-mt-24 mb-20">
          <TimelineOfServices />

          <div id="calendars" className="scroll-mt-24 mt-20">
            <h2 className="text-2xl font-bold text-white text-center mb-12">📅 Program Schedules</h2>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-800 transition">
                <h3 className="text-lg font-semibold text-teal-300 text-center mb-4">🩺 Treatment Center</h3>
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=c_3533bd6f42a75f73775f11b5818f61870790574ebf40fb3d3fc41a54b8a6f6a2%40group.calendar.google.com&mode=AGENDA&ctz=America/Los_Angeles"
                  title="Treatment Center Schedule"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  className="rounded-md"
                  scrolling="no"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-800 transition">
                <h3 className="text-lg font-semibold text-purple-300 text-center mb-4">🏠 Recovery Center</h3>
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=eventsyouth@4drecovery.org&mode=AGENDA&ctz=America/Los_Angeles"
                  title="Recovery Center Schedule"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  className="rounded-md"
                  scrolling="no"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div id="contact" className="max-w-5xl mx-auto mb-20 scroll-mt-24">
          <h2 className="text-2xl font-bold text-white text-center mb-8">📬 Program Contacts</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-center">
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-teal-300 mb-2">Dr. Nick Crapser</h3>
              <p className="text-sm text-gray-300 mb-2">Clinical Director</p>
              <a
                href="mailto:Nick.Crapser@4drecovery.org"
                className="text-sm text-teal-400 hover:text-purple-300 underline"
              >
                Nick.Crapser@4drecovery.org
              </a>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Robert Sanders</h3>
              <p className="text-sm text-gray-300 mb-2">Director of Youth Services</p>
              <a
                href="mailto:Robert.Sanders@4drecovery.org"
                className="text-sm text-teal-400 hover:text-purple-300 underline"
              >
                Robert.Sanders@4drecovery.org
              </a>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-gray-400 italic text-sm">
            “4D has given me a second chance at life, guiding me through my recovery journey with constant support and understanding.”
          </p>
          <p className="text-teal-400 font-semibold mt-2 text-xs">
            — Recovery Mentor Program, Client
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-4 text-sm">
            Unsure where to start? Let’s figure it out together.
          </p>
          <a
            href="https://4drecovery.jotform.com/231350818414956"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-300 hover:to-purple-300 text-black font-semibold py-3 px-6 rounded-lg transition"
          >
            Make a Referral
          </a>
        </div>
      </div>
    </section>
  );
}
