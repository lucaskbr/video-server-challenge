import { Room } from '../../../entity/room'

export interface GetRoomByIdQuery {
  get: (id: string) => Promise<Room>
}
