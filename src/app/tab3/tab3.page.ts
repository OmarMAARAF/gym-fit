import { Component,OnInit } from '@angular/core';
import { BookmarkService } from './../services/bookmark.service';
import { ToastController } from '@ionic/angular';
import {Exercice} from "../services/Exercice"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  ExeciseList:Exercice[]=[];
  constructor(
    private BookmarkService: BookmarkService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.BookmarkService.getExerciseList()
      .snapshotChanges()
      .subscribe((res): any => {
        res.forEach((item) => {
          let a: any = item.payload.toJSON();
          console.log(a)
          this.ExeciseList.push(a)
        });
        console.log(this.ExeciseList)
      });
  }
}
