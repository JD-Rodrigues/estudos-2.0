export type HttpPostParams = {
  url:string
  body?: {
    email:string
    password:string
  }
}

export interface HttpPostClient {
  post(params:HttpPostParams): Promise<void>
}