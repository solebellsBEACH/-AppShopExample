import { AccountModel } from "../../../../interfaces/models/Account"

export type AuthenticationParams = {
  username: string
  password: string
}

export interface IAuthentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
