import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NativeStorage } from '@ionic-native/native-storage';
import { Auth, User } from '@ionic/cloud-angular';

const key = 'firstVisited';

declare let cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [InAppBrowser, NativeStorage]
})
export class HomePage implements OnInit {

  ngOnInit() {
    this.storage.get(key)
      .then(x => console.log('first time', x));
  }

  constructor(public navCtrl: NavController, private storage: Storage, private browser: InAppBrowser,
              private nativeStorage: NativeStorage, public auth: Auth, public user: User) {


    // let details: UserDetails = {'email': 'nhpatt@gmail.com', 'password': 'example'};
    // this.auth.signup(details)
    //   .then(x => console.log(x), err => console.log(err))

    // this.auth.login('basic', details)
    //   .then(x => console.log(x));
    //
    // this.user.set('birthdate', '5/17/1985');
    // let birthdate = this.user.get('birthdate', '01/01/1970');
    // console.log(birthdate);
    // this.user.save().then(x => console.log(x))
    this.auth.login('instagram').then(x => console.log(x));
  }

  loguear() {

    // cordova.plugins.snackbar('This is a indefinite snackbar text', 'INDEFINITE', 'Dismiss', function () {
    //   console.log('Dismiss Button Clicked');
    // });

    // this.nativeStorage.getItem(key).then(x => {
    //   console.log('before ' + x);
    //   this.nativeStorage.setItem(key, true);
    //   this.nativeStorage.getItem(key).then(x => console.log('after ' + x));
    // });


    // let browser = this.browser.create('https://google.com/');
    // browser.show();

  }
}
