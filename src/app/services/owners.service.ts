import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OwnersService{
  _url='https://localhost:7102/api/owners';
  owners:any;

  constructor(private http:HttpClient) {
    //console.log('servicio dolar');
   }

   getOwners(){
      let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
      return this.http.get(this._url, {headers:header});
   }
}