import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
title: string = 'Pipes';
date = new Date();
user: any;
obj:any;
  constructor() { }

  ngOnInit(): void {
this.obj = {
  name : 'sanjay',
  age : 40
}
     this.user = new Promise((resolve ,reject)=>{
    setTimeout(
      ()=> resolve("Kirti")
    ,3000)
   })

  }

}
