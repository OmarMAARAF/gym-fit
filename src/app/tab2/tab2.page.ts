import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {Exercice} from "./../services/Exercice"

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
  pushList: Exercice[] = [
    new Exercice("3220", "cardio", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/3220.gif", "3220", "astride jumps (male)", "cardiovascular system"),
    new Exercice("3360", "cardio", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/3360.gif", "3360", "bear crawl", "cardiovascular system"),
    new Exercice("1160", "cardio", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/1160.gif", "1160", "burpee", "cardiovascular system"),
    new Exercice("25", "chest", "barbell", "http://d205bpvrqc9yn1.cloudfront.net/0025.gif", "25", "barbell bench press", "pectorals"),
    new Exercice("33", "chest", "barbell", "http://d205bpvrqc9yn1.cloudfront.net/0033.gif", "33", "barbell decline bench press", "pectorals"),
    new Exercice("47", "chest", "barbell", "http://d205bpvrqc9yn1.cloudfront.net/0047.gif", "47", "barbell incline bench press", "pectorals"),
    new Exercice("19", "upper arms", "leverage machine", "http://d205bpvrqc9yn1.cloudfront.net/0019.gif", "19", "assisted triceps dip (kneeling)", "triceps"),
    new Exercice("231", "upper arms", "cable", "http://d205bpvrqc9yn1.cloudfront.net/0231.gif", "231", "cable standing one arm triceps extension", "triceps"),
    new Exercice("283", "upper arms", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/0283.gif", "283", "diamond push-up", "triceps"),
    new Exercice("1018", "back", "band", "http://d205bpvrqc9yn1.cloudfront.net/1018.gif", "1018", "band shrug", "traps"),
    new Exercice("767", "back", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/0767.gif", "767", "smith shrug", "traps")
  ];
  pullList: Exercice[] = [
    new Exercice("3318", "cardio", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/3318.gif", "3318", "swing 360", "cardiovascular system"),
    new Exercice("2141", "cardio", "elliptical machine", "http://d205bpvrqc9yn1.cloudfront.net/2141.gif", "2141", "walk elliptical cross trainer", "cardiovascular system"),
    new Exercice("3655", "cardio", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/3655.gif", "3655", "walking high knees lunge", "cardiovascular system"),
    new Exercice("3297", "back", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/3297.gif", "3297", "Back lever", "upper back"),
    new Exercice("27", "back", "barbell", "https://d205bpvrqc9yn1.cloudfront.net/0027.gif", "27", "barbell bent over row", "upper back"),
    new Exercice("160", "back", "cable", "http://d205bpvrqc9yn1.cloudfront.net.0159.gif", "160", "Cable decline seated wide-grip row", "upper back"),
    new Exercice("23", "upper arms", "barbell", "http://d205bpvrqc9yn1.cloudfront.net/0023.gif", "23", "barbell alternate biceps curl", "biceps"),
    new Exercice("1770", "upper arms", "body weight", "https://d205bpvrqc9yn1.cloudfront.net/1770.gif", "1770", "biceps leg concentration curl", "biceps"),
    new Exercice("1642", "upper arms", "cable", "https://d205bpvrqc9yn1.cloudfront.net/1642.gif", "1642", "cable seated one arm concentration curl", "biceps"),
    new Exercice("1018", "back", "band", "http://d205bpvrqc9yn1.cloudfront.net/1018.gif", "1018", "band shrug", "traps"),
    new Exercice("767", "back", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/0767.gif", "767", "smith shrug", "traps")
  ];
  legsList: Exercice[] = [
    new Exercice("3219", "cardio", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/3219.gif", "3219", "scissor jumps (male)", "cardiovascular system"),
    new Exercice("3222", "cardio", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/3222.gif", "3222", "semi squat jump (male)", "cardiovascular system"),
    new Exercice("3656", "cardio", "body weight", "http://d205bpvrqc9yn1.cloudfront.net/3656.gif", "3656", "short stride run", "cardiovascular system"),
    new Exercice("24", "upper legs", "barbell", "http://d205bpvrqc9yn1.cloudfront.net/0024.gif", "24", "barbell bench front squat", "quads"),
    new Exercice("1757", "upper legs", "dumbbell", "http://d205bpvrqc9yn1.cloudfront.net/1757.gif", "1757", "dumbbell single leg deadlift", "glutes"),
    new Exercice("1604", "upper legs", "body weight", "https://d205bpvrqc9yn1.cloudfront.net/1604.gif", "1604", "world greatest stretch", "hamstrings"),
    new Exercice("32", "upper legs", "barbell", "https://d205bpvrqc9yn1.cloudfront.net/0032.gif", "32", "barbell deadlift", "glutes"),
    new Exercice("811", "upper legs", "trap bar", "http://d205bpvrqc9yn1.cloudfront.net/0811.gif", "811", "trap bar deadlift", "glutes"),
    new Exercice("1", "waist", "body weight", "https://d205bpvrqc9yn1.cloudfront.net/0001.gif", "1", "3/4 sit-up", "abs"),
    new Exercice("3", "waist", "body weight", "https://d205bpvrqc9yn1.cloudfront.net/0003.gif", "3", "air bike", "abs")
  ];
  ExrcicesList: Exercice[] = [];
  dayName :string = "";
  

  getExerciseDay(day: string): Exercice[] {
    switch (day.toLowerCase()) {
      case 'monday':
      case 'thursday':
        return this.pushList;
      case 'tuesday':
      case 'friday':
        return this.pullList;
      case 'wednesday':
      case 'saturday':
        return this.legsList;
      default:
        return [];
    }
  }
  getExerciseDayName(day: string): string{
    switch (day.toLowerCase()) {
      case 'monday':
      case 'thursday':
        return "Push Day";
      case 'tuesday':
      case 'friday':
        return "Pull Day";
      case 'wednesday':
      case 'saturday':
        return "Legs Day";
      default:
        return "Rest Day";
    }
  }
  @ViewChild('canvas') canvas: ElementRef;
  onGifLoad(event: Event, exercice: Exercice) {
    const img = event.target as HTMLImageElement;
    const skeleton= img!.previousElementSibling
    const canvas = img!.nextElementSibling as HTMLCanvasElement;
    canvas.width = img.width;
    canvas.height = img.height;
    canvas!.getContext('2d')!.drawImage(img, 0, 0, img.width, img.height);
    img.remove();
    skeleton!.remove()
  }
  constructor() {
    this.currentDate = new Date();
    this.weekDates = this.getWeekDates(this.currentDate);
    this.weekDays = this.getWeekDays(this.currentDate);
    const dayName = this.currentDate.toLocaleDateString(undefined, { weekday: 'long' });
    this.ExrcicesList=this.getExerciseDay(dayName);
    this.dayName=this.getExerciseDayName(dayName);
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
  this.ExrcicesList=this.getExerciseDay(dayName);
  this.dayName=this.getExerciseDayName(dayName);
  }
}


