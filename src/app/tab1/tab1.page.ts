import { Component,OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})


export class Tab1Page implements OnInit {
  search: string="";
  username :string="";
  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private storage: Storage, private platform: Platform
  ) {}

  handleSearch(e: any) {
    if(this.search !==""){
      this.navCtrl.navigateForward('tabs/tab1/search/'+encodeURI(this.search));
    }
  }
  ngOnInit(): void {
    this.platform.ready().then(() => {
      this.storage.create();
      this.storage.get('username').then((value) => {
        this.username = value;
      });
    });
  }
  
}
