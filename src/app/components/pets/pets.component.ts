import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/_service/pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {
  public pets:Array<any>=[];

  constructor(private petsService: PetsService) { 
    this.petsService.getPets().subscribe((resp:any)=>{
      //console.log(this.pets);
      this.pets=resp;
    })
  }

  ngOnInit(): void {
  }

}
