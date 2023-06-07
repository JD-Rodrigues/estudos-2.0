import { faker } from "@faker-js/faker"
import { AuthenticationParams } from "@/domain/usercases/authentication"
import { AccountModel } from "@/domain/models/accountModel"

export const makePostBody = ():AuthenticationParams =>  ({ 
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const makeAccountModel = ():AccountModel =>  ({ 
  accessToken: faker.random.alphaNumeric()
})