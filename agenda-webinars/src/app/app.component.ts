import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <p>Navigación</p>
    <a routerLink="/talks" routerLinkActive="active">Talks</a>
    <a [routerLink]="['/talks/', 2]" routerLinkActive="active">Go to talk</a>
    <a routerLink="/new-talk" routerLinkActive="active">Add New Talk</a>

    <router-outlet></router-outlet>
  `,
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  talk: any;

  constructor() {
    this.talk = {title: 'Rx'}
  }

}

interface Talk {
  title: string,
}
