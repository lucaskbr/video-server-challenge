
import { Room } from '../../../../../domain/entity/room'
import { CreateRoomParams } from '../../../../../domain/port/in/room/create-room'
import { CreateRoomPort } from '../../../../../domain/port/out/room/create-room-port'
import roomSchema from '../room-schema'
import { roomMapper } from '../room-mapper'

export class CreateRoomRepository implements CreateRoomPort {
  async create (createRoomParams: CreateRoomParams): Promise<Room> {
    const { name, hostUserId, capacityLimit } = createRoomParams

    const room = await roomSchema.create({
      name,
      hostUser: hostUserId,
      capacityLimit,
      participants: [
        hostUserId
      ]
    })

    return roomMapper(room)
  }
}
