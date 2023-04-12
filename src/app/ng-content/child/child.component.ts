import { Component, OnInit } from '@angular/core';
import { CommuneService } from '../../commune.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
childVar : number =1;
  constructor(public cservice : CommuneService){

    this.childVar = cservice.onevar;
    console.log(this.childVar);
    this.childVar+=this.childVar;
    console.log(this.childVar);
  }
  ngOnInit(): void {
  }

}
