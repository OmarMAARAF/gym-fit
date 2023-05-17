import { formatDate } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  @ViewChild('myDatetime', { static: false }) myDatetime !: Date;
  selectedDate !: string;
  maxDate !: string;
  yearValue !: number;
  currentDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

  constructor() {
    /*To make the calendar show one month only*/
    const currentDate = new Date();
    const maxDate = new Date();
    maxDate.setMonth(currentDate.getMonth() + 1);
    this.maxDate = maxDate.toISOString();

  }

  workOuts  = [
    {'id': 1, 'name': 'Chest', 'date': '2023-05-01', 'time': '10:00', 'duration': '1:00', 'image': 'assets/workout1.png'},
    {'id': 2, 'name': 'Back', 'date': '2023-05-02', 'time': '10:00', 'duration': '1:00', 'image': 'assets/workout2.png'},
    {'id': 3, 'name': 'Legs', 'date': '2023-05-03', 'time': '10:00', 'duration': '1:00', 'image': 'assets/workout3.png'},
    {'id': 4, 'name': 'Shoulders', 'date': '2023-05-04', 'time': '10:00', 'duration': '1:00', 'image': 'assets/workout4.png'},
    {'id': 5, 'name': 'Arms', 'date': '2023-05-05', 'time': '10:00', 'duration': '1:00', 'image': 'assets/workout5.png'},
  ]

  workOutPerDay = this.workOuts;

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.disableMonthSelector();
  }
  
  onDateChange() {
    let date = this.selectedDate.split('T')[0];
    console.log(date);
    for (let i = 0; i < this.workOuts.length; i++) {
      if (this.workOuts[i].date == date) {
        //add it to the array
        this.workOutPerDay = [];
        this.workOutPerDay.push(this.workOuts[i]);
        console.log(this.workOutPerDay);
      }
    }
    
  }


  disableMonthSelector() {
    const ionDateTimeElement = document.getElementsByTagName('ion-datetime');
    const element = ionDateTimeElement[0].shadowRoot?.getRootNode().firstChild as HTMLElement;

    const monthsSelector = element.getElementsByClassName(
    'calendar-month-year'
    )[0] as HTMLElement;
    console.log(monthsSelector);
    monthsSelector.style.pointerEvents = 'none';
    }

    onWorkOutDetails(id : number) {
      console.log("Details of workout : " + id);
    }

    onWorkoutSkip(id : number) {
      console.log("Skipped workout : " + id);
    }


}
/* import { Component ,ViewChild, AfterViewInit} from '@angular/core';

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
 */

