export class Pedido {

    pedidoId: number;
    clienteId: number;
    data_pedido: Date;

    constructor(pedidoId: number, clienteId: number, data_pedido: Date) {

        this.pedidoId = pedidoId;
        this.clienteId = clienteId;
        this.data_pedido = data_pedido;

    }

}
