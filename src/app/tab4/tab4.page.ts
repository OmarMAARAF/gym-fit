import { Component, OnInit } from '@angular/core';
import axios from "axios"

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  selectedDay = '';

  constructor() {
    this.selectedDay = this.days[new Date().getDay()];
  }

  isCurrentDay(day: string): boolean {
    return day === this.days[new Date().getDay()];
  }

  selectDay(day: string): void {
    this.selectedDay = day;
    console.log('Selected day:', day);
  }

  ngOnInit() {
   
  }

}
