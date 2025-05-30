'use client';

import { useState, useEffect } from 'react';
import { getGames } from '@/api/gameData';
import GameCard from '@/components/game/GameCard';

function GamesPage() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getGames().then((data) => setGames(data));
  }, []);

  return (
    <article className="games">
      <h1>Games</h1>
      {games.map((game) => (
        <section key={`game--${game.id}`} className="game">
          <GameCard title={game.title} maker={game.maker} numberOfPlayers={game.num_of_players} skillLevel={game.skill_level} />
        </section>
      ))}
    </article>
  );
}

export default GamesPage;
