import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiagnosticoPage } from './diagnostico';
import { FilterDiagnostico } from './diagnostico.pipes';

@NgModule({
  declarations: [
    DiagnosticoPage,
    FilterDiagnostico
  ],
  imports: [
    IonicPageModule.forChild(DiagnosticoPage),
  ],
  exports: [
    DiagnosticoPage,
    FilterDiagnostico
  ]
})
export class DiagnosticoModule {}
