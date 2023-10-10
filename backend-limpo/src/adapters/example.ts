import RegisterUser from "../core/usuarios/service/RegisterUser";
import UserRepositoryMemory from "../external/memory/UserRepositoryMemory";
import server from '../server'
import http from 'http'

const userRepository = new UserRepositoryMemory()
const registerCustomer = new RegisterUser(userRepository)

const routes = async (req:http.IncomingMessage, res:http.ServerResponse) => {
    if(req.url === '/teste'&& req.method ==='GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end('Apenas testando esta rota para GET :D')
    }

    if(req.url === '/users' && req.method ==='POST') {
        // const costumer = {
        //     name: "Beiçola", 
        //     email:"contato@beiço.com", 
        //     password: "123456789"
        // }

        let costumer = ''

        req.on('data', (chunk)=> {
            costumer += chunk
        })
        
        // await registerCustomer.execute(req.)

        

        req.on('end', ()=> {
            // JSON.parse(costumer)
            // JSON.stringify(costumer)
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(`Usuário cadastrado: ${costumer}`)
        })
    }
}

export default routes

