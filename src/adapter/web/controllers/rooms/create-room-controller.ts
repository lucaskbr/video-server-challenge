import { Controller } from '../../http/controller'
import { HttpReq } from '../../http/http-req'
import { HttpRes } from '../../http/http-res'
import { badRequest, ok, serverError } from '../../http/http-helper'
import { CreateRoom } from '../../../../domain/port/in/room/create-room'
import { MissingParamError } from '../../errors'

export class CreateRoomController implements Controller {
  constructor (private readonly createRoomService: CreateRoom) {}

  async handle (req: HttpReq): Promise<HttpRes> {
    try {
      const hostUserId = req.userId
      const { name, capacityLimit } = req.body

      if (!name) {
        return badRequest(new MissingParamError('name'))
      }

      if (!capacityLimit) {
        return badRequest(new MissingParamError('capacityLimit'))
      }

      const room = await this.createRoomService.create({
        hostUserId,
        name,
        capacityLimit
      })

      return ok(room)
    } catch (err) {
      return serverError(err)
    }
  }
}
