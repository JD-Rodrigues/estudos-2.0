import User, { NewUser } from "src/core/usuarios/model/User";
import UserRepository from "src/core/usuarios/service/UserRepository";
import { findUserByEmail, registerNewUser } from "../mysql/queries";




class UserRepositoryMemory implements UserRepository {
    async findByEmail(email: string): Promise<User> {
        try {
            const user: User = await findUserByEmail(email)
            return user
        } catch (error) {
            console.log(error)
        }
    }
    async create(user: NewUser): Promise<void> {
        registerNewUser(user)
    }

}

export default UserRepositoryMemory
