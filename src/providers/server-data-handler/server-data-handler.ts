import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Trainee } from '../../pages/trainees-page/trainee';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServerDataHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerDataHandlerProvider {

  names = [];
  persons = [];

  constructor(public http: Http) {
  }

  getPersons() {
    this.http.get('http://s.robinvandervliet.com:3000/persons').map(res => res.json()).subscribe(data => {
      var i;
      for (i = 0; i<data.length; i++) {
        this.names.push(data[i].birth_name);
        this.persons.push(data[i]);
        console.log(this.persons[i]);
      }
    });
  }

  setPersons() {
    //new Trainee(' -- EMPTY --', 'assets/imgs/person.png');
  }


}

//sause : https://www.joshmorony.com/loading-remote-json-data-with-http-in-ionic-2/