import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AuthProvider } from '../providers/auth';
import {SigninPageModule} from "../pages/signin/signin.module";
// import {JwtModule,JWT_OPTIONS,JwtInterceptor,JwtHelperService} from '@auth0/angular-jwt'
import {Storage, IonicStorageModule} from "@ionic/storage";
import {LocalNotifications} from "@ionic-native/local-notifications";
// import {SigninPage} from "../pages/signin/signin";
import {ReminderPageModule} from "../pages/reminder/reminder.module";
import { ReminderProvider } from '../providers/reminder';
import { WebsocketProvider } from '../providers/websocket';
import { TokenProvider } from '../providers/token';

export function jwtOptionsFactory(storage:Storage) {
  return {
    tokenGetter: () => storage.get('jwt_token'),
    whitelistedDomains: ['localhost:8080']
  }
}
// config: {
//   tokenGetter: ()=>this.storage.getItem('token'),
//     whitelistedDomains: ['localhost:8080'],
//     headerName: 'Authorization',
//     authScheme: 'Bearer ',
//     throwNoTokenError: false,
//     skipWhenExpired: true
// }

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SigninPageModule,
    ReminderPageModule,
    // JwtModule.forRoot({
    //   jwtOptionsProvider: {
    //     provide: JWT_OPTIONS,
    //     useFactory: jwtOptionsFactory,
    //     deps: [Storage]
    //   }
    // })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    // JwtHelperService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenProvider, multi: true },
    LocalNotifications,
    ReminderProvider,
    WebsocketProvider,
    TokenProvider
  ]
})
export class AppModule {}
