import { Time } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-emit-event',
  templateUrl: './emit-event.component.html',
  styleUrls: ['./emit-event.component.css']
})
export class EmitEventComponent implements OnInit {

time!: Time;
@Output() receiveTime = new EventEmitter<Time>();

  constructor() { }

  ngOnInit(): void {
  }
// Child to Parent Data send on an event Occurence
handleTime()
{
console.log(this.time);
///I have send it to the parent
this.receiveTime.emit(this.time);
}}
