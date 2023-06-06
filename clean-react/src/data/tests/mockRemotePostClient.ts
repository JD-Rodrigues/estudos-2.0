import { HttpPostClient, HttpPostParams } from "@/data/protocols/http/httpPostClient"
import { HttpResponse, StatusCode } from "@/data/protocols/http/httpResponse"
import { AccountModel } from "@/domain/models/accountModel"
import { AuthenticationParams } from "../../domain/usercases/authentication"

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