import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IsLoginService } from '../is-login.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateChildGuard implements CanActivateChild {
  constructor( private logService : IsLoginService){}
  canActivateChild(){
if(this.logService.forViewEncap){
return true;
}
else{
    return false;
  }
}
  
}
