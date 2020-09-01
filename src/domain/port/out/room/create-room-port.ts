import { Room } from '../../../entity/room'
import { CreateRoomParams } from '../../in/room/create-room'

export interface CreateRoomPort {
  create: (createRoomParams: CreateRoomParams) => Promise<Room>
}
