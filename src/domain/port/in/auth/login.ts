import { Auth } from '../../../entity/auth'

export interface LoginParams {
  username: string
  password: string
}

export interface Login {
  login: (createRoomParams: LoginParams) => Promise<Auth>
}
