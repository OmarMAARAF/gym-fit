import { Injectable } from '@angular/core';
import {Exercice} from "./Exercice"
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  exerciseListRef: AngularFireList<any>;
  exerciseRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createExercise(apt: Exercice) {
    this.exerciseListRef = this.db.list('/exercise');
    return this.exerciseListRef.push({
      bodyPart: apt.bodyPart,
      equipment: apt.equipment,
      gifUrl: apt.gifUrl,
      id: apt.id,
      name: apt.name,
      target: apt.target,
    });
  }
  // Get Single
  getExercise(id: string) {
    this.exerciseListRef = this.db.list('/exercise/' + id);
    console.log("ecercise :",this.exerciseListRef)
    return this.exerciseListRef;
  }
  
  // Get List
  getExerciseList() {
    this.exerciseListRef = this.db.list('/exercise');
    return this.exerciseListRef;
  }
  // Update
  updateExercise(id:string, apt: Exercice) {
    return this.exerciseRef.update({
      bodyPart: apt.bodyPart,
      equipment: apt.equipment,
      gifUrl: apt.gifUrl,
      id: apt.id,
      name: apt.name,
      target: apt.target,
    });
  }
  // Delete
  deleteExercise(id: string) {
    this.exerciseRef = this.db.object('/exercise/' + id);
    this.exerciseRef.remove();
  }
}
