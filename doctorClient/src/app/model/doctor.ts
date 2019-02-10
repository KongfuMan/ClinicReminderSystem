import {Reminder} from './reminder';

export class Doctor {
  constructor(
    public username: String,
    public password: String,
    public reminders: Reminder[],
    public title: String,
  ) { }
}
