import { Component, OnInit, ViewChild, ElementRef,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercice } from '../../services/Exercice';
import { Location } from '@angular/common';
import { CircleTimerComponent } from '@flxng/circle-timer';
import { BookmarkService } from './../../services/bookmark.service';
import { ToastController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exercice-details',
  templateUrl: './exercice-details.page.html',
  styleUrls: ['./exercice-details.page.scss'],
})
export class ExerciceDetailsPage implements OnInit,OnDestroy {
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('timer', { static: true }) timer: CircleTimerComponent;
  exercice: any;
  gifUrl: string;
  rep: number = 3;
  exist: boolean = false;
  key: string |null;
  audio=new Audio('../../assets/audio/clock.mp3')

  constructor(
    private BookmarkService: BookmarkService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private location: Location,
    private toastController: ToastController,
    private alertController: AlertController,
  ) {
    console.log('state', this.router.getCurrentNavigation()!.extras.state);
    this.exercice =
      this.router.getCurrentNavigation()!.extras.state!['exercice'];
    this.gifUrl = this.exercice['gifUrl'];
    //check if the book mark exist
    this.BookmarkService.getExercise(this.exercice['id'])
      .snapshotChanges()
      .subscribe((res): any => {
        res.forEach((item) => {
          let a: any = item.payload.toJSON();
          if (a.id === this.exercice['id']) {
            this.exist = true;
            this.key = item.key;
            console.log("key",this.key)
          }
        });
      });
  }
  onGifLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    const canvas = this.canvas.nativeElement;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
  }
  duration = 60 * 1000; // 10 seconds
  async onTimerComplete() {
    this.rep = this.rep - 1;
    if (this.rep == 0) {
      console.log('exercice done');
      const alert = await this.alertController.create({
        header: 'congratulations!',
        message:"you are one step closer to your goals",
        buttons: [
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.location.back();
            },
          },
        ],
      });
  
      await alert.present();
      const { role } = await alert.onDidDismiss();
      if(role==="backdrop"){
        this.location.back();
      }
    }
  }
  countRep(): void {
    if (!this.timer.isTicking()) {
      /* let audio = new Audio();
      audio.src = '../../assets/audio/clock.mp3'; */
      this.audio.load();
      this.audio.play();
    }
  }
  backButton() {
    this.location.back();
  }

  async bookmark() {
    if (!this.exist) {
      this.exist = true;
      this.BookmarkService.createExercise(this.exercice)
        .then(async (res) => {
          console.log(res);
          const toast = await this.toastController.create({
            message: 'Exercise added to your bookmarks!',
            duration: 1500,
            position: 'bottom',
          });
          await toast.present();
        })
        .catch((error) => console.log(error));
    } else {
      console.log(this.key);
      this.exist = false;
      this.BookmarkService.deleteExercise(this.key);
      const toast = await this.toastController.create({
        message: 'Exercise removed from your bookmarks!',
        duration: 1500,
        position: 'bottom',
      });
      await toast.present();

    }
  }
  ngOnInit() {}
  ngOnDestroy() { 
    if (this.timer.isTicking()) {
      this.audio.load();
      this.audio.pause();
      this.audio.currentTime = 0;
    }
}
}
