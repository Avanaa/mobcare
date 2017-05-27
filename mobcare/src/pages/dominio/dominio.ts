import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DominioModel } from '../../models/dominio-model';
import { DominioService } from '../../service/dominio-service';

@IonicPage()
@Component({
  selector: 'page-dominio',
  templateUrl: 'dominio.html',
})
export class DominioPage implements OnInit {

  public dominios : DominioModel[] = []

  constructor(public navCtrl: NavController, private _service : DominioService) {}

  ngOnInit() : void {
    this._service.getAll()
      .then(result => this.dominios = result)
      .catch(err => console.log(err));
  }

}
