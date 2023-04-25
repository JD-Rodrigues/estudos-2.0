import { HttpPostClient } from "data/protocols/http/httpPostClient";
import { RemoteAuthentication } from "./remoteAuthentication";
import { HttpPostClientSpy } from "../../tests/mockRemotePostClient";
import { faker } from '@faker-js/faker';
import { makePostBody } from "../../tests/mockPostBody";


describe('RemoteAuthentication', () => { 
  const postBody = makePostBody()
  it('should call httpPostClient.post() with the correct url', ()=> {
    const url = faker.internet.url()
    const httpPostClientSpy = new HttpPostClientSpy
    const sut = new RemoteAuthentication(httpPostClientSpy, url)
    sut.auth(postBody)
    expect(httpPostClientSpy.url).toBe(url)
  })

  it('should call httpPostClient.post() with the correct body', ()=> {
    
    const httpPostClientSpy = new HttpPostClientSpy
    
    const sut = new RemoteAuthentication(httpPostClientSpy)
    sut.auth(postBody)
    expect(httpPostClientSpy.body).toEqual(postBody)
  })
})