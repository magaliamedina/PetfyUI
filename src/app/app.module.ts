import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PetsService } from 'src/app/_service/pets.service';
import { UsersService } from 'src/app/_service/users.service';
import { UsersComponent } from './components/users/users.component';
import { OwnersComponent } from './components/owners/owners.component';
import { PetsComponent } from './components/pets/pets.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';

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
    PetsComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PetsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
