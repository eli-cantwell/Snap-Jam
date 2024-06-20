export interface UserData {
  auth0_id: string
  user_name: string
  pwd: string
  email: string
  full_name: string
}

export interface User extends UserData {
  id: number
}