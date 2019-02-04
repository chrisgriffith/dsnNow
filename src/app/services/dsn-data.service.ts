import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';
import { Site } from '../interfaces/site';
import { Station } from '../interfaces/station';
import { Dish } from '../interfaces/dish';
import { SpaceCraft } from '../interfaces/spacecraft';
import { Target } from '../interfaces/target';
import { DownSignal } from '../interfaces/down-signal';
import { UpSignal } from '../interfaces/up-signal';
import { Observable, interval, of, concat } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DSNDataService {
  private sites: Array<Site> = [];
  private dishes: Array<Dish> = [];
  private spacecrafts: Array<SpaceCraft> = [];

  constructor(
    private http: HttpClient
  ) { }

  fetchData(): Observable<any> {
    const configLoader: Observable<String> = this.http.get('./assets/dsnconfig.xml', { responseType: 'text' }).pipe(
      map(res => {
        parseString(res, { explicitArray: false }, (error, result) => {
          if (error) {
            throw new Error(error);
          } else {
            this.parseSites(result.config.sites.site);
            this.parseSpaceCraft(result.config.spacecraftMap.spacecraft);
          }
        });
        return res;
      })
    );
    const dataRefreshTimer: Observable<Number> = interval(5000);
    const dataURL: string  = 'https://eyes.nasa.gov/dsn/data/dsn.xml?r=' + Math.floor(new Date().getTime() / 5000);
    const dsnData: Observable<String> = this.http.get(dataURL, { responseType: 'text' }).pipe(
      map(res => {
        parseString(res, { explicitArray: false }, (error, result) => {
          if (error) {
            throw new Error(error);
          } else {
            this.parseStations(result);
            this.parseDishes(result);
          }
        });
        return res;
      })
    );
    return concat(configLoader, dsnData);
    // return concat(configLoader, dataRefreshTimer, dsnData);
  }

  getSites() {
    return this.sites;
  }

  getSpacecrafts() {
    return this.spacecrafts;
  }

  getDish(theDishName: string): Observable<Dish> {
    return of( this.dishes.filter( _theDish => _theDish.name === theDishName)[0] );
    // return this.dishes.filter( _theDish => _theDish.name === theDishName)[0];
  }

  /////
  // Data cleanup
  /////

  parseSites(theData: Array<any>) {
    theData.forEach(site => {
      const dsnSite: Site = new Site();
      dsnSite.friendlyName = site.$.friendlyName;
      dsnSite.name = site.$.name;
      dsnSite.latitude = Number(site.$.latitude);
      dsnSite.longitude = Number(site.$.longitude);

      const theDishes: Array<any> = site.dish;
      theDishes.forEach(theDish => {
        const dish: Dish = new Dish();
        dish.friendlyName = theDish.$.friendlyName;
        dish.name = theDish.$.name;
        dish.type = theDish.$.type;
        dsnSite.dishes.push(dish);
      });
      this.sites.push(dsnSite);
      // this.stations.push(dsnSite);
    });
  }

  parseSpaceCraft(theData: Array<any>) {
    theData.forEach(theSpacecraft => {
      const spacecraft: SpaceCraft = new SpaceCraft();

      spacecraft.friendlyName = theSpacecraft.$.friendlyName;
      spacecraft.name = theSpacecraft.$.name;
      spacecraft.explorerName = theSpacecraft.$.explorerName;
      spacecraft.thumbnail = Boolean(theSpacecraft.$.thumbnail);
      this.spacecrafts.push(spacecraft);
    });
    // console.log(this.spacecrafts);
  }

  parseStations(theData) {
    theData.dsn.station.forEach(station => {
      const theStation = this.sites.filter(site => site.name === station.$.name);

      theStation[0].timeUTC = Number(station.$.timeUTC);
      theStation[0].timeZoneOffset = Number(station.$.timeZoneOffset);
    });
  }

  parseDishes(theData) {
    theData.dsn.dish.forEach(dish => {

      this.sites.forEach(site => {
        const dsnDish = site.dishes.filter( _theDish => _theDish.name === dish.$.name)[0];

        if (dsnDish !== undefined) {
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
        }
      });
    });
    // console.log(this.dishes);
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

  translateTargetName(theTarget: Array<SpaceCraft>): String {
    if (theTarget.length !== 0) {
      let spaceCraftName: String = '';
      theTarget.forEach(_target => {
        const theCraft: Array<SpaceCraft> = this.spacecrafts.filter(_craft => _target.name.toLowerCase() === _craft.name.toLowerCase());

        if (theCraft !== undefined) {
          theCraft.forEach(_craft => {
            spaceCraftName += _craft.friendlyName + ' | ';
          });
        } else {
          spaceCraftName = ' | ';
        }
      });
      spaceCraftName = spaceCraftName.slice(0, -3);
      return spaceCraftName;
    } else {
      return ' ';
    }
  }
}
