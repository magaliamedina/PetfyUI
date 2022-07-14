import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //formulario reactivo: se construye en tiempo de ejecucion
  loginForm: FormGroup;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      username:new FormControl('', Validators.required),
      password:new FormControl('', Validators.required)
    }); //esto devulve un objeto json: {username: '', password: ''}
  }

  onSubmitLogin(){
    //console.log(this.user);
    if(this.loginForm.valid){ //que cumpla la validacion
      this.auth.login(this.loginForm.value).subscribe({
        //next
      next: user => {
        console.log(user); 
        //cuando se loguea que baja al home
        //this.router.navigate(['/pets']);
      },
      //error
      error: error => console.error(error),
      //complete si o si
      complete: () => console.info('complete')
      });
    }
  }

}
