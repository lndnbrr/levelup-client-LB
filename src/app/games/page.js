'use client';

import { useState, useEffect } from 'react';
import { getGames } from '@/api/gameData';
import GameCard from '@/components/game/GameCard';
import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

function GamesPage() {
  const [games, setGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);

  return (
    <>
      <Button
        onClick={() => {
          router.push('/games/new');
        }}
      >
        Register New Game
      </Button>
      <article className="games">
        <h1>Games</h1>
        {games.map((game) => (
          <section key={`game--${game.id}`} className="game">
            <GameCard title={game.title} maker={game.maker} numberOfPlayers={game.num_of_players} skillLevel={game.skill_level} />
          </section>
        ))}
      </article>
    </>
  );
}

export default GamesPage;
