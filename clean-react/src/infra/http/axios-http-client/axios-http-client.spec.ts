import { faker } from "@faker-js/faker"
import axios from 'axios'
import { AxiosHttpClient } from "./axios-http-client"

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

const makeAxiosPostResponse = () => {
  return {
    status: faker.number.int(),
    data: faker.animal.bird()
  } 
}

const mockedAxiosPostResponse = makeAxiosPostResponse()

mockedAxios.post.mockResolvedValue(mockedAxiosPostResponse)


 






describe('AxiosHttpClient', ()=> { 
  const makeSut = ()=> new AxiosHttpClient()
  const makePostParams = () => {
    return {
      url: faker.internet.url(), 
      body: {
        email: faker.internet.email(),
        password: faker.string.alphanumeric()
      }
    }
  }
  

  it('should call axios with the correct values', ()=> {    
    const sut = makeSut()
    const postParams = makePostParams()
    sut.post(postParams)  
    expect(mockedAxios.post).toHaveBeenCalledWith(postParams.url, postParams.body)
    }) 

  
  it('should returns the correct statuscode and body', ()=> {    
    const sut = makeSut()
    const postParams = makePostParams()
    const response = sut.post(postParams)  
    expect(response).resolves.toEqual(
      { 
        status: mockedAxiosPostResponse.status,
        body: mockedAxiosPostResponse.data
      }  
    )
  }) 
})   
