import { type AccountModel } from '@domain/models/accountModel.ts'

export interface AuthenticationParams {
  email: string
  password: string
}

export interface Authentication {
  auth: (params: AuthenticationParams) => Promise<AccountModel>
}
