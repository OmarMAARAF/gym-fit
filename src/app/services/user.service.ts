import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFireDatabase) { }

  // Récupérer les données de l'utilisateur en utilisant son ID Firebase
  getUserData(userId: string): Observable<any> {
    return this.db.object(`/user-data/${userId}`).valueChanges();
  }


  
}
