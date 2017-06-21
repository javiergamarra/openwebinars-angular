import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TalksProvider } from '../../providers/talks/talks';
import { SuccessPage } from '../success/success';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private talksProvider: TalksProvider) {

  }

  onSubmit(title, date) {
    this.talksProvider.save(title, date)
      .subscribe(x => {

        console.log(x);

        this.navCtrl.push(SuccessPage, {talk: {title, date}})

      });
  }

}
