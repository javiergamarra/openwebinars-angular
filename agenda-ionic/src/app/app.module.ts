import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TalksComponent } from '../components/talks/talks';
import { TalksProvider } from '../providers/talks/talks';
import { HttpModule } from '@angular/http';
import { SuccessPage } from '../pages/success/success';
import { IonicStorageModule } from '@ionic/storage';
import { CloudModule, CloudSettings } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {'app_id': '03d40782'}
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TalksComponent,
    SuccessPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    CloudModule.forRoot(cloudSettings),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TalksProvider
  ]
})
export class AppModule {
}
