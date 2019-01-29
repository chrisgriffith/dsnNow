import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private sites: Array<any>;

  constructor(
    private http: HttpClient
  ) {
    this.http.get('./assets/dsnconfig.xml', { responseType: 'text' }).subscribe( (data) => {
      // console.log(data); // XML
      parseString(data, { explicitArray: false }, (error, result) => {
        if (error) {
          throw new Error(error);
        } else {
          this.sites = result.config.sites.site;
        }
      });
    });

    this.http.get('https://eyes.nasa.gov/dsn/data/dsn.xml', { responseType: 'text'}).subscribe( (data) => {
       // console.log(data); // XML
       parseString(data, { explicitArray: false }, (error, result) => {
        if (error) {
          throw new Error(error);
        } else {
          // console.log(result); // JSON
        }
      });
    });
  }

  goDishDetails(dish) {}
}
