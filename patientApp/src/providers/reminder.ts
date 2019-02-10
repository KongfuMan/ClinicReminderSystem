import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Reminder} from "../models/reminder";
import {tap} from "rxjs/internal/operators";

/*
  Generated class for the ReminderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReminderProvider {
  get_all_history_reminders_url = '/patient/getallhistoryreminders';

  constructor(public http: HttpClient) {
    console.log('Hello ReminderProvider Provider');
  }

  markReminderAsDone(reminder:Reminder){
    reminder.done = true;

  }

  getAllReminders(){
    return this.http.get(this.get_all_history_reminders_url).pipe(tap(data=>{
      if (data){
        console.log(data);
        return data;
      }
    }))
  }

}
