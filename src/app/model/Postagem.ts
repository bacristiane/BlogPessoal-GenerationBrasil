import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{

    public idPostagem: number
    public titulo: string
    public descricao: string
    public data: Date
    public usuario: User
    public tema: Tema
}