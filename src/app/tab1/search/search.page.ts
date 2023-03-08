import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ExercicesService } from '../../services/exercices.service';
import axios from 'axios';
import {Exercice} from "../../services/Exercice"
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  search :string  ;
  ExrcicesList : Exercice []=[];
  constructor(private router: Router,private actRoute: ActivatedRoute,private ExercicesService: ExercicesService) { 
    this.search=this.actRoute.snapshot.paramMap.get('search') || "";
    console.log(this.search)
  }

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
  ngOnInit() {
    console.log(this.search)
    /* this.ExrcicesList=this.ExercicesService.exerciseByName(this.search)
    console.log(this.ExrcicesList) */
    this.ExercicesService.exerciseByName(this.search).then((exercise:Exercice[]) => {
      console.log(exercise);
      this.ExrcicesList=exercise
    });
  }

}
