import { RemoteAuthentication } from "./remoteAuthentication";
import { HttpPostClientSpy } from "../../tests/mockRemotePostClient";
import { faker } from '@faker-js/faker';
describe('RemoteAuthentication', () => {
    it('should call httpPostClient with the correct url', () => {
        const url = faker.internet.url();
        const httpPostClientSpy = new HttpPostClientSpy;
        const sut = new RemoteAuthentication(url, httpPostClientSpy);
        sut.auth();
        expect(httpPostClientSpy.url).toBe(url);
    });
});
