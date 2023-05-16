import { Component, OnInit , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild(IonSlides)
  slidess!: IonSlides;
  public onboardSlides : { title: string, img: string, desc: string }[] = [];
  @ViewChild('mainSlides', {static : true}) slides! : IonSlides;

  constructor( private router: Router) { }

  ngOnInit() {
    this.onboardSlides = [
      {
        title : "title1",
        img :"img11",
        desc: "desc1",
      },
      {
        title : "title2",
        img :"img12",
        desc: "desc2",
      },
      {
        title : "title3",
        img :"img13",
        desc: "desc3",
      },
    ];
  }
  public next() {
    this.slidess.slideNext();
  }
  skip() {
    this.slidess.slidePrev();
    }
  public goBack()
  {
      this.slides.slidePrev();
  }
  public skipBtn()
  {
    console.log("I will go to the home tab");
  }
  public getText()
  {
      this.slides.slideNext();
  }
  register()
  {
    this.router.navigateByUrl('/register');
  }
  login(){
    this.router.navigateByUrl('/login');
  }

}
