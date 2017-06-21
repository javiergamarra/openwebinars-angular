import { Component } from '@angular/core';
import { TalksProvider } from '../../providers/talks/talks';

@Component({
  selector: 'talks',
  template: `
    <ion-list inset>
      <p *ngFor="let talk of talks | async">
        <ion-icon name="beer"></ion-icon>
        {{talk.title}}
      </p>
    </ion-list>
  `
})
export class TalksComponent {

  talks;

  constructor(private talksProvider: TalksProvider) {

    this.talks = this.talksProvider.getAllTalks();
  }

}
