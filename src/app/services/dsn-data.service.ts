import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';
import { Station } from '../interfaces/station';
import { Dish } from '../interfaces/dish';
import { Target } from '../interfaces/target';
import { DownSignal } from '../interfaces/down-signal';
import { UpSignal } from '../interfaces/up-signal';

@Injectable({
  providedIn: 'root'
})
export class DsnDataService {
  private stations: Array<Station> = [];
  private dishes: Array<Dish> = [];

  constructor(
    private http: HttpClient
  ) { }

  fetchData() {
    this.http.get('https://eyes.nasa.gov/dsn/data/dsn.xml', { responseType: 'text' }).subscribe((data) => {
      parseString(data, { explicitArray: false }, (error, result) => {
        if (error) {
          throw new Error(error);
        } else {
          this.parseStations(result);
          this.parseDishes(result);
        }
      });
    });
  }

  parseStations(theData) {
    theData.dsn.station.forEach(station => {
      const dsnStation: Station = new Station();

      dsnStation.friendlyName = station.$.friendlyName;
      dsnStation.name = station.$.name;
      dsnStation.timeUTC = Number(station.$.timeUTC);
      dsnStation.timeZoneOffset = Number(station.$.timeZoneOffset);
      this.stations.push(dsnStation);
    });
    console.log(this.stations);
  }

  parseDishes(theData) {
    theData.dsn.dish.forEach(dish => {
      const dsnDish: Dish = new Dish();

      dsnDish.azimuthAngle = Number(dish.$.azimuthAngle);
      dsnDish.created = dish.$.created;
      dsnDish.elevationAngle = Number(dish.$.elevationAngle);
      dsnDish.isArray = Boolean(dish.$.isArray);
      dsnDish.isDDOR = Boolean(dish.$.isDDOR);
      dsnDish.isMSPA = Boolean(dish.$.isMSPA);
      dsnDish.name = dish.$.name;
      dsnDish.updated = dish.$.updated;
      dsnDish.windSpeed = Number(dish.$.windSpeed);

      if (dish.target !== undefined) {
        dsnDish.target = this.parseTarget(dish.target);
      }
      if (dish.downSignal !== undefined) {
        dsnDish.downSignal = this.parseDownSignal(dish.downSignal);
      }
      if (dish.upSignal !== undefined) {
        dsnDish.upSignal = this.parseUpSignal(dish.upSignal);
      }
      this.dishes.push(dsnDish);
    });
    console.log(this.dishes);
  }

  parseTarget(theData): Array<Target> {
    const targetsArray: Array<Target> = [];

    if (theData.length === undefined) {
      const theTarget: Target = new Target();

      theTarget.downlegRange = Number(theData.$.downlegRange);
      theTarget.id = Number(theData.$.id);
      theTarget.name = theData.$.name;
      theTarget.rtlt = Number(theData.$.rtlt);
      theTarget.uplegRange = Number(theData.$.uplegRange);
      targetsArray.push(theTarget);
    } else {
      // Multiple Targets
      theData.forEach(target => {
        const theTarget: Target = new Target();

        theTarget.downlegRange = Number(target.$.downlegRange);
        theTarget.id = Number(target.$.id);
        theTarget.name = target.$.name;
        theTarget.rtlt = Number(target.$.rtlt);
        theTarget.uplegRange = Number(target.$.uplegRange);
        targetsArray.push(theTarget);
      });
    }

    return targetsArray;
  }

  parseDownSignal(theData): Array<DownSignal> {
    const downSignalArray: Array<DownSignal> = [];

    if (theData.length === undefined) {
      const theDownSignal: DownSignal = new DownSignal();

      theDownSignal.dataRate = Number(theData.$.dataRate);
      theDownSignal.frequency = Number(theData.$.frequency);
      theDownSignal.power = Number(theData.$.power);
      theDownSignal.signalType = theData.$.signalType;
      theDownSignal.signalTypeDebug = theData.$.signalTypeDebug;
      theDownSignal.spacecraft = theData.$.spacecraft;
      theDownSignal.spacecraftId = Number(theData.$.spacecraftId);
      downSignalArray.push(theDownSignal);
    } else {
      // Multiple downsignals
      theData.forEach(downSignal => {
        const theDownSignal: DownSignal = new DownSignal();

        theDownSignal.dataRate = Number(downSignal.$.dataRate);
        theDownSignal.frequency = Number(downSignal.$.frequency);
        theDownSignal.power = Number(downSignal.$.power);
        theDownSignal.signalType = downSignal.$.signalType;
        theDownSignal.signalTypeDebug = downSignal.$.signalTypeDebug;
        theDownSignal.spacecraft = downSignal.$.spacecraft;
        theDownSignal.spacecraftId = Number(downSignal.$.spacecraftId);
        downSignalArray.push(theDownSignal);
      });
    }

    return downSignalArray;
  }

  parseUpSignal(theData): UpSignal {
    const theUpSignal: UpSignal = new UpSignal();

    theUpSignal.dataRate = Number(theData.$.dataRate);
    theUpSignal.frequency = Number(theData.$.frequency);
    theUpSignal.power = Number(theData.$.power);
    theUpSignal.signalType = theData.$.signalType;
    theUpSignal.signalTypeDebug = theData.$.signalTypeDebug;
    theUpSignal.spacecraft = theData.$.spacecraft;
    theUpSignal.spacecraftId = Number(theData.$.spacecraftId);

    return theUpSignal;
  }
}
