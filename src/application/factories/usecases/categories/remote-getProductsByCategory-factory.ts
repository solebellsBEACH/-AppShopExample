import { RemoteGetCategories } from "../../../../data/usecases/remote-getCategories"
import { IGetProductsByCategory } from "../../../../domain/usecases/interfaces/category/getProductsByCategory"
import { makeApiUrl, makeAxiosHttpClient } from "../../http"

export const makeRemoteGetProductsByCategory = (
  category: string
): IGetProductsByCategory => {
  return new RemoteGetCategories(
    makeApiUrl(`/products/category/${category}`),
    makeAxiosHttpClient()
  )
}
