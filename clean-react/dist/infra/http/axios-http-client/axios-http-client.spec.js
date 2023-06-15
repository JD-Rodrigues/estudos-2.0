import { faker } from "@faker-js/faker";
console.log(faker.helpers.objectEntry({ nome: 'JD' }));
import axios from 'axios';
import { AxiosHttpClient } from "./axios-http-client";
jest.mock('axios');
const mockedAxios = axios;
const axiosPostResponse = {
    status: faker.number.int(),
    data: faker.animal.bird()
};
mockedAxios.post.mockResolvedValue(axiosPostResponse);
describe('AxiosHttpClient', () => {
    const makeSut = () => new AxiosHttpClient();
    it('should call axios with the correct values', () => {
        const sut = makeSut();
        const url = faker.internet.url();
        const body = { email: 'contato@jd.com', password: '123' };
        sut.post({ url: url, body: body });
        expect(mockedAxios.post).toHaveBeenCalledWith(url, body);
    });
    it('should returns the correct statuscode and body', () => {
        const sut = makeSut();
        const url = faker.internet.url();
        const body = { email: 'contato@jd.com', password: '123' };
        const response = sut.post({ url: url, body: body });
        response.then(console.log);
        expect(response).resolves.toEqual({
            status: axiosPostResponse.status,
            body: {
                accessToken: axiosPostResponse.data,
            }
        });
    });
});
