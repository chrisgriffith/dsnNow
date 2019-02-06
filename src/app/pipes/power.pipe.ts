import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

/*
function powerToString (power, up) { // assumes power in kW or dBm (if negative)
  if (power != '') {
    var powerNum = parseFloat(power);
    if (up) {
      return powerNum.toFixed(2) + ' kW';
    }
    else {
      var powerInKilowatts = Math.pow(10, (powerNum - 60) / 10.0);
      return powerNum.toFixed(2) + ' dBm<br />
      (' + powerInKilowatts.toExponential(2).replace('e', ' x 10<span style="vertical-align: super; font-size: .75em;">') + '</span> kW)';
    }
  }
  else {
    return '-';
  }
}
*/
