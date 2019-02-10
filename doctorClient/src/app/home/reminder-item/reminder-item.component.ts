import {Component, Input, OnInit} from '@angular/core';
import {Reminder} from '../../model/reminder';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-reminder-item',
  templateUrl: './reminder-item.component.html',
  styleUrls: ['./reminder-item.component.css']
})
export class ReminderItemComponent implements OnInit {
  reminder: Reminder = new Reminder();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.reminder.reminderId = this.route.snapshot.params['id'];

    this.route.params.subscribe( (params:Params)=>this.reminder.reminderId = params['id']);

    this.reminder.description = 'this is a fake reminder';
    this.reminder.priority = 1;
    this.reminder.duration = 1234;
    this.reminder.create_at = 128319241924;
  }

}
