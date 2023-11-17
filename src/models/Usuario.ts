export default class Usuario
{
    private id: string;
    private nome: string;
    private email: string;

    constructor(id: string, nome: string, email: string)
    {
        this.id = id;
        this.nome = nome
        this.email = email;
    }


    public inserirId(id: string)
    {
        this.id = id;
    }

    public retornarId()
    {
        return this.id;
    }

    public inserirNome(nome: string)
    {
        this.nome = nome;
    }

    public retornarNome()
    {
        return this.nome;
    }

    public inserirEmail(email: string)
    {
        this.email = email;
    }

    public retornarEmail()
    {
        return this.email;
    }
}