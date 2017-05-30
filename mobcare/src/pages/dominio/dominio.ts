import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Platform } from 'ionic-angular';
import { DominioModel } from '../../models/dominio-model';
import { DominioService } from '../../service/dominio-service';

@IonicPage()
@Component({
  selector: 'page-dominio',
  templateUrl: 'dominio.html',
})
export class DominioPage implements OnInit {

  public dominios : DominioModel[] = [];
  public searchClicked : boolean = false;
  public texto : string = '';

  constructor(private _navCtrl: NavController,
    private _service : DominioService,
    private _alertCtrl : AlertController,
    private _loadingCtrl: LoadingController,
    private _platform : Platform) {}

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
          buttons: [{text : 'Ok', role : 'ok', handler : () => {this._platform.exitApp()}}]
        }).present();
      });
  }

  onSearchClick() : void {
    this.searchClicked = !this.searchClicked;
    if(!this.searchClicked){
      this.texto = '';
    }
  }

  more(){
    
  }

  filter(event ) : void {
    this.texto = event.target.value;
  }
}
