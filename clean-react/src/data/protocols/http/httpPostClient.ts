export type HttpPostParams = {
  url:string
  email?:string
  password?:string
}

export interface HttpPostClient {
  post(params:HttpPostParams): Promise<void>
}