import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  //intercepta la request antes de que vaya a la API
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //httpOptions
    let currentUser= this.auth.currentUserValue
    if(currentUser && currentUser.token){
      request= request.clone({ //clona la request con el authorization bearer
        setHeaders:{
          Authorization:"Bearer " + currentUser.token
        }
      });
    }
    return next.handle(request);
  }
}
