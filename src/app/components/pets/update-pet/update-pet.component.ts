import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/_service/pets.service';
import { FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.scss']
})
export class UpdatePetComponent implements OnInit {

  updatePetForm: FormGroup;
  petid: number;

  constructor(private petService: PetsService, private formBuilder: FormBuilder, private route: Router, private activateRouterService: ActivatedRoute) { }

  ngOnInit(): void {
    //queryParams es un observado que esta observando las url
    this.activateRouterService.queryParams.subscribe(
      params =>{
        this.petid = params['petId']
      }
    );

    console.log(this.petid);

    this.petService.GetPetById(this.petid).subscribe(
      {
        next: pet => {
          this.updatePetForm=this.formBuilder.group({
            name:[pet['name'], Validators.required],
            petNumber:[pet['petNumber'], Validators.required],
            description:[pet['description'], Validators.required],
            breed:[pet['breed'], Validators.required],
            dateOfBirth:[pet['dateOfBirth'], Validators.required],
            type:[pet['type'], Validators.required],
            ownerID:['2', Validators.required]
          });
        },
        //error
        error: error => console.error(error),
        //complete si o si
        complete: () => console.info('complete')
      }
    );    
  }

  onSubmit(){
    const pet = this.updatePetForm.value;
    if(this.updatePetForm.valid){
      //console.log(pet);
      this.petService.UpdatePet(this.petid, pet).subscribe({
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
