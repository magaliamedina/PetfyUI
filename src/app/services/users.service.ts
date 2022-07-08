import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url='https://localhost:7102/api/Users';

  constructor(private http:HttpClient) {
    //console.log('servicio dolar');
   }

   getUsers(){
      let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');

      return this.http.get(this._url, {headers:header});
   }
}