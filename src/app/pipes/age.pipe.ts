import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
   let dob =   value.getFullYear();
   let currentyear = new Date().getFullYear();
let age = currentyear-dob;
    return age;
  }

}
