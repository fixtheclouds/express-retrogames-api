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
  const platform = await Platform.findById(id);
  return res.status(200).json(platform);
};

const createPlatform = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const newPlatform = new Platform({ name: req.body.name });
  const platform = await newPlatform.save();
  return res.status(200).json(platform);
};

const updatePlatform = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const { id } = req.params;
  const { name, year } = req.body;
  const platform = await Platform.findById(id);
  Object.assign(platform, omitBy({ name, year }, isEmpty));
  const savedPlatform = await platform.save();
  return res.status(200).json(savedPlatform);
};

const deletePlatform = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  await Platform.deleteOne({ id });
  return res.status(200).json(true);
};

export {
  getPlatforms,
  getPlatform,
  createPlatform,
  updatePlatform,
  deletePlatform,
};
