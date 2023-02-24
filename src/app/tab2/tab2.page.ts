import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  days :string[]= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dates :Date[]= [];

  selectedDate: Date;

  constructor() {
    const today = new Date();
    const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + i);
      this.dates.push(date);
    }
  }

  isCurrentDay(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  handleClick(date: Date): void {
    this.selectedDate = date;
    // Get the selected day (e.g. "Monday", "Tuesday", etc.)
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDay = daysOfWeek[date.getDay()];
  
    console.log(`Selected day: ${selectedDay}`);
  }

  isSelectedDate(date: Date): boolean {
    return this.selectedDate && date.toDateString() === this.selectedDate.toDateString();
  }

  
}
