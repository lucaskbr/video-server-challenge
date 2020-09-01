import { Controller } from './controller'
import { HttpReq } from './http-req'
import { Request, Response } from 'express'

export interface AuthInfoReq extends Request {
  userId?: string
}

export const routerAdapter = (controller: Controller) => {
  return async (req: AuthInfoReq, res: Response) => {
    const httpRequest: HttpReq = {
      body: req.body,
      params: req.params,
      userId: req.userId
    }

    const httpRes = await controller.handle(httpRequest)

    if (httpRes.statusCode >= 200 && httpRes.statusCode <= 299) {
      return res.status(httpRes.statusCode).json(httpRes.body)
    }
    return res.status(httpRes.statusCode).json({
      error: httpRes.body.message
    })
  }
}
