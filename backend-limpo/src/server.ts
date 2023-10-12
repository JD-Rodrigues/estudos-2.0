import express, { Request, Response } from 'express';
import { UserRepositoryController } from './adapters/UserRepositoryController';
import RegisterUser from './core/usuarios/service/RegisterUser';
import UserRepositoryMemory from './external/memory/UserRepositoryMemory';



var app = express();
app.use(express.json());


const userRepositoryMemory = new UserRepositoryMemory()
const registerUser = new RegisterUser(userRepositoryMemory)
const userRepositoryController = new UserRepositoryController(app, registerUser)

app.listen(3002)

export default app