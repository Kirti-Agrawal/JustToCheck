import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginService {

  constructor() { }

  get isLogin(){
    return false;
  }

  get forViewEncap(){
    return true;
  }
}
