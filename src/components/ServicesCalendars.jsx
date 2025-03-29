// components/ServicesCalendars.jsx

import React from 'react';

export function ServicesCalendars() {
  return (
    <section className="bg-black py-20 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          📅 Program Schedules
        </h2>
        <p className="text-gray-400 mb-12">
          Stay up to date with clinical services and youth recovery events happening at 4D.
        </p>

        {/* Treatment Calendar */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-teal-300 mb-4">
            🩺 Treatment Center Calendar
          </h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=c_3533bd6f42a75f73775f11b5818f61870790574ebf40fb3d3fc41a54b8a6f6a2%40group.calendar.google.com&mode=AGENDA&ctz=America/Los_Angeles"
            title="4D Treatment Calendar"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            className="rounded-lg shadow mb-4"
          ></iframe>
          <a
            href="https://calendar.google.com/calendar/u/0?cid=Y18zNTMzYmQ2ZjQyYTc1ZjczNzc1ZjExYjU4MThmNjE4NzA3OTA1NzRlYmY0MGZiM2RmYzQxYTU0YjhhNmY2YTI@group.calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-teal-400 to-purple-400 hover:from-teal-300 hover:to-purple-300 text-black font-semibold py-2 px-5 rounded-lg transition"
          >
            + Subscribe to Treatment Calendar
          </a>
        </div>

        {/* Recovery Calendar */}
        <div>
          <h3 className="text-xl font-semibold text-purple-300 mb-4">
            🏠 Recovery Community Center Events
          </h3>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=eventsyouth@4drecovery.org&mode=AGENDA&ctz=America/Los_Angeles"
            title="4D Recovery Calendar"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            className="rounded-lg shadow mb-4"
          ></iframe>
          <a
            href="https://calendar.google.com/calendar/u/0?cid=ZXZlbnRzeW91dGhAZDRyZWNvdmVyeS5vcmc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-400 to-teal-400 hover:from-purple-300 hover:to-teal-300 text-black font-semibold py-2 px-5 rounded-lg transition"
          >
            + Subscribe to Recovery Calendar
          </a>
        </div>
      </div>
    </section>
  );
}
