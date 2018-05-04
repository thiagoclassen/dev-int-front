export class Endereco {

    endereco_id: number;
    cliente_id: number;
    rua: string;
    cidade: string;
    estado: string;

    constructor(endereco_id: number, cliente_id: number, rua: string, cidade: string, estado: string) {
        this.endereco_id = endereco_id;
        this.cliente_id = cliente_id;
        this.rua = rua;
        this.cidade = cidade;
        this.estado = estado;
    }

}
