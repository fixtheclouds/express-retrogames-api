import jwt from 'jsonwebtoken';

export interface IUserPayload {
  _id: string;
  login: string;
}

class JwtService {
  sign(payload: IUserPayload, secret: string): string {
    return jwt.sign(
      payload,
      this.createSecret(secret),
      { expiresIn: process.env.JWT_TTL },
    ) as string;
  }

  verify(token: string): IUserPayload {
    return jwt.verify(token, process.env.JWT_SECRET as string) as unknown as IUserPayload;
  }

  private createSecret(key: string) {
    return `${process.env.JWT_SECRET}${key}`;
  }
}

export default new JwtService();
