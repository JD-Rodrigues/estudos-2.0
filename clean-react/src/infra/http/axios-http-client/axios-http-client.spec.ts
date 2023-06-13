import { faker } from "@faker-js/faker"
import axios from 'axios'
import { AxiosHttpClient } from "./axios-http-client"

jest.mock('axios')
const makeSut = ()=> new AxiosHttpClient()

describe('AxiosHttpClient', ()=> {
  it('should call axios with the correct url', ()=> {
    const sut = makeSut()
    const url = faker.internet.url()
    sut.post({url:url})
    expect(axios.post).toHaveBeenCalledWith(url) 
  })
})