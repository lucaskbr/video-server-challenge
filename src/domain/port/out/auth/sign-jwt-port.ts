export interface SignJwtParams {
  id: string
  username: string
}

export interface SignJwtPort {
  sign: (signParams: SignJwtParams) => string
}
