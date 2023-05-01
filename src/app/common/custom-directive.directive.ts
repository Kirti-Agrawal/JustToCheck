import { Directive , ElementRef ,OnInit} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective  implements OnInit{

  constructor( public el : ElementRef) { 

  }
ngOnInit(): void {
  console.log(this.el.nativeElement);
  this.el.nativeElement.style.color = "green";
}
}
