import { Controller } from '../../adapter/web/http/controller'
import { GetAllUsersRepository } from '../../adapter/persistance/mongo/user/repositories/get-all-users-repository'
import { GetAllUsersController } from '../../adapter/web/controllers/users/get-all-users-controller'
import { GetAllUsersService } from '../../domain/service/get-all-users-service'
import { RegisterUserController } from '../../adapter/web/controllers/users/register-user-controller'
import { RegisterUserService } from '../../domain/service/register-user-service'
import { RegisterUserRepository } from '../../adapter/persistance/mongo/user/repositories/register-user-repository'
import { Authentication } from '../../adapter/authentication/authentication'
import { GetUserByUsernameController } from '../../adapter/web/controllers/users/get-user-by-username-controller'
import { GetUserByUsernameService } from '../../domain/service/get-user-by-username-service'
import { GetUserByUsernameRepository } from '../../adapter/persistance/mongo/user/repositories/get-user-by-username-repository'

export class UsersRouteFactory {
  getAll = (): Controller => (
    new GetAllUsersController(
      new GetAllUsersService(
        new GetAllUsersRepository()
      )
    )
  )

  register = (): Controller => (
    new RegisterUserController(
      new RegisterUserService(
        new RegisterUserRepository(),
        new Authentication()
      )
    )
  )

  getByUsername =(): Controller => (
    new GetUserByUsernameController(
      new GetUserByUsernameService(
        new GetUserByUsernameRepository()
      )
    )
  )
}
