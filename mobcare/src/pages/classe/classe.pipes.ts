import { Pipe, PipeTransform } from '@angular/core';
import { ClasseModel } from '../../models/classe-model';

@Pipe({
    name : 'filterClasse',
    pure : true
})
export class FilterClasse implements PipeTransform{

    transform(classes : ClasseModel[], texto : string){
        if(texto === undefined){
            return classes;
        }
        let textoProcurado = texto.toLowerCase();
        return classes.filter(classe => classe.nome.toLowerCase().includes(textoProcurado));
    }
}