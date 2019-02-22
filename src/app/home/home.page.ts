import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DSNDataService } from '../services/dsn-data.service';
import { Site } from '../interfaces/site';
import { Dish } from '../interfaces/dish';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private sites: Array<Site>;

  constructor(
    private dsn: DSNDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dsn.fetchData().subscribe( () => {
      this.sites = this.dsn.getSites();
      console.log(this.sites);
    });
  }

  goDishDetails(dish: Dish) {
    this.router.navigateByUrl(`dish/${dish.name}`);
  }
}
