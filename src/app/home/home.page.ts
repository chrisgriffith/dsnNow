import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private http: HttpClient
  ) {
    this.http.get('./assets/dsnconfig.xml', { responseType: 'text' }).subscribe( (data) => {
      console.log(data); // XML
      parseString(data, { explicitArray: false }, (error, result) => {
        if (error) {
          throw new Error(error);
        } else {
          console.log(result); // JSON
          console.log(result.config.sites.site[0].$.friendlyName);
        }
      });
    });
  }
}
