import { NextFunction, Request, Response } from "express";

import User, { IUserDocument } from "../models/User";
import jwtService from "../services/jwtService";

export interface IAuthRequest extends Request {
  user?: IUserDocument;
}

class AuthMiddleware {
  getMiddleware() {
    return async (req: IAuthRequest, res: Response, next: NextFunction) => {
      const authHeader = req.headers['authorization'];
      if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const token = authHeader.split(' ')[1];
      try {
        const { _id } = jwtService.verify(token);
        const user = await User.findById(_id);
        if (!user) {
          throw new Error('User not found');
        }
        req.user = user;
        return next();
      } catch (error) {
        return res.status(403).json({ message: 'Forbidden' });
      }
    };
  }
}

export default new AuthMiddleware();
