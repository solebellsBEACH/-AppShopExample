import { RemoteAuthentication } from "../../../../data/usecases"
import { IAuthentication } from "../../../../domain/usecases/interfaces/category/authentication"
import { makeApiUrl, makeAxiosHttpClient } from "../../http"

export const makeRemoteAuthentication = (): IAuthentication => {
  return new RemoteAuthentication(
    makeApiUrl("/auth/login"),
    makeAxiosHttpClient()
  )
}
