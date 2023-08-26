// eslint-disable-next-line import/no-unused-modules
import RemoteAuthentication from '@data/usecases/authentication/remoteAuthentication.ts'
import {
  makeAccountModel,
  makePostBody,
  HttpPostClientSpy
} from '@data/tests/index.ts'
import { StatusCode } from '@data/protocols/http/index.ts'
import {
  InvalidCredentialError,
  UnexpectedError
} from '@domain/errors/index.ts'
import { type AuthenticationParams } from '@domain/usercases/authentication.ts'
import { type AccountModel } from '@domain/models/accountModel.ts'

interface MakeSutReturn {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
}

const makeSut = (url = 'any_url'): MakeSutReturn => {
  const httpPostClientSpy = new HttpPostClientSpy<
    AuthenticationParams,
    AccountModel
  >()
  httpPostClientSpy.res = {
    status: StatusCode.ok
  }
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  const postBody = makePostBody()
  it('should call httpPostClient.post() with the correct url', async () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(postBody)
    expect(httpPostClientSpy.url).toBe(url)
  })

  it('should call httpPostClient.post() with the correct body', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    await sut.auth(postBody)
    expect(httpPostClientSpy.body).toEqual(postBody)
  })

  it('should throw an "UnexpectedError" if HttpPostClient returns 204.', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.res = {
      status: StatusCode.noContent
    }

    const promise = sut.auth(postBody)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should throw an "UnexpectedError" if HttpPostClient returns 400.', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.res = {
      status: StatusCode.badRequest
    }
    const promise = sut.auth(postBody)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should throw an "InvalidCredentialError" if HttpPostClient returns 401.', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.res = {
      status: StatusCode.unauthorized
    }
    const promise = sut.auth(postBody)
    await expect(promise).rejects.toThrow(new InvalidCredentialError())
  })

  it('should throw an "UnexpectedError" if HttpPostClient returns 404.', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.res = {
      status: StatusCode.notFound
    }
    const promise = sut.auth(postBody)
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should return a random uuid if HttpPostClient returns 200.', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const responseBody = makeAccountModel()
    httpPostClientSpy.res = {
      status: StatusCode.ok,
      body: responseBody
    }
    const promise = sut.auth(postBody)
    await expect(promise).resolves.toEqual(responseBody)
  })
})
