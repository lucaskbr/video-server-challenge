
import mongoose, { Schema, Document, Model } from 'mongoose'
import { hashPassword } from '../../../authentication/handle-password'

interface IUserSchema extends Document {
  username: string
  password: string
  mobileToken?: string
}

interface IUserBase extends IUserSchema {}

// Export this for strong typing
export interface IUser extends IUserBase {}

// Export this for strong typing
export interface IUserPopulated extends IUserBase {}

// For model
export interface IUserModel extends Model<IUser> {}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobileToken: { type: String, required: false }
})

UserSchema.pre<IUser>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password)
  }
})

export default mongoose.model<IUser, IUserModel>('User', UserSchema)
