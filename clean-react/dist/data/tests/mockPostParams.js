import { faker } from "@faker-js/faker";
export const mockPostParams = () => {
    return {
        url: faker.internet.url(),
        body: {
            email: faker.internet.email(),
            password: faker.string.alphanumeric()
        }
    };
};
