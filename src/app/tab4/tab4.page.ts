import { Component, AfterViewInit, Renderer2, QueryList, ViewChildren } from '@angular/core';
import { formatDate } from '@angular/common';
import axios from "axios"

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {
  weeks: any[] = [];
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  startDate: Date;

  selectedDate: Date | null = null;

  constructor() {
    this.startDate = new Date();
    this.startDate.setDate(this.startDate.getDate() - this.startDate.getDay());
    

    this.updateWeeks();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  isSelected(date: Date): boolean {
    return this.selectedDate != null &&
           date.getDate() === this.selectedDate.getDate() &&
           date.getMonth() === this.selectedDate.getMonth() &&
           date.getFullYear() === this.selectedDate.getFullYear();
  }

  selectDay(date: Date): void {
    this.selectedDate = date;
    console.log(formatDate(date, 'EEEE', 'en-US'));
  }

  nextWeek(): void {
    this.startDate.setDate(this.startDate.getDate() + 7);
    this.updateWeeks();
  }

  previousWeek(): void {
    this.startDate.setDate(this.startDate.getDate() - 7);
    this.updateWeeks();
  }

  updateWeeks(): void {
    this.weeks = [];

    for (let i = 0; i < 7; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        const date = new Date(this.startDate);
        date.setDate(this.startDate.getDate() + (i * 7) + j);
        const name = formatDate(date, 'EEEE', 'en-US');
        week.push({ date, name });
      }
      this.weeks.push(week);
    }
  }

  

}
