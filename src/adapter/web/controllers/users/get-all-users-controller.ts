import { Controller } from '../../http/controller'
import { HttpReq } from '../../http/http-req'
import { HttpRes } from '../../http/http-res'
import { ok, serverError } from '../../http/http-helper'
import { GetAllUsersQuery } from '../../../../domain/port/in/user/get-all-users-query'

export class GetAllUsersController implements Controller {
  constructor (private readonly getAllUsersService: GetAllUsersQuery) {}

  async handle (_: HttpReq): Promise<HttpRes> {
    try {
      const users = await this.getAllUsersService.get()
      return ok(users)
    } catch (err) {
      return serverError(err)
    }
  }
}
