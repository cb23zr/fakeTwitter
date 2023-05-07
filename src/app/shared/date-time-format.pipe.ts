import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTimeFormat'
})
export class DateTimeFormatPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): string {
    let timeZone = (new Date(value)).getTimezoneOffset()*60000;
    let localtz = (new Date(Date.now() - timeZone)).toISOString().replace('Z', '').replace('T',' ').split('.')[0];
    return localtz;
  }

}
