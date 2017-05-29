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

  dominioTab : Component = DominioPage;
  classeTab : Component = ClassePage;
  diagnosticoTab : Component = DiagnosticoPage;

  constructor(private _navCtrl: NavController) {} 
}
