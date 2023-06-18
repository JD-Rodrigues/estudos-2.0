import axios from 'axios';
import { faker } from '@faker-js/faker';

export const mockAxiosResponse = () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>

  mockedAxios.post.mockResolvedValue(
    {
      status: faker.number.int(),
      data: faker.animal.bird()
    } 
  )

  return mockedAxios
}



