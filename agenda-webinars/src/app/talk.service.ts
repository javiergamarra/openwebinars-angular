import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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

    return this.http.get(
      'http://data.agenda.wedeploy.io/talks', {params})
      .map(x => x.json())
      .map(x => x.documents)
      .retry(10);
  }

}
