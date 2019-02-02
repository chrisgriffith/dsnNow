import { Pipe, PipeTransform } from '@angular/core';
import { SpaceCraft } from '../interfaces/spacecraft';
import { DsnDataService } from '../services/dsn-data.service';

@Pipe({
  name: 'targetName'
})
export class TargetPipe implements PipeTransform {

  constructor(
    private dsn: DsnDataService
  ) { }

  transform(value: Array<SpaceCraft>, args?: any): any {
    return this.dsn.translateTargetName(value);
  }

}
