import { Request, Response } from 'express';

const getGames = (req: Request, res: Response): Response<string>  => {
  return res.json('Implement index');
};

const getGame = (req: Request, res: Response): Response<string>  => {
  return res.json('Implement show');
};

const createGame = (req: Request, res: Response): Response<string> => {
  return res.json('Implement create');
};

const updateGame = (req: Request, res: Response): Response<string>  => {
  return res.json('Implement update');
};

const deleteGame = (req: Request, res: Response): Response<string>  => {
  return res.json('Implement destroy');
};

export {
  getGame,
  getGames,
  createGame,
  updateGame,
  deleteGame,
};
