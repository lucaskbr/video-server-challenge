
import { User } from '../entity/user'
import { GetAllUsersQuery } from '../port/in/user/get-all-users-query'
import { GetAllUsersPort } from '../port/out/user/get-all-users-port'

export class GetAllUsersService implements GetAllUsersQuery {
  constructor (private readonly getAllUsersPort: GetAllUsersPort) {}

  async get (): Promise<User[]> {
    return this.getAllUsersPort.get()
  }
}
