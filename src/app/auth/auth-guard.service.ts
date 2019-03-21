import { TokenService } from './token-getter.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(public TokenService:TokenService,public router:Router) { }

  canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot ){
   if (this.TokenService.tokenValidated){
     return true
   }
   else{
    return this.router.navigate(['recipes']);
   }
  }

}
