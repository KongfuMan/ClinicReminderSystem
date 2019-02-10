import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class TokenProvider implements HttpInterceptor {
  private jwtTokenName = 'jwt_token';

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem(this.jwtTokenName);

    if (idToken) {
      console.log("localstorage: ", idToken);
      const cloned = req.clone({
        setHeaders: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
          Authorization: `Bearer ${idToken}`
        }
      });


      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
