import jwt from 'jsonwebtoken'
import 'dotenv/config'

export interface IUserPayload {
  _id: string
  login: string
}

class JwtService {
  sign(payload: IUserPayload, secret: string): string {
    return jwt.sign(
      payload,
      this.createSecret(secret),
      { expiresIn: process.env.JWT_TTL },
    ) as string
  }

  verify(token: string, secret: string): IUserPayload {
    return jwt.verify(token, this.createSecret(secret)) as IUserPayload
  }

  decodePayload(token: string): IUserPayload {
    return jwt.decode(token) as IUserPayload
  }

  private createSecret(key: string) {
    return `${process.env.JWT_SECRET}${key}`
  }
}

export default new JwtService()
