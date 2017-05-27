import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiagnosticoService } from '../../service/diagnostico-service'
import { DiagnosticoModel } from '../../models/diagnostico-model';
import { ClasseModel } from '../../models/classe-model';
import { DominioModel } from '../../models/dominio-model';

@IonicPage()
@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html',
})
export class DiagnosticoPage implements OnInit {

  public diagnosticos : DiagnosticoModel[] = [];
  public classe : ClasseModel;
  public dominio : DominioModel;

  constructor(private _navCtrl: NavController, 
    private _navParams: NavParams,
    private _service: DiagnosticoService) {}

  ngOnInit() : void {
      
      if(this._navParams.get('classe')){
        this.classe = this._navParams.get('classe');
        if(this.classe){
          this.getDiagnosticoByClasse();
          return;
        }
      }

      if(this._navParams.get('dominio')){
        this.dominio = this._navParams.get('dominio');
        if(this.dominio){
          this.getDiagnosticoByDominio(); 
          return;
        }
      }
      
      this._service.getAll()
        .then(result => this.diagnosticos = result)
        .catch(err => console.log(err));
  }

  getDiagnosticoByClasse() : void{
    if( !this.classe ){
      return;
    }
    this._service.getByClasse(this.classe)
      .then(result => this.diagnosticos = result)
      .catch(err => console.log(err));
  }

  getDiagnosticoByDominio() : void {
    if( !this.dominio ){
      return;
    }
    this._service.getByDominio(this.dominio)
      .then(result => this.diagnosticos = result)
      .catch(err => console.log(err));
  }


}
