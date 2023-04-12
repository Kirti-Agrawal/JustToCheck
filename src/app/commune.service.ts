import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommuneService {
 onevar : number=1;
  constructor() { }
  
}



///In this Application 
// 1. parent number change or not through ServiceWorker
// 2. CSS changes in Child2Component
// 3. ng-content diretcive use of
// 4. changgge detection strategy 