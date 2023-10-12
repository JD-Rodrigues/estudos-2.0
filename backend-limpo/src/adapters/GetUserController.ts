import { Express, Request, Response } from "express";
import GetUser from "src/core/usuarios/service/GetUser";
 
export class GetUserController {
constructor(
        private readonly server: Express, 
        private readonly usecase: GetUser 
    ){
        this.server.get('/costumers',async(req:Request, res: Response)=>{
            const email = req.body.email
            try {
                const user = await this.usecase.execute(email)
                if(Object.keys(user![0]).length === 0) {
                    res.send('Este usuário não existe')
                    return
                }

                res.send(user![0])
            } catch (error) {
              res.send(error)
            }             
        } )
    }
}