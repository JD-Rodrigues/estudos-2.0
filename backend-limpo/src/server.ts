import express, { Request, Response } from 'express';
import { UserRepositoryController } from './adapters/UserRepositoryController';
import RegisterUser from './core/usuarios/service/RegisterUser';
import UserRepositoryMySQL from './external/mysql/UserRepositoryMySQL';




var app = express();
app.use(express.json());


const userRepositoryMySQL = new UserRepositoryMySQL()
const registerUser = new RegisterUser(userRepositoryMySQL)
const userRepositoryController = new UserRepositoryController(app, registerUser)

app.listen(3002)

export default app