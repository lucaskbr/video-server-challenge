
import { Schema, Document, Model, model } from 'mongoose'
import { IUser } from '../user/user-schema'

interface IRoomSchema extends Document {
  name: string
  capacityLimit: number
}

interface IRoomBase extends IRoomSchema {}

// Export this for strong typing
export interface IRoom extends IRoomBase {
  hostUser: IUser['_id']
  participants?: Array<IUser['_id']>
}

// Export this for strong typing
export interface IRoomPopulated extends IRoomBase {
  hostUser: IUser
  participants?: IUser[]
}

// For model
export interface IRoomModel extends Model<IRoom> {}

const RoomSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  hostUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: false
  }],
  capacityLimit: {
    type: Number,
    required: true
  }
})

export default model<IRoom, IRoomModel>('Room', RoomSchema)
