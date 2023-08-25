import { faker } from '@faker-js/faker'
import { AuthenticationParams } from '@domain/usercases/authentication.ts'
import { AccountModel } from '@domain/models/accountModel.ts'

export const makePostBody = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const makeAccountModel = (): AccountModel => ({
  accessToken: faker.string.alpha.toString()
})
