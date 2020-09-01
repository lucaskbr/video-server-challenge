export interface RegisterUserParam {
  username: string
  password: string
  mobileToken?: string
}

export interface RegisterUserResponse {
  id: string
  username: string
  token: string
}

export interface RegisterUser {
  register: (userParam: RegisterUserParam) => Promise<RegisterUserResponse>
}
