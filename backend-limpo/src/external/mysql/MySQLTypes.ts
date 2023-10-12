import { FieldPacket, OkPacket, ProcedureCallPacket, ResultSetHeader, RowDataPacket } from "mysql2"

type MySQLResponse = ([OkPacket | RowDataPacket[] | ResultSetHeader[] | RowDataPacket[][] | OkPacket[] | ProcedureCallPacket, FieldPacket[]] | undefined)

export default MySQLResponse