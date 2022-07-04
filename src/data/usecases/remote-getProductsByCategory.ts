import { InvalidParamsError, UnexpectedError } from "../../domain/errors"

import { IGetProductsByCategory } from "../../domain/usecases/interfaces/category/getProductsByCategory"
import { Product } from "../../interfaces/models/Product"
import { HttpClient, HttpStatusCode } from "../protocols/http"

export class RemoteGetProductsByCategory implements IGetProductsByCategory {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<Product[]>
  ) {}

  get = async () => {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "get",
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.badRequest:
        throw new InvalidParamsError(httpResponse.body?.message)
      default:
        throw new UnexpectedError()
    }
  }
}
