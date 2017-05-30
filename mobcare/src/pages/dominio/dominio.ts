import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { DominioModel } from '../../models/dominio-model';
import { DominioService } from '../../service/dominio-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-dominio',
  templateUrl: 'dominio.html',
})
export class DominioPage implements OnInit {

  public dominios : DominioModel[] = [];
  public searchClicked : boolean = false;

  constructor(private _navCtrl: NavController,
    private _service : DominioService,
    private _alertCtrl : AlertController,
    private _loadingCtrl: LoadingController) {}

  ngOnInit() : void {

    let loader = this._loadingCtrl.create({
      content : 'Carregando dados. Aguarde...'
    });

    loader.present();

    this._service.getAll()
      .then(result => {
        this.dominios = result;
        loader.dismiss();
      })
      .catch(err => {
        loader.dismiss();
        this._alertCtrl.create({
          title : 'Ops!',
          subTitle : 'Ocorreu um erro ao solicitar os dados. Tente novamente mais tarde',
          buttons: [{text : 'Ok', role : 'ok', handler : () => {this._navCtrl.setRoot(HomePage)}}]
        }).present();
      });
  }

  onSearchClick() : void {
    this.searchClicked = !this.searchClicked;
  }

  more(){
    
  }

  filter(event) : void {
    console.log('Search');
  }
}
