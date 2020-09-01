import { Controller } from '../../http/controller'
import { HttpReq } from '../../http/http-req'
import { HttpRes } from '../../http/http-res'
import { ok, serverError } from '../../http/http-helper'
import { GetRoomByIdQuery } from '../../../../domain/port/in/room/get-room-by-id'

export class GetRoomByIdController implements Controller {
  constructor (private readonly getRoomByIdService: GetRoomByIdQuery) {}

  async handle (req: HttpReq): Promise<HttpRes> {
    try {
      const room = await this.getRoomByIdService.get(req.params.id)
      return ok(room)
    } catch (err) {
      return serverError(err)
    }
  }
}
