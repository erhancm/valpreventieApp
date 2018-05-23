import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Trainee, TraineesMock } from "./trainee";
import { ServerDataHandlerProvider } from "../../providers/server-data-handler/server-data-handler";

@Component({
  selector: 'page-trainees',
  templateUrl: 'trainees-page.html'
})
export class TraineesPage {

  names = [];

  constructor(public navCtrl: NavController, public serverData: ServerDataHandlerProvider) {
    this.names = serverData.names;
  }

  itemSelected(name: string) {
    console.log("Selected name:", name);
  }
}
