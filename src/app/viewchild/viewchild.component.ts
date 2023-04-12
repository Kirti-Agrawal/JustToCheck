import { Component, OnInit , ViewChild , ElementRef , AfterViewInit ,ViewChildren , QueryList} from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit , AfterViewInit {
 @ViewChild('name')
  pname!: ElementRef;
  @ViewChildren('children')
  groupSelect!: QueryList<any>;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
console.log(this.pname);
this.pname.nativeElement.innerText= "Just checking";
console.log(this.groupSelect);
this.groupSelect.first.nativeElement.setAttribute('style','color:red');
  }
}
