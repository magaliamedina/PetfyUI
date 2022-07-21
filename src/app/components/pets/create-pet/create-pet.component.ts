import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/_service/pets.service';
import { FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent implements OnInit {

  createPetForm : FormGroup;

  //formBuilder servicio para construir el formulario
  constructor(private petService: PetsService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit(): void {
    this.createPetForm=this.formBuilder.group({
      name:['', Validators.required],
      petNumber:['', Validators.required],
      description:['', Validators.required],
      breed:['', Validators.required],
      dateOfBirth:['', Validators.required],
      type:['', Validators.required],
      ownerID:['2', Validators.required],

    });
  }

  //se ejecuta desde el html y llama al servicio de auth
  onSubmit(){
    const pet = this.createPetForm.value;
    if(this.createPetForm.valid){
      //console.log(pet);
      this.petService.AddPet(pet).subscribe({
        //next
      next: pet => {
        //console.log(user);
        this.route.navigate(['/pets']);
      },
      //error
      error: error => console.error(error),
      //complete si o si
      complete: () => console.info('complete')
      });
    }
  }

}
