import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DSNDataService } from '../services/dsn-data.service';
import { Dish } from '../interfaces/dish';
import { Target } from '../interfaces/target';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  private dish: Dish;
  private targets: Array<Target> = [];
  private target: Target = {downlegRange: 0, id: 0, name: '', rtlt: 0, uplegRange: 0};
  private targetIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private dsn: DSNDataService,
  ) { }

  ngOnInit() {
  }

  ////
  // Turn this into a route guard
  ////
  ionViewWillEnter() {
    const dishName = this.route.snapshot.paramMap.get('dishName');
    this.dsn.getDish(dishName).subscribe((data) => {
      this.dish = data;
      this.targets = this.dish.target;
      this.target = this.targets[this.targetIndex];
    });
  }

  segmentChanged($evt) {
    this.targetIndex = $evt.detail.value;
    this.target = this.targets[this.targetIndex];
  }
}
