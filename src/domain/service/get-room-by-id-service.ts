
import { Room } from '../entity/room'
import { GetRoomByIdQuery } from '../port/in/room/get-room-by-id'
import { GetRoomByIdPort } from '../port/out/room/get-room-by-Id-port'

export class GetRoomByIdService implements GetRoomByIdQuery {
  constructor (private readonly getRoomByIdPort: GetRoomByIdPort) {}

  async get (id: string): Promise<Room> {
    return this.getRoomByIdPort.get(id)
  }
}
