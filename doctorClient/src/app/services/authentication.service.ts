import { Injectable } from '@angular/core';
import {Doctor} from 'src/app/model/doctor';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {Observable, Subject} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private logger = new Subject<boolean>();

  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService
             ) { }

  signin(doctor:Doctor):Observable<any>{
    localStorage.clear();
    return this.http.post<any>(environment.signin_url, {'doctor':doctor})
      .pipe(map(user => {
        // signin successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(environment.jwtName, user.token);
          this.logger.next(true);
        }
        return user;
      }));
  }

  signout(){
    // remove user from local storage to log user out
    localStorage.removeItem(environment.jwtName);
    this.logger.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.logger;
  }

  checkJwtLogin(){
    let jwt = localStorage.getItem(environment.jwtName);
    if (jwt && !this.jwtHelper.isTokenExpired(jwt)){
      this.http.get(environment.authenticate_url).subscribe((jwt:any)=>{
        if(jwt && jwt.token){
          this.logger.next(true);
        }
      })
    }else{
      this.logger.next(false);
    }
  }
}
