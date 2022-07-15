import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Register } from '../_models/register';
import { User } from '../_models/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl='https://localhost:7102/api/';
  currentUser:User= new User();
  private currentUserSubject = new BehaviorSubject<User>(this.currentUser);
  //crear uan variable observable. Por convencion se usa el signo $
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) { 
    if(this.loggedIn()){
      const user :User= JSON.parse(localStorage.getItem('user'));
      this.setCurrentUser(user);
    }
  }

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

  //guardar el usuario
  setCurrentUser(user:User){
    this.currentUserSubject.next(user);
  }

  loggedIn(){
    //traigo el user del localStorage
    const user: User= JSON.parse(localStorage.getItem('user'));
    //si esta logueado devuelve true sino false
    return !!user;
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

  public get currentUserValue(){
    return this.currentUserSubject.value;
  }
  
}
