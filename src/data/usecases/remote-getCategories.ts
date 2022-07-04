import { InvalidParamsError, UnexpectedError } from "../../domain/errors"
import { IGetCategories } from "../../domain/usecases/interfaces/category/getCategories"
import { Category } from "../../interfaces/models/Category"
import { HttpClient, HttpStatusCode } from "../protocols/http"

export class RemoteGetCategories implements IGetCategories {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<Category[]>
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
