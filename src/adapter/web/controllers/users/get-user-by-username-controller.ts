import { Controller } from '../../http/controller'
import { HttpReq } from '../../http/http-req'
import { HttpRes } from '../../http/http-res'
import { ok, serverError, badRequest } from '../../http/http-helper'
import { MissingParamError } from '../../errors'
import { GetUserByUsernameQuery } from '../../../../domain/port/in/user/get-user-by-username-query'

export class GetUserByUsernameController implements Controller {
  constructor (private readonly getUserByUsernameService: GetUserByUsernameQuery) {}

  async handle (req: HttpReq): Promise<HttpRes> {
    try {
      const { username } = req.params

      if (!username) {
        return badRequest(new MissingParamError('username'))
      }

      const user = await this.getUserByUsernameService.get(username)
      return ok(user)
    } catch (err) {
      return serverError(err)
    }
  }
}
