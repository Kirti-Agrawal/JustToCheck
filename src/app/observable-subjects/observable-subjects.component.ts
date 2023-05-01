import { Component, OnInit } from '@angular/core';
import { Subject, from, fromEvent, Observable } from 'rxjs';
import { ObservableSubjectsService } from './observable-subjects.service';
@Component({
  selector: 'app-observable-subjects',
  templateUrl: './observable-subjects.component.html',
  styleUrls: ['./observable-subjects.component.css']
})
export class ObservableSubjectsComponent implements OnInit {

  constructor(private subjectService: ObservableSubjectsService) { }

  ngOnInit(): void {
    ///we can create observables from an array or from click event
    const arr = [34,454,657,8,9,9,890,90,99,0];
    //usko papa in future isme one by one data item ana hai
    from(arr).subscribe(data => console.log(data));

   const click= fromEvent(document,'click');

    click.subscribe(data=>console.log(data))
    click.subscribe(data=>console.log(data))
    click.subscribe(data=>console.log(data))





    
  const observ = new Observable(
    subscribe => subscribe.next(Math.random())
  );
  
  ///Subscriber 1
  observ.subscribe(data => console.log(data))

   ///Subscriber 2
   observ.subscribe(data => console.log(data))


   ///For every subscriober or observer create obseravble : Unicast



  //Subject

  const subject = new Subject();   ///no initial value


  ///subscriber 1
  subject.subscribe(data => console.log(data + "Subject 1"));


    ///subscriber 2
    subject.subscribe(data => console.log(data + "Subject 2"));

    ////why piche nitial no value
     //value pass
     subject.next(Math.random());
    //value pass
    subject.next(Math.random());
//// create subject once emit to all subscriber ;L Multicast

this.subjectService.getSubject();
   }


}
