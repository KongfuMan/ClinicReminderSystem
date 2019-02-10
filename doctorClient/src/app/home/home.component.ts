import {Component, Input, OnInit} from '@angular/core';
// import {Router} from '@angular/router';
import {Doctor} from '../model/doctor';
// import {AuthenticationService} from '../services/authentication.service';
// import {environment} from "../../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public doctor = new Doctor(null,null,null,null);

  constructor(private jwtService:JwtHelperService) { }

  ngOnInit() {
  }
}
