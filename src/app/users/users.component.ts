import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users:Array<any>=[];

  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe((resp:any)=>{
    //console.log(this.pets);
    this.users=resp;
  })
 }

  ngOnInit(): void {
  }

}
