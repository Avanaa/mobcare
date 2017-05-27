export class ClasseModel{
    constructor(
        public id : number = 0,
        public nome : string = '',
        public descricao : string = '',
        public id_dominio : number = 0,
        public dominio : string = '',
        public dominio_descricao = '',
        public taxonomia : string = ''
    ){}
}