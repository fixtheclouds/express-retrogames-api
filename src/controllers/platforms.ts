import { Request, Response } from 'express';
import Platform from '../models/Platform';
import { omitBy, isEmpty } from 'lodash';

/* Actions */
const getPlatforms = async (req: Request, res: Response): Promise<Response> => {
  const platforms = await Platform.find();
  return res.status(200).json(platforms);
};

const getPlatform = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const platform = await Platform.findById(id);
    if (!platform) {
      return res.status(404).json({ message: `No platform with id ${id}` })
    }
    return res.status(200).json(platform);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

const createPlatform = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const { name, year, manufacturer } = req.body
  const newPlatform = new Platform({ name, year, manufacturer });
  try {
    const platform = await newPlatform.save();
    return res.status(200).json(platform);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

const updatePlatform = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const { id } = req.params;
  const { name, year, manufacturer } = req.body;
  const platform = await Platform.findById(id);
  Object.assign(platform, omitBy({ name, year, manufacturer }, isEmpty));
  try {
    const savedPlatform = await platform.save();
    return res.status(200).json(savedPlatform);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

const deletePlatform = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  try {
    const platform = await Platform.findById(id);
    await platform.remove();
    return res.status(200).json(true);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

export {
  getPlatforms,
  getPlatform,
  createPlatform,
  updatePlatform,
  deletePlatform,
};
