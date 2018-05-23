import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";
import {Trainee, TraineesMock} from "../trainees-page/trainee";


@Component({
  template: `
    <ion-content>
      <ion-list>
        <ion-item *ngFor="let trainee of trainees">
          <h2> {{ trainee.name }} </h2>
          <p> {{ trainee.imageUrl }} </p>
          <button ion-button (click)="dismiss(trainee)">Kies</button>
        </ion-item>
      </ion-list>
    </ion-content>
  `
})
export class TraineePickerModalComponent {

  trainees: Trainee[];

  constructor(private viewCtrl: ViewController) {
    this.trainees = TraineesMock;
  }

  dismiss(trainee: Trainee) {
    this.viewCtrl.dismiss(trainee);
  }
}
