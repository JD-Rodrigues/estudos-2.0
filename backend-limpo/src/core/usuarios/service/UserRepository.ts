import MySQLResponse from "src/external/mysql/MySQLTypes"
import { User } from "../model/User"


export default interface UserRepository {
    findByEmail(email:string): Promise<MySQLResponse>
    create(user:User): Promise<void>
}