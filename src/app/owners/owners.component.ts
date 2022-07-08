import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../services/owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  public owners:Array<any>=[];

  constructor(private ownerService: OwnersService) { 
    this.ownerService.getOwners().subscribe((resp:any)=>{
    //console.log(this.pets);
    this.owners=resp;
  })
}

  ngOnInit(): void {
  }

}
