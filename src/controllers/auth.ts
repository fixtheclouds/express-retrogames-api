import { Request, Response } from 'express';

const signIn = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200)
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
