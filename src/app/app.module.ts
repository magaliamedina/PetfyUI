import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PetsService } from 'src/app/_service/pets.service';
import { UsersService } from 'src/app/_service/users.service';
import { OwnersComponent } from './components/owners/owners.component';
import { PetsComponent } from './components/pets/pets.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes=[
  {path:'', canActivate:[AuthGuard], children: [
    {path:'', component: HomeComponent},
    {path:'pets', component: PetsComponent},
    {path:'owners', component: OwnersComponent},
  ]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  /*
  //el path del error tiene que estar en ultimo lugar
  {path:'**', component: ErrorPersonalizadoComponent}*/
];

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    PetsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
  ],
  providers: [PetsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
