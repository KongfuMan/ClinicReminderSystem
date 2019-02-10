import { Component, OnInit } from '@angular/core';
import {Reminder} from '../../model/reminder';
import {DoctorService} from '../services/doctor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public reminders: Reminder[]= [];
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getAllReminders().subscribe((data:any)=>{
      if (data){
        for(let reminder of data){
          this.reminders.push(reminder);
        }
      }
    })
  }

  onSelectClass(reminder){
    let classes = {
      "card-done": reminder.done,
      "card-undone": !reminder.done
    }
    return classes;
  }


}
