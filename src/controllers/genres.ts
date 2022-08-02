import { Request, Response } from 'express';
import Genre from '../models/Genre';

/* Actions */
const getGenres = async (req: Request, res: Response): Promise<Response> => {
  const genres = await Genre.find();
  return res.status(200).json(genres);
};

const createGenre = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const newGenre = new Genre({ name: req.body.name });
  try {
    const genre = await newGenre.save();
    return res.status(200).json(genre);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

const deleteGenre = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    await Genre.deleteOne({ id });
    return res.status(200).json(true);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

export {
  getGenres,
  createGenre,
  deleteGenre,
};
