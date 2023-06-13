import { HttpPostClient, HttpPostParams } from "@/data/protocols/http";
import { AuthenticationParams } from "@/domain/usercases/authentication";
import axios from "axios";


export class AxiosHttpClient {
  async post(params:HttpPostParams<AuthenticationParams>): Promise<void> {
    await axios.post(params.url, params.body)  
  }
}

 