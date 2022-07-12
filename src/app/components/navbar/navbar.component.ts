import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user:any={};
  loggedIn:boolean;
  //currentUser$ : Observable<User>;

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
    //this.currentUser$= this.authService.currentUser$;
  }

  login(){
    //console.log(this.user);
    this.authService.login(this.user).subscribe({
      //next
    next: user => {console.log(user), this.loggedIn=true},
    //error
    error: error => console.error(error),
    //complete si o si
    complete: () => console.info('complete')
    });
  }

  logout(){
    this.loggedIn=false;
    this.authService.logout();
  }

}
