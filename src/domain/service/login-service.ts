import { Auth } from '../entity/auth'
import { Login, LoginParams } from '../port/in/auth/login'
import { LoginPort } from '../port/out/auth/login-port'
import { SignJwtPort } from '../port/out/auth/sign-jwt-port'

export class LoginService implements Login {
  constructor (
    private readonly loginPort: LoginPort,
    private readonly signJwtPort: SignJwtPort
  ) {}

  async login (loginParams: LoginParams): Promise<Auth> {
    const user = await this.loginPort.get(loginParams)

    if (!user) {
      return null
    }

    const { id, username } = user

    const jwt = this.signJwtPort.sign({ id, username })

    return {
      username,
      token: jwt
    }
  }
}
