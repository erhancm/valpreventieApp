import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ServerDataHandlerProvider } from "../../providers/server-data-handler/server-data-handler";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  videoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public domSanitizer: DomSanitizer, public serverData: ServerDataHandlerProvider) {
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/C0DPdy98e4c');
    
    this.serverData.getPersons();
    //this.serverData.setPersons();
  }

}
