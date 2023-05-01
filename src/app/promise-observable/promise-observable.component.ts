import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import  { filter } from 'rxjs/operators';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.css'],
})
export class PromiseObservableComponent implements OnInit , OnDestroy{
 mysubscription! : Subscription;
  constructor() {}

  ngOnInit(): void {
    //// Promise

    const promise = new Promise((resolve) => {

      console.log("Promise Initialization");
      //jo bi muje asyc operation karana ho
      setTimeout(() => {
        //api call hone ke bad callback de di
        resolve('promise called1');
        resolve('promise called2');
        resolve('promise called3');
        resolve('promise called4');
      }, 2000);
    });

    //consume promise

   promise.then((data) => console.log(data));

    ////Observerable

    const observable = new Observable((subscribe) => {

      console.log("Observable Initialization");
      ///jo bi karan ho
      setTimeout(() => {
        subscribe.next('Observable Called1');   /////same as resolve
        subscribe.next('Observable Called2');  
        subscribe.next('Observable Called3');  
        subscribe.next('Observable Called4');  
      }, 2000);
    });
 observable
 .pipe( filter(data => data == "Observable Called2"))  ///Tose filter operator first use pipe : apply on observe
 .subscribe(data=> console.log(data))
  


// 1. Promise ko bad me use ni hua to bi call hua observal ko
//  listen ni kia to vo call bi ni hua until we subscribe it : Lazy Loading and Eager Loading 
//and //  Observable ko unsubscribe kr skte promise chlta hi rhta memory leak

// 2. HO skta hai mu kuch bheju fir kuch or bhejna chahu fir kuvh or to promise me ek hi bar values send kr skte
// while in observabe emit multiple values 



// 3. Observable provides many operators for hadnle async data before subscribe 


 //// Promise

 const promise2 = new Promise((resolve) => {
  let count=0;
  //jo bi muje asyc operation karana ho
  setInterval(() => {
    count++;
    //api call hone ke bad callback de di
    resolve('promise called' + count);
 
  }, 2000);
});

//consume promise

promise2.then((data) => console.log(data));

////Observerable

const observable2 = new Observable((subscribe) => {

  let count=0;
  ///jo bi karan ho
  setInterval(() => {
    count++;
    subscribe.next(count);   /////same as resolve
  
  }, 2000);
});
this.mysubscription=observable2.subscribe(data=> console.log('Observable Called' + data))
}

ngOnDestroy(): void {
  this.mysubscription.unsubscribe();
}

}


