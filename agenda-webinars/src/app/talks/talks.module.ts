import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkComponent } from '../talk/talk.component';
import { TalksComponent } from './talks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteTalkComponent } from '../favorite-talk/favorite-talk.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TalkComponent,
    TalksComponent,
    FavoriteTalkComponent
  ],
  entryComponents: [FavoriteTalkComponent],
  exports: [
    TalksComponent,
    CommonModule
  ]
})
export class TalksModule {
}
