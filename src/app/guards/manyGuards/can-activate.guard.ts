import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IsLoginService } from '../is-login.service';

@Injectable({
  providedIn: 'root'

})
 ///suppose sbased on some api it returns true or false

export class CanActivateGuard implements CanActivate {

  constructor( private logService : IsLoginService){}

  canActivate() {
    if(this.logService.isLogin){
      console.log(this.logService.isLogin)
return true;
    }
    else{
    return false;
    }
  }
  
}
