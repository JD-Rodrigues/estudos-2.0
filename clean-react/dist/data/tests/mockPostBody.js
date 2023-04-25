import { faker } from "@faker-js/faker";
export const makePostBody = () => {
    return {
        email: faker.internet.email(),
        password: faker.internet.password()
    };
};
