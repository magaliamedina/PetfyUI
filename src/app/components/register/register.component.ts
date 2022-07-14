import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private auth: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
  }

  //se ejecuta desde el html y llama al servicio de auth
  onSubmitRegister(){
    const register = this.registerForm.value;
    if(this.registerForm.valid){
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

}
