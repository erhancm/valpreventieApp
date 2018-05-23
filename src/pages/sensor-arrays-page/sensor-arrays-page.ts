import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Trainee, TraineesMock } from "../trainees-page/trainee";
import { TraineePickerModalComponent } from "./trainee-picker-modal-component";
import { SensorArray, SensorArraysMock } from "./sensor-array";

@Component({
  selector: 'page-sensor-arrays',
  templateUrl: 'sensor-arrays-page.html'
})

export class SensorArraysPage {

  sensorArrays: SensorArray[];
  trainees: Trainee[];

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
    this.sensorArrays = SensorArraysMock;
    this.trainees = TraineesMock;

    for(let i = 0; i < this.sensorArrays.length; i++) {
      this.sensorArrays[i].associatedTrainee = this.trainees[3]; //this.trainees[i];
    }
  }

  presentTraineePickerModal(traineeProperty: Trainee) {
    console.log("yo");
    let traineePickerModal = this.modalCtrl.create(TraineePickerModalComponent);
    traineePickerModal.onDidDismiss(trainee => {
      traineeProperty = trainee;
    });
    traineePickerModal.present();
  }
}

