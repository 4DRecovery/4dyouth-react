import React from 'react';
import { ImpactAndTestimonials } from '../components/ImpactAndTestimonials';

export default function About() {
  return (
    <section className="dark:bg-black dark:text-white bg-background-warm text-text-main pt-24 pb-20 px-6 border-t dark:border-gray-800 border-gray-200 transition-colors">
      <div className="max-w-5xl mx-auto text-left">
        <h1 className="text-3xl font-bold mb-8 text-center dark:text-white text-gray-800">
          About 4D Youth
        </h1>

        <p className="mb-10 text-center max-w-2xl mx-auto dark:text-gray-300 text-gray-700">
          4D Youth is a program of 4D Recovery, designed to support adolescents through every phase 
          of their recovery journey — with services that center care, dignity, and possibility.
        </p>

        {/* Vision */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-1 dark:text-teal-300 text-teal-600">
            Our Vision
          </h2>
          <p className="dark:text-gray-300 text-gray-700">
            4D envisions a future where systems, communities, and individuals work together to 
            ensure all people receive the support needed to find and sustain recovery from substances.
          </p>
        </div>

        {/* Mission */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-1 dark:text-teal-300 text-teal-600">
            Our Mission
          </h2>
          <p className="dark:text-gray-300 text-gray-700">
            To provide — in partnership with systems, communities, and individuals — comprehensive 
            services that help adolescents, young adults, and families recover from substance use 
            disorders.
          </p>
        </div>

        {/* Why We Exist */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-1 dark:text-purple-300 text-purple-600">
            Why We Exist
          </h2>
          <p className="dark:text-gray-300 text-gray-700">
            Too many young people are underserved by systems that weren’t designed for them. We created 
            4D Youth to change that — offering developmentally appropriate, youth-led, and culturally 
            responsive supports that meet teens where they are.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-2 dark:text-purple-300 text-purple-600">
            What Makes Us Different
          </h2>
          <ul className="list-disc list-inside space-y-2 dark:text-gray-300 text-gray-700">
            <li>We accept walk-ins and provide same-day clinical assessments</li>
            <li>No one is turned away from our Recovery Support Services for a lack of insurance or documentation</li>
            <li>Youth help design and lead services, groups, and events</li>
            <li>Recovery Mentors with lived experience walk the path alongside participants</li>
            <li>We believe in long-term, connected support — not just short-term care</li>
          </ul>
        </div>
      </div>

      {/* Executive Director Video */}
      <div className="max-w-4xl mx-auto mt-20 text-center px-4">
        <h2 className="text-2xl font-bold mb-6 dark:text-white text-gray-800">
          Message from Our Executive Director
        </h2>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src="https://www.youtube.com/embed/3O2c6vrCFLg"
            title="Message from Executive Director"
            width="100%"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Impact + Testimonials Section */}
      <ImpactAndTestimonials />

      {/* Closing CTA */}
      <div className="text-center mt-16">
        <p className="text-sm dark:text-gray-400 text-gray-600 max-w-xl mx-auto">
          Want to learn more about how we support youth and families?
          <a
            href="/services"
            className="text-teal-400 hover:text-purple-300 ml-1"
          >
            Explore our services
          </a>
          {' '}or
          <a
            href="#referral"
            className="text-teal-400 hover:text-purple-300 ml-1"
          >
            get connected today
          </a>.
        </p>
      </div>
    </section>
  );
}
