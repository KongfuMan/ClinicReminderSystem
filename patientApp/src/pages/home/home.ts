import { Component } from '@angular/core';
import { NavController, AlertController, Platform} from 'ionic-angular';
import {SigninPage} from "../signin/signin";
import {Reminder} from "../../models/reminder";
// import * as Stomp from 'stompjs'
// import {HttpClient} from "@angular/common/http";
import {LocalNotifications} from '@ionic-native/local-notifications'
import {AuthProvider} from "../../providers/auth";
import {ReminderPage} from "../reminder/reminder";
import {WebsocketProvider} from '../../providers/websocket';
import {ReminderProvider} from "../../providers/reminder";
import {date} from "ng2-validation/dist/date";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public reminders:Reminder[] = [];

  constructor(public navCtrl: NavController,
              private localNotification: LocalNotifications,
              public wsProvider:WebsocketProvider,
              private plt:Platform,
              public alt: AlertController,
              private readonly authProvider: AuthProvider,
              private reminderProvider:ReminderProvider
              ) {
    this.plt.ready().then(
      (rdy)=>{
        this.localNotification.on('click').subscribe((notification)=>{
          let json = JSON.parse(notification.data);

          let alter = this.alt.create({
            title:notification.title,
            subTitle:json.mydata
          });
          alter.present();
        },
          (error)=>console.log(error))
      })

    this.reminderProvider.getAllReminders().subscribe(data=>{
      for (let key in data) {
        this.reminders.push(data[key]);
        console.log(data);
      }
    })
    // for (let i of [1]){
    //   let reminder = new Reminder();
    //   reminder.description = 'reminder' + i;
    //   reminder.duration = 1234;
    //   this.reminders.push(reminder);
    // }
    // for (let reminder of this.reminders){
    //   console.log(reminder.title + "\n");
    // }


    // this.stompClient = Stomp.over(new WebSocket(this.ws_connection));
    // (void) connect(headers, connectCallback): Called upon a successful connect or reconnect
    // this.stompClient.connect({},frame=>{
    //   this.stompClient.subscribe(this.patient_subscribe, reminder=>{
    //     // ;
    //     // console.log('curReminder: ', this.curReminder.description);
    //     // this.reminders.push(JSON.parse(reminder.body));
    //     // console.log(this.reminders.length);
    //
    //
    //   })
    // })
    this.wsProvider.connect((reminder)=>{
      if(reminder.body){
        alert("A new reminder!");
      }
      this.reminders.unshift(JSON.parse(reminder.body));
    });
  }

  onHomeClick(){
    this.authProvider.signout();
  }

  onNavToReminderPage(reminder){
    console.log("will jump to detail reminder page!");
    this.navCtrl.push(ReminderPage,{'reminder':reminder});
  }

  scheduleNotification(){
    this.localNotification.schedule({
      id: 1,
      title: 'attention',
      text: 'test',
      data:{mydata:"hidden message is this"}
    })
  }
}
