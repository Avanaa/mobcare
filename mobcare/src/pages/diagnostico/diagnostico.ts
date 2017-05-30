import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { DiagnosticoService } from '../../service/diagnostico-service'
import { DiagnosticoModel } from '../../models/diagnostico-model';

@IonicPage()
@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html',
})
export class DiagnosticoPage implements OnInit {

  public diagnosticos : DiagnosticoModel[] = [];
  public searchClicked : boolean = false;
  public texto : string = '';

  constructor(private _navCtrl: NavController, 
    private _navParams: NavParams,
    private _service: DiagnosticoService,
    private _loadingCtrl : LoadingController,
    private _alertCtrl : AlertController) {}

  ngOnInit() : void {

    let loader = this._loadingCtrl.create({
      content : 'Carregando dados. Aguarde...'
    });

    loader.present();

    // Seleciona todos os diagnósticos
    this._service.getAll()
      .then(result => {
          this.diagnosticos = result;
          loader.dismiss();
        })
      .catch(err => {
        loader.dismiss();
          this._alertCtrl.create({
            title : 'Ops!',
            subTitle : 'Ocorreu um erro ao solicitar os dados. Tente novamente mais tarde',
            buttons : [{text : 'Ok'}]
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
