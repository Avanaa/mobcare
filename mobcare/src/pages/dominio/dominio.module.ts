import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DominioPage } from './dominio';

@NgModule({
  declarations: [
    DominioPage,
  ],
  imports: [
    IonicPageModule.forChild(DominioPage),
  ],
  exports: [
    DominioPage
  ]
})
export class DominioModule {}
