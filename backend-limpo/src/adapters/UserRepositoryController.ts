import RegisterUser from "../core/usuarios/service/RegisterUser";
import { NewUser } from "src/core/usuarios/model/User";


export class UserRepositoryController {
    case: RegisterUser;
    body:NewUser
    constructor(usecase: RegisterUser, data:NewUser){
        this.case = usecase
        this.body = data
    }

    store = ()=> {
        this.case.execute(this.body)
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

