import { Request, Response } from 'express'
import { IAuthRequest } from '..//middleware/authMiddleware'

import User from '../models/User'

/* Actions */
const getUser = async (req: Request, res: Response): Promise<Response> => {
  const { login } = req.params
  try {
    const user = await User.find({ login })
    if (!user) {
      return res.status(404).json({ message: `No user with id ${login}` })
    }
    return res.status(200).json(user)
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message })
  }
}

const getCurrentUser = async (req: IAuthRequest, res: Response): Promise<Response> => {
  return res.status(200).json(req.user)
}

const deleteUser = async (req: IAuthRequest, res: Response): Promise<Response> => {
  const { user } = req
  if (!user) {
    return res.status(301).json({ message: 'Not allowed' })
  }

  try {
    await user.remove()
    return res.status(200).json(true)
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message })
  }
}

export {
  getUser,
  getCurrentUser,
  deleteUser,
}
