import { Router } from 'express'
import { routerAdapter } from '../adapter/web/http/router-adapter'
import { CreateRoomController } from '../adapter/web/controllers/rooms/create-room-controller'
import { CreateRoomService } from '../domain/service/create-room-service'
import { CreateRoomRepository } from '../adapter/persistance/mongo/room/repositories/create-room-repository'
import { JoinOrLeaveRoomController } from '../adapter/web/controllers/rooms/join-or-leave-room-controller'
import { JoinOrLeaveService } from '../domain/service/join-or-leave-room-service'
import { JoinOrLeaveRoomRepository } from '../adapter/persistance/mongo/room/repositories/join-or-leave-room-repository'
import { GetRoomByIdController } from '../adapter/web/controllers/rooms/get-room-by-id-controller'
import { GetRoomByIdService } from '../domain/service/get-room-by-id-service'
import { GetRoomByIdRepository } from '../adapter/persistance/mongo/room/repositories/get-room-by-id-repository'
import { GetUserByUsernameController } from '../adapter/web/controllers/users/get-user-by-username-controller'
import { GetUserByUsernameService } from '../domain/service/get-user-by-username-service'
import { GetUserByUsernameRepository } from '../adapter/persistance/mongo/user/repositories/get-user-by-username-repository'
import { authMiddleware } from '../adapter/middlewares/auth-middleware'
import { GetUserByIdRepository } from '../adapter/persistance/mongo/user/repositories/get-user-by-id-repository'
import { AuthRouteFactory } from './factories/auth-route-factory'
import { UsersRouteFactory } from './factories/users-route-factory'
import { RoomsRouteFactory } from './factories/rooms-route-factory'

const router = Router()

const authFactory = new AuthRouteFactory()
const usersRouteFactory = new UsersRouteFactory()
const roomsRouteFactory = new RoomsRouteFactory()

router.post('/auth/login', routerAdapter(authFactory.login()))

// users
router.get('/', routerAdapter(usersRouteFactory.getAll()))

router.post('/users', routerAdapter(usersRouteFactory.register()))

router.get('/users/:username', routerAdapter(usersRouteFactory.getByUsername()))

// rooms

router.post('/rooms', authMiddleware, routerAdapter(roomsRouteFactory.create()))

router.patch('/rooms', routerAdapter(roomsRouteFactory.joinOrLeave()))

router.get('/rooms/:id', routerAdapter(roomsRouteFactory.getById()))

export { router }
