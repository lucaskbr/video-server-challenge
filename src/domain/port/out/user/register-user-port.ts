import { User } from '../../../entity/user'
import { RegisterUserParam } from '../../in/user/register-user'

export interface RegisterUserPort {
  register: (user: RegisterUserParam) => Promise<User>
}
