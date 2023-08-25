import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse
} from '@data/protocols/http/index.ts'
import axios from 'axios'

export class AxiosHttpClient<T, R> implements HttpPostClient<T, R> {
  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    const response = await axios.post(params.url, params.body)

    return {
      status: response.status,
      body: response.data
    }
  }
}
