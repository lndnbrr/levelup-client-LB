'use client';

import { useEffect, useState } from 'react';
import { getEvents } from '@/api/eventData';
import EventCard from '@/components/event/EventCard';

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <article className="events">
      <h1>Events</h1>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="event">
          <EventCard description={event.description} date={event.date} time={event.time} game={event.game.title} />
        </section>
      ))}
    </article>
  );
}

export default EventsPage;
