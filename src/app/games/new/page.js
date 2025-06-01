'use client';

import { useAuth } from '@/utils/context/authContext';
import GameForm from '@/components/game/GameForm';

function NewGame() {
  const { user } = useAuth();
  return (
    <div>
      <h2>Register New Game</h2>
      <GameForm user={user} />
    </div>
  );
}

export default NewGame;
