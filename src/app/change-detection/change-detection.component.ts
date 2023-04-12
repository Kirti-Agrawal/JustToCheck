import { Component, OnInit } from '@angular/core';
import  { Employee } from './employee';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public employee : Employee[] = [
    {
      name: 'kirti',
      age: 40
    },
    {
      name: 'rohit',
      age : 50
    }
  ];

  increaseAge(e: Employee){
 const index = this.employee.indexOf(e);
 this.employee[index] = {
  name: this.employee[index].name,
age : ++this.employee[index].age
 }
  }

  decreaseAge(e : Employee){
    const index = this.employee.indexOf(e);
    this.employee[index] = {
     name: this.employee[index].name,
   age : --this.employee[index].age
    }
  }
}
