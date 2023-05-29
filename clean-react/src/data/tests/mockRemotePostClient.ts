import { HttpPostClient, HttpPostParams } from "data/protocols/http/httpPostClient"
import { AuthenticationParams } from "domain/usercases/authentication"
import { HttpResponse } from "@/data/protocols/http/httpResponse"

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: AuthenticationParams
  res: HttpResponse = {
    response: {
      unauthorized:404
    }
  }
  async post(params:HttpPostParams): Promise<HttpResponse> { 
    this.url = params.url
    this.body= params.body 

    return Promise.resolve(this.res)
  } 
}    