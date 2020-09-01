import { JoinOrLeaveRoomParams } from '../../in/room/join-or-leave-room'

export interface JoinOrLeaveRoomPort {
  handle: (joinOrLeaveRoomParams: JoinOrLeaveRoomParams) => Promise<Boolean>
}
