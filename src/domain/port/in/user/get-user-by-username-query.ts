import { User } from '../../../entity/user'

export interface GetUserByUsernameQuery {
  get: (username: string) => Promise<User | null>
}
