
import { JoinOrLeaveRoom, JoinOrLeaveRoomParams } from '../port/in/room/join-or-leave-room'
import { JoinOrLeaveRoomPort } from '../port/out/room/join-or-leave-room-port'

export class JoinOrLeaveService implements JoinOrLeaveRoom {
  constructor (private readonly getAllUsersPort: JoinOrLeaveRoomPort) {}

  async handle (joinOrLeaveRoomParams: JoinOrLeaveRoomParams): Promise<Boolean> {
    return this.getAllUsersPort.handle(joinOrLeaveRoomParams)
  }
}
