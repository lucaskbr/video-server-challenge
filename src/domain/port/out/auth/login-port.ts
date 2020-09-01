import { Auth } from '../../../entity/auth'
import { User } from '../../../entity/user'
import { LoginParams } from '../../in/auth/login'

export interface LoginPort {
  get: (createRoomParams: LoginParams) => Promise<User>
}
