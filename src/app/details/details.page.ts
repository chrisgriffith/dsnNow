import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DSNDataService } from '../services/dsn-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private dsn: DSNDataService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    const dishName = this.route.snapshot.paramMap.get('dishName');
    console.log(dishName);
    this.dsn.getDish(dishName).subscribe( (data) => {
      console.log(data);
    });
  }

}
