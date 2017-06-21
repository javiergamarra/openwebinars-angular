import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalkService } from '../talk.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TalkService]
})
export class CoreModule {
}
