import { User } from "src/core/usuarios/model/User";
import UserRepository from "src/core/usuarios/service/UserRepository";
import { findUserByEmail, registerNewUser } from "../mysql/UserQueries";
import MySQLResponse from "../mysql/MySQLTypes";




class UserRepositoryMemory implements UserRepository {
    async findByEmail(email: string): Promise<MySQLResponse> {
        try {
            const user: MySQLResponse = await findUserByEmail(email)
            return user
        } catch (error) {
            console.log(error)
        }
    }
    async create(user: User): Promise<void> {
        registerNewUser(user)
    }

}

export default UserRepositoryMemory
