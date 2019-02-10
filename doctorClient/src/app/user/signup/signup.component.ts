import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../model/doctor';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user: Doctor = new Doctor(null,null,null,null);

  constructor() { }


  ngOnInit(): void {
  }

  OnSubmit(userRegistrationForm){

  }
}
