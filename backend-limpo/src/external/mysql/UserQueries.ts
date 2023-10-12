
import connection from '../../dbconfig'



export const getUsers = async ()=> {
    const conn = await connection()
    const res = await conn.query('SELECT * FROM users');
    
    return res   
}

export const registerNewUser = async ({name, email, password}:any)=> {
    
    
}

export const findUserByEmail = async (email:string)=> {
      
}

// registerUser(
//     {
//         name: 'Cleuto',
//         email: 'contato@cleuto.com',
//         password: '000000'
//     }
// ).then(console.log)

// findUserByEmail('contato@do.com').then(data => console.log(data![0]))