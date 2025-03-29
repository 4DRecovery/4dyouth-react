// components/FAQSection.jsx

import React from 'react';

export function FAQSection() {
  const faqs = [
    {
      q: "How will I know if I need to go to an inpatient program or an outpatient program or Recovery Support Services?",
      a: "When you first meet with a counselor, they will complete an assessment covering medical needs, mental health needs, substance use history, and overall life satisfaction. Based on this, a personalized treatment plan will be developed."
    },
    {
      q: "How do I get the help that I need when it is not a great time in my life to go to treatment?",
      a: "There’s rarely a ‘perfect time’ to begin treatment. Prioritizing mental health and recovery now is an investment in your future. Our staff will work with you to schedule services around your availability."
    },
    {
      q: "I am not sure if my biggest problems are related to my mental health or my addiction. How do I find out?",
      a: "During the assessment process, we’ll evaluate all aspects of your life to determine the best plan — whether it emphasizes mental health, substance use disorder treatment, or both."
    },
    {
      q: "How long will I have to be in treatment for if I start?",
      a: "Treatment is clinically indicated and depends on your individual progress and needs. Your plan may evolve as you work with your counselor toward long-term goals."
    },
    {
      q: "I am already going to 12-step meetings in the community; why would I need to go to treatment, too?",
      a: "12-step meetings are great support tools, but treatment offers professional guidance and personalized strategies. They complement each other and can be used together for optimal support."
    }
  ];

  return (
    <section className="bg-black py-20 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <details key={index} className="bg-gray-900 p-4 rounded-lg shadow hover:bg-gray-800 transition">
              <summary className="cursor-pointer text-teal-300 font-semibold">
                {item.q}
              </summary>
              <p className="text-gray-300 mt-2 text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
