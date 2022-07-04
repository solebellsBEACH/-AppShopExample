import {ISignUp} from '../../domain/usecasaes/signUp';
import {HttpClient, HttpStatusCode} from '../protocols/http';
import {AccountModel, UserModel} from '../../domain/models';
import {InvalidParamsError, UnexpectedError} from '../../domain/errors';

export class RemoteSignUp implements ISignUp {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<AccountModel>,
  ) {}

  async add(params: UserModel) {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new InvalidParamsError(httpResponse.body?.message);
      default:
        throw new UnexpectedError();
    }
  }
}
