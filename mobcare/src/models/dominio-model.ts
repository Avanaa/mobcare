export class DominioModel{
    constructor(
        public id : number = 0,
        public nome : string = '',
        public descricao : string = '',
        public id_taxonomia : number = 0,
        public taxonomia : string = '',
        public taxonomia_descricao = ''
    ){}
}