import { RemoteAuthentication } from "./remoteAuthentication";
import { HttpPostClientSpy } from "@/data/tests/mockRemotePostClient";
import { makePostBody } from "@/data/tests/mockPostBody";
import { StatusCode } from "@/data/protocols/http/httpResponse";
import { InvalidCredentialError } from "@/domain/errors/invalidCredentialError";
import { UnexpectedError } from "@/domain/errors/unexpectedError";
const makeSut = (url = 'any_url') => {
    const httpPostClientSpy = new HttpPostClientSpy();
    httpPostClientSpy.res = {
        response: StatusCode.ok
    };
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    return {
        sut,
        httpPostClientSpy
    };
};
describe('RemoteAuthentication', () => {
    const postBody = makePostBody();
    it('should call httpPostClient.post() with the correct url', () => {
        const url = 'other_url';
        const { sut, httpPostClientSpy } = makeSut(url);
        sut.auth(postBody);
        expect(httpPostClientSpy.url).toBe(url);
    });
    it('should call httpPostClient.post() with the correct body', () => {
        const { sut, httpPostClientSpy } = makeSut();
        sut.auth(postBody);
        expect(httpPostClientSpy.body).toEqual(postBody);
    });
    it('should throw an "UnexpectedError" if HttpPostClient returns 204.', () => {
        const { sut, httpPostClientSpy } = makeSut();
        httpPostClientSpy.res = {
            response: StatusCode.noContent
        };
        const promise = sut.auth(postBody);
        expect(promise).rejects.toThrow(new UnexpectedError());
    });
    it('should throw an "UnexpectedError" if HttpPostClient returns 400.', () => {
        const { sut, httpPostClientSpy } = makeSut();
        httpPostClientSpy.res = {
            response: StatusCode.badRequest
        };
        const promise = sut.auth(postBody);
        expect(promise).rejects.toThrow(new UnexpectedError());
    });
    it('should throw an "InvalidCredentialError" if HttpPostClient returns 401.', () => {
        const { sut, httpPostClientSpy } = makeSut();
        httpPostClientSpy.res = {
            response: StatusCode.unauthorized
        };
        const promise = sut.auth(postBody);
        expect(promise).rejects.toThrow(new InvalidCredentialError());
    });
    it('should throw an "UnexpectedError" if HttpPostClient returns 404.', () => {
        const { sut, httpPostClientSpy } = makeSut();
        httpPostClientSpy.res = {
            response: StatusCode.notFound
        };
        const promise = sut.auth(postBody);
        expect(promise).rejects.toThrow(new UnexpectedError());
    });
});
