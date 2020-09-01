
import { Room } from '../entity/room'
import { CreateRoom, CreateRoomParams } from '../port/in/room/create-room'
import { GetUserById } from '../port/in/user/get-user-by-id'
import { CreateRoomPort } from '../port/out/room/create-room-port'

export class CreateRoomService implements CreateRoom {
  constructor (
    private readonly createRoomPort: CreateRoomPort,
    private readonly getUserById: GetUserById
  ) {}

  async create (createRoomParams: CreateRoomParams): Promise<Room> {
    const { hostUserId } = createRoomParams

    const userExists = await this.getUserById.get(hostUserId)

    if (!userExists) {
      throw new Error('Something bad happened')
    }

    return this.createRoomPort.create(createRoomParams)
  }
}
