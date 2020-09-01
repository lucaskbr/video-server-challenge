import { User } from '../../../../../domain/entity/user'
import { RegisterUserPort } from '../../../../../domain/port/out/user/register-user-port'
import { userMapper } from '../user-mapper'
import userSchema, { IUser } from '../user-schema'

export class RegisterUserRepository implements RegisterUserPort {
  async register (userParams: IUser): Promise<User> {
    try {
      const user = await userSchema.create(userParams)
      return userMapper(user)
    } catch (err) {
      return null
    }
  }
}
