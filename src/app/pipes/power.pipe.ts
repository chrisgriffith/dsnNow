import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(power: any, direction?: string): any {
    if (power !== '') {
      const powerNum = parseFloat(power);
      if (direction === 'up') {
        return powerNum.toFixed(2) + ' kW';
      } else {
        const powerInKilowatts = Math.pow(10, (powerNum - 60) / 10.0);
        const powerHTML = '(' + powerInKilowatts.toExponential(2).replace('e', ' x 10 <sup>') + '</sup> kW)';
        // (1.29 x 10-17 kW)

        const content = powerNum.toFixed(2) + ' dBm <br>' + powerHTML;

        return this.sanitizer.bypassSecurityTrustHtml(content);
        // return powerNum.toFixed(2) + ' dBm ' + powerHTML;

        // tslint:disable-next-line:max-line-length
        // (' + powerInKilowatts.toExponential(2).replace('e', ' x 10 < span style = "vertical-align: super; font-size: .75em;" > ') + ' < /span> kW)';
      }
    } else {
      return '-';
    }
  }

}
