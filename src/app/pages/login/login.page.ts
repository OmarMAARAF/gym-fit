import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Facebook } from '@ionic-native/facebook/ngx';
//import firebase from 'firebase/app';
//import * as firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  providerFb: firebase.auth.FacebookAuthProvider;
  
  email: string ="";
  password: string= "";
  errorMessage: string ="";
  label: string="";
  type = 'text'; // set default type be text

  focused: boolean=true;

  onBlur(event: any) {
    const value = event.target.value;

    if (!value) {
      this.focused = false;
    }
  }

  constructor(private afAuth: AngularFireAuth, private router: Router , 
    public afDB: AngularFireDatabase,
    private fb: Facebook,
    public platform: Platform) {
      this.providerFb = new firebase.auth.FacebookAuthProvider();
    }

  async loginWithEmail() {
    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      this.router.navigateByUrl('/profilee?email='+ this.email );
    } catch (error) {
      console.log(error);
      //this.errorMessage = error.message;
    }
  }
  FacebookLogin(){
    if(this.platform.is('cordova'))
    {
      console.log('platform: cordova');
     // this.facebookCordova();
    }
    else{
      console.log('platform : web');
      this.facebookWeb();
    }
  }
  facebookCordova() {
    this.fb.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
            .credential(response.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            console.log('Info Facebook: ' + JSON.stringify(success));
            this.afDB.object('Users/' + success.user?.uid).set({
              displayName: success.user?.displayName,
              photoURL: success.user?.photoURL
            });
        }).catch((error) => {
            console.log('Erreur: ' + JSON.stringify(error));
        });
    }).catch((error) => { console.log(error); });
  }

  facebookWeb() {
    this.afAuth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((success) => {
        console.log('Info Facebook: ' + JSON.stringify(success));
    this.afDB.object('Users/' + success.user?.uid).set({
              displayName: success.user?.displayName,
              photoURL: success.user?.photoURL
            });
      }).catch((error) => {
        console.log('Erreur: ' + JSON.stringify(error));
      });
  }

}
