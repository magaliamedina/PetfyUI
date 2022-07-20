import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AuthService } from './_service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'API PetFy';
  users:any;

  constructor( private authService: AuthService){}
  
  ngOnInit(): void {
    //this.setCurrentUser();
    console.log(environment.baseUrl);
  }

  setCurrentUser(){
    //traigo el user del localStorage
    const user: User= JSON.parse(localStorage.getItem('user'));
    //le paso al servicio para que otro componente lo use 
    this.authService.setCurrentUser(user);
  }

  
}
