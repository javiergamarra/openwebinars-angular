import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FavoriteTalkComponent } from '../favorite-talk/favorite-talk.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-talk',
  styles: [
      `
      :host {
        background-color: red
      }
    `
  ],
  template: `
    <p [ngStyle]="style" (click)="onClick()">

      {{talk?.date | date:'HH:mm'}}

      {{talk?.title | titlecase}}

    </p>
    <div #favorite></div>
  `,
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {

  @Input() talk;

  @Output() talkClicked: EventEmitter<any> = new EventEmitter();

  @ViewChild('favorite', {read: ViewContainerRef}) favorite: ViewContainerRef;

  style = {
    'background-color': 'lightgray',
    'padding': '10px'
  };

  constructor(private factory: ComponentFactoryResolver,
              private route: ActivatedRoute) {
    this.route.params
      .subscribe(x => console.log(x.id));
  }

  ngOnInit() {
    this.favorite.createComponent(
      this.factory.resolveComponentFactory(FavoriteTalkComponent));
  }

  onClick() {
    console.log(this.talk);
    this.talkClicked.emit(this.talk);
  }


}
