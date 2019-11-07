import { Pipe, PipeTransform } from '@angular/core';
import addDays from 'date-fns/addDays';

@Pipe({
    name: 'add'
})
export class AddPipe implements PipeTransform {
    transform(value: Date, days: number): Date {
        return addDays(value, days);
    }
}
