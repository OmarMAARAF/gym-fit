import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  search:string

  handleChange(e:Event){
    console.log(e)
   // console.log(e.target!.value.toLowerCase())
   console.log(this.search)
  }
  constructor() {}

}
