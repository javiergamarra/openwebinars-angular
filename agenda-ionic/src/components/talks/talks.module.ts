import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalksComponent } from './talks';

@NgModule({
  declarations: [
    TalksComponent,
  ],
  imports: [
    IonicPageModule.forChild(TalksComponent),
  ],
  exports: [
    TalksComponent
  ]
})
export class TalksComponentModule {}
