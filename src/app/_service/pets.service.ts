import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  _url='https://localhost:7102/api/Pets';

  constructor(private http:HttpClient) {
    console.log('servicio owners');
   }

   getPets(){
      let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');

      return this.http.get(this._url, {headers:header});
   }
}
