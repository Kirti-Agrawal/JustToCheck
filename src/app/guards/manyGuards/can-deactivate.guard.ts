import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, window, windowWhen } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/other-guards/can-deactivate/can-deactivate.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanDeactivateComponent> {

  canDeactivate(component: CanDeactivateComponent){
    console.log("hello");
    if(component.userName.dirty){
    return  confirm("Do You really want to go to different page?");
    }
    else{
      return true;
    }
   
  }
  
}
