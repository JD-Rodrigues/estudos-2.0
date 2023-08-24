import { HttpPostClient } from "data/protocols/http";
import { Authentication, AuthenticationParams } from "@/domain/usercases/authentication";
import { InvalidCredentialError, UnexpectedError } from "@/domain/errors";
import { StatusCode } from "@/data/protocols/http";
import { AccountModel } from "@/domain/models/accountModel";

export class RemoteAuthentication implements Authentication { 
  constructor( 
    private readonly url:string,   
    private readonly httpPostClient:HttpPostClient<AuthenticationParams, AccountModel>,
    ) {}

  async auth(params:AuthenticationParams): Promise<AccountModel>{
    const res = await this.httpPostClient.post({ 
      url:this.url,
      body: params
    }) 

    switch (res.status) {
      case StatusCode.unauthorized:
        throw new InvalidCredentialError();
      case StatusCode.ok:
        return res.body   
      default: 
        throw new UnexpectedError();
    }
  }
}