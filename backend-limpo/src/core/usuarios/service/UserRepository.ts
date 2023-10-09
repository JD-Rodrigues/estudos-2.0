import User, { NewUser } from "../model/User"

export default interface UserRepository {
    findByEmail(email:string): Promise<User>
    create(user:NewUser): Promise<void>
}