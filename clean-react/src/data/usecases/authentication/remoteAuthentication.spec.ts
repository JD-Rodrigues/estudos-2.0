import { HttpPostClient } from "data/protocols/http/httpPostClient";
import { RemoteAuthentication } from "./remoteAuthentication";
import { HttpPostClientSpy } from "@/data/tests/mockRemotePostClient";  
import { faker } from '@faker-js/faker';
import { makePostBody } from "@/data/tests/mockPostBody"; 
import { StatusCode } from "@/data/protocols/http/httpResponse";
import { InvalidCredentialError } from "@/domain/errors/invalidCredentialError";

const makeSut = (url='any_url') => {
  const httpPostClientSpy = new HttpPostClientSpy()
  httpPostClientSpy.res = {
    response: StatusCode.noStatus
  }
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }  
}

describe('RemoteAuthentication', () => { 
  const postBody = makePostBody()
  it('should call httpPostClient.post() with the correct url', ()=> {
    const url = 'other_url'
    const {sut, httpPostClientSpy} = makeSut(url)    
    sut.auth(postBody)
    expect(httpPostClientSpy.url).toBe(url)
  })

  it('should call httpPostClient.post() with the correct body', ()=> {   
    const {sut, httpPostClientSpy} = makeSut()
    sut.auth(postBody)
    expect(httpPostClientSpy.body).toEqual(postBody)
  })

  it('should throw an "InvalidCredentialError" if HttpPostClient returns 401.', ()=> {   
    const {sut, httpPostClientSpy} = makeSut()
    httpPostClientSpy.res = {
      response: StatusCode.unauthorized
    }
    const promise = sut.auth(postBody)
    expect(promise).rejects.toThrow(new InvalidCredentialError())
  })
})