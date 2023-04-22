import { RemoteAuthentication } from "./remoteAuthentication";
import { HttpPostClientSpy } from "../../tests/mockRemotePostClient";
describe('RemoteAuthentication', () => {
    it('should call httpPostClient with the correct url', () => {
        const url = 'any_url';
        const httpPostClientSpy = new HttpPostClientSpy;
        const sut = new RemoteAuthentication(url, httpPostClientSpy);
        sut.auth();
        expect(httpPostClientSpy.url).toBe(url);
    });
});
