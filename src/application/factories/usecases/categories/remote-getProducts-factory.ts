import { RemoteGetCategories } from "../../../../data/usecases/remote-getCategories"

import { IGetProducts } from "../../../../domain/usecases/interfaces/category/getProducts"
import { makeApiUrl, makeAxiosHttpClient } from "../../http"

export const makeRemoteGetProducts = (): IGetProducts => {
  return new RemoteGetCategories(makeApiUrl("/products"), makeAxiosHttpClient())
}
