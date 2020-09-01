import { Controller } from '../../adapter/web/http/controller'

import { CreateRoomController } from '../../adapter/web/controllers/rooms/create-room-controller'
import { JoinOrLeaveRoomController } from '../../adapter/web/controllers/rooms/join-or-leave-room-controller'
import { GetRoomByIdController } from '../../adapter/web/controllers/rooms/get-room-by-id-controller'

import { CreateRoomService } from '../../domain/service/create-room-service'
import { JoinOrLeaveService } from '../../domain/service/join-or-leave-room-service'
import { GetRoomByIdService } from '../../domain/service/get-room-by-id-service'

import { CreateRoomRepository } from '../../adapter/persistance/mongo/room/repositories/create-room-repository'
import { GetUserByIdRepository } from '../../adapter/persistance/mongo/user/repositories/get-user-by-id-repository'
import { JoinOrLeaveRoomRepository } from '../../adapter/persistance/mongo/room/repositories/join-or-leave-room-repository'
import { GetRoomByIdRepository } from '../../adapter/persistance/mongo/room/repositories/get-room-by-id-repository'

export class RoomsRouteFactory {
  create = (): Controller => (
    new CreateRoomController(
      new CreateRoomService(
        new CreateRoomRepository(),
        new GetUserByIdRepository()
      )
    )
  )

  joinOrLeave = (): Controller => (
    new JoinOrLeaveRoomController(
      new JoinOrLeaveService(
        new JoinOrLeaveRoomRepository()
      )
    )
  )

  getById = (): Controller => (
    new GetRoomByIdController(
      new GetRoomByIdService(
        new GetRoomByIdRepository()
      )
    )
  )
}
