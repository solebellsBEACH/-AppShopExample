import {InvalidParamsError, UnexpectedError} from '../../domain/errors';
import {AddressModel} from '../../domain/models';
import {IAddress} from '../../domain/usecasaes/address';
import {HttpClient, HttpStatusCode} from '../protocols/http';

export class RemoteAddress implements IAddress {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<{address: AddressModel}>,
  ) {}

  address = async (accessToken: string) => {
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
