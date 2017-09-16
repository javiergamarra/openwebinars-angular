import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Talk} from './talk';

const URL = 'https://data-agenda.wedeploy.io/talks';

@Injectable()
export class TalkService {

  constructor(private http: Http) {
    // network operation
  }

  getFilteredTalks(filter?): Observable<Array<any>> {

    const params = new URLSearchParams();
    params.set('search',
      JSON.stringify({
        '*': {'operator': 'fuzzy', 'value': {'query': filter}}
      }));

    return this.http.get(URL, {params})
      .map(x => x.json())
      .map(x => x.documents)
      .retry(10);
  }

  saveTalk(talk: Talk) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(URL, JSON.stringify(talk), {headers});
  }

}
