import { Component ,ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {
  currentDate: Date;
  weekDates: Date[];
  weekDays: Date[];
  clickedDate: Date | null;

  constructor() {
    this.currentDate = new Date();
    this.weekDates = this.getWeekDates(this.currentDate);
    this.weekDays = this.getWeekDays(this.currentDate);
  }

  previousWeek() {
    this.currentDate.setDate(this.currentDate.getDate() - 7);
    this.updateWeek();
  }

  nextWeek() {
    this.currentDate.setDate(this.currentDate.getDate() + 7);
    this.updateWeek();
  }

  updateWeek() {
    this.weekDates = this.getWeekDates(this.currentDate);
    this.weekDays = this.getWeekDays(this.currentDate);
    this.clickedDate = null; // Reset clicked date
  }

  getWeekDates(date: Date): Date[] {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startOfWeek);
      currentDate.setDate(currentDate.getDate() + i);
      weekDates.push(currentDate);
    }
    return weekDates;
  }

  getWeekDays(date: Date): Date[] {
    const weekDates = this.getWeekDates(date);
    const weekDays = weekDates.map(date => new Date(date));
    return weekDays;
  }

  getCurrentDayName(): string {
    return this.weekDays[this.currentDate.getDay()].toLocaleString('default', { weekday: 'long' });
  }

  isCurrentDay(date: Date): boolean {
    return date.toDateString() === this.currentDate.toDateString();
  }

  isClickedDay(date: Date): boolean | null {
    return this.clickedDate && date.toDateString() === this.clickedDate.toDateString();
  }

  onDateClick(date: Date): void {
      this.clickedDate = date
      this.currentDate = date;
      const dayName = this.weekDays[date.getDay()].toLocaleString('default', { weekday: 'long' });
  console.log(dayName);
  }
}


