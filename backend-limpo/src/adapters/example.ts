import RegisterUser from "../core/usuarios/service/RegisterUser";
import UserRepositoryMemory from "../external/memory/UserRepositoryMemory";

const userRepository = new UserRepositoryMemory()
const registerCustomer = new RegisterUser(userRepository)

const costumer = {
    name: "Ewerton", 
    email:"contato@eve.com", 
    password: "123456789"
}

registerCustomer.execute(costumer)

