import { Component, OnInit ,Input , OnChanges , SimpleChanges} from '@angular/core';
import { Employee } from '../employee';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-change-strategy',
  templateUrl: './change-strategy.component.html',
  styleUrls: ['./change-strategy.component.css']
 // changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeStrategyComponent implements OnInit , OnChanges{

@Input() employeeVal : Employee | undefined;

name: string | undefined;
age: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }
ngOnChanges(changes : SimpleChanges) : void{
this.name = this.employeeVal?.name;
this.age = this.employeeVal?.age;

}
}
