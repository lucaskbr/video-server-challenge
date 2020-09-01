
import { RegisterUser, RegisterUserParam, RegisterUserResponse } from '../port/in/user/register-user'
import { SignJwtPort } from '../port/out/auth/sign-jwt-port'
import { RegisterUserPort } from '../port/out/user/register-user-port'

export class RegisterUserService implements RegisterUser {
  constructor (private readonly registerUserPort: RegisterUserPort,
    private readonly signJwtPort: SignJwtPort
  ) {}

  async register (userParam: RegisterUserParam): Promise<RegisterUserResponse> {
    const user = await this.registerUserPort.register(userParam)

    if (!user) {
      return null
    }

    const { id, username } = user

    const jwt = this.signJwtPort.sign({ id, username })

    return {
      id,
      username,
      token: jwt
    }
  }
}
