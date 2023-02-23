import { Injectable } from '@angular/core';
import {Exercice} from "./Exercice"
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class ExercicesService {

  exerciseByMuscle (muscle:string | null):Exercice[] {
    let exercice:Exercice[]=[]
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart${muscle}`,
      headers: {
        'X-RapidAPI-Key': 'd70c9f7a01msh3962e8a93fefa8ep1b630ajsn01ccf1d4bf83',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      console.log(response.data);
      exercice=response.data.slice(0,16)
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
    return exercice
  }


  constructor() { }
}
