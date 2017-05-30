import { Pipe, PipeTransform } from '@angular/core';
import { DiagnosticoModel } from '../../models/diagnostico-model';

@Pipe({
    name : 'filterDiagnostico',
    pure : true
})
export class FilterDiagnostico implements PipeTransform{

    transform(diagnosticos : DiagnosticoModel[], texto : string){
        if(texto === undefined){
            return diagnosticos;
        }
        let textoProcurado = texto.toLowerCase();
        return diagnosticos.filter(diagnostico => diagnostico.descricao.toLowerCase().includes(textoProcurado));
    }
}