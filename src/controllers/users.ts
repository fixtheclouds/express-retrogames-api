import { Request, Response } from 'express';

import User from '../models/User';

/* Actions */
const getUser = async (req: Request, res: Response): Promise<Response> => {
  const { login } = req.params;
  try {
    const user = await User.find({ login });
    if (!user) {
      return res.status(404).json({ message: `No user with id ${login}` });
    }
    return res.status(200).json(user);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400);

  const { login, password } = req.body;
  const newUser = new User({
    login,
    password,
    createdAt: new Date()
  });
  try {
    const user = await newUser.save();
    return res.status(200).json(user);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const { login } = req.params;
  try {
    // TODO: Implement deleting current user
    return res.status(200).json(true);
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message });
  }
};

export {
  getUser,
  createUser,
  deleteUser,
};
