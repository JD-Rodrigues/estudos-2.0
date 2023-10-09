import Usecase from "src/core/shared/Usecase";
import UserRepository from "./UserRepository";
import { NewUser } from "../model/User";



export default class RegisterUser implements Usecase<NewUser, void> {
    constructor(private readonly repository: UserRepository){}

    async execute(data: NewUser): Promise<void> {
        const {name, email, password} = data

        //Aqui os procedimentos de consultar e criar usuário são realizados utilizando métodos de uma classe que implementa a interface UserRepository. Esta classe se encontrará na camada externa da aplicação, enquanto a interface estará na camada de casos de uso (neste caso, core/usuarios/service). Dessa forma, ocorre uma inversão de dependência, pois temos uma classe dependendo de outra classe que, embora seja da camada externa, depende de uma abstração(interface) situada numa camada interna(casos de uso). Não seria esse o caso, se a chamada ao banco de dados fosse realizada diretamente aqui, na implementação do caso de uso.
        const userExists = await this.repository.findByEmail(email)
        if(Object.keys(userExists![0]).length > 0) {
            console.log('Este usuário já está cadastrado')
            
            return             
            
        }

        await this.repository.create({name, email, password})

        console.log('Usuário cadastrado:' + data)
    }
}