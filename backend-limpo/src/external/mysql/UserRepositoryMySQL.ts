import { User } from "src/core/usuarios/model/User";
import UserRepository from "src/core/usuarios/service/UserRepository";
import MySQLResponse from "../mysql/MySQLTypes";
import connection from "../../dbconfig";




class UserRepositoryMySQL implements UserRepository {
    async findByEmail(email: string): Promise<MySQLResponse> {
        try {
            const conn = await connection()
            const sql = 'SELECT * FROM users WHERE email = ?';            
        
            const res = await conn.query(sql, email);
    
            return res
        } catch (error) {
            console.log(error)
        }    
    }
    async create(user: User): Promise<void> {
        try {
            const conn = await connection()
            const { name, email, password } = user
            const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
            const values = [name, email, password];
        
            conn.query(sql, values);
        } catch (error) {
            console.log(error)
        }  
    }

}

export default UserRepositoryMySQL
