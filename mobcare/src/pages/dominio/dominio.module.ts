import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DominioPage } from './dominio';
import { FilterDominio } from './dominio.pipes';

@NgModule({
  declarations: [ DominioPage, FilterDominio ],
  imports: [ IonicPageModule.forChild(DominioPage) ],
  exports: [ DominioPage, FilterDominio ]
})
export class DominioModule {}
