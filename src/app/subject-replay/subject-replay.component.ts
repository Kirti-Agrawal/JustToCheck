import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../common/subjects.service';
import { AsyncSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-subject-replay',
  templateUrl: './subject-replay.component.html',
  styleUrls: ['./subject-replay.component.css']
})
export class SubjectReplayComponent implements OnInit {
message!: string ;
  constructor(private sService : SubjectsService) { }

  ngOnInit(): void {
this.sService.message.subscribe(data => this.message = data);



////Notification
///ReplayySubject

const $message = new ReplaySubject(2);

$message.next('Hello');
$message.next('How are you?')
$message.next('From where are yo?')
$message.next('stay at home')

$message.subscribe(msg => console.log(`User 1 : ${msg}`));

$message.next('I am good')


$message.subscribe(msg => console.log(`User 2 : ${msg}`));



  }

  
}

