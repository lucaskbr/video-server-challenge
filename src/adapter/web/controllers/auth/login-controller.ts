import { Controller } from '../../http/controller'
import { HttpReq } from '../../http/http-req'
import { HttpRes } from '../../http/http-res'
import { ok, serverError, badRequest, unauthorized, forbidden } from '../../http/http-helper'
import { AccessDeniedError, MissingParamError } from '../../errors'
import { Login } from '../../../../domain/port/in/auth/login'

export class LoginController implements Controller {
  constructor (private readonly loginService: Login) {}

  async handle (req: HttpReq): Promise<HttpRes> {
    try {
      const { username, password } = req.body

      if (!username) {
        return badRequest(new MissingParamError('username'))
      }

      if (!password) {
        return badRequest(new MissingParamError('password'))
      }

      const loginParam = { username, password }

      const auth = await this.loginService.login(loginParam)

      if (!auth) {
        return forbidden(new AccessDeniedError())
      }

      return ok(auth)
    } catch (err) {
      return serverError(err)
    }
  }
}
