import { Request, Response } from 'express';
import Game from '../models/Game';
import { omitBy, isEmpty } from 'lodash';

/* Actions */
const getGames = async (req: Request, res: Response): Promise<Response> => {
  const games = await Game.find();
  return res.status(200).json(games);
};

const getGame = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const game = await Game.findById(id);
  return res.status(200).json(game);
};

const createGame = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const newGame = new Game({
    title: req.body.title,
    year: req.body.year,
    platform: req.body.platformId
  });
  const game = await newGame.save();
  return res.status(200).json(game);
};

const updateGame = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const { id } = req.params;
  const { title, platformId, year } = req.body;
  const game = await Game.findById(id);
  Object.assign(game, omitBy({ title, year, platformId }, isEmpty));
  const savedGame = await game.save();
  return res.status(200).json(savedGame);
};

const deleteGame = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  await Game.deleteOne({ id });
  return res.status(200).json(true);
};

export {
  getGame,
  getGames,
  createGame,
  updateGame,
  deleteGame,
};
