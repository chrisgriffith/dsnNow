import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

/*

var distance = ((parseFloat(spacecraft.uplegRange) + parseFloat(spacecraft.downlegRange)) / 2).toFixed(10);

function distanceToString (distance) { // assumes distance in km
  if (distance != '') {
    var distanceNum = parseFloat(distance);
    if (distanceNum == -1) {
      return '-';
    }
    else if (distanceNum < 1000) {
      return (distanceNum / 1).toFixed(2) + ' km';
    }
    else if (distanceNum < 1000000) {
      return (distanceNum / 1000).toFixed(2) + ' thousand km';
    }
    else if (distanceNum < 1000000000) {
      return (distanceNum / 1000000).toFixed(2) + ' million km';
    }
    else if (distanceNum < 1000000000000) {
      return (distanceNum / 1000000000).toFixed(2) + ' billion km';
    }
    else if (distanceNum < 1000000000000000) {
      return (distanceNum / 1000000000000).toFixed(2) + ' trillion km'; // hey, you never know
    }
    else {
      return '>= 1 quadrillion km';
    }
  }
  else {
    return '-';
  }
}
*/
