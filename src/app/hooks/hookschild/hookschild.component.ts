import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit , SimpleChanges, ViewChild} from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-hookschild',
  templateUrl: './hookschild.component.html',
  styleUrls: ['./hookschild.component.css']
})
export class HookschildComponent implements OnInit , OnChanges
 , DoCheck , AfterContentInit , AfterContentChecked, AfterViewInit,
 AfterViewChecked , OnDestroy{

@Input()parentData!:string;
@Input()personObject:Person | undefined;
@ContentChild('content')contentChild!: ElementRef;
@ViewChild('view')viewChild!: ElementRef;

count:number=0;
interval:any;
  constructor() {
    ////Use for DI only  and typescript feature
     console.log("Constructor called");
     
   this.interval= setInterval(()=>{this.count++;
      console.log(this.count);},1000)
    
   }

   
  ngOnInit(): void {
    ///all propties an dcomponent inisitialized
    console.log("ngOnInit called");
    
  }

ngOnChanges(changes: SimpleChanges): void {

  ////during compo creation but @Innput should be there

console.log("simple changes" , changes);

  //console.log("ngOnChanges Parent Data" , this.parentData);
 // console.log(this.personObject);  ////this will not work here
}

ngDoCheck(): void {
  console.log("nGDOCheck" , this.personObject);
  ///everytime when this data bind property changes objejct
}

ngAfterContentInit(): void {
  console.log("ngAfterContentInit" , this.contentChild);
  
}

ngAfterContentChecked(): void {
  this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);
}

ngAfterViewInit(): void {
  console.log("ngAfterViewInit" , this.viewChild);
 
}

ngAfterViewChecked(): void {
  this.viewChild.nativeElement.setAttribute('style',`background-color:${this.parentData}`);
}
ngOnDestroy(): void {
  console.log("onDestroy");
  clearInterval(this.interval);
}
}
