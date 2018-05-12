export class Faturamento {

    id: number;
    data_inicio: Date;
    data_fim: Date;

    constructor(id: number, data_inicio: Date, data_fim: Date) {
        this.id = id;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;
    }
}
