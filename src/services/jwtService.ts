import jwt from 'jsonwebtoken';

export interface IUserPayload {
  _id: string;
  login: string;
}

class JwtService {
  sign(payload: IUserPayload): string {
    return jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      { expiresIn: process.env.JWT_TTL },
    ) as string;
  }

  verify(token: string): IUserPayload {
    return jwt.verify(token, process.env.JWT_SECRET as string) as unknown as IUserPayload;
  }
}

export default new JwtService();
