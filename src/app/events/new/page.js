'use client';

import EventForm from '@/components/event/EventForm';
import { useAuth } from '@/utils/context/authContext';

export default function NewEventPage() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Create a new Event</h2>
      <EventForm user={user} />
    </div>
  );
}
