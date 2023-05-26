import { HttpPostClient, HttpPostParams } from "data/protocols/http/httpPostClient"
import { AuthenticationParams } from "domain/usercases/authentication"

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: AuthenticationParams
  async post(params:HttpPostParams): Promise<void> { 
    this.url = params.url
    this.body= params.body 
  } 
}    