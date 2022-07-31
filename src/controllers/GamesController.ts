import express from 'express';

const getGames = (req: express.Request, res: express.Response) => {
  return res.json('Implement index');
};

const getGame = (req: express.Request, res: express.Response) => {
  return res.json('Implement show');
};

const createGame = (req: express.Request, res: express.Response) => {
  return res.json('Implement create');
};

const updateGame = (req: express.Request, res: express.Response) => {
  return res.json('Implement update');
};

const deleteGame = (req: express.Request, res: express.Response) => {
  return res.json('Implement destroy');
};

export {
  getGame,
  getGames,
  createGame,
  updateGame,
  deleteGame,
};
