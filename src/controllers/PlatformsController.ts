import express from 'express';
import Platform from '../models/Platform'

const indexPlatform = (req: express.Request, res: express.Response) => {
  res.json('Implement index');
};

const showPlatform = (req: express.Request, res: express.Response) => {
  res.json('Implement show');
};

const createPlatform = async (req: express.Request, res: express.Response) => {
  if (!req.body) return res.sendStatus(400);

  const newPlatform = new Platform({ name: req.body.name });
  const platform = await newPlatform.save();
  res.json(platform);
};

const updatePlatform = (req: express.Request, res: express.Response) => {
  res.json('Implement update');
};

const destroyPlatform = (req: express.Request, res: express.Response) => {
  res.json('Implement destroy');
};

export {
  indexPlatform,
  showPlatform,
  createPlatform,
  updatePlatform,
  destroyPlatform,
};
