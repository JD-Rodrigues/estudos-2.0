import { HttpPostClient, HttpPostParams } from '@/data/protocols/http'
import { HttpResponse, StatusCode } from '@/data/protocols/http'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  res: HttpResponse<R> = {
    status: StatusCode.unauthorized
  }
  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    // O código abaixo existe porque, ao testar se  o método está sendo chamado com os argumentos corretos, estes arqumentos precisam estar salvos em algum lugar, a fim de efetuar a checagem. neste caso, estão sendo atribuídos às propriedades da classe, que também existem por esse motivo.
    this.url = params.url
    this.body = params.body

    return Promise.resolve(this.res)
  }
}
