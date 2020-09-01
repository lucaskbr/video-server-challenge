
import { Room } from '../../../../../domain/entity/room'
import { GetRoomByIdPort } from '../../../../../domain/port/out/room/get-room-by-Id-port'
import roomSchema from '../room-schema'
import { roomMapper } from '../room-mapper'

export class GetRoomByIdRepository implements GetRoomByIdPort {
  async get (id: string): Promise<Room> {
    const room = await roomSchema.findById(id)
      .populate('hostUser')
      .populate('participants')
      .exec()
    return roomMapper(room)
  }
}
