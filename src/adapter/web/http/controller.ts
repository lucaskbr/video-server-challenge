import { HttpReq } from './http-req'
import { HttpRes } from './http-res'

export interface Controller {
  handle: (httpRequest: HttpReq) => Promise<HttpRes>
}
