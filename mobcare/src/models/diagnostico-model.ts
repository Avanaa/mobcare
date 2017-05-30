export class DiagnosticoModel{
    constructor(
        public id : number = 0,
        public codigo : string = '',
        public descricao : string = '',
        public id_classe : string = '',
        public classe : string = '',
        public classe_descricao = '',
        public dominio : string = '',
        public dominio_descricao : string = '',
        public taxonomia : string = ''
    ){}
}