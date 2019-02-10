import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Reminder} from "../../models/reminder";
import {WebsocketProvider} from '../../providers/websocket'

/**
 * Generated class for the ReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
  reminder:Reminder;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private wsProvider: WebsocketProvider) {
    this.reminder = navParams.get('reminder');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ReminderPage');
    // console.log(this.reminder);
  }

  onMarkAsDone(){
    console.log(this.reminder);
    this.wsProvider.sendDoneMark(this.reminder);
  }

}
