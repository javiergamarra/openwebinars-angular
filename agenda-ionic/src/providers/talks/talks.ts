import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TalksProvider {

  constructor(public http: Http) {

  }

  getAllTalks() {
    return this.http
      .get('http://data.agenda.wedeploy.io/talks')
      .map(response => response.json());
  }

  save(title, date) {
    return this.http
      .post('http://data.agenda.wedeploy.io/talks', {title, date});
  }

}
