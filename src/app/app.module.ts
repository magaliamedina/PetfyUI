import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PetsService } from './services/pets.service';
import { UsersService } from './services/users.service';
import { UsersComponent } from './users/users.component';
import { OwnersComponent } from './owners/owners.component';
import { PetsComponent } from './pets/pets.component';

const appRoutes: Routes=[
  {path:'users', component: UsersComponent},
  {path:'pets', component: PetsComponent},
  {path:'owners', component: OwnersComponent},
  /*{path:'contacto', component: ContactoComponentComponent},
  {path:'actualiza/:id', component: ActualizaComponentComponent},
  //el path del error tiene que estar en ultimo lugar
  {path:'**', component: ErrorPersonalizadoComponent}*/
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    OwnersComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PetsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
