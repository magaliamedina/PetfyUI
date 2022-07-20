import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/_service/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  pets:any;
  
  constructor(private petsService: PetsService) { 
    
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(){
    this.petsService.getPets().subscribe({
      //next
    next: pets => {
      console.log(pets); 
      this.pets = pets;
    },
    //error
    error: error => {console.error(error)},
    //complete si o si
    complete: () => console.info('complete')
    });
  }

}
