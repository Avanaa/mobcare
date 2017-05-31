import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Tabs } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage: Component = Tabs;

  constructor(platform: Platform, 
    statusBar: StatusBar,
    splashScreen: SplashScreen) {

      platform.ready().then(() => {
        statusBar.overlaysWebView(true);
        statusBar.backgroundColorByHexString('#00695c');
        splashScreen.hide();
      });
  }
}

