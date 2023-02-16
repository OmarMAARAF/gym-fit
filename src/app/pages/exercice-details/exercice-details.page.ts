import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {Exercice} from "../../services/Exercice"
@Component({
  selector: 'app-exercice-details',
  templateUrl: './exercice-details.page.html',
  styleUrls: ['./exercice-details.page.scss'],
})
export class ExerciceDetailsPage implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  exercice :any
  gifUrl:string
  constructor(private router: Router,private actRoute: ActivatedRoute) { 
    console.log(this.router.getCurrentNavigation()!.extras.state)
    this.exercice =this.router.getCurrentNavigation()!.extras.state!['exercice']
    this.gifUrl=this.exercice['gifUrl']
  }
  onGifLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    console.log(img)
    console.log(this.canvas)
    const canvas = this.canvas.nativeElement;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
  }

  ngOnInit() {
    
  }

}
