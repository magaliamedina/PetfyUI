import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AuthService } from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'API PetFy';
  users:any;

  constructor(private http: HttpClient, private authService: AuthService){}
  
  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser(){
    //traigo el user del localStorage
    const user: User= JSON.parse(localStorage.getItem('user'));
    //le paso al servicio para que otro componente lo use 
    this.authService.setCurrentUser(user);
  }

  getUsers(){
    this.http.get('https://localhost:7102/api/Users').subscribe({
      //next
    next: response => {this.users= response; console.log(response)},
    //error
    error: error => console.error(error),
    //complete si o si
    complete: () => console.info('complete')
    });
  }
}
