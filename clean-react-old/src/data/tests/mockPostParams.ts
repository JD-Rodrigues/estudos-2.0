import { HttpPostParams } from "@/data/protocols/http"
import { faker } from "@faker-js/faker"

export const mockPostParams = ():HttpPostParams<any> => {
  return {
    url: faker.internet.url(), 
    body: {
      email: faker.internet.email(),
      password: faker.string.alphanumeric()
    }
  }
}