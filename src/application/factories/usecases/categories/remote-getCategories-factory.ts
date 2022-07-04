import { RemoteGetCategories } from "../../../../data/usecases/remote-getCategories"
import { IGetCategories } from "../../../../domain/usecases/interfaces/category/getCategories"
import { makeApiUrl, makeAxiosHttpClient } from "../../http"

export const makeRemoteGetCategories = (): IGetCategories => {
  return new RemoteGetCategories(
    makeApiUrl("/products/categories"),
    makeAxiosHttpClient()
  )
}
