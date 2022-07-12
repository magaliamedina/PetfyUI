import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OwnersService } from '../../_service/owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {
  //public owners:Array<any>=[];
  _url='https://localhost:7102/api/owners';
  owners:any;

  /*constructor(private ownersService: OwnershService) { 
    this.ownerService.getOwners().subscribe((resp:any)=>{
    console.log(this.owners);
    this.owners=resp;
  })
  }*/

  constructor(private http:HttpClient){ }

  ngOnInit(): void {
    this.http.get(this._url).subscribe({
      //next
    next: response => console.log(response),
    //error
    error: error => console.error(error),
    //complete si o si
    complete: () => console.info('complete')
    });
    console.log(this.owners);
  }

}
