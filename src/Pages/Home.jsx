import React from 'react';
import { Link } from 'react-router-dom';
import { ImpactAndTestimonials } from '../components/ImpactAndTestimonials';

export default function Home() {
  return (
    <section className="bg-gradient-to-br from-black via-purple-800 to-black text-white">
      {/* Hero */}
      <div className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empowering Youth Through Recovery & Support
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

      {/* Audience Tiles */}
      <div className="bg-black py-16 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-10">Who We Support</h2>
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
              <div key={i} className="bg-gray-900 p-6 rounded-lg shadow">
                <h3 className="text-teal-300 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{item.text}</p>
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
                  <Link to={item.link} className="text-sm text-teal-400 hover:text-purple-300">
                    {item.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ben’s Story Preview */}
      <div className="bg-gray-900 py-16 px-6 border-t border-gray-800 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Ben’s Story</h2>
        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
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
          ></iframe>
        </div>
      </div>

      {/* Recovery Impact + Testimonials */}
      <ImpactAndTestimonials />

      {/* Final CTA */}
      <div className="bg-black py-12 text-center border-t border-gray-800">
        <h3 className="text-2xl font-bold text-white mb-4">
          Not sure where to start?
        </h3>
        <a
          href="https://4drecovery.jotform.com/231350818414956"
          className="inline-block bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-300 hover:to-purple-300 text-black font-semibold py-3 px-6 rounded-lg transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Make a Referral
        </a>
      </div>
    </section>
  );
}
