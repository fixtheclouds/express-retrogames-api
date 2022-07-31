import express from 'express';
import Platform from '../models/Platform'

const getPlatforms = async (req: express.Request, res: express.Response) => {
  const platforms = await Platform.find();
  return res.status(200).json(platforms);
};

const getPlatform = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const platform = await Platform.findById(id);
  return res.status(200).json(platform);
};

const createPlatform = async (req: express.Request, res: express.Response) => {
  if (!req.body) return res.sendStatus(400);

  const newPlatform = new Platform({ name: req.body.name });
  const platform = await newPlatform.save();
  return res.status(200).json(platform);
};

const updatePlatform = (req: express.Request, res: express.Response) => {
  return res.json('Implement update');
};

const deletePlatform = (req: express.Request, res: express.Response) => {
  return res.json('Implement delete');
};

export {
  getPlatforms,
  getPlatform,
  createPlatform,
  updatePlatform,
  deletePlatform,
};
