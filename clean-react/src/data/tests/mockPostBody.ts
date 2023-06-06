import { faker } from "@faker-js/faker"
import { AuthenticationParams } from "@/domain/usercases/authentication"

export const makePostBody = ():AuthenticationParams =>  ({ 
  email: faker.internet.email(),
  password: faker.internet.password()
})