import { HttpClient, HttpStatusCode } from "../protocols/http"

import { InvalidCredentialsError, UnexpectedError } from "../../domain/errors"
import {
  IAuthentication,
  AuthenticationParams,
} from "../../domain/usecases/interfaces/category/authentication"
import { AccountModel } from "../../interfaces/models/Account"

export class RemoteAuthentication implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<AccountModel>
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: "post",
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError("Unauthorized")
      default:
        throw new UnexpectedError()
    }
  }
}
