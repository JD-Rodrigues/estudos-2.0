import { type HttpPostParams } from '@data/protocols/http/index.ts'
import { faker } from '@faker-js/faker'

export const mockPostParams = (): HttpPostParams<any> => {
  return {
    url: faker.internet.url(),
    body: {
      email: faker.internet.email(),
      password: faker.string.alphanumeric()
    }
  }
}
