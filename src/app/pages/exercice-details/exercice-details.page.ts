import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercice } from '../../services/Exercice';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exercice-details',
  templateUrl: './exercice-details.page.html',
  styleUrls: ['./exercice-details.page.scss'],
})
export class ExerciceDetailsPage implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  exercice: any;
  gifUrl: string;

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
  
  backButton() {
    this.location.back();
  }
  ngOnInit() {}
}
