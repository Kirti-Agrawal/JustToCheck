import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommuneService } from 'src/app/commune.service';
import { ResolveComponent } from 'src/app/resolve/resolve.component';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any>{
  constructor(private communeService : CommuneService){}

   resolve(){
  return  this.communeService.getUsers();
  
  }
  
}
