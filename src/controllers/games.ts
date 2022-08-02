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
  try {
    const game = await Game.findById(id);
    if (!game) {
      return res.status(404).json({ message: `No game with id ${id}` })
    }
    return res.status(200).json(game);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

const createGame = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const newGame = new Game({
    title: req.body.title,
    year: req.body.year,
    platform: req.body.platformId
  });
  try {
    const game = await newGame.save();
    return res.status(200).json(game);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

const updateGame = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const { id } = req.params;
  const { title, platformId, year } = req.body;
  const game = await Game.findById(id);
  Object.assign(game, omitBy({ title, year, platformId }, isEmpty));
  try {
    const savedGame = await game.save();
    return res.status(200).json(savedGame);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

const deleteGame = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    await Game.deleteOne({ id });
    return res.status(200).json(true);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

export {
  getGame,
  getGames,
  createGame,
  updateGame,
  deleteGame,
};
