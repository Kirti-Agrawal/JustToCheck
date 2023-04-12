import { Component, OnInit , Input , ContentChild, ElementRef , AfterContentInit, ContentChildren , QueryList} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit , AfterContentInit{
@Input()products:any;
@ContentChild('content')heading!:ElementRef;
@ContentChildren('contentChildren')extra!:QueryList<any>;

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterContentInit(): void {
    console.log(this.heading );     //////See this we can access element before viewchild
    console.log(this.extra);
  }
}
