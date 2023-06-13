import { faker } from "@faker-js/faker"
import axios from 'axios'
import { AxiosHttpClient } from "./axios-http-client"

jest.mock('axios')
const makeSut = ()=> new AxiosHttpClient()

describe('AxiosHttpClient', ()=> {
  it('should call axios with the correct values', ()=> {
    const sut = makeSut()
    const url = faker.internet.url()
    const body = {email:'contato@jd.com', password:'123' }
    sut.post({url:url, body: body})  
    expect(axios.post).toHaveBeenCalledWith(url, body) 
  }) 

  
})