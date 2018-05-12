export class Pedido {

    pedido_id: number;
    cliente_id: number;
    data_pedido: Date;

    constructor(pedido_id: number, cliente_id: number, data_pedido: Date) {

        this.pedido_id = pedido_id;
        this.cliente_id = cliente_id;
        this.data_pedido = data_pedido;

    }

}
