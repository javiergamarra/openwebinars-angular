import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TalkService } from '../talk.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Router } from '@angular/router';


@Component({
  selector: 'app-talks',
  template: `

    {{elemento.value}}

    <div #element></div>

    <label for="search">Search</label>
    <input type="text" id="search" #search>

    <app-talk *ngFor="let talk of talks | async" [talk]="talk"
              (talkClicked)="log($event)"></app-talk>

  `,
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks;

  elemento = {value: '2'};

  @ViewChild('search') search: ElementRef;

  constructor(private talkService: TalkService, private router: Router) {

    this.talks = this.talkService.getFilteredTalks();

  }

  ngOnInit() {

    // Observable.fromEvent(this.search.nativeElement, 'keyup')
    //   .map((x: any) => x.target.value)
    //   .filter(x => x.length > 3)
    //   .debounceTime(500)
    //   .distinctUntilChanged()
    //   .switchMap(word => this.talkService.getFilteredTalks(word))
    //   .subscribe(x => this.talks = x);

  }

  onKeyUp(value) {
    console.log('clicked!' + value);
  }

  log($event) {
    console.log('Padre: ', $event);

    this.router.navigate(['talks', $event.title]);
  }

}
