import { faker } from "@faker-js/faker"
import axios from 'axios'
import { AxiosHttpClient } from "./axios-http-client"
import { mockPostParams } from "@/data/tests"
import { mockAxiosResponse } from "@/infra/tests/mockAxiosResponse" 
import { HttpPostParams } from "@/data/protocols/http"

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient<any, any>
  postParams: HttpPostParams<any>
  axiosPostResponse: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes =>  {  
  return {
    sut: new AxiosHttpClient(),
    postParams: mockPostParams(),
    axiosPostResponse: mockAxiosResponse() 
  }
}

describe('AxiosHttpClient', ()=> { 

  const {sut, postParams, axiosPostResponse} = makeSut()  

  it('should call axios with the correct values', ()=> {    
    sut.post(postParams)  
    expect(axiosPostResponse.post).toHaveBeenCalledWith(postParams.url, postParams.body)
    }) 

  
  it('should returns the correct statuscode and body', async ()=> {    
    const response = await sut.post(postParams)        
    expect(response).toEqual(response)  
  }) 
})     
  