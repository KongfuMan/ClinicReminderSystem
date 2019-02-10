import {Component, NgZone} from '@angular/core';
import {Router} from '@angular/router';
// import {HomeService} from './home/services/home.service';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clinic Reminder System';

  //ngZone is used to fix the bug that
  //router.navigate is not execute inside the subscribe()
  constructor(private router:Router,
              private ngZone:NgZone,
              private authService: AuthenticationService) {
  }

  //check if user has logged in at beginning
  ngOnInit(){
    //becareful you need to subscribe first
    this.authService.isAuthenticated().subscribe(loggedin=>{
      if (!loggedin){
        // this.router.navigate()
        this.ngZone.run(()=>{
          this.router.navigate(["/signin"]);
        })

      }else{
        this.ngZone.run(()=>{
          this.router.navigate(["/home/send"]);
        })
      }
    });
    this.authService.checkJwtLogin();
  }

}
