import { User } from '../../entity/user'

export interface GetAllUsersPort {
  get: () => Promise<User[]>
}
