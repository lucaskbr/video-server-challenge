import { Controller } from '../../adapter/web/http/controller'
import { Authentication } from '../../adapter/authentication/authentication'
import { GetUserByUsernameAndPasswordRepository } from '../../adapter/persistance/mongo/user/repositories/get-user-by-username-and-password'
import { LoginController } from '../../adapter/web/controllers/auth/login-controller'
import { LoginService } from '../../domain/service/login-service'

export class AuthRouteFactory {
  login = (): Controller => (
    new LoginController(
      new LoginService(
        new GetUserByUsernameAndPasswordRepository(),
        new Authentication()
      )
    )
  )
}
