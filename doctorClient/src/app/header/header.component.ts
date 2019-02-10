import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string = '';
  constructor(private jwtService: JwtHelperService,
              private authService: AuthenticationService
  ) { }

  ngOnInit() {
    const user = this.jwtService.decodeToken(localStorage.getItem(environment.jwtName));
    if (user){
      this.username = user.sub;
    }

  }

  onSignout(){
    console.log('signout clicked');
    this.authService.signout();
  }

}
