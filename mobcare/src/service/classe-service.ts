import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClasseService{

    private url : string = 'http://192.168.0.103:3001/classe/'
    
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
        return this._http.get(this.url.concat(classe.id))
            .map(res => res.json())
            .toPromise()
    }

    getByDiagnostico(diagnostico) : Promise<any>{
        return this._http.get(this.url.concat('diagnostico/' + diagnostico.id))
            .map(res => res.json())
            .toPromise();
    }
}