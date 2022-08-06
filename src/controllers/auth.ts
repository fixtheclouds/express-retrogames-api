import { Request, Response } from 'express';

import jwtService from '../services/jwtService';
import User from '../models/User';

const signIn = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({ login });
    if (!user || !(await user.comparePasswords(password))) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json({
      accessToken: jwtService.sign({ _id: user._id, login: user.login }),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const signUp = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200)
}

const signOut = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200)
}

export {
  signIn,
  signUp,
  signOut
}
