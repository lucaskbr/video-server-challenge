import jwt from 'jsonwebtoken'
import { SignJwtParams, SignJwtPort } from '../../domain/port/out/auth/sign-jwt-port'

export class Authentication implements SignJwtPort {
  sign = (signJwtParams: SignJwtParams): string => (
    jwt.sign({
      expiresIn: '2 days',
      data: signJwtParams
    }, process.env.SECRET)
  )

  verify = (token: string): any => (
    jwt.verify(token, process.env.SECRET)
  )
}
