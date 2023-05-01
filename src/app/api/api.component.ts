import { Component, OnInit } from '@angular/core';
import { ApisService } from './apis.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor( private httpService : ApisService) { }

  ngOnInit(): void {
/// call Http service


this.httpService.getUser().subscribe(data => console.log(data),
err => alert(err));
    
  }

}
