import { HttpPostClient } from "data/protocols/http/httpPostClient"

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  async post(path: string): Promise<void> {
    this.url = path
  }
}