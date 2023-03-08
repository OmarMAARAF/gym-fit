import { Component } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  search: string="";
  constructor(
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  handleSearch(e: any) {
    if(this.search !==""){
      this.navCtrl.navigateForward('tabs/tab1/search/'+encodeURI(this.search));
    }
   
    
  }
}
