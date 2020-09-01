import { Controller } from '../../http/controller'
import { HttpReq } from '../../http/http-req'
import { HttpRes } from '../../http/http-res'
import { ok, serverError, badRequest, forbidden } from '../../http/http-helper'
import { InvalidParamError, MissingParamError } from '../../errors'
import { RegisterUser } from '../../../../domain/port/in/user/register-user'

export class RegisterUserController implements Controller {
  constructor (private readonly registerUserService: RegisterUser) {}

  async handle (req: HttpReq): Promise<HttpRes> {
    try {
      const { username, password, mobileToken } = req.body

      if (!username) {
        return badRequest(new MissingParamError('username'))
      }

      if (!password) {
        return badRequest(new MissingParamError('password'))
      }

      const userParam = { username, password, mobileToken }

      const user = await this.registerUserService.register(userParam)

      if (!user) {
        return forbidden(new InvalidParamError('username already in use'))
      }

      return ok(user)
    } catch (err) {
      return serverError(err)
    }
  }
}
