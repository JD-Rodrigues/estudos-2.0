

export interface HttpPostClient {
  post(path:string): Promise<void>
}