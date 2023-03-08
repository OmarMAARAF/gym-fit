import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ExercicesService } from '../../services/exercices.service';
import axios from 'axios';
import {Exercice} from "../../services/Exercice"
@Component({
  selector: 'app-exercices-list',
  templateUrl: './exercices-list.page.html',
  styleUrls: ['./exercices-list.page.scss'],
})
export class ExercicesListPage implements OnInit {
  ExrcicesList : Exercice []=[]
  bodyPart:string |null  ;
  constructor(private router: Router,private actRoute: ActivatedRoute,private ExercicesService: ExercicesService) { 
    this.bodyPart=decodeURI(this.actRoute.snapshot.paramMap.get('bodyPart') || "");
    console.log(this.bodyPart)
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
    //get list of exercices:
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${this.bodyPart}`,
      headers: {
        'X-RapidAPI-Key': '0944c690c5mshfb2e9ea11c35160p132c36jsn1b3128ad7040',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    axios.request(options).then(response=> {
      this.ExrcicesList=response.data.slice(0,26)
      console.log("list",this.ExrcicesList)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    /* this.ExrcicesList=this.ExercicesService.exerciseByMuscle(this.bodyPart);
    console.log(this.ExrcicesList) */
  }

  
}
