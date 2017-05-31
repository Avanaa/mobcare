import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService{

    private _api : string = 'http://192.168.0.103:3001';
    private _urlDominio : string = this._api.concat('/dominio/');
    private _urlClasse : string = this._api.concat('/classe/');
    private _urlDiagnostico : string = this._api.concat('/diagnostico/');

    constructor(private _http: Http){}

    getDominios() : Promise<any>{
        return this._http.get(this._urlDominio)
            .map(res => res.json())
            .toPromise();
    }

    getClasses() : Promise<any>{
        return this._http.get(this._urlClasse)
            .map(res => res.json())
            .toPromise();
    }
    
    getDiagnosticos() : Promise<any>{
        return this._http.get(this._urlDiagnostico)
            .map(res => res.json())
            .toPromise();
    }
}