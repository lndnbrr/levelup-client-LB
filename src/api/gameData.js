import { clientCredentials } from '@/utils/client';

const getGames = () =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/games`)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

const createGame = (game) =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(game),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getGameTypes = () =>
  new Promise((resolve, reject) => {
    fetch(`${clientCredentials.databaseURL}/gametypes`)
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

export { getGames, createGame, getGameTypes };
