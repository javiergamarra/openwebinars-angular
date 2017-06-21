import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTalkComponent } from './new-talk.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: NewTalkComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewTalkComponent],
  exports: [NewTalkComponent]
})
export class NewTalkModule {
}
