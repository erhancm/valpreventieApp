import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SensorArraysPage } from '../pages/sensor-arrays-page/sensor-arrays-page';
import { TraineesPage } from '../pages/trainees-page/trainees-page';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TraineePickerModalComponent } from "../pages/sensor-arrays-page/trainee-picker-modal-component";
import { TrainingPage } from "../pages/training-page/training-page";
import { TrainingSelectionPage } from "../pages/training-page/training-selection-page/training-selection-page";
import { GroupTrainingPage } from "../pages/training-page/group-training-page/group-training-page";
import { ServerDataHandlerProvider } from '../providers/server-data-handler/server-data-handler';
import { HttpModule } from '@angular/http'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SensorArraysPage,
    TraineesPage,
    TraineePickerModalComponent,
    TrainingPage,
    TrainingSelectionPage,
    GroupTrainingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SensorArraysPage,
    TraineesPage,
    TraineePickerModalComponent,
    TrainingPage,
    TrainingSelectionPage,
    GroupTrainingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerDataHandlerProvider
  ]
})
export class AppModule {}
