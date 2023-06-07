import { HttpPostClient } from "data/protocols/http/httpPostClient";
import { AuthenticationParams } from "@/domain/usercases/authentication";
import { InvalidCredentialError } from "@/domain/errors/invalidCredentialError";
import { StatusCode } from "@/data/protocols/http/httpResponse";
import { UnexpectedError } from "@/domain/errors/unexpectedError";
import { AccountModel } from "@/domain/models/accountModel";

export class RemoteAuthentication {
  constructor( 
    private readonly url:string,   
    private readonly httpPostClient:HttpPostClient<AuthenticationParams, AccountModel>,
    ) {}

  async auth(params:AuthenticationParams){
    const res = await this.httpPostClient.post({ 
      url:this.url,
      body: params
    }) 

    switch (res.response) {
      case StatusCode.unauthorized:
        throw new InvalidCredentialError();
      case StatusCode.ok:
        return res.body  
      default: 
        throw new UnexpectedError();
    }
  }
}