import express, { Request, Response } from 'express';
import RegisterUser from './core/usuarios/service/RegisterUser';
import UserRepositoryMySQL from './external/mysql/UserRepositoryMySQL';
import { RegisterUserController } from './adapters/RegisterUserController';
import { GetUserController } from './adapters/GetUserController';
import GetUser from './core/usuarios/service/GetUser';




var app = express();
app.use(express.json());


const userRepositoryMySQL = new UserRepositoryMySQL()
const registerUser = new RegisterUser(userRepositoryMySQL)
const getUser = new GetUser(userRepositoryMySQL)
const registerUserController = new RegisterUserController(app, registerUser)
const getUserController = new GetUserController(app, getUser)

app.listen(3002)

export default app