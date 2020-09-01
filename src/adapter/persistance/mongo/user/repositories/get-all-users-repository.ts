import { User } from '../../../../../domain/entity/user'
import { GetAllUsersPort } from '../../../../../domain/port/out/user/get-all-users-port'
import { userMapper } from '../user-mapper'
import userSchema from '../user-schema'

export class GetAllUsersRepository implements GetAllUsersPort {
  async get (): Promise<User[]> {
    const usersMongo = await userSchema.find({})
    const users = usersMongo.map(user => userMapper(user))

    return users
  }
}
