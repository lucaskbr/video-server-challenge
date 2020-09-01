import { User } from '../entity/user'
import { GetUserByUsernameQuery } from '../port/in/user/get-user-by-username-query'
import { GetUserByUsernamePort } from '../port/out/user/get-user-by-username-port'

export class GetUserByUsernameService implements GetUserByUsernameQuery {
  constructor (private readonly getUserByUsername: GetUserByUsernamePort) {}

  async get (username: string): Promise<User> {
    return this.getUserByUsername.get(username)
  }
}
