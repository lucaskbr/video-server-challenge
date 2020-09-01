import { User } from '../../../entity/user'

export interface GetUserByUsernamePort {
  get: (username: string) => Promise<User | null>
}
