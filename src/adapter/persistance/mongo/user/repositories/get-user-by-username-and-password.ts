import { User } from '../../../../../domain/entity/user'
import { LoginParams } from '../../../../../domain/port/in/auth/login'
import { LoginPort } from '../../../../../domain/port/out/auth/login-port'
import { passwordMatch } from '../../../../authentication/handle-password'
import { userMapper } from '../user-mapper'
import userSchema from '../user-schema'

export class GetUserByUsernameAndPasswordRepository implements LoginPort {
  async get ({ username, password }: LoginParams): Promise<User> {
    const user = await userSchema.findOne({ username })

    if (!user) {
      return null
    }

    const match = await passwordMatch(password, user.password)

    if (!match) {
      return null
    }

    return userMapper(user)
  }
}
