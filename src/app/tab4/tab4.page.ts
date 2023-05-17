import { Component, AfterViewInit, Renderer2, QueryList, ViewChildren ,OnInit} from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  /* weeks: any[] = [];
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
 */

  userId: string="";
  email: string="";
  username: string="m";
  age: number= 0;
  weight: number=0;
  height: number=0;
  gender: string="";
  bmi: number=0;
  image : string = "";
  loading :boolean= true;

  userData: Observable<any>;

  constructor(
    private auth: AngularFireAuth,
    private userDataService: UserService,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage, private platform: Platform
  ) { 
    this.userData = db.object('user-data').valueChanges();
  }
 
  ngOnInit() {
    this.platform.ready().then(() => {
      this.storage.create();
      this.storage.get('email').then((value) => {
        console.log(value)
        this.email  = value;
      });
      this.storage.get('username').then((value) => {
        this.username = value;
      });
    });
    
    /* this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.email = params['email'];
    });*/
    this.auth.user.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.getUserData(this.email);
        this.getUserData(this.userId);
        this.loading = false;
      }
    }); 
    
  }
  logout()
  {
    this.storage.clear();
    this.router.navigateByUrl('/onBoarding');
  }
  getUserData(email: string) {
    const userRef = this.db.list('/user-data', ref => ref.orderByChild('email').equalTo(email));
  userRef.snapshotChanges().subscribe((data: any) => {
    if (data && data.length > 0) {
      const userData = data[0].payload.val();
      this.username = userData.username;
      this.age = userData.age;
      this.weight = userData.weight;
      this.height = userData.height;
      this.gender = userData.gender;
      if (this.gender === 'male') {
        this.image = '../../assets/img/avatarMen.png';
      } else {
        this.image = '../../assets/img/avatarwomen.png';
      }
    }
  });
  }



  

}
