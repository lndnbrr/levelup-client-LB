import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function EventCard({ description, date, time, game }) {
  return (
    <Card className="text-centered">
      <Card.Title>Event for {game}</Card.Title>
      <Card.Body>
        <Card.Text>Date: {date}</Card.Text>
        <Card.Text>Time: {time}</Card.Text>
        <Card.Text>Description: {description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

EventCard.propTypes = {
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  game: PropTypes.string.isRequired,
};

export default EventCard;
