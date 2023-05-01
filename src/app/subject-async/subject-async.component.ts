import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subject-async',
  templateUrl: './subject-async.component.html',
  styleUrls: ['./subject-async.component.css']
})
export class SubjectAsyncComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /////Async Subject : when you need only one last value and only when complete executes

// const asyncSubject = new AsyncSubject();

// asyncSubject.next('Value 1');
// asyncSubject.next('Value 2');
// asyncSubject.next('Value 3');

// asyncSubject.subscribe(data => console.log((`User 1 : ${data}`)));

// asyncSubject.complete();

// ///it will ignore all values after 1st complete 
// asyncSubject.next('Value 4');

// asyncSubject.complete();

// asyncSubject.next('Value 5');


const url ='https://restcountries.com/v3.1/name/india?fullText=true';

let cache : any ={};
function getCountryInfo(url : any){

if(!cache[url]){
  cache[url] = new AsyncSubject();
  fetch(url)
  .then(res => res.json())
  
}

return cache[url].asObservable();
}

getCountryInfo(url);
  }


}
