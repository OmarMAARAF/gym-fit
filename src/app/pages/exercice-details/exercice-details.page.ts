import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercice } from '../../services/Exercice';
import { Location } from '@angular/common';
import { CircleTimerComponent } from '@flxng/circle-timer';
import {ExercicesService} from "./../../exercices.service"

@Component({
  selector: 'app-exercice-details',
  templateUrl: './exercice-details.page.html',
  styleUrls: ['./exercice-details.page.scss'],
})
export class ExerciceDetailsPage implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('timer', { static: true }) timer: CircleTimerComponent;
  exercice: any;
  gifUrl: string;
  rep: number = 3;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private location: Location
  ) {
    console.log('state', this.router.getCurrentNavigation()!.extras.state);
    this.exercice =
      this.router.getCurrentNavigation()!.extras.state!['exercice'];
    console.log('this', this.exercice);
    this.gifUrl = this.exercice['gifUrl'];
  }
  onGifLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    const canvas = this.canvas.nativeElement;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
  }
  duration = 60 * 1000; // 10 seconds
  onTimerComplete(): void {
    this.rep = this.rep - 1;
    if (this.rep == 0) {
      console.log('exercice done');
    }
  }
  countRep(): void {
    if (!this.timer.isTicking()) {
      let audio = new Audio();
      audio.src = '../../assets/audio/clock.mp3';
      audio.load();
      audio.play();
    }
  }
  backButton() {
    this.location.back();
  }
  bookmark(){
    console.log("bookmark")
  }
  ngOnInit() {}
}
