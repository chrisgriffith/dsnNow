import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundTrip'
})
export class RoundTripPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
