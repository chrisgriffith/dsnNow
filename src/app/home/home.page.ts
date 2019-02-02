import { Component, OnInit } from '@angular/core';
import { DsnDataService } from '../services/dsn-data.service';
import { Site } from '../interfaces/site';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private sites: Array<Site>;

  constructor(
    private dsn: DsnDataService,
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.dsn.fetchData().subscribe( () => {
      this.sites = this.dsn.getSites();
      console.log(this.sites);
    });
  }

  goDishDetails(dish) { }
}
