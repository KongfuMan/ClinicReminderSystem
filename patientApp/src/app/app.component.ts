import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {AuthProvider} from "../providers/auth";
import {SigninPage} from "../pages/signin/signin";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SigninPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private authProvider: AuthProvider,
              ){

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.authProvider.checkJwtLogin();
    this.authProvider.authUser.subscribe(bsuccess => {
      if (bsuccess) {
        this.rootPage = HomePage;
      }
    });
  }
}

