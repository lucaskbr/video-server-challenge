import { User } from '../../../entity/user'

export interface GetUserById {
  get: (id: string) => Promise<User | null>
}
