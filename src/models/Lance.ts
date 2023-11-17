import Usuario from"./Usuario"
import Leilao from "./Leilao";
export default class Lance
{
    private id: string;
    private valor: number;
    private comprador: Usuario;
    private leilao: Leilao;

    
    constructor(id: string, valor: number, comprador: Usuario, leilao: Leilao){
        this.valor = valor;
        this.comprador = comprador;
        this.leilao = leilao;
        this.id = id;
    }

    public inserirId(id: string)
    {
        this.id = id;
    }

    public retornarId()
    {
        return this.id;
    }

    public inserirValor(valor: number)
    {
        this.valor = valor;
    }

    public retornarValor()
    {
        return this.valor;
    }

    public inserirComprador(comprador: Usuario)
    {
        this.comprador = comprador;
    }

    public retornarComprador()
    {
        return this.comprador;
    }

    public inserirLeilao(leilao: Leilao)
    {
        this.leilao = leilao;
        
    }

    public retornarLeilao()
    {
        return this.leilao;
    }
}