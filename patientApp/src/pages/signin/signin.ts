import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController,ToastController } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth";
import {first} from "rxjs/internal/operators";
import {Patient} from "../../models/Patient";
// import {HomePage} from "../home/home";
// import {finalize} from "rxjs/operators";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'signin.html',
})
export class SigninPage {

  private patient = new Patient();

  constructor(
              public readonly navCtrl: NavController,
              private readonly loadingCtrl: LoadingController,
              private readonly authProvider: AuthProvider,
              private readonly toastCtrl: ToastController
              ){ }


  signin(value: any) {
    // console.log("begin signin 1");
    // console.log("this.patient:  ",this.patient);
    this.authProvider.signin(this.patient)
      .pipe(first())
      .subscribe(
        data => {console.log('success: ', "signin success")},
        err => console.log('error: ',err));
  }

  // handleError(error: any) {
  //   let message: string;
  //   if (error.status && error.status === 401) {
  //     message = 'Login failed';
  //   }
  //   else {
  //     message = `Unexpected error: ${error.statusText}`;
  //   }
  //
  //   const toast = this.toastCtrl.create({
  //     message,
  //     duration: 5000,
  //     position: 'bottom'
  //   });
  //
  //   toast.present();
  // }

}
