import { Room } from '../../../entity/room'

export interface GetRoomByIdPort {
  get: (id: string) => Promise<Room>
}
