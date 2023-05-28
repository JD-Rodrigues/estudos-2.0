import { HttpPostClient, HttpPostParams } from "data/protocols/http/httpPostClient"
import { AuthenticationParams } from "domain/usercases/authentication"
import { HttpResponse, StatusCode } from "../protocols/http/httpResponse"

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: AuthenticationParams
  response?: HttpResponse = {
    statusCode: StatusCode.unauthorized
  }
  async post(params:HttpPostParams): Promise<HttpResponse> { 
    this.url = params.url
    this.body= params.body 

    return this.response
  } 
}    