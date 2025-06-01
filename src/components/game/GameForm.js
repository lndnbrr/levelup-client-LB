import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getGameTypes, createGame } from '@/api/gameData';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const initialState = {
  skillLevel: 1,
  numberOfPlayers: 0,
  title: '',
  maker: '',
  gameType: 0,
};

function GameForm({ user }) {
  const [gameTypes, setGameTypes] = useState([]);
  const [currentGame, setCurrentGame] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    getGameTypes().then((data) => setGameTypes(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentGame((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log('name:', name);
    console.log('value:', value);
    console.log(currentGame);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const game = {
      maker: currentGame.maker,
      title: currentGame.title,
      numberOfPlayers: Number(currentGame.numberOfPlayers),
      skillLevel: Number(currentGame.skillLevel),
      gameType: Number(currentGame.gameType),
      userId: user.uid,
    };

    createGame(game).then(() => router.push('/games'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" required value={currentGame.title} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Maker</Form.Label>
        <Form.Control name="maker" required value={currentGame.maker} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number of Players</Form.Label>
        <Form.Control name="numberOfPlayers" required value={currentGame.numberOfPlayers} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Skill Level</Form.Label>
        <Form.Control name="skillLevel" required value={currentGame.skillLevel} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Select a Game Type</Form.Label>
        <Form.Select name="gameType" onChange={handleChange}>
          <option>Select a Game Type</option>
          {gameTypes.map((gameType) => (
            <option value={gameType.id}>{gameType.label}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        {' '}
        Submit
      </Button>
    </Form>
  );
}

GameForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameForm;
