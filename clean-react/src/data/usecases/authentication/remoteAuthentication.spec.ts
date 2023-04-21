import { HttpPostClient } from "data/protocols/http/httpPostClient";
import { RemoteAuthentication } from "./remoteAuthentication";



describe('RemoteAuthentication', () => {
  class HttpPostClientSpy implements HttpPostClient {
    url?: string
    async post(path: string): Promise<void> {
      this.url = path
    }
  }
  it('should call httpPostClient with the correct url', ()=> {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})