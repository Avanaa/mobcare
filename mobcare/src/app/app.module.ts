import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Tabs } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { DominioModule } from '../pages/dominio/dominio.module';
import { ClasseModule } from '../pages/classe/classe.module';
import { DiagnosticoModule } from '../pages/diagnostico/diagnostico.module';
import { HttpService } from '../service/http-service';

@NgModule({
  declarations: [
    MyApp,
    Tabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    DominioModule,
    ClasseModule,
    DiagnosticoModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService
  ]
})
export class AppModule {}
