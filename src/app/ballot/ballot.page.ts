import { Component, OnInit } from '@angular/core';

import { CarShow } from '../models/car-show';
import { CarShowsService } from '../services/car-shows';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.page.html',
  styleUrls: ['./ballot.page.scss']
})
export class BallotPage implements OnInit {
  carShow: CarShow;

  constructor(private carShows: CarShowsService) {}

  ngOnInit() {
    this.carShows.getCurrent().subscribe(c => (this.carShow = c));
  }

  testClick() {
    console.log('back button clicked');
  }
}
