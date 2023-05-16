import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  providerFb: firebase.auth.FacebookAuthProvider;
type: any;
onBlur($event: FocusEvent) {
throw new Error('Method not implemented.');
}
  username : string ="";
  email: string="";
  password: string="";
  confirmPassword: string="";
  errorMessage: string="";

  focused: boolean=true;

  constructor(public afAuth: AngularFireAuth, private router: Router ,
    public afDB: AngularFireDatabase,
    private fb: Facebook,
    public platform: Platform) {
      this.providerFb = new firebase.auth.FacebookAuthProvider();
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

  async registerWithEmail() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Les mots de passe ne correspondent pas.";
      return;
    }

    try {
      await this.afAuth.createUserWithEmailAndPassword(this.email, this.password);
      //this.router.navigateByUrl('/login');
      this.router.navigateByUrl('/moreinformations?username=' + this.username + '&email=' + this.email + '&password=' + this.password);

    } catch (error) {
      console.log(error);
      //this.errorMessage = error.message;
    }
  }

}
