import {Component, OnDestroy, OnInit} from '@angular/core';
import {Reminder} from '../../model/reminder';
import {WebSocketService} from '../services/web-socket.service';
import {environment} from "../../../environments/environment";
import {Patient} from "../../model/patient";
import {DoctorService} from "../services/doctor.service";

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  public reminder = new Reminder();
  public patients:string[] = [];
  public priorities = [
    {value:0, viewValue:"High"},
    {value:1, viewValue:"Middle"},
    {value:2, viewValue:"Low"}
  ];

  constructor(private websocketService: WebSocketService,
              private doctorService:DoctorService) {
  }

  ngOnInit() {
    if (!environment.isConnect){
      this.websocketService.connect();
      environment.isConnect = true;
    }
    this.doctorService.getAllPatients().subscribe((patients:any)=>{
      if (patients){
        for(let patient of patients){
          this.patients.push(patient.patient.username);
        }
      }
    });
  }

  OnSubmit(){
    this.reminder.doctorName = this.doctorService.getUserName();
    this.websocketService.sendReminder(this.reminder);
  }
}
