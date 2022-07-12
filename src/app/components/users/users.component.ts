import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { UsersService } from 'src/app/_service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  //public users:Array<any>=[];

  constructor(private userService: UsersService, private authService: AuthService, private http:HttpClient) {
    /*this.userService.getUsers().subscribe((resp:any)=>{
    //console.log(this.pets);
    this.users=resp;
  })*/
 }
}
