import express from 'express';
import Platform from '../models/Platform'

const getPlatforms = (req: express.Request, res: express.Response) => {
  return res.status(200).json('Implement index');
};

const getPlatform = (req: express.Request, res: express.Response) => {
  res.json('Implement show');
};

const createPlatform = async (req: express.Request, res: express.Response) => {
  if (!req.body) return res.sendStatus(400);

  const newPlatform = new Platform({ name: req.body.name });
  const platform = await newPlatform.save();
  return res.status(200).json(platform);
};

const updatePlatform = (req: express.Request, res: express.Response) => {
  res.json('Implement update');
};

const deletePlatform = (req: express.Request, res: express.Response) => {
  res.json('Implement delete');
};

export {
  getPlatforms,
  getPlatform,
  createPlatform,
  updatePlatform,
  deletePlatform,
};
