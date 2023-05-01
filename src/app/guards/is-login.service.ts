import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginService {

  constructor() { }

  get isLogin(){
    return true;
  }

  get forViewEncap(){
    return true;
  }
}
