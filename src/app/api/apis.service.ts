import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, throwError } from 'rxjs';
import { filter, tap , map ,catchError} from 'rxjs/operators';
import { ajax} from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor( public http : HttpClient) { }

 private  handleError(err:HttpErrorResponse){
console.log(err);
let errMessage: string;
//If ou use any error modal liberary you can use ot here no need to pass to the componenet or different way is here
switch(err.status){
  case  404:
   errMessage= "Status : 404 , Page not Found ";
   break;
   default:
    errMessage = "Something bad happened"!;
    break;
}
return throwError(()=> new Error(errMessage));
  }


  getUser(){

    ///angular http service retuns observable after version2 by default we have to subscribe it 
   return   this.http.get('https://jsonplaceholder.typicode.com/userss')
   .pipe(catchError(this.handleError));
  }


  ////using rxja ki ajax method
////same as juery ka ajax thi
  getUserAjax(){
    return ajax('https://jsonplaceholder.typicode.com/users')
    .pipe(catchError(this.handleError),
      tap(data=>console.log(data)));
  }
}
