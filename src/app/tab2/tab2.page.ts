import { Component ,ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements AfterViewInit{
  @ViewChild('myDiv', { static: false }) myDiv: Element;
  dates: Date[] = [];
  selectedDate: Date;

  constructor() {
    // Initialize the array of dates with the current week's dates
    const today = new Date();
    const dayOfWeek = today.getDay();
    const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - dayOfWeek);
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
      this.dates.push(date);
    }

    // Select the current day by default
    this.selectedDate = new Date();
    // Add a design to the selected day
    const todayElement = document.getElementById('day-' + today.getDay());
    console.log(todayElement)
    if (todayElement) {
      todayElement.classList.add('today');
    }
  }

  handleClick(date: Date): void {
    // Remove the design from the previously selected day
    const previousSelectedElement = document.getElementById('day-' + this.selectedDate.getDay());
    if (previousSelectedElement) {
      previousSelectedElement.classList.remove('today');
    }

    // Set the new selected date and add a design to it
    this.selectedDate = date;
    const selectedElement = document.getElementById('day-' + this.selectedDate.getDay());
    if (selectedElement) {
      selectedElement.classList.add('today');
    }

    // Get the selected day (e.g. "Monday", "Tuesday", etc.)
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDay = daysOfWeek[date.getDay()];

    console.log(`Selected day: ${selectedDay}`);
  }
  ngAfterViewInit():  void {
    const today = new Date();
    this.handleClick(today)
  }

  
}
