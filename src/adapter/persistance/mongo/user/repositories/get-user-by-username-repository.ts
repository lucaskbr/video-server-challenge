import { User } from '../../../../../domain/entity/user'
import { GetUserByUsernamePort } from '../../../../../domain/port/out/user/get-user-by-username-port'
import { userMapper } from '../user-mapper'
import userSchema from '../user-schema'

export class GetUserByUsernameRepository implements GetUserByUsernamePort {
  async get (username: string): Promise<User> {
    const userMongo = await userSchema.findOne({ username })
    return userMapper(userMongo)
  }
}
