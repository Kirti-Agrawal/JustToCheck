import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//have to show this list in child component
public sellProducts =[
  {
    id: 1 , name : 'laptop' , price : 1000
  },
  {
    id: 2 , name : 'watch' , price : 2000
  },
  {
    id: 3 , name : 'AC' , price : 10000
  },
  {
    id: 4 , name : 'Stove' , price : 1000
  }
];
}
