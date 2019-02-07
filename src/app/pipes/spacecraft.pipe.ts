import { Pipe, PipeTransform } from '@angular/core';
import { DSNDataService } from '../services/dsn-data.service';
@Pipe({
  name: 'spacecraft'
})
export class SpacecraftPipe implements PipeTransform {
  constructor(
    private dsn: DSNDataService
  ) { }

  transform(value: any, args?: any): any {
    return this.dsn.getSpaceCraftName(value);
  }
}
