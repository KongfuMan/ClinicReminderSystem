import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, Observer} from 'rxjs';
import {map} from 'rxjs/internal/operators';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient,
              private jwtHelper:JwtHelperService) { }

  getAllReminders():Observable<Object>{
    return this.http.get(environment.getAllReminder).pipe(map(
      data => {
        return data;
      }));
  }

  getAllPatients():Observable<Object>{
    return this.http.get(environment.getAllPatients).pipe(map(
      data=>{
        return data;
      }
    ))
  }

  getUserName(){
    const userInfo = this.jwtHelper.decodeToken(localStorage.getItem(environment.jwtName));
    if (userInfo === null){
      return '';
    }
    return userInfo.sub;
  }
}
