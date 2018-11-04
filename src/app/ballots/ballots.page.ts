import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ballots',
  templateUrl: 'ballots.page.html',
  styleUrls: ['ballots.page.scss']
})
export class BallotsPage {
  constructor(private navController: NavController) {}

  newBallot() {
    this.navController.navigateForward('ballot');
  }
}
