var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { InvalidCredentialError, UnexpectedError } from "@/domain/errors";
import { StatusCode } from "@/data/protocols/http";
export class RemoteAuthentication {
    constructor(url, httpPostClient) {
        this.url = url;
        this.httpPostClient = httpPostClient;
    }
    auth(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.httpPostClient.post({
                url: this.url,
                body: params
            });
            switch (res.response) {
                case StatusCode.unauthorized:
                    throw new InvalidCredentialError();
                case StatusCode.ok:
                    return res.body;
                default:
                    throw new UnexpectedError();
            }
        });
    }
}
