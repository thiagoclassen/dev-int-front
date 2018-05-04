export class Produto {

    produto_id: number;
    descricao: string;
    preco: number;

    constructor(produto_id: number, descricao: string, preco: number) {
        this.produto_id = produto_id;
        this.descricao = descricao;
        this.preco = preco;
    }

}
