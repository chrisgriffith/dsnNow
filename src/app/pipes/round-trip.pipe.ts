import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundTrip'
})
export class RoundTripPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

/*
function lightTimeToString (lightTime) { // assumes lightTime in sec
  if (lightTime != '') {
    var lightTimeNum = parseFloat(lightTime);
    if (lightTimeNum == -1) {
      return '-';
    }
    else if (lightTimeNum < 60) {
      return (lightTimeNum / 1).toFixed(2) + ' sec';
    }
    else if (lightTimeNum < 3600) {
      return (lightTimeNum / 60).toFixed(2) + ' minutes';
    }
    else if (lightTimeNum < 86400) {
      return (lightTimeNum / 3600).toFixed(2) + ' hours';
    }
    else if (lightTimeNum < 604800) {
      return (lightTimeNum / 86400).toFixed(2) + ' days';
    }
    else {
      return ' >= 1 week';
    }
  }
  else {
    return '-';
  }
}
*/
