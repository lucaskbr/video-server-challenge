import { User } from '../../../entity/user'

export interface GetUserByIdPort {
  get: (id: string) => Promise<User>
}
