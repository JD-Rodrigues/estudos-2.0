import { HttpPostClient, HttpPostParams } from "@/data/protocols/http"
import { HttpResponse, StatusCode } from "@/data/protocols/http"

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  res: HttpResponse<R> = {
    response: StatusCode.unauthorized,
  }
  async post(params:HttpPostParams<T>): Promise<HttpResponse<R>> { 
    this.url = params.url
    this.body = params.body 

    return Promise.resolve(this.res)
  } 
}    