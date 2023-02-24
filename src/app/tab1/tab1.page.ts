import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  search:string

  async handleSearch(e:any){
    //console.log(e.target.value)
   // console.log(e.target!.value.toLowerCase())
   console.log(this.search)
   const toast = await this.toastController.create({
    message: 'tour  search '+this.search,
    duration: 1500,
    position: 'bottom',
  });
  await toast.present();
   
  }
  constructor(private toastController: ToastController) {}

}
