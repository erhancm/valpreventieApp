import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {GroupTrainingPage} from "../group-training-page/group-training-page";


@Component({
  selector: 'page-training-selection',
  templateUrl: 'training-selection-page.html'
})
export class TrainingSelectionPage {

  constructor(public navCtrl: NavController) {

  }

  goToGroupTrainingPage() {
    this.navCtrl.push(GroupTrainingPage);
  }
}
