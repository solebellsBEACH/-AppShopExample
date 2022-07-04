import {InvalidParamsError, UnexpectedError} from '../../domain/errors';
import {ILogout} from '../../domain/usecasaes/logout';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteLogout implements ILogout {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<string>,
  ) {}

  logout = async (accessToken: string) => {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.badRequest:
        throw new InvalidParamsError(httpResponse.body?.message);
      default:
        throw new UnexpectedError();
    }
  };
}
