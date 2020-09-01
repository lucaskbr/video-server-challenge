import { User } from '../../../../../domain/entity/user'
import { GetUserByIdPort } from '../../../../../domain/port/out/user/get-user-by-id-port'
import { userMapper } from '../user-mapper'
import userSchema from '../user-schema'

export class GetUserByIdRepository implements GetUserByIdPort {
  async get (id: string): Promise<User> {
    const userMongo = await userSchema.findById(id)
    return userMapper(userMongo)
  }
}
