import { Pipe, PipeTransform } from '@angular/core';
import { SpaceCraft } from '../interfaces/spacecraft';
import { DSNDataService } from '../services/dsn-data.service';

@Pipe({
  name: 'targetName'
})
export class TargetPipe implements PipeTransform {

  constructor(
    private dsn: DSNDataService
  ) { }

  transform(value: Array<SpaceCraft>, args?: any): any {
    return this.dsn.translateTargetName(value);
  }

}
