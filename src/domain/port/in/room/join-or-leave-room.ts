export interface JoinOrLeaveRoomParams {
  userId: string
  roomId: string
}

export interface JoinOrLeaveRoom {
  handle: (joinOrLeaveRoomParams: JoinOrLeaveRoomParams) => Promise<Boolean>
}
