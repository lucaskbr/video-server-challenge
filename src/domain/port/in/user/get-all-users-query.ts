import { User } from '../../../entity/user'

export interface GetAllUsersQuery {
  get: () => Promise<User[]>
}
