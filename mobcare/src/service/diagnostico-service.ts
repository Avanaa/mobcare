import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DiagnosticoService{

    private url : string = 'http://192.168.0.101:3001/diagnostico/'
    
    constructor(private _http: Http){}

    getAll() : Promise<any>{
        return this._http.get(this.url)
            .map(res => res.json())
            .toPromise();
    }

    getByDominio(dominio) : Promise<any>{
        return this._http.get(this.url.concat('dominio/' + dominio.id))
            .map(res => res.json())
            .toPromise();
    }

    getByClasse(classe) : Promise<any>{
        return this._http.get(this.url.concat('classe/' + classe.id))
            .map(res => res.json())
            .toPromise()
    }

    getByDiagnostico(diagnostico) : Promise<any>{
        return this._http.get(this.url.concat(diagnostico.id))
            .map(res => res.json())
            .toPromise();
    }
}