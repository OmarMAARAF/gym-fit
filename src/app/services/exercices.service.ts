import { Injectable } from '@angular/core';
import {Exercice} from "./Exercice"
import axios from "axios"

@Injectable({
  providedIn: 'root'
})
export class ExercicesService {

  exerciseByMuscle (muscle:string | null):Exercice[] {
    let exercise:Exercice[]=[]
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
      exercise=response.data.slice(0,16)
      return response.data
    }).catch(function (error) {
      console.error(error);
    });
    return exercise
  }
  async exerciseByName(search: string): Promise<Exercice[]> {
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/name/${search}`,
      headers: {
        'X-RapidAPI-Key': '0944c690c5mshfb2e9ea11c35160p132c36jsn1b3128ad7040',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data);
      const exercise = response.data.slice(0, 16);
      console.log("exe:", exercise);
      return exercise;
    } catch (error) {
      console.error(error);
      return [];
    }
  }


  constructor() { }
}
