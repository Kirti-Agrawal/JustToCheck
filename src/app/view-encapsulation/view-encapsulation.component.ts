import { ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation',
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.css'],
  // encapsulation: ViewEncapsulation.Emulated   is by  default
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
