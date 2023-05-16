import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-moreinformations',
  templateUrl: './moreinformations.page.html',
  styleUrls: ['./moreinformations.page.scss'],
})
export class MoreinformationsPage implements OnInit {
  username: string="";
  email: string="";
  password: string="";
  weight: number = 70;
  height: number = 170;
  gender: string = 'male';
  age : number = 20;
  constructor(private db: AngularFireDatabase , private router: Router , private route: ActivatedRoute,
    private storage: Storage, private platform: Platform) {}

  selectGender(gender: string) {
    this.gender = gender;
  }  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.email = params['email'];
      this.password = params['password'];
    });
    this.platform.ready().then(() => {
      this.storage.create();
    });
  }
  save() {
    const data = {
      username : this.username,
      email : this.email,
      weight: this.weight,
      height: this.height,
      gender: this.gender,
      age: this.age,
      timestamp: new Date().getTime()
    };
  
    this.db.list('/user-data').push(data)
      .then(() => console.log('Data saved successfully'))
      .catch((error) => console.error(error));
      this.storage.set('username', this.username);
      this.storage.set('email', this.email);
      this.storage.set('password', this.password);

    this.router.navigateByUrl('/tabs/tab4?username=' + this.username + '&email=' + this.email);
  }
}
