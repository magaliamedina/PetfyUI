import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  //se ejecuta desde el html y llama al servicio de auth
  onSubmitRegister(){
    const register = {username: '', password: '',};
    this.auth.register(register).subscribe({
      //next
    next: user => {console.log(user)},
    //error
    error: error => console.error(error),
    //complete si o si
    complete: () => console.info('complete')
    });
  }

}
