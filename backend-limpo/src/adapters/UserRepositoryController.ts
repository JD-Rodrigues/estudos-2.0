import RegisterUser from "../core/usuarios/service/RegisterUser";
import { Express, Request, Response } from "express";



export class UserRepositoryController {
    server: Express;
    usecase: RegisterUser
    constructor(server:Express, usecase:RegisterUser){
        this.server = server
        this.usecase = usecase

        this.server.post('/costumers',async(req:Request, res: Response)=>{
            const body = req.body
          
            try {
                await this.usecase.execute(req.body)
                res.send(req.body)
            } catch (error) {
              res.send(error)
            }             
        } )
    }
}


// const routes = async (req:Request, res:Response) => {
    
//         // const costumer = {
//         //     name: "Beiçola", 
//         //     email:"contato@beiço.com", 
//         //     password: "123456789"
//         // }

//     res.send('Olá, mundo!')
        
//         // await registerCustomer.execute(req.)

        

    
// }

// export default routes

