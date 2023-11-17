import Usuario from "../models/Usuario"
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient();

// preenchimento de dados dos alunos
export async function preencherUsuario(usuario: Usuario) 
{
    const dadosAluno = await prismaClient.usuario.create({
        data: 
        {  
            id: usuario.retornarId(),
            nome: usuario.retornarNome(),
            email: usuario.retornarEmail()           
        }
    })
}

export async function lerUsuario(usuario: Usuario){
    const dadosAluno = await prismaClient.usuario.findUnique({
        where: 
        {
            id: usuario.retornarId()
        }
    })
}


export async function deletarUsuario(usuario: Usuario) {
    const dadosAluno = await prismaClient.usuario.delete({
        where: {
            id: usuario.retornarId()
        }
    })
}

export async function updateUsuario(usuario: Usuario) {
    const dadosAluno = await prismaClient.usuario.update({
        where: {
            id: usuario.retornarId()
        },
        data:{
            id: usuario.retornarId(),
            nome: usuario.retornarNome(),
            email: usuario.retornarEmail()
        }
    })
}