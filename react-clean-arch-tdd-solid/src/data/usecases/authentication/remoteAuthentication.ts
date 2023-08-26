import { HttpPostClient, StatusCode } from '@data/protocols/http/index.ts'
import {
  Authentication,
  AuthenticationParams
} from '@domain/usercases/authentication.ts'
import {
  InvalidCredentialError,
  UnexpectedError
} from '@domain/errors/index.ts'
import { AccountModel } from '@domain/models/accountModel.ts'

class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {
    this.url = url
    this.httpPostClient = httpPostClient
  }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const res = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (res.status) {
      case StatusCode.unauthorized:
        throw new InvalidCredentialError()
      case StatusCode.ok:
        return res.body!
      default:
        throw new UnexpectedError()
    }
  }
}

export default RemoteAuthentication
