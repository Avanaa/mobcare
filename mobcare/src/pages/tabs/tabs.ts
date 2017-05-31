import { Component } from '@angular/core';
import { DominioPage } from '../dominio/dominio';
import { ClassePage } from '../classe/classe';
import { DiagnosticoPage } from '../diagnostico/diagnostico';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class Tabs {

  dominioTab : Component = DominioPage;
  classeTab : Component = ClassePage;
  diagnosticoTab : Component = DiagnosticoPage;

  constructor() {} 
}
