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
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createBooking(apt: Appointment) {
    this.bookingListRef = this.db.list('/exercise');
    return this.bookingListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
    });
  }
  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/exercise/' + id);
    return this.bookingRef;
  }
  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/exercise');
    return this.bookingListRef;
  }
  // Update
  updateBooking(id, apt: Exercice) {
    return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile,
    });
  }
  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/exercise/' + id);
    this.bookingRef.remove();
  }
}
