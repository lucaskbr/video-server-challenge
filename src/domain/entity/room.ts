export type Room = {
  id: string
  name: string
  guid: string
  hostUser: UserModel
  participants: UserModel[]
  capacityLimit: number
}

type UserModel = {
  id: string
  username: string
}
