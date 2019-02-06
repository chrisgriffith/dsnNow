import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataRate'
})
export class DataRatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

/*
function dataRateToString (dataRate) { // assumes dataRate in b/sec
  if (dataRate != '') {
    var dataRateNum = parseInt(dataRate);
    if (dataRateNum < 1000) {
      return dataRateNum.toFixed(2) + ' b/sec';
    }
    else if (dataRateNum < 1000000) {
      return (dataRateNum / 1000).toFixed(2) + ' kb/sec';
    }
    else if (dataRateNum < 1000000000) {
      return (dataRateNum / 1000000).toFixed(2) + ' Mb/sec';
    }
    else {
      return '>= 1 Tb/sec';
    }
  }
  else {
    return '-';
  }
} */
