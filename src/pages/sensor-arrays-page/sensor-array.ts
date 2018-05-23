import {Trainee} from "../trainees-page/trainee";

export class SensorArray {
  identifier: string;
  associatedTrainee: Trainee;
  arrayDescription: string;

  constructor(identifier: string, arrayDescription: string) {
    this.identifier = identifier;
    this.arrayDescription = arrayDescription
  }
}

export const SensorArraysMock = [
  new SensorArray('100001000','Afstand en druksensoren via Raspberry Pi 3'),
  new SensorArray('350005000','Druksensoren via Banana Pi M3'),
  new SensorArray('923001003', 'Afstandsensoren via Pine A64')
];
