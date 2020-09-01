import { Controller } from '../../http/controller'
import { HttpReq } from '../../http/http-req'
import { HttpRes } from '../../http/http-res'
import { ok, serverError } from '../../http/http-helper'
import { JoinOrLeaveRoom } from '../../../../domain/port/in/room/join-or-leave-room'

export class JoinOrLeaveRoomController implements Controller {
  constructor (private readonly joinOrLeaveRoom: JoinOrLeaveRoom) {}

  async handle (req: HttpReq): Promise<HttpRes> {
    try {
      const room = await this.joinOrLeaveRoom.handle(req.body)
      return ok(room)
    } catch (err) {
      return serverError(err)
    }
  }
}
