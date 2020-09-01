import { Room } from '../../../../domain/entity/room'
import { IUser } from '../user/user-schema'
import { IRoom } from './room-schema'

const mapUserRoom = (user: IUser): any => ({
  id: user._id,
  username: user.username
})

export const roomMapper = (roomModel: IRoom): Room => ({
  id: roomModel._id,
  guid: roomModel._id,
  name: roomModel.name,
  capacityLimit: roomModel.capacityLimit,
  hostUser: mapUserRoom(roomModel.hostUser),
  participants: roomModel.participants.map(user => (
    mapUserRoom(user)
  ))
})
