import Usecase from "src/core/shared/Usecase";
import MySQLResponse from "src/external/mysql/MySQLTypes";
import UserRepository from "./UserRepository";

export default class GetUser implements Usecase<string, MySQLResponse> {

    constructor(private readonly repository:UserRepository) {}
    async execute(email: string): Promise<MySQLResponse> {
        try {
            const user = await this.repository.findByEmail(email)
            if(Object.keys(user![0]).length === 0) {
                console.log('Este usuário não existe!')
                return
            }

            return user
        } catch (error) {
            
        }
    }


}

// const userRepository = new UserRepositoryMemory()

// const getUser = new GetUser(userRepository)

// getUser.execute('contato@mb.com').then(console.log)