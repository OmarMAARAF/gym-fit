import { Component, AfterViewInit, Renderer2, QueryList, ViewChildren } from '@angular/core';
import axios from "axios"

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements AfterViewInit {
  @ViewChildren('myButtons') buttons: QueryList<any>;
  currentDate = new Date();

  // Calculate the minimum and maximum dates of the current week
  minDate = new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay()));
  maxDate = new Date(this.currentDate.setDate(this.currentDate.getDate() + 6));
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const buttonns =  document.querySelectorAll('button');
    console.log(buttonns)
    this.buttons.forEach(button => {
      if (button.nativeElement.disabled) {
        this.renderer.setStyle(button.nativeElement, 'display', 'none');
      }
    });
  }
  date: string;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'

  onChange($event:Event) {
    console.log($event);
  }

}
