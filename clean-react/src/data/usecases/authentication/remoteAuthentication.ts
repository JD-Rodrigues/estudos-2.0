import { HttpPostClient } from "data/protocols/http/httpPostClient";
import { AuthenticationParams } from "../../../domain/usercases/authentication";

export class RemoteAuthentication {
  constructor(    
    private readonly httpPostClient:HttpPostClient,
    private readonly url="any_url"
    ) {}

  async auth(params:AuthenticationParams){
    await this.httpPostClient.post({ 
      url:this.url,
      body: params
    }) 
  }
}