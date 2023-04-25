import { faker } from "@faker-js/faker";
export const makePostBody = () => ({
    email: faker.internet.email(),
    password: faker.internet.password()
});
