import { Injectable  } from '@angular/core';
import  {Subject , BehaviorSubject, ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor() { }
// public message = new Subject<string>();
public message = new  BehaviorSubject<string>('Hello World');


sendValue(data:any){
this.message.next(data);


}
}
