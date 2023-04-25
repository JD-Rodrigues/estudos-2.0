import { HttpPostClient } from "data/protocols/http/httpPostClient";
import { AuthenticationParams } from "../../../domain/usercases/authentication";

export class RemoteAuthentication {
  constructor( 
    private readonly url:string,   
    private readonly httpPostClient:HttpPostClient,
    ) {}

  async auth(params:AuthenticationParams){
    await this.httpPostClient.post({ 
      url:this.url,
      body: params
    }) 
  }
}