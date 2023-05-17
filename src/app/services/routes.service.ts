import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class routesGuard implements CanActivate {

  username: string = "";

  constructor(private storage: Storage, private router: Router, private platform: Platform) {
    this.initStorage(); // Initialize the storage database
  }

  async initStorage() {
    /* console.log('Initializing storage...');
    await this.platform.ready();
    console.log('Platform ready, creating storage...');
    this.storage = await this.storage.create();
    console.log('Storage created.'); */
    this.platform.ready().then(() => {
      this.storage.create();
      this.storage.get('username').then((value) => {
        this.username=value;
      });
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkUsername();
  }

  async checkUsername(): Promise<boolean | UrlTree> {
    this.username = await this.storage.get('username');
    console.log(this.username);
    if (this.username) {
      // User has a username, allow access to specified paths
      const allowedPaths = ['onBoarding', 'login', 'register', 'moreinformations'];
      return allowedPaths.includes(window.location.pathname.split('/')[1]) || this.router.parseUrl('/');
    } else {
      // User does not have a username, block access to specified paths
      const blockedPaths = ['onBoarding', 'login', 'register', 'moreinformations'];
      return !blockedPaths.includes(window.location.pathname.split('/')[1]) || this.router.parseUrl('/onBoarding');
    }
  }
}
