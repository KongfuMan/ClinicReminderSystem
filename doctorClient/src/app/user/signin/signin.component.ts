import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import {Doctor} from 'src/app/model/doctor';
import {first} from 'rxjs/internal/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public userModel = new Doctor(null,null,null,null);
  public loading = false;
  public submitted = false;
  public returnUrl: string = 'home';
  public error = '';
  public jwtTokenName = 'token';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  ngOnInit() {
    localStorage.removeItem(this.jwtTokenName);
  }

  onSubmit(){
    console.log(this.userModel);
    this.authenticationService.signin(this.userModel)
      .pipe(first())
      .subscribe(
        data => {
          if (data != null){
            console.log('signin return data',data)
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          console.log(error);
          this.error = error;
          this.loading = false;
          localStorage.removeItem(this.jwtTokenName);
        });
  }
}
