import { Room } from '../../../entity/room'

export interface CreateRoomParams {
  hostUserId: string
  name: string
  capacityLimit: number
}

export interface CreateRoom {
  create: (createRoomParams: CreateRoomParams) => Promise<Room>
}
