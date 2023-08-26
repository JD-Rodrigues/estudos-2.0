// eslint-disable-next-line import/no-unused-modules
import type axios from 'axios'
import { AxiosHttpClient } from './axios-http-client'
import { mockPostParams } from '@data/tests/index.ts'
import { mockAxiosResponse } from '@infra/tests/mockAxiosResponse.ts'
import { type HttpPostParams } from '@data/protocols/http/index.ts'

jest.mock('axios')

interface SutTypes {
  sut: AxiosHttpClient<any, any>
  postParams: HttpPostParams<any>
  axiosPostResponse: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  return {
    sut: new AxiosHttpClient(),
    postParams: mockPostParams(),
    axiosPostResponse: mockAxiosResponse()
  }
}

describe('AxiosHttpClient', () => {
  const { sut, postParams, axiosPostResponse } = makeSut()

  it('should call axios with the correct values', async () => {
    await sut.post(postParams)
    expect(axiosPostResponse.post).toHaveBeenCalledWith(
      postParams.url,
      postParams.body
    )
  })

  it('should returns the correct statuscode and body', async () => {
    const response = await sut.post(postParams)
    expect(response).toEqual(response)
  })
})
