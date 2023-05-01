import { Component, OnInit } from '@angular/core';
import { ApisService } from '../api/apis.service';
import { User } from './user';

@Component({
  selector: 'app-service-worker',
  templateUrl: './service-worker.component.html',
  styleUrls: ['./service-worker.component.css']
})
export class ServiceWorkerComponent implements OnInit {
users!: User[] ;
  constructor(private apiService : ApisService) { }

  ngOnInit(): void {
    
    this.apiService.getUserAjax().subscribe(data=> 
     { 
      const result : any = data.response;
    result.map((ele: any) => {
      this.users= ele;
      // this.users.id=ele.id;
      // this.users.name = ele.name;
      // this.users.email = ele.email;
      // this.users.phone = ele.phone;
      // this.users.address.city = ele.address.city;
      // this.users.address.zipCode = ele.address.zipCode;
      console.log(this.users);
    })

    
  });
  }

  
}
