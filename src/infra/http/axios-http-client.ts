import axios, { AxiosRequestHeaders, AxiosResponse } from "axios"
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from "../../data/protocols/http"

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        // headers: this.getAuthHeaders(data.headers),
        params: data.params,
        responseType: data.responseType,
      })
    } catch (error: any) {
      axiosResponse = error.response
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse?.data?.data || axiosResponse?.data,
      response: axiosResponse,
    }
  }

  getAuthHeaders(currentHeaders = {}): AxiosRequestHeaders {
    // return authorization header with basic auth credentials
    let token = localStorage.getItem("token")
    const headers = { ...currentHeaders } as any

    if (token) {
      headers.authorization = `Bearer ${token}`
    }

    return headers
  }
}
