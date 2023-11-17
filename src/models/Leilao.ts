import Usuario from "./Usuario";
import Lance from "./Lance";
export default class Leilao
{
    private produto: string;
    private preco: number;
    private dataLimite: Date;
    private dono: Usuario;

    constructor(produto: string, preco: number, dataLimite: Date, dono: Usuario)
    {
        this.produto = produto;
        this.preco = preco;
        this.dataLimite = dataLimite;
        this.dono = dono;
    }

    public inserirProduto(produto: string)
    {
        this.produto = produto;
    }

    public retornarProduto()
    {
        return this.produto;
    }
    public inserirPreco(preco: number)
    {
        this.preco = preco;
    }

    public retornarPreco()
    {
        return this.preco;
    }

    public inserirData(dataLimite: Date)
    {
        this.dataLimite = dataLimite;
    }

    public retornarData()
    {
        return this.dataLimite;
    }
    public inserirDono(dono: Usuario)
    {
        this.dono = dono;
    }

    public retornarDono()
    {
        return this.dono;
    }


}