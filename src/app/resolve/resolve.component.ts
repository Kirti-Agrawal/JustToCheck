import { Component, OnInit } from '@angular/core';
import { CommuneService } from '../commune.service';
import { Users } from './users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css']
})
export class ResolveComponent implements OnInit {
users! : Users | any;

  constructor(private communeService : CommuneService , private route : ActivatedRoute) { }

  ngOnInit(): void {
    ///For lots of data to show it takes time to provide good user experience
//check route me resolve ke anar key kons pass ki 

this.users = this.route.snapshot.data['data'];

    // this.communeService.getUsers().
    // subscribe(data => {
    // this.users =data
    // });
  }

}
