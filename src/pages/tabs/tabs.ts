import { Component } from '@angular/core';
import { SensorArraysPage } from '../sensor-arrays-page/sensor-arrays-page';
import { TraineesPage } from '../trainees-page/trainees-page';
import { HomePage } from '../home/home';
import {TrainingPage} from "../training-page/training-page";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SensorArraysPage;
  tab3Root = TraineesPage;
  tab4Root = TrainingPage;

  constructor() {

  }
}
