import express, { Request, Response } from 'express';
import { UserRepositoryController } from './adapters/UserRepositoryController';
import RegisterUser from './core/usuarios/service/RegisterUser';
import UserRepositoryMemory from './external/memory/UserRepositoryMemory';


var app = express()
app.use(express.json());
app.listen(3001)



app.post('/costumers',(req:Request, res: Response)=>{
  const body = req.body
  const userRepositoryCostumers = new UserRepositoryMemory()
  const registerUser = new RegisterUser(userRepositoryCostumers)
  const userRepositoryController = new UserRepositoryController(registerUser, req.body)

  try {
    userRepositoryController.store()
    res.send(req.body)
  } catch (error) {
    res.send(error)
  }
  
  
} )



export default app