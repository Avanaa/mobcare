import { Pipe, PipeTransform } from '@angular/core';
import { DominioModel } from '../../models/dominio-model';

@Pipe({
    name : 'filterDominio',
    pure : true
})
export class FilterDominio implements PipeTransform{

    transform(dominios : DominioModel[], texto : string){
        if(texto === undefined){
            return dominios;
        }
        let textoProcurado = texto.toLowerCase();
        return dominios.filter(dominio => dominio.nome.toLowerCase().includes(textoProcurado));
    }
}