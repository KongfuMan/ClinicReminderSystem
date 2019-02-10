import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import {environment} from '../../../environments/environment';
import {Reminder} from '../../model/reminder';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  private stompClient;

  constructor() {
    const socket = new WebSocket(environment.wsconnetion);
    this.stompClient = Stomp.over(socket);
  }

  connect(){
    this.stompClient.connect({},frame=>{
        this.stompClient.subscribe(environment.doctorsubscribe, (reminder)=>{
          console.log(reminder.body);
          alert('reminder is done');
        })
      })
  }

  disconnect(){
    if (this.stompClient != null){
      this.stompClient.disconnect();
    }
  }

  sendReminder(reminder:Reminder){
    console.log(reminder);
    this.stompClient.send(environment.doctorsend,{},JSON.stringify(reminder));
  }
}
