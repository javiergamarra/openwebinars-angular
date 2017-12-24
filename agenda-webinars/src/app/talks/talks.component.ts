import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TalkService} from '../talk.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromEvent';
import {Router} from '@angular/router';


@Component({
  selector: 'app-talks',
  template: `

    <div #element></div>

    <label for="search">Search</label>
    <input (keyup)="onKeyUp(search.value)" id="search" #search>

    <app-talk *ngFor="let talk of talks | async" [talk]="talk"
              (talkClicked)="log($event)"></app-talk>

  `,
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks;

  @ViewChild('search') search: ElementRef;

  constructor(private talkService: TalkService, private router: Router) {
    this.talks = this.talkService.getFilteredTalks();
  }

  ngOnInit() {
  }

  onKeyUp(value) {
    console.log('clicked!' + value);

    this.talks = this.talkService.getFilteredTalks(value);
  }

  log($event) {
    console.log('Padre: ', $event);

    this.router.navigate(['talks', $event.title]);
  }

}
