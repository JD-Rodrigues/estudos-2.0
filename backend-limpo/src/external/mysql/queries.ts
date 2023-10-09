
import connection from '../../dbconfig'



export const getUsers = async ()=> {
    const conn = await connection()
    const res = await conn.query('SELECT * FROM users');
    
    return res   
}

export const registerNewUser = async ({name, email, password}:any)=> {
    try {
        const conn = await connection()
        const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
        const values = [name, email, password];
    
        const res = await conn.query(sql, values);
    } catch (error) {
        console.log(error)
    }  
    
}

export const findUserByEmail = async (email:string)=> {
    try {
        const conn = await connection()
        const sql = 'SELECT * FROM users WHERE email = ?';
        const value = email;
    
        const res = await conn.query(sql, value);

        return res
    } catch (error) {
        console.log(error)
    }      
}

// registerUser(
//     {
//         name: 'Cleuto',
//         email: 'contato@cleuto.com',
//         password: '000000'
//     }
// ).then(console.log)

// findUserByEmail('contato@do.com').then(data => console.log(data![0]))