import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassePage } from './classe';
import { FilterClasse } from './classe.pipes';

@NgModule({
  declarations: [
    ClassePage,
    FilterClasse
  ],
  imports: [
    IonicPageModule.forChild(ClassePage),
  ],
  exports: [
    ClassePage,
    FilterClasse
  ]
})
export class ClasseModule {}
