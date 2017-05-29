import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DominioService{

    private url : string = 'http://192.168.0.101:3001/dominio/'
    
    constructor(private _http: Http){}

    getAll() : Promise<any>{
        return this._http.get(this.url)
            .map(res => res.json())
            .toPromise();
    }
}