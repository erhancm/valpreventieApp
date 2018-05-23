import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TrainingSelectionPage} from "./training-selection-page/training-selection-page";


@Component({
  selector: 'page-training',
  templateUrl: 'training-page.html'
})
export class TrainingPage {

  constructor(public navCtrl: NavController) {

  }

  goToTrainingSelection() {
    this.navCtrl.push(TrainingSelectionPage);
  }
}
