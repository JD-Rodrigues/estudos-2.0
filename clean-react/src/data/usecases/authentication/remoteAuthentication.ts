import { HttpPostClient } from "data/protocols/http/httpPostClient";
import { AuthenticationParams } from "@/domain/usercases/authentication";
import { InvalidCredentialError } from "@/domain/errors/invalidCredentialError";
import { StatusCode } from "@/data/protocols/http/httpResponse";
import { UnexpectedError } from "@/domain/errors/unexpectedError";

export class RemoteAuthentication {
  constructor( 
    private readonly url:string,   
    private readonly httpPostClient:HttpPostClient,
    ) {}

  async auth(params:AuthenticationParams){
    const res = await this.httpPostClient.post({ 
      url:this.url,
      body: params
    }) 

    switch (res.response) {
      case StatusCode.unauthorized:
        throw new InvalidCredentialError();
      case StatusCode.unexpected:
        throw new UnexpectedError()    
      default: 
        return Promise.resolve()
        break;
    }
  }
}