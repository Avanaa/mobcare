import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DominioPage } from '../dominio/dominio';
import { ClassePage } from '../classe/classe';
import { DiagnosticoPage } from '../diagnostico/diagnostico';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public dominios;

  constructor(private _navCtrl: NavController) {}

  dominio(){
    this._navCtrl.push(DominioPage);
  }

  classe(){
    this._navCtrl.push(ClassePage)
  }

  diagnostico(){
    this._navCtrl.push(DiagnosticoPage)
  }

}
