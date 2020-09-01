import { JoinOrLeaveRoomParams } from '../../../../../domain/port/in/room/join-or-leave-room'
import { JoinOrLeaveRoomPort } from '../../../../../domain/port/out/room/join-or-leave-room-port'
import roomSchema from '../room-schema'

export class JoinOrLeaveRoomRepository implements JoinOrLeaveRoomPort {
  async handle (joinOrLeaveRoomParams: JoinOrLeaveRoomParams): Promise<Boolean> {
    const { roomId, userId } = joinOrLeaveRoomParams
    const room = await roomSchema.findById(roomId)

    if (!room) {
      return false
    }
    const userIndex = room.participants.findIndex((id) => id == userId)

    if (userIndex >= 0) {
      room.participants.splice(userIndex, 1)
    } else {
      room.participants.push(userId)
      if (room.capacityLimit <= room.participants.length) {
        return false
      }
    }

    await roomSchema.updateOne({ _id: roomId }, {
      participants: room.participants
    })

    return true
  }
}
