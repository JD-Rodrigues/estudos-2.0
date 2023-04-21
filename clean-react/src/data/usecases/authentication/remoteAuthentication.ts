import { HttpPostClient } from "data/protocols/http/httpPostClient";

export class RemoteAuthentication {
  constructor(
    private readonly url:string, 
    private readonly httpPostClient:HttpPostClient
    ) {}

  async auth(){
    await this.httpPostClient.post(this.url)
  }
}