var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AxiosHttpClient } from "./axios-http-client";
import { mockPostParams } from "@/data/tests";
import { mockAxiosResponse } from "@/infra/tests/mockAxiosResponse";
jest.mock('axios');
const makeSut = () => {
    return {
        sut: new AxiosHttpClient(),
        postParams: mockPostParams(),
        axiosPostResponse: mockAxiosResponse()
    };
};
describe('AxiosHttpClient', () => {
    const { sut, postParams, axiosPostResponse } = makeSut();
    it('should call axios with the correct values', () => {
        sut.post(postParams);
        expect(axiosPostResponse.post).toHaveBeenCalledWith(postParams.url, postParams.body);
    });
    it('should returns the correct statuscode and body', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield sut.post(postParams);
        expect(response).toEqual(response);
    }));
});
