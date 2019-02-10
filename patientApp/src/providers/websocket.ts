import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs'

/*
  Generated class for the WebsocketProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebsocketProvider {
  private ws_connection = 'ws://localhost:8080/connect';
  private patient_subscribe = '/topic/receivereminder';
  private patient_send = '/app/senddone';
  public stompClient;

  constructor(public http: HttpClient) {
    this.stompClient = Stomp.over(new WebSocket(this.ws_connection));
    // (void) connect(headers, connectCallback): Called upon a successful connect or reconnect
    // this.stompClient.connect({},frame=>{
    //   this.stompClient.subscribe(this.patient_subscribe, reminder=>{
    //     // ;
    //     // console.log('curReminder: ', this.curReminder.description);
    //     this.reminders.push(JSON.parse(reminder.body));
    //     // console.log(this.reminders.length);
    //
    //
    //   })
    // })
  }


  connect(cbfun){
    this.stompClient.connect({},frame=>{
      this.stompClient.subscribe(this.patient_subscribe,cbfun);
    })
  }

  sendDoneMark(reminder){
    this.stompClient.send(this.patient_send,{},JSON.stringify(reminder));
  }

  disconnect(){
    if (this.stompClient != null){
      this.stompClient.disconnect();
    }
  }



}
