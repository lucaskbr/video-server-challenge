import { HttpRes } from './http-res'
import { UnauthorizedError, ServerError } from '../errors'

export const badRequest = (error: Error): HttpRes => ({
  statusCode: 400,
  body: error
})

export const forbidden = (error: Error): HttpRes => ({
  statusCode: 403,
  body: error
})

export const unauthorized = (message?: string): HttpRes => ({
  statusCode: 401,
  body: new UnauthorizedError(message)
})

export const serverError = (error: Error): HttpRes => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = (data: any): HttpRes => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpRes => ({
  statusCode: 204,
  body: null
})
