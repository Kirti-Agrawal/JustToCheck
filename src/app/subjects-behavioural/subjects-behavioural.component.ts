import { Component, OnInit } from '@angular/core';
import { Subject  , BehaviorSubject} from 'rxjs';
import { SubjectsService } from '../common/subjects.service';

@Component({
  selector: 'app-subjects-behavioural',
  templateUrl: './subjects-behavioural.component.html',
  styleUrls: ['./subjects-behavioural.component.css']
})
export class SubjectsBehaviouralComponent implements OnInit {
message:any;
  constructor( private subjectService : SubjectsService) { }

  ngOnInit(): void {

    this.subjectService.message.subscribe(data => this.message=data);

    ///Subjects:
    const subject = new Subject();

    subject.subscribe(data => console.log(data)); ///2020
    subject.subscribe(data => console.log(data));////2020
    subject.next(2020);

    subject.subscribe(data => console.log(data));/// return s nothing


    //only returns value for 1st  subscribe ki 2nd ke lie ko value emit ni ki


    ///Behavioural Subject

    const behaviouralSubject = new BehaviorSubject(100);

    behaviouralSubject.subscribe(data => console.log(`${data} in Behaviour Subject`));  //// 100
    behaviouralSubject.subscribe(data => console.log(`${data} in Behaviour Subject`)); //100

    ///does not need to emit first time bcoz it returns the initial value first and get updated till he vallue changes
  
    behaviouralSubject.next(200);

    behaviouralSubject.subscribe(data => console.log(`${data} in Behaviour Subject`)); ///200
  //useful when to store state  exa: emploee payroll initial income se end tak
  }


  sendMessage(message:any){  ///tpe element
console.log(message);
///send value throuugh service to the other component
this.subjectService.sendValue(message.value);
  }
}
