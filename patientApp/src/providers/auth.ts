import {ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, tap} from "rxjs/internal/operators";
import {Observable} from "rxjs/Rx";
import {Storage} from "@ionic/storage";
// import {JwtHelperService} from "@auth0/angular-jwt";
import {Patient} from "../models/Patient";

@Injectable()
export class AuthProvider {
  private signin_url = '/user/signin';
  private jwtTokenName = 'jwt_token';

  authUser = new ReplaySubject<boolean>(1);

  constructor(private readonly httpClient: HttpClient,
              private readonly storage: Storage,
              // private readonly jwtHelper: JwtHelperService
  ) {
  }

  checkJwtLogin() {
    // this.storage.remove(this.jwtTokenName);
    // console.log('checkjwtLogin()');
    this.storage.get(this.jwtTokenName).then(jwt => {
      if (jwt) {
        this.authUser.next(true);
      }
      else {
        localStorage.removeItem(this.jwtTokenName);
        this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(false));
      }
    });
  }

  signin(patient: Patient):Observable<any>{
    //A pipe takes in data as input and transforms it to a desired output
    console.log('auth:signin');
    return this.httpClient.post<any>(this.signin_url, {'patient': patient})
      .pipe(tap(jwt=>this.handleJwtResponse(jwt)));
  }

  private handleJwtResponse(jwt) {
    localStorage.setItem(this.jwtTokenName,jwt.token);
    return this.storage.set(this.jwtTokenName, jwt.token)
      .then(() => this.authUser.next(true))
      .then(() => jwt.token);
  }

  signout() {
    localStorage.removeItem(this.jwtTokenName);
    this.storage.remove(this.jwtTokenName).then(() => this.authUser.next(null));
  }

  signup(values: any) {
    // return this.httpClient.post(this.url, values, {responseType: 'text'})
    //   .pipe(tap(jwt => {
    //     if (jwt !== 'EXISTS') {
    //       return this.handleJwtResponse(jwt);
    //     }
    //     return jwt;
    //   }));
  }
}
