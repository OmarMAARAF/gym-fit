import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import axios from 'axios';
import {Exercice} from "../../services/Exercice"
@Component({
  selector: 'app-exercices-list',
  templateUrl: './exercices-list.page.html',
  styleUrls: ['./exercices-list.page.scss'],
})
export class ExercicesListPage implements OnInit {
  @ViewChild('canvas') canvas: ElementRef;
  onGifLoad(event: Event, exercice: Exercice) {
    const img = event.target as HTMLImageElement;
    const canvas = img!.nextElementSibling as HTMLCanvasElement;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas!.getContext('2d')!.drawImage(img, 0, 0, img.width, img.height);
    img.remove();
  }
  ExrcicesList : Exercice []
  bodyPart:string | null ;
  constructor(private router: Router,private actRoute: ActivatedRoute) { 
    this.bodyPart=this.actRoute.snapshot.paramMap.get('bodyPart');
    console.log(this.bodyPart)
    
  }
  

  ngOnInit() {
    //get list of exercices:
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${this.bodyPart}`,
      headers: {
        'X-RapidAPI-Key': '23d1c2af11msha06cfac7c98760dp100742jsn512292d57b35',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    axios.request(options).then(response=> {
      this.ExrcicesList=response.data.slice(0,16)
      console.log("list",this.ExrcicesList)
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  
}
