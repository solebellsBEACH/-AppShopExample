export interface User {
  id: number
  email: number
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  phone: number
}
