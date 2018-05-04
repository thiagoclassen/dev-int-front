export class DetalhesPedido {

    pedido_id: number;
    produto_id: number;
    quantidade: number;
    preco: number;

    constructor(pedido_id: number, produto_id: number, quantidade: number, preco: number) {
        this.pedido_id = pedido_id;
        this.produto_id = produto_id;
        this.quantidade = quantidade;
        this.preco = preco;
    }

}
