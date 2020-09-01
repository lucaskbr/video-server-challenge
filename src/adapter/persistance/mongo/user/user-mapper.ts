import { User } from '../../../../domain/entity/user'
import { IUser } from './user-schema'

export const userMapper = (userModel: IUser): User => ({
  id: userModel._id,
  username: userModel.username,
  password: userModel.password,
  mobileToken: userModel.mobileToken
})
