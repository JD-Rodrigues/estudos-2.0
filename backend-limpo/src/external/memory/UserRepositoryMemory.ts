import User from "src/core/usuarios/model/User";
import UserRepository from "src/core/usuarios/service/UserRepository";

export default class UserRepositoryMemory implements UserRepository {
    findByEmail(email: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    create(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
