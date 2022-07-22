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
    GetPetById(id: number){
      return this.http.get(this.basePetServiceUrl+id)
    }

    //AddPet POST Pet
    AddPet(pet:any){
      var data: {};
      console.log(pet);
      return this.http.post(this.basePetServiceUrl,pet);
    }

    //EditPet PUT Pet, PetID
    UpdatePet(petId:number,pet:any){
      return this.http.put(this.basePetServiceUrl +petId,pet);
    }
   //DeletePet DELETE PetID
}
