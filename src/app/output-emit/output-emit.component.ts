import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-emit',
  templateUrl: './output-emit.component.html',
  styleUrls: ['./output-emit.component.css']
})
export class OutputEmitComponent implements OnInit {
whatisTime!:Time;
  constructor() { }

  ngOnInit(): void {
  }
handleTime(e:any){
console.log(e);
this.whatisTime = e;
}
}
