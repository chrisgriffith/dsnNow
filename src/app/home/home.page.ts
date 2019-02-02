import { Component, OnInit } from '@angular/core';
import { DsnDataService } from '../services/dsn-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private sites: Array<any>;

  constructor(
    private dsn: DsnDataService,
  ) { }

  ngOnInit() {
    this.dsn.fetchData().subscribe(res => {
      this.sites = this.dsn.getSites();
      console.log(this.sites);
    });
  }

  goDishDetails(dish) { }
}
