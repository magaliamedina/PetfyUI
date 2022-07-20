import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
//todos los endpoint deberian estar en este service
export class PetsService {
  basePetServiceUrl=environment.baseUrl+'pets/';

  constructor(private http:HttpClient) {}

   getPets(){
      /*let header = new HttpHeaders()
      .set('Type-content', 'aplication/json');
      return this.http.get(this.basePetServiceUrl, {headers:header});*/
      return this.http.get(this.basePetServiceUrl);
   }

   //GetPetsByBreed GET Breed
   //GetPetsByBreedAndOwnerId GET Breed, OwnerId
   //GetPetsVaccine GET PetId
   //GetPetsByOwnerId GET OwnerId
   //GetPetById

   //AddPet POST Pet
   //EditPet PUT Pet, PetID
   //DeletePet DELETE PetID
}
