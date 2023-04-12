import { Component,  OnInit } from '@angular/core';
import { Person} from './person';
@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  name:string='red';
firstName!:string;
lastName!:string;
person : Person = new Person();

  constructor() {

   }

  ngOnInit(): void {
    
  }

  handleDate(e: any){
    this.name= e.target.value;
    console.log(this.name);
  }
  updateDetails(){
   // this.person = new Person();     //passing new object evertime   now ngOnchnagges me object pass ho jaega
////without creating new object just pass to docheck

   this.person.firstName = this.firstName;
this.person.lastName = this.lastName;
console.log(this.person);
  }
}
