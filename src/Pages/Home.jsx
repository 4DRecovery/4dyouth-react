import React from 'react';
import { Link } from 'react-router-dom';
import { ImpactAndTestimonials } from '../components/ImpactAndTestimonials';

export default function Home() {
  return (
    <>
      {/* HERO with campus rendering */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/campus.jpeg"
          alt="Campus Rendering"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-down">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Empowering Youth Through Recovery &amp; Support
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Clinical care. Peer mentorship. Real community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              aria-label="Explore services"
              className="bg-teal-400 hover:bg-teal-300 text-black font-semibold py-3 px-6 rounded-lg transition"
            >
              Explore Services
            </Link>
            <a
              href="https://4drecovery.jotform.com/231350818414956"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Make a referral"
              className="border border-teal-400 hover:bg-teal-400 text-white hover:text-black font-semibold py-3 px-6 rounded-lg transition"
            >
              Make a Referral
            </a>
          </div>
        </div>

        {/* Wave/Curved Divider at bottom of hero */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden h-[80px] leading-[0] rotate-180 z-20">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C150,80 350,0 500,40 L500,00 L0,0 Z"
              className="fill-brand-navy dark:fill-black transition-colors"
            />
          </svg>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <div className="dark:bg-black dark:text-white dark:border-gray-800 bg-background-warm text-text-main border-b border-gray-200 py-16 px-6 -mt-[1px] transition-colors">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 dark:text-white text-gray-800">
            Who We Support
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Youth',
                text: 'Build your future. We’ve got your back.',
                link: '/services',
                cta: 'Start Here →',
              },
              {
                title: 'Parents & Caregivers',
                text: 'Support, connection, and real tools for helping your teen.',
                link: '/about',
                cta: 'Learn More →',
              },
              {
                title: 'Professionals',
                text: 'Make a referral or connect with our team.',
                link: 'https://4drecovery.jotform.com/231350818414956',
                external: true,
                cta: 'Refer a Youth →',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="dark:bg-gray-900 bg-white dark:text-white text-text-main p-6 rounded-lg shadow hover:shadow-md transition"
              >
                {/* Toned-down teal: light = teal-600, dark = teal-300 */}
                <h3 className="dark:text-teal-300 text-teal-600 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm mb-2">{item.text}</p>
                {item.external ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-teal-400 hover:text-purple-300"
                  >
                    {item.cta}
                  </a>
                ) : (
                  <Link
                    to={item.link}
                    className="text-sm text-teal-400 hover:text-purple-300"
                  >
                    {item.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BEN’S STORY PREVIEW */}
      <div className="dark:bg-gray-900 dark:text-white bg-white text-text-main py-16 px-6 border-t dark:border-gray-800 border-gray-200 text-center transition-colors">
        <h2 className="text-2xl font-bold mb-6">
          Ben’s Story
        </h2>
        <p className="text-sm max-w-xl mx-auto mb-6 dark:text-gray-400 text-gray-600">
          What does recovery look like for a young person? Hear directly from someone who’s lived it.
        </p>
        <div className="max-w-4xl mx-auto">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/F9gg-OOYm4k"
            title="Ben's Story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Recovery Impact + Testimonials */}
      <ImpactAndTestimonials />

      {/* FINAL CTA */}
      <div className="dark:bg-black dark:text-white bg-background-warm text-text-main py-12 text-center border-t dark:border-gray-800 border-gray-200 transition-colors">
        <h3 className="text-2xl font-bold mb-4">
          Not sure where to start?
        </h3>
        <a
  href="https://4drecovery.jotform.com/231350818414956"
  target="_blank"
  rel="noopener noreferrer"
  class="
    inline-block
    bg-gradient-to-r from-teal-400 to-purple-400
    hover:from-teal-300 hover:to-purple-300
    text-white font-semibold
    py-3 px-6
    rounded-lg
    shadow-md hover:shadow-lg
    transition-colors
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400
  "
>
  Make a Referral
</a>

      </div>
    </>
  );
}
