import { Component, OnInit } from '@angular/core';
import { CommuneService } from '../commune.service';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.css']
})
export class NgContentComponent implements OnInit {

  appVar: number=1;
  title = 'justToCheck';

  //// NG Content : R Systems International
//in Component Reusabiity 


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

public topProducts =[
  {
    id: 1 , name : 'table' , price : 6000
  },
  {
    id: 2 , name : 'flower' , price : 3000
  },
  {
    id: 3 , name : 'pens' , price : 40000
  },
  {
    id: 4 , name : 'books' , price : 1000
  }
];
  constructor(public cservice : CommuneService){

    ///// Think bridge Iterview question

    this.appVar = cservice.onevar;
    console.log(this.appVar);
    this.appVar+=this.appVar;
    console.log(this.appVar);
  }

  ngOnInit(): void {
    
  }

}
