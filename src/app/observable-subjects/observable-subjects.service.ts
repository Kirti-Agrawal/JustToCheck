import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
    providedIn : 'root'
})


export class ObservableSubjectsService{
    //// Convert observablel to subject 
    /////subjects : data consume kregi i till noew it emited the data

    getSubject(){

        const subject =  new Subject();

 const api = ajax.get('https://jsonplaceholder.typicode.com/users');

 

api.subscribe(data => console.log(data))

api.subscribe(data => console.log(data))

//use observable by deafult

const result = api.subscribe(subject);

///by using subject as data consumer it converts observable into subject s internally

    }

}