import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TargetPipe } from './target.pipe';
import { RangePipe } from './range.pipe';
import { RoundTripPipe } from './round-trip.pipe';
import { PowerPipe } from './power.pipe';
import { FrequencyPipe } from './frequency.pipe';
import { DataRatePipe } from './data-rate.pipe';

@NgModule({
  declarations: [TargetPipe, RangePipe, RoundTripPipe, PowerPipe, FrequencyPipe, DataRatePipe],
  imports: [IonicModule],
  exports: [TargetPipe, RangePipe, RoundTripPipe, PowerPipe, FrequencyPipe, DataRatePipe]
})
export class PipesModule {}
