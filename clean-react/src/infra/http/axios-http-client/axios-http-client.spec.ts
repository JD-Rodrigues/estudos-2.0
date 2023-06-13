import { faker } from "@faker-js/faker"
import axios from 'axios'
import { AxiosHttpClient } from "./axios-http-client"

jest.mock('axios')

describe('AxiosHttpClient', ()=> {
  it('should call axios with the correct url', ()=> {
    const sut = new AxiosHttpClient()
    const url = faker.internet.url()
    sut.post({url:url})
    expect(axios.post).toHaveBeenCalledWith(url) 
  })
})