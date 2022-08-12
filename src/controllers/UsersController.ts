import { Request, Response } from 'express'
import { IAuthRequest } from '../middleware/authMiddleware'

import User from '../models/User'

class UsersController {
  public async getUser(req: Request, res: Response): Promise<Response> {
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

  public async getCurrentUser(req: IAuthRequest, res: Response): Promise<Response> {
    return res.status(200).json(req.user)
  }

  public async deleteUser(req: IAuthRequest, res: Response): Promise<Response> {
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
}

export default new UsersController()
