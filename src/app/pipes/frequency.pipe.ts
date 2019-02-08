import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'frequency'
})
export class FrequencyPipe implements PipeTransform {

  transform(frequency: any, args?: any): string {
    if (frequency !== '') {
      // tslint:disable-next-line:radix
      const frequencyNum: number = parseInt(frequency);
      if (frequencyNum < 1000) {
        return frequencyNum.toFixed(2) + ' Hz';
      } else if (frequencyNum < 1000000) {
        return (frequencyNum / 1000).toFixed(2) + ' kHz';
      } else if (frequencyNum < 1000000000) {
        return (frequencyNum / 1000000).toFixed(2) + ' MHz';
      } else if (frequencyNum < 1000000000000) {
        return (frequencyNum / 1000000000).toFixed(2) + ' GHz';
      } else {
        return '>= 1 THz';
      }
    } else {
      return '-';
    }
  }

}
/*
function frequencyToString (frequency) { // assumes frequency in Hz
  if (frequency != '') {
    var frequencyNum = parseInt(frequency);
    if (frequencyNum < 1000) {
      return frequencyNum.toFixed(2) + ' Hz';
    }
    else if (frequencyNum < 1000000) {
      return (frequencyNum / 1000).toFixed(2) + ' kHz';
    }
    else if (frequencyNum < 1000000000) {
      return (frequencyNum / 1000000).toFixed(2) + ' MHz';
    }
    else if (frequencyNum < 1000000000000) {
      return (frequencyNum / 1000000000).toFixed(2) + ' GHz';
    }
    else {
      return '>= 1 THz';
    }
  }
  else {
    return '-';
  }
}
*/
