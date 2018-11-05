import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { CarShow } from '../models/car-show';
import { CarShowsService } from '../services/car-shows';
import { Vote } from '../models/vote';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.page.html',
  styleUrls: ['./ballot.page.scss']
})
export class BallotPage implements OnInit {
  private carShow: CarShow;
  votes: Array<Vote>;

  constructor(
    private carShows: CarShowsService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.carShows.getCurrent().subscribe(c => {
      this.carShow = c;
      this.votes = c.classes.map(cls => ({
        carShowClassId: cls.id,
        name: cls.name,
        description: cls.description
      }));
    });
  }

  saveBallot() {}

  close() {
    this.navController.goBack();
  }
}
