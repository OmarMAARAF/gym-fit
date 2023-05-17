import { Component,OnInit,ViewChild, ElementRef  } from '@angular/core';
import { BookmarkService } from './../services/bookmark.service';
import { ToastController } from '@ionic/angular';
import {Exercice} from "../services/Exercice"

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  loading : boolean = false;
  @ViewChild('canvas') canvas: ElementRef;
  onGifLoad(event: Event, exercice: Exercice) {
    const img = event.target as HTMLImageElement;
    const skeleton= img!.previousElementSibling
    const canvas = img!.nextElementSibling as HTMLCanvasElement;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas!.getContext('2d')!.drawImage(img, 0, 0, img.width, img.height);
    img.remove();
    skeleton!.remove()
  }
  ExeciseList:Exercice[]=[];
  constructor(
    private BookmarkService: BookmarkService,
    private toastController: ToastController
  ) {}
  deleteExercice(id: string | null){
    this.ExeciseList=[]
    this.BookmarkService.deleteExercise(id)
  }

  ngOnInit() {
    
    this.BookmarkService.getExerciseList()
      .snapshotChanges()
      .subscribe((res): any => {
        res.forEach((item) => {
          let a: any = item.payload.toJSON();
          a.key=item.key
          this.ExeciseList.push(a)
        });
        console.log("exercice List ",this.ExeciseList)
      });
  }
}
