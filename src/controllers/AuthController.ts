import { Request, Response } from 'express'

import jwtService from '../services/jwtService'
import { IAuthRequest } from '../middleware/authMiddleware'
import User from '../models/User'

class AuthController {
  public async signIn(req: Request, res: Response): Promise<Response> {
    try {
      const { login, password } = req.body

      const user = await User.findOne({ login })
      if (!user || !(await user.comparePassword(password))) {
        return res.status(400).json({ message: 'Invalid credentials' })
      }

      return res.status(200).json({
        accessToken: jwtService.sign({ _id: user._id, login: user.login }, user.secret),
      })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  public async signUp(req: Request, res: Response): Promise<Response> {
    const { login, password } = req.body

    try {
      const user = await User.findOne({ login })
      if (user) {
        return res.status(400).json({ message: 'Login is already taken' })
      }
      await User.create({ login, password })
      return res.status(201).json(true)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }

  public async signOut(req: IAuthRequest, res: Response): Promise<Response> {
    try {
      const { user } = req
      if (!user) {
        return res.status(403).json({ message: 'You need to be logged in' })
      }
      await user.logout()
      return res.status(201).json(true)
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export default new AuthController()
