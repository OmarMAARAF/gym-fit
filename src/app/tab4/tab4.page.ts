import { Component ,OnInit} from '@angular/core';

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
        this.auth.user.subscribe(user => {
          console.log(user)
          if (user) {
            this.userId = user.uid;
            this.getUserData(this.email);
            this.getUserData(this.userId);
            this.loading = false;
          }
        }); 
      });
      this.storage.get('username').then((value) => {
        this.username = value;
      });
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
