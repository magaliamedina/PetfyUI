import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../_service/auth.service';

@Injectable({
  providedIn: 'root'
})
//se ejecuta cuando yo le invoco que se ejecute
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.auth.loggedIn())
      return true;
    this.auth.logout();
    this.router.navigate(['/login']);
    return false;
  }
  
}
