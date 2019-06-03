import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
    name: 'numberLimit'
})

export class NumberLimitPipe implements PipeTransform {
    transform(num: number, upperlimit: number): string {
       return  (num<upperlimit?num.toString():(upperlimit-1).toString()+'+');
    }
 }