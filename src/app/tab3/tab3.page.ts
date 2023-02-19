import { Component } from '@angular/core';
import { BookmarkService } from './../services/bookmark.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private BookmarkService: BookmarkService,
    private toastController: ToastController
  ) {}

}
