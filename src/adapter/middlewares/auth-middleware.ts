import { exception } from 'console'
import { NextFunction, Response } from 'express'
import { Authentication } from '../authentication/authentication'
import { AuthInfoReq } from '../web/http/router-adapter'

const authMiddleware = async (req: AuthInfoReq, res: Response, next: NextFunction): Promise<any> => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await new Authentication().verify(token)

    if (!decoded.data.id) {
      throw new Error('Token invalid')
    }

    req.userId = decoded.data.id
    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}

export { authMiddleware }
