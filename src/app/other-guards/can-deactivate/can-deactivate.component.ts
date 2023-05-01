import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
  styleUrls: ['./can-deactivate.component.css']
})
export class CanDeactivateComponent implements OnInit {

userName: FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
