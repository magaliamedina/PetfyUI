import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Register } from '../_models/register';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='https://localhost:7102/api/';
  private currentUserSubject = new ReplaySubject<User>(1);
  //crear uan variable observable. Por convencion se usa el signo $
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  login(user:any){
    //observable
        //pipe es para guardar en el local storage
    return  this.http.post(this.baseUrl + 'account/login', user).pipe(
      map((response:User) => {
        const user=response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          //guardar el usuario
          this.currentUserSubject.next(user);
        }
      })
    );
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  setCurrentUser(user:User){
    this.currentUserSubject.next(user);
  }

  register(register: Register){    
    return  this.http.post(this.baseUrl + 'account/register', register).pipe(
      map((response:User) => {
        const user=response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          //guardar el usuario
          this.currentUserSubject.next(user);
        }
      })
    );
  }
  
}
