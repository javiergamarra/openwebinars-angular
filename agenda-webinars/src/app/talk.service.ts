import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Talk} from './talk';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';

const URL = 'https://data-agenda.wedeploy.io/talks';

@Injectable()
export class TalkService {

  constructor(private http: HttpClient) {
  }

  getFilteredTalks(filter?): Observable<Array<any>> {

    const params = new HttpParams();
    if (filter) {
      params.set('filter',
        JSON.stringify([{
          'and': [{'title': {'operator': 'similar', 'value': {'query': filter}}}]
        }]));
    }

    return this.http.get(URL, {params})
      .flatMap((x: any) => Observable.from(x))
      .map(x => {
        console.log(x);
        return x;
      })
      .retry(10)
      .toArray();
  }

  saveTalk(talk: Talk) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return this.http.post(URL, JSON.stringify(talk), {headers});
  }

}
