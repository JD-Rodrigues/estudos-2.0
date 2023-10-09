import { FieldPacket, OkPacket, ProcedureCallPacket, ResultSetHeader, RowDataPacket } from "mysql2"

type User = ([OkPacket | RowDataPacket[] | ResultSetHeader[] | RowDataPacket[][] | OkPacket[] | ProcedureCallPacket, FieldPacket[]] | undefined)

export type NewUser = {
    name: string
    email: string
    password: string
}

export default User;