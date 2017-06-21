import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TalksModule } from './talks/talks.module';
import { CoreModule } from './core/core.module';
import { TalksComponent } from './talks/talks.component';
import { RouterModule } from '@angular/router';
import { TalkComponent } from './talk/talk.component';
import { LoggedInGuard } from './logged-in.guard';

const routes = [
  {'path': 'talks', component: TalksComponent},
  {'path': 'talks/:id', component: TalkComponent},
  {
    'path': 'new-talk', loadChildren: 'app/new-talk/new-talk.module#NewTalkModule',
    canActivate: [LoggedInGuard]
  },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    TalksModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent],
  providers: [LoggedInGuard],
  exports: [],
  entryComponents: []
})
export class AppModule {
}
