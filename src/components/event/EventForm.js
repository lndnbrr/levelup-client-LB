'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createEvents } from '@/api/eventData';
import { getGames } from '@/api/gameData';
import PropTypes from 'prop-types';

const initialState = {
  description: '',
  date: '',
  time: '',
  game: 0,
};

function EventForm({ user }) {
  const [currentEvent, setCurrentEvent] = useState(initialState);
  const [games, SetGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getGames().then((data) => SetGames(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log('name:', name);
    console.log('value:', value);
    console.log(currentEvent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      description: currentEvent.description,
      date: currentEvent.date,
      time: currentEvent.time,
      game: Number(currentEvent.game),
      organizer: user.uid,
    };

    createEvents(event).then(() => router.push('/events'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" required value={currentEvent.description} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control name="date" required value={currentEvent.date} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
        <Form.Control name="time" required value={currentEvent.time} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Game</Form.Label>
        <Form.Select name="game" onChange={handleChange}>
          <option>Select a game for this event</option>
          {games.map((game) => (
            <option value={game.id}>{game.title}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

EventForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventForm;
