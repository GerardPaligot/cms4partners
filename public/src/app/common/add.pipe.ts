import { Pipe, PipeTransform } from '@angular/core';
import addDays from 'date-fns/addDays';
import { firestore } from 'firebase';

@Pipe({
    name: 'add'
})
export class AddPipe implements PipeTransform {
    transform(value: firestore.Timestamp, days: number): Date {
        return addDays(value.toDate(), days);
    }
}
