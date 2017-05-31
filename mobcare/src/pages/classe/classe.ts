import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ClasseModel } from '../../models/classe-model';
import { HttpService } from '../../service/http-service';

@IonicPage()
@Component({
  selector: 'page-classe',
  templateUrl: 'classe.html',
})
export class ClassePage implements OnInit {

  public classes : ClasseModel[] = [];
  public searchClicked : boolean = false;
  public texto : string = '';

  constructor(private _navCtrl: NavController, 
    private _navParams: NavParams,
    private _service : HttpService,
    private _alertCtrl : AlertController,
    private _loadingCtrl : LoadingController) {}

  public ngOnInit() : void {

    let loader = this._loadingCtrl.create({
      content : 'Carregando dados. Aguarde...'
    });

    loader.present();

    // Seleciona todas as classes
    this._service.getClasses()
      .then(resultado => {
        this.classes = resultado;
        loader.dismiss();
      })
      .catch(erro => {
        loader.dismiss();
        this._alertCtrl.create({
          title : 'Ops!',
          subTitle : 'Ocorreu um erro ao solicitar os dados. Tente novamente mais tarde',
          buttons :[{text : 'Ok', role : 'ok', handler : () => {this._navCtrl.pop()}}]
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

  filter(event : any) : void {
    this.texto = event.target.value;
  }
}
