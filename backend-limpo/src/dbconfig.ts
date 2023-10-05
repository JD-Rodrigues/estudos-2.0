import mysql from 'mysql2/promise';

var connection = async ()=> {
  const conn = await mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '3',
    database : 'backend_limpo'
  });

  return conn
}

export default connection


 
